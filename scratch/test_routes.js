const fs = require('fs');

const store = {};
global.localStorage = {
  getItem: (k) => store[k] || null,
  setItem: (k, v) => { store[k] = v; },
  removeItem: (k) => { delete store[k]; },
  clear: () => { for (const k in store) delete store[k]; }
};

let currentHash = '#/';
global.window = {
  get location() { return { hash: currentHash, get search() { return currentHash.includes('?') ? currentHash.slice(currentHash.indexOf('?')) : ''; } }; },
  set location(val) { if (typeof val === 'string') currentHash = val; else currentHash = val.hash || currentHash; },
  addEventListener: () => {},
  scrollTo: () => {}
};
global.document = {
  readyState: 'loading',
  addEventListener: () => {},
  getElementById: (id) => ({
    id,
    innerHTML: '',
    className: '',
    classList: { add: () => {}, remove: () => {}, contains: () => false },
    addEventListener: () => {},
    value: ''
  }),
  querySelectorAll: () => []
};

const code = fs.readFileSync('js/app.bundle.js', 'utf8');
eval(code);

const ys = global.window.YuvaSetu;

console.log('Testing all routes in YuvaSetu...');

const allRoutes = [
  '#/',
  '#/student/login',
  '#/student/register',
  '#/college/login',
  '#/college/register',
  '#/company/login',
  '#/company/register',
  '#/student/dashboard',
  '#/student/profile',
  '#/student/skills',
  '#/student/assessment?skill=Python',
  '#/student/assessment-result',
  '#/student/skill-gap',
  '#/student/roadmap',
  '#/student/jobs',
  '#/student/internships',
  '#/student/applications',
  '#/college/dashboard',
  '#/college/profile',
  '#/college/students',
  '#/college/training',
  '#/company/dashboard',
  '#/company/jobs/create',
  '#/company/internships/create',
  '#/company/candidates',
  '#/company/applications'
];

let routeErrors = 0;

function testRoute(hash, roleName = 'guest') {
  currentHash = hash;
  try {
    ys.handleRoute();
    console.log(`[PASS] [${roleName}] Route ${hash}`);
  } catch (err) {
    console.error(`[FAIL] [${roleName}] Route ${hash} threw error:`, err.message, err.stack);
    routeErrors++;
  }
}

console.log('\n--- 1. Testing Unauthenticated / Guest State ---');
ys.auth.logout();
allRoutes.forEach(r => testRoute(r, 'guest'));

console.log('\n--- 2. Testing Logged In as Student (Ravi) ---');
const studentUser = ys.db.findOne('users', u => u.role === 'student');
ys.auth.login('student', studentUser.email, 'password');
allRoutes.forEach(r => testRoute(r, 'student'));

console.log('\n--- 3. Testing Logged In as College (Apex) ---');
const collegeUser = ys.db.findOne('users', u => u.role === 'college');
ys.auth.login('college', collegeUser.email, 'password');
allRoutes.forEach(r => testRoute(r, 'college'));

console.log('\n--- 4. Testing Logged In as Company (NexaTech) ---');
const companyUser = ys.db.findOne('users', u => u.role === 'company');
ys.auth.login('company', companyUser.email, 'password');
allRoutes.forEach(r => testRoute(r, 'company'));

console.log(`\n====================================================`);
console.log(`Route Test Complete. Total Errors: ${routeErrors}`);
console.log(`====================================================\n`);
