/**
 * Student Skill Gap Analysis View
 * Visual Current -> Required -> Gap matrix with color-coded severity & AI learning paths
 */

import { store } from '../../store.js';

export function renderStudentSkillGap() {
  const data = store.get();
  const currentSkills = data.studentSkills || [];

  // Comparison matrix data
  const gapMatrix = [
    {
      skill: 'React',
      current: 'Advanced (82%)',
      required: 'Advanced (80%)',
      gap: 'Low Gap',
      status: 'green',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      skill: 'JavaScript (ES6+)',
      current: 'Advanced (85%)',
      required: 'Advanced (85%)',
      gap: 'Low Gap',
      status: 'green',
      badge: 'bg-emerald-50 text-emerald-700 border-emerald-200'
    },
    {
      skill: 'TypeScript',
      current: 'None (0%)',
      required: 'Intermediate (70%)',
      gap: 'High Gap',
      status: 'red',
      badge: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      skill: 'Node.js & Express',
      current: 'Beginner (30%)',
      required: 'Advanced (75%)',
      gap: 'High Gap',
      status: 'red',
      badge: 'bg-rose-50 text-rose-700 border-rose-200'
    },
    {
      skill: 'SQL & Database Design',
      current: 'Intermediate (60%)',
      required: 'Advanced (75%)',
      gap: 'Moderate Gap',
      status: 'yellow',
      badge: 'bg-amber-50 text-amber-700 border-amber-200'
    },
    {
      skill: 'System Design & Scalability',
      current: 'Beginner (25%)',
      required: 'Intermediate (65%)',
      gap: 'Moderate Gap',
      status: 'yellow',
      badge: 'bg-amber-50 text-amber-700 border-amber-200'
    }
  ];

  // AI Recommended Skills to learn
  const recommendedSkills = [
    {
      name: 'Node.js',
      currentProficiency: 'Beginner',
      requiredProficiency: 'Advanced',
      gapLevel: 'High',
      priority: 'High',
      learningTime: '3 Weeks (~15 hrs)',
      reason: 'Mandatory for 68% of Full Stack openings on campus portal.',
      targetResource: '#/student/resources'
    },
    {
      name: 'TypeScript',
      currentProficiency: 'None',
      requiredProficiency: 'Intermediate',
      gapLevel: 'High',
      priority: 'High',
      learningTime: '2 Weeks (~10 hrs)',
      reason: 'Expected by NexaTech Labs and CloudScale AI for Frontend roles.',
      targetResource: '#/student/resources'
    },
    {
      name: 'SQL & Query Optimization',
      currentProficiency: 'Intermediate',
      requiredProficiency: 'Advanced',
      gapLevel: 'Moderate',
      priority: 'Medium',
      learningTime: '1.5 Weeks (~8 hrs)',
      reason: 'Frequently assessed in technical round algorithmic interviews.',
      targetResource: '#/student/resources'
    },
    {
      name: 'Docker Containers',
      currentProficiency: 'None',
      requiredProficiency: 'Intermediate',
      gapLevel: 'Moderate',
      priority: 'Medium',
      learningTime: '1 Week (~6 hrs)',
      reason: 'Industry cloud teams require containerized microservices.',
      targetResource: '#/student/resources'
    }
  ];

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
  }, 10);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-2xl font-black text-slate-900">Skill Gap Analysis</h1>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              AI Diagnostic
            </span>
          </div>
          <p class="text-xs text-slate-500 mt-1">Cross-referencing your verified skills with current industry hiring thresholds</p>
        </div>

        <div class="flex items-center gap-2">
          <span class="text-xs text-slate-500 font-medium">Target Role:</span>
          <span class="px-3 py-1.5 bg-indigo-50 text-indigo-700 text-xs font-bold rounded-xl border border-indigo-200">
            Frontend & Full Stack Engineer
          </span>
        </div>
      </div>

      <!-- Core Matrix: Current Skills -> Required Skills -> Skill Gap -->
      <div class="glass-card bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div class="p-5 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h3 class="text-sm font-bold text-slate-800">Skill Gap Matrix</h3>
            <p class="text-xs text-slate-400">Current Skills → Required Skills → Gap Evaluation</p>
          </div>
          <div class="flex items-center gap-3 text-xs">
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> Strong / Low</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Moderate</span>
            <span class="flex items-center gap-1.5"><span class="w-2.5 h-2.5 rounded-full bg-rose-500"></span> High Gap</span>
          </div>
        </div>

        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-slate-50/70 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                <th class="py-3 px-6">Skill</th>
                <th class="py-3 px-6">Current Level</th>
                <th class="py-3 px-6">Industry Required Level</th>
                <th class="py-3 px-6">Identified Gap</th>
                <th class="py-3 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-xs">
              ${gapMatrix.map(row => `
                <tr class="hover:bg-slate-50/60 transition-colors">
                  <td class="py-4 px-6 font-bold text-slate-900">${row.skill}</td>
                  <td class="py-4 px-6 text-slate-600">${row.current}</td>
                  <td class="py-4 px-6 font-semibold text-slate-700">${row.required}</td>
                  <td class="py-4 px-6">
                    <span class="px-2.5 py-1 rounded-full text-xs font-bold border ${row.badge}">
                      ${row.gap}
                    </span>
                  </td>
                  <td class="py-4 px-6 text-right">
                    ${row.status === 'green' ? `
                      <span class="text-emerald-600 font-bold flex items-center justify-end gap-1">
                        <i data-lucide="check" class="w-4 h-4"></i> Ready
                      </span>
                    ` : `
                      <a href="#/student/resources" class="text-indigo-600 hover:text-indigo-800 font-bold hover:underline inline-flex items-center gap-1">
                        <span>Bridge Gap</span>
                        <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                      </a>
                    `}
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- AI Recommended Skills Priority Cards -->
      <div>
        <div class="mb-4">
          <h2 class="text-lg font-bold text-slate-900">AI Recommended Skills to Bridge</h2>
          <p class="text-xs text-slate-500">Target these specific competencies to maximize placement offers</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          ${recommendedSkills.map(item => `
            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 class="text-base font-black text-slate-900">${item.name}</h3>
                    <p class="text-xs text-slate-500 mt-0.5">${item.reason}</p>
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${item.priority === 'High' ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
                    ${item.priority} Priority
                  </span>
                </div>

                <div class="grid grid-cols-3 gap-2 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center my-4 text-xs">
                  <div>
                    <span class="text-[10px] font-medium text-slate-400 block">Current</span>
                    <strong class="text-slate-700 font-bold">${item.currentProficiency}</strong>
                  </div>
                  <div>
                    <span class="text-[10px] font-medium text-slate-400 block">Required</span>
                    <strong class="text-slate-900 font-bold">${item.requiredProficiency}</strong>
                  </div>
                  <div>
                    <span class="text-[10px] font-medium text-slate-400 block">Est. Time</span>
                    <strong class="text-indigo-600 font-bold">${item.learningTime}</strong>
                  </div>
                </div>
              </div>

              <div class="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs text-slate-400 font-medium">Gap Level: <strong class="text-slate-700">${item.gapLevel}</strong></span>
                <a href="${item.targetResource}" class="btn-glow px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5">
                  <span>Learn ${item.name}</span>
                  <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
                </a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}
