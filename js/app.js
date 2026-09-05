/**
 * Master Application Controller & Hash Router
 * Orchestrates views, manages role context, and controls responsive layout
 */

import { store } from './store.js';
import { renderNavbar } from './components/navbar.js';
import { renderSidebar } from './components/sidebar.js';

// Views
import { renderLanding } from './views/landing.js';
import { renderStudentAuth } from './views/auth/studentAuth.js';
import { renderCollegeAuth } from './views/auth/collegeAuth.js';
import { renderCompanyAuth } from './views/auth/companyAuth.js';

// Student Views
import { renderStudentDashboard } from './views/student/dashboard.js';
import { renderStudentSkills } from './views/student/skills.js';
import { renderStudentJobRoles } from './views/student/jobRoles.js';
import { renderStudentInternships } from './views/student/internships.js';
import { renderStudentAssessment } from './views/student/assessment.js';
import { renderStudentAssessmentResult } from './views/student/assessmentResult.js';
import { renderStudentSkillGap } from './views/student/skillGap.js';
import { renderStudentRecommendedRoles } from './views/student/recommendedRoles.js';
import { renderStudentResources } from './views/student/resources.js';
import { renderStudentApplications } from './views/student/applications.js';
import { renderStudentProfile } from './views/student/profile.js';

// College Views
import { renderCollegeDashboard } from './views/college/dashboard.js';
import { renderCollegeStudents } from './views/college/students.js';
import { renderCollegeAnalytics } from './views/college/analytics.js';
import { renderCollegeSkillGaps } from './views/college/skillGaps.js';
import { renderCollegeTraining } from './views/college/training.js';
import { renderCollegeIndustry } from './views/college/industry.js';
import { renderCollegeProfile } from './views/college/profile.js';

// Company Views
import { renderCompanyDashboard } from './views/company/dashboard.js';
import { renderCompanyProfile } from './views/company/profile.js';
import { renderCompanyCreateJob } from './views/company/createJob.js';
import { renderCompanyCreateInternship } from './views/company/createInternship.js';
import { renderCompanyRequiredSkills } from './views/company/requiredSkills.js';
import { renderCompanyCandidateMatching } from './views/company/candidateMatching.js';
import { renderCompanyApplications } from './views/company/applications.js';

const routes = {
  // Public Landing & Auths
  '#/': renderLanding,
  '#/student/login': () => renderStudentAuth(false),
  '#/student/register': () => renderStudentAuth(true),
  '#/college/login': () => renderCollegeAuth(false),
  '#/college/register': () => renderCollegeAuth(true),
  '#/company/login': () => renderCompanyAuth(false),
  '#/company/register': () => renderCompanyAuth(true),

  // Student Views
  '#/student/dashboard': renderStudentDashboard,
  '#/student/skills': renderStudentSkills,
  '#/student/jobs': renderStudentJobRoles,
  '#/student/internships': renderStudentInternships,
  '#/student/assessment': renderStudentAssessment,
  '#/student/assessment-result': renderStudentAssessmentResult,
  '#/student/skill-gap': renderStudentSkillGap,
  '#/student/recommended-roles': renderStudentRecommendedRoles,
  '#/student/resources': renderStudentResources,
  '#/student/applications': renderStudentApplications,
  '#/student/profile': renderStudentProfile,
  '#/student/settings': renderStudentProfile,

  // College Views
  '#/college/dashboard': renderCollegeDashboard,
  '#/college/students': renderCollegeStudents,
  '#/college/analytics': renderCollegeAnalytics,
  '#/college/skill-gaps': renderCollegeSkillGaps,
  '#/college/training': renderCollegeTraining,
  '#/college/industry-connections': renderCollegeIndustry,
  '#/college/profile': renderCollegeProfile,
  '#/college/settings': renderCollegeProfile,

  // Company Views
  '#/company/dashboard': renderCompanyDashboard,
  '#/company/profile': renderCompanyProfile,
  '#/company/jobs/create': renderCompanyCreateJob,
  '#/company/internships/create': renderCompanyCreateInternship,
  '#/company/required-skills': renderCompanyRequiredSkills,
  '#/company/candidates': renderCompanyCandidateMatching,
  '#/company/applications': renderCompanyApplications,
  '#/company/settings': renderCompanyProfile
};

function autoSyncRole(hash) {
  const current = store.get().currentUser;
  if (hash.startsWith('#/student') && (!current || current.role !== 'student')) {
    store.switchRole('student');
  } else if (hash.startsWith('#/college') && (!current || current.role !== 'college')) {
    store.switchRole('college');
  } else if (hash.startsWith('#/company') && (!current || current.role !== 'company')) {
    store.switchRole('company');
  }
}

export function handleRoute() {
  const hash = window.location.hash || '#/';
  
  // Synchronize role if jumping portals
  autoSyncRole(hash);

  const routeHandler = routes[hash] || renderLanding;
  const isPublicLanding = hash === '#/';

  // Re-render Navbar
  const navbarContainer = document.getElementById('navbar-container');
  if (navbarContainer) {
    navbarContainer.innerHTML = renderNavbar();
  }

  // Re-render Sidebar
  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) {
    sidebarContainer.innerHTML = renderSidebar();
  }

  // Re-render Main Content View
  const mainContent = document.getElementById('main-content');
  if (mainContent) {
    if (isPublicLanding) {
      mainContent.className = 'flex-1 overflow-x-hidden';
    } else {
      mainContent.className = 'flex-1 p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto w-full overflow-x-hidden';
    }
    mainContent.innerHTML = routeHandler();
  }

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh Lucide Icons
  setTimeout(() => {
    if (window.lucide) {
      window.lucide.createIcons();
    }
    wireMobileSidebar();
  }, 30);
}

function wireMobileSidebar() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const backdrop = document.getElementById('mobile-sidebar-backdrop');
  const closeBtn = document.getElementById('mobile-sidebar-close');

  toggleBtn?.addEventListener('click', () => {
    backdrop?.classList.remove('hidden');
    if (window.lucide) window.lucide.createIcons();
  });

  closeBtn?.addEventListener('click', () => {
    backdrop?.classList.add('hidden');
  });

  backdrop?.addEventListener('click', (e) => {
    if (e.target.id === 'mobile-sidebar-backdrop') {
      backdrop?.classList.add('hidden');
    }
  });
}

// App Bootstrap
export function initApp() {
  window.addEventListener('hashchange', handleRoute);
  store.subscribe(() => {
    // Reactive sync if needed
  });

  if (!window.location.hash) {
    window.location.hash = '#/';
  } else {
    handleRoute();
  }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}
