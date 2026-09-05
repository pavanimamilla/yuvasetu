/**
 * Student Dashboard Main View
 * Displays 75% profile completion, skills overview chips, preferred roles match %
 */

import { store } from '../../store.js';
import { renderCircularProgress, renderStatCard, renderBadge } from '../../components/ui.js';

export function renderStudentDashboard() {
  const data = store.get();
  const user = data.currentUser || { name: 'Rahul Sharma', profileCompletion: 75 };
  const skills = data.studentSkills || [];
  const applications = data.applications || [];
  const assessment = data.assessmentResult;

  // Calculate dynamic match percentages for top roles
  const topRoles = [
    {
      title: 'Frontend Developer',
      match: 92,
      demand: 'Very High',
      openings: 48,
      matching: ['React', 'JavaScript', 'HTML/CSS'],
      missing: ['TypeScript']
    },
    {
      title: 'Full Stack Developer',
      match: 78,
      demand: 'High',
      openings: 62,
      matching: ['React', 'JavaScript', 'SQL'],
      missing: ['Node.js', 'MongoDB']
    },
    {
      title: 'Software Engineer',
      match: 74,
      demand: 'High',
      openings: 54,
      matching: ['Python', 'Git', 'SQL'],
      missing: ['System Design', 'Algorithms']
    }
  ];

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
  }, 10);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Top Welcome Banner -->
      <div class="glass-card bg-gradient-to-r from-indigo-900 via-indigo-800 to-purple-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div class="absolute -right-10 -bottom-10 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none"></div>
        <div class="absolute right-1/3 -top-10 w-48 h-48 bg-purple-500/20 rounded-full blur-2xl pointer-events-none"></div>

        <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <img src="${user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'}" alt="Student Avatar" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-white/30 shadow-md" />
            <div>
              <div class="flex items-center gap-2">
                <h1 class="text-2xl sm:text-3xl font-black tracking-tight">Student Dashboard</h1>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-white/20 text-white backdrop-blur-md">Verified</span>
              </div>
              <p class="text-indigo-200 text-xs sm:text-sm mt-0.5">Welcome back, <span class="font-bold text-white">${user.name}</span> · ${user.department || 'Computer Science'}</p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2.5">
            <a href="#/student/assessment" class="px-4 py-2.5 bg-white text-indigo-900 hover:bg-indigo-50 text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2">
              <i data-lucide="sparkles" class="w-4 h-4 text-indigo-600"></i>
              <span>${assessment.taken ? 'Retake Assessment' : 'Start AI Assessment'}</span>
            </a>
            <a href="#/student/skill-gap" class="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl backdrop-blur-md transition-all flex items-center gap-2 border border-white/20">
              <i data-lucide="bar-chart-2" class="w-4 h-4"></i>
              <span>View Skill Gap</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Quick Metrics Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        ${renderStatCard('AI Skill Score', `${assessment.overallScore}/100`, 'Ready for Junior Roles', 'award', '+12% from last month', 'text-indigo-600')}
        ${renderStatCard('Verified Skills', `${skills.length} Skills`, '3 Advanced · 2 Intermediate', 'zap', null, 'text-cyan-600')}
        ${renderStatCard('Active Applications', `${applications.length}`, `${applications.filter(a => a.status === 'Shortlisted' || a.status === 'Interview').length} In Interview Stage`, 'send', '2 Updated recently', 'text-purple-600')}
        ${renderStatCard('Profile Completion', `${user.profileCompletion || 75}%`, 'Add resume to hit 100%', 'check-circle-2', null, 'text-emerald-600')}
      </div>

      <!-- Main Two-Column Row -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Left: Profile Completion & Skills Overview (1 col) -->
        <div class="space-y-6 lg:col-span-1">
          
          <!-- Card: Profile Completion -->
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-slate-800">Profile Completion</h3>
              <span class="text-xs font-bold text-indigo-600">${user.profileCompletion || 75}%</span>
            </div>
            
            <div class="flex items-center gap-5 my-3">
              ${renderCircularProgress(user.profileCompletion || 75, 96, 9, '#4f46e5')}
              <div class="text-xs text-slate-500 space-y-1">
                <div class="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i> Skills Verified
                </div>
                <div class="flex items-center gap-1.5 text-emerald-600 font-medium">
                  <i data-lucide="check" class="w-3.5 h-3.5"></i> AI Test Completed
                </div>
                <div class="flex items-center gap-1.5 text-slate-400">
                  <i data-lucide="circle" class="w-3.5 h-3.5"></i> Portfolio Link
                </div>
              </div>
            </div>

            <a href="#/student/profile" class="mt-4 w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-indigo-600 text-xs font-bold rounded-xl flex items-center justify-center gap-1.5 transition-colors border border-slate-200/70">
              <span>Complete Profile</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </a>
          </div>

          <!-- Card: Skills Overview -->
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div class="flex items-center justify-between mb-3">
              <h3 class="text-sm font-bold text-slate-800">Skills Overview</h3>
              <a href="#/student/skills" class="text-xs font-bold text-indigo-600 hover:underline">Manage Skills</a>
            </div>
            <p class="text-xs text-slate-400 mb-4">Your verified skill tags recognized by partner companies</p>

            <div class="flex flex-wrap gap-2">
              ${skills.map(s => `
                <div class="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-semibold text-slate-700 hover:border-indigo-300 hover:bg-indigo-50/50 transition-colors">
                  <span>${s.name}</span>
                  <span class="text-[10px] text-indigo-600 font-bold bg-indigo-50 px-1 rounded">${s.level[0]}</span>
                </div>
              `).join('')}
            </div>

            <div class="mt-5 pt-4 border-t border-slate-100 flex justify-between items-center text-xs">
              <span class="text-slate-500">Need more endorsements?</span>
              <a href="#/student/skills" class="font-bold text-indigo-600 hover:underline">+ Add New Skill</a>
            </div>
          </div>

        </div>

        <!-- Right: Preferred Roles & Opportunities (2 cols) -->
        <div class="space-y-6 lg:col-span-2">
          
          <!-- Preferred Job Roles & Match -->
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <div>
                <h3 class="text-sm font-bold text-slate-800">Job Roles Applying For</h3>
                <p class="text-xs text-slate-400">Match score calculated from your verified skills and AI assessment</p>
              </div>
              <a href="#/student/jobs" class="text-xs font-bold text-indigo-600 hover:underline">All Roles</a>
            </div>

            <div class="space-y-4">
              ${topRoles.map(role => `
                <div class="p-4 rounded-xl border border-slate-200/80 hover:border-indigo-300 hover:shadow-md transition-all bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div class="space-y-1.5">
                    <div class="flex items-center gap-2">
                      <h4 class="text-sm font-bold text-slate-900">${role.title}</h4>
                      <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        ${role.match}% Match
                      </span>
                    </div>

                    <div class="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                      <span class="text-slate-400 text-[11px]">Matching:</span>
                      ${role.matching.map(m => `<span class="px-1.5 py-0.5 bg-emerald-50 text-emerald-700 rounded text-[11px] font-medium">${m}</span>`).join('')}
                      <span class="text-slate-400 text-[11px] ml-1">Missing:</span>
                      ${role.missing.map(m => `<span class="px-1.5 py-0.5 bg-rose-50 text-rose-700 rounded text-[11px] font-medium">${m}</span>`).join('')}
                    </div>
                  </div>

                  <div class="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
                    <span class="text-xs text-slate-500 font-medium">${role.openings} Openings</span>
                    <a href="#/student/internships" class="px-3 py-1.5 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-indigo-700 text-xs font-bold rounded-lg transition-colors">
                      View Jobs
                    </a>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Active Applications Pipeline Snippet -->
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div class="flex items-center justify-between mb-4">
              <h3 class="text-sm font-bold text-slate-800">Recent Applications</h3>
              <a href="#/student/applications" class="text-xs font-bold text-indigo-600 hover:underline">Track Pipeline</a>
            </div>

            <div class="divide-y divide-slate-100">
              ${applications.map(app => `
                <div class="py-3 flex items-center justify-between gap-3 text-xs">
                  <div>
                    <div class="font-bold text-slate-800">${app.role}</div>
                    <div class="text-slate-400 text-[11px]">${app.company} · Applied on ${app.appliedDate}</div>
                  </div>
                  <div class="text-right">
                    ${renderBadge(app.status, app.status === 'Shortlisted' ? 'success' : app.status === 'Interview' ? 'primary' : 'warning')}
                    <div class="text-[10px] text-slate-400 mt-1">${app.nextStep}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

        </div>

      </div>

    </div>
  `;
}
