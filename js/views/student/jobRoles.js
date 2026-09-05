/**
 * Student Job Roles Exploration View
 * Compares student skills against industry benchmarks and calculates real-time match scores
 */

import { store } from '../../store.js';

export function renderStudentJobRoles() {
  const data = store.get();
  const studentSkills = (data.studentSkills || []).map(s => s.name.toLowerCase());
  const roles = data.jobRoles || [];

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
  }, 10);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Industry Job Roles</h1>
          <p class="text-xs text-slate-500 mt-1">Explore standardized engineering roles, benchmark your skills, and detect missing prerequisites</p>
        </div>
        <a href="#/student/skill-gap" class="px-4 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-xl transition-colors flex items-center gap-1.5 self-start sm:self-auto border border-indigo-200">
          <i data-lucide="bar-chart-2" class="w-4 h-4"></i>
          <span>Institutional Skill Gap</span>
        </a>
      </div>

      <!-- Roles Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        ${roles.map(role => {
          // Calculate match
          const required = role.requiredSkills || [];
          const matching = required.filter(req => studentSkills.some(sk => sk.includes(req.toLowerCase()) || req.toLowerCase().includes(sk)));
          const missing = required.filter(req => !studentSkills.some(sk => sk.includes(req.toLowerCase()) || req.toLowerCase().includes(sk)));
          const matchPercent = Math.round((matching.length / required.length) * 100);

          const badgeColor = matchPercent >= 80 ? 'bg-emerald-50 text-emerald-700 border-emerald-200' :
                             matchPercent >= 50 ? 'bg-amber-50 text-amber-700 border-amber-200' :
                             'bg-rose-50 text-rose-700 border-rose-200';

          return `
            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group">
              <div>
                <!-- Top Info -->
                <div class="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 class="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">${role.title}</h3>
                    <div class="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                      <span>Market Demand: <strong class="text-slate-700">${role.demand}</strong></span>
                      <span>·</span>
                      <span>Salary: <strong class="text-slate-700">${role.avgSalary}</strong></span>
                    </div>
                  </div>
                  <span class="px-3 py-1 rounded-full text-xs font-extrabold border ${badgeColor}">
                    ${matchPercent}% Match
                  </span>
                </div>

                <p class="text-xs text-slate-500 leading-relaxed mb-5">${role.description}</p>

                <!-- Matching vs Missing Skills -->
                <div class="space-y-3 bg-slate-50/70 p-3.5 rounded-xl border border-slate-100">
                  <div>
                    <div class="text-[11px] font-bold text-emerald-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <i data-lucide="check-circle" class="w-3.5 h-3.5"></i>
                      <span>Matching Skills (${matching.length})</span>
                    </div>
                    <div class="flex flex-wrap gap-1.5">
                      ${matching.length ? matching.map(m => `
                        <span class="px-2 py-0.5 rounded-lg text-xs font-semibold bg-emerald-100/80 text-emerald-800 border border-emerald-200">
                          ${m}
                        </span>
                      `).join('') : '<span class="text-xs text-slate-400 italic">None matched yet</span>'}
                    </div>
                  </div>

                  <div>
                    <div class="text-[11px] font-bold text-rose-700 uppercase tracking-wider mb-1.5 flex items-center gap-1">
                      <i data-lucide="alert-circle" class="w-3.5 h-3.5"></i>
                      <span>Missing Skills to Learn (${missing.length})</span>
                    </div>
                    <div class="flex flex-wrap gap-1.5">
                      ${missing.length ? missing.map(m => `
                        <span class="px-2 py-0.5 rounded-lg text-xs font-semibold bg-rose-100/70 text-rose-800 border border-rose-200">
                          ${m}
                        </span>
                      `).join('') : '<span class="text-xs text-emerald-600 font-semibold">All skills satisfied!</span>'}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Action Bar -->
              <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span class="text-xs font-medium text-slate-500">${role.openings} Active Openings</span>
                <a href="#/student/internships" class="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold rounded-xl transition-all shadow-sm flex items-center gap-1.5">
                  <span>View Opportunities</span>
                  <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
                </a>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}
