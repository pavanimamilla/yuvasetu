const fs = require('fs');

const store = {};
global.localStorage = {
  getItem: (k) => store[k] || null,
  setItem: (k, v) => { store[k] = v; },
  removeItem: (k) => { delete store[k]; },
  clear: () => { for (const k in store) delete store[k]; }
};
global.window = {
  location: { hash: '' },
  addEventListener: () => {},
  scrollTo: () => {}
};
global.document = {
  readyState: 'loading',
  addEventListener: () => {},
  getElementById: () => null,
  querySelectorAll: () => []
};

const code = fs.readFileSync('js/app.bundle.js', 'utf8');
eval(code);

const ys = global.window.YuvaSetu;
console.log('====================================================');
console.log('    YUVESETU ASSESSMENT ENGINE TEST SUITE           ');
console.log('====================================================\n');

let passedTests = 0;
let totalTests = 0;

function assert(condition, testName, details = '') {
  totalTests++;
  if (condition) {
    console.log(`[PASS] ${testName}`);
    passedTests++;
  } else {
    console.error(`[FAIL] ${testName} - Details: ${details}`);
  }
}

// 1. Check all 8 Question Banks
const banks = ['python', 'java', 'sql', 'javascript', 'react', 'c', 'html_css', 'general'];
for (const b of banks) {
  const bank = ys.SKILL_QUESTION_BANKS[b];
  assert(bank && bank.length >= 10, `Question bank for '${b}' exists with ${bank ? bank.length : 0} questions (>=10)`);
}

// 2. Initialize Assessment Session for student
const studentUser = ys.db.findOne('users', u => u.role === 'student');
const session = ys.initAssessmentSession(studentUser.id, 'Python');

assert(session && session.questions.length >= 15 && session.questions.length <= 20,
  `Generated assessment has 15-20 randomized questions (Actual: ${session.questions.length})`);

// Ensure questions have topic and options
assert(session.questions.every(q => q.topic && q.options && q.options.length === 4),
  'All assessment questions have topic and 4 shuffled multiple choice options');

// 3. Test Evaluation Logic
// Case A: 100% correct answers
session.questions.forEach(q => {
  session.answers[q.id] = q.correctIndex;
});
const evalPerfect = ys.evaluateAssessmentSubmission(session);
assert(evalPerfect.score === 100, `Perfect answers yield 100% score (Actual: ${evalPerfect.score}%)`);
assert(evalPerfect.level === 'Expert', `100% score assigned 'Expert' level (Actual: ${evalPerfect.level})`);
assert(evalPerfect.diagnostic.strong_areas.length > 0 && evalPerfect.diagnostic.needs_improvement.length === 0,
  'Perfect assessment yields 100% strong areas and zero needs improvement');

// Case B: 50% correct answers on a new session
const sessionHalf = ys.initAssessmentSession(studentUser.id, 'Python');
sessionHalf.questions.forEach((q, idx) => {
  if (idx % 2 === 0) {
    sessionHalf.answers[q.id] = q.correctIndex;
  } else {
    sessionHalf.answers[q.id] = (q.correctIndex + 1) % 4; // wrong option
  }
});
const evalHalf = ys.evaluateAssessmentSubmission(sessionHalf);
assert(evalHalf.score >= 45 && evalHalf.score <= 55,
  `Half correct answers yield ~50% score (Actual: ${evalHalf.score}%)`);
assert(evalHalf.level === 'Basic', `~50% score assigned 'Basic' level (Actual: ${evalHalf.level})`);

// 4. Persistence in Database
const studentSkillsAfter = ys.db.find('student_skills', s => s.student_user_id === studentUser.id && s.name === 'Python');
assert(studentSkillsAfter.length === 1 && studentSkillsAfter[0].status === 'Verified' && studentSkillsAfter[0].score === evalHalf.score,
  'student_skills table successfully updated with status: Verified and score');

const studentAssessments = ys.db.find('student_assessments', a => a.student_user_id === studentUser.id && a.skill_name.toLowerCase() === 'python');
assert(studentAssessments.length === 2, `student_assessments recorded 2 attempts in history (Count: ${studentAssessments.length})`);

// 5. Retake Assessment with higher score
const retakeSession = ys.initAssessmentSession(studentUser.id, 'Python');
const targetCorrect = Math.floor(retakeSession.questions.length * 0.8);
retakeSession.questions.forEach((q, idx) => {
  if (idx < targetCorrect) {
    retakeSession.answers[q.id] = q.correctIndex;
  } else {
    retakeSession.answers[q.id] = (q.correctIndex + 1) % 4;
  }
});
const evalRetake = ys.evaluateAssessmentSubmission(retakeSession);
assert(evalRetake.score >= 75 && evalRetake.score <= 85,
  `Retake assessment yields ~80% score (Actual: ${evalRetake.score}%)`);
assert(evalRetake.level === 'Advanced', `~80% score assigned 'Advanced' level (Actual: ${evalRetake.level})`);

const updatedSkill = ys.db.findOne('student_skills', s => s.student_user_id === studentUser.id && s.name === 'Python');
assert(updatedSkill.score === evalRetake.score && updatedSkill.level === 'Advanced',
  'Skill profile updated with retake score and level');

const totalAssessments = ys.db.find('student_assessments', a => a.student_user_id === studentUser.id && a.skill_name.toLowerCase() === 'python');
assert(totalAssessments.length === 3, `3 total attempts recorded in student_assessments (Count: ${totalAssessments.length})`);

console.log(`\n====================================================`);
console.log(`Test Results: ${passedTests} / ${totalTests} Passed (${Math.round(passedTests/totalTests*100)}%)`);
console.log('====================================================\n');
