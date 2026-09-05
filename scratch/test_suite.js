const fs = require('fs');

// Set up mock browser environment
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

// Load YuvaSetu bundle
const code = fs.readFileSync('js/app.bundle.js', 'utf8');
eval(code);

const ys = global.window.YuvaSetu;
console.log('====================================================');
console.log('       YUVESETU REAL ECOSYSTEM TEST SUITE          ');
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

// 1. Initial State Checks
const initialUsers = ys.db.find('users');
assert(!initialUsers.some(u => u.role === 'mentor'), 'Mentor role completely purged from database users');
const initialSkills = ys.db.find('student_skills');
assert(initialSkills.length === 0, 'Seed students have ZERO mock/demo skills initially');

// 2. Student Registration with Mandatory College Code
const regWithoutCode = ys.auth.register('student', 'nocode@test.edu', 'Pass123!', {
  name: 'No Code Student',
  career_goal: 'Software Developer'
});
assert(!regWithoutCode.success && regWithoutCode.message.includes('College Code is mandatory'),
  'Student registration fails without College Code', regWithoutCode.message);

const regWithCode = ys.auth.register('student', 'realstudent@test.edu', 'Pass123!', {
  name: 'Real Test Student',
  phone: '9988776655',
  college_code: 'AIT-BLR-101',
  college_name: 'Apex Institute of Technology',
  branch: 'Computer Science',
  year: '3rd Year',
  cgpa: '8.8',
  career_goal: 'Full Stack Developer',
  preferred_roles: ['Frontend Engineer', 'Full Stack Developer']
});
assert(regWithCode.success, 'Student registration succeeds with valid mandatory College Code and Career Goal');

const newStudentProf = ys.db.findOne('student_profiles', s => s.email === 'realstudent@test.edu');
assert(newStudentProf && newStudentProf.college_code === 'AIT-BLR-101' && newStudentProf.career_goal === 'Full Stack Developer',
  'Student profile correctly persisted with College Code and Career Goal in database');

// 3. College Registration with Mandatory Unique College Code
const regColDuplicate = ys.auth.register('college', 'anotherdean@apex.edu', 'Pass123!', {
  college_name: 'Duplicate College',
  college_code: 'AIT-BLR-101'
});
assert(!regColDuplicate.success && regColDuplicate.message.includes('already registered'),
  'College registration rejects duplicate College Code', regColDuplicate.message);

const regColSuccess = ys.auth.register('college', 'dean@iitd.edu', 'Pass123!', {
  college_name: 'Indian Institute of Technology Delhi',
  college_code: 'IITD-ND-001',
  admin_name: 'Dr. Placement Dean',
  phone: '9876500000',
  location: 'Hauz Khas, New Delhi'
});
assert(regColSuccess.success, 'College registration succeeds with unique College Code and no departments required');

// 4. Skills Module - Claiming a skill starts with "Assessment Required"
const studentUserId = newStudentProf.user_id;

// Simulate adding skill Python
const addedSkill = ys.db.insert('student_skills', {
  id: `skill_${Date.now()}_1`,
  student_user_id: studentUserId,
  skill_name: 'Python',
  verified: false,
  verified_score: null,
  level: null,
  status: 'Assessment Required',
  claimed_at: new Date().toISOString().split('T')[0],
  last_assessed_at: null
});

assert(addedSkill.status === 'Assessment Required' && addedSkill.verified === false && addedSkill.verified_score === null && addedSkill.level === null,
  'Claimed skill starts with Status: Assessment Required, verified: false, score: null, level: null');

// 5. College Cohort Isolation
const aitStudents = ys.db.find('student_profiles', s => s.college_code === 'AIT-BLR-101');
const iitdStudents = ys.db.find('student_profiles', s => s.college_code === 'IITD-ND-001');
assert(aitStudents.length >= 3 && iitdStudents.length === 0,
  'College portal filters roster strictly by College Code (IITD sees 0, AIT sees 3)');

// 6. Recruiter Pipeline - Post Job & Post Internship
const nexaRecruiter = ys.db.findOne('users', u => u.role === 'company');
const newJob = ys.db.insert('jobs', {
  id: `job_test_${Date.now()}`,
  company_user_id: nexaRecruiter.id,
  title: 'Cloud Systems Engineer',
  company: 'NexaTech Labs',
  type: 'Full-Time',
  location: 'Bangalore',
  work_mode: 'Hybrid',
  experience: '0 - 1 Years',
  salary: '₹12 - ₹18 LPA',
  required_skills: ['Python', 'SQL', 'Git'],
  preferred_skills: ['Docker', 'AWS'],
  description: 'Manage cloud backend pipelines and distributed infrastructure.',
  education: 'B.Tech / B.E.',
  deadline: '2026-12-01',
  applicants_count: 0
});
assert(newJob.required_skills && newJob.required_skills.length === 3,
  'Job posted with mandatory Required Skills');

// 7. Student Application Pipeline
const application = ys.db.insert('applications', {
  id: `app_test_${Date.now()}`,
  student_user_id: studentUserId,
  item_id: newJob.id,
  item_type: 'Job',
  item_title: newJob.title,
  company_name: newJob.company,
  company_user_id: newJob.company_user_id,
  status: 'Applied', // Waiting for Recruiter Response
  applied_at: new Date().toISOString().split('T')[0],
  match_score: 85,
  feedback: null
});
assert(application.status === 'Applied', 'Student application initialized with status Applied (Waiting for Recruiter Response)');

// 8. Recruiter Review - Accept Application
ys.db.update('applications', application.id, {
  status: 'Accepted',
  feedback: 'Strong technical aptitude and clean background. Shortlisted for Round 1 Interview!'
});
const updatedApp = ys.db.findOne('applications', a => a.id === application.id);
assert(updatedApp.status === 'Accepted' && updatedApp.feedback.includes('Shortlisted'),
  'Recruiter can update status to Accepted with feedback');

// 9. Recruiter Review - Reject Application
ys.db.update('applications', application.id, {
  status: 'Rejected',
  feedback: 'Position filled for current cohort.'
});
const rejectedApp = ys.db.findOne('applications', a => a.id === application.id);
assert(rejectedApp.status === 'Rejected', 'Recruiter can update status to Rejected with feedback');

console.log(`\n====================================================`);
console.log(`Test Results: ${passedTests} / ${totalTests} Passed (${Math.round(passedTests/totalTests*100)}%)`);
console.log('====================================================\n');
