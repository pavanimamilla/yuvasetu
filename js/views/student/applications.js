/**
 * Student Applications Pipeline View
 * Tracks progress across Applied, Under Review, Shortlisted, Interview, Selected, Rejected
 */

import { store } from '../../store.js';
import { renderBadge } from '../../components/ui.js';

export function renderStudentApplications() {
  const data = store.get();
  const applications = data.applications || [];

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
  }, 10);

  const statusVariantMap = {
    Applied: 'neutral',
    'Under Review': 'warning',
    Shortlisted: 'success',
    Interview: 'primary',
    Selected: 'emerald',
    Rejected: 'danger'
  };

  const statusPills = ['All', 'Applied', 'Under Review', 'Shortlisted', 'Interview', 'Selected'];

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Application Pipeline</h1>
          <p class="text-xs text-slate-500 mt-1">Real-time status updates and scheduled interview stages from campus hiring partners</p>
        </div>

        <a href="#/student/internships" class="btn-glow px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Apply to More Roles</span>
        </a>
      </div>

      <!-- Pipeline Status Cards Grid -->
      <div class="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
        <div class="p-3 bg-white rounded-xl border border-slate-200/80 text-center">
          <span class="text-[10px] font-bold uppercase text-slate-400">Total Applied</span>
          <p class="text-xl font-black text-slate-800 mt-0.5">${applications.length}</p>
        </div>
        <div class="p-3 bg-white rounded-xl border border-slate-200/80 text-center">
          <span class="text-[10px] font-bold uppercase text-slate-400">Under Review</span>
          <p class="text-xl font-black text-amber-600 mt-0.5">${applications.filter(a => a.status === 'Under Review').length}</p>
        </div>
        <div class="p-3 bg-white rounded-xl border border-slate-200/80 text-center">
          <span class="text-[10px] font-bold uppercase text-slate-400">Shortlisted</span>
          <p class="text-xl font-black text-emerald-600 mt-0.5">${applications.filter(a => a.status === 'Shortlisted').length}</p>
        </div>
        <div class="p-3 bg-white rounded-xl border border-slate-200/80 text-center">
          <span class="text-[10px] font-bold uppercase text-slate-400">Interview</span>
          <p class="text-xl font-black text-indigo-600 mt-0.5">${applications.filter(a => a.status === 'Interview').length}</p>
        </div>
        <div class="p-3 bg-white rounded-xl border border-slate-200/80 text-center">
          <span class="text-[10px] font-bold uppercase text-slate-400">Offers / Selected</span>
          <p class="text-xl font-black text-teal-600 mt-0.5">${applications.filter(a => a.status === 'Selected').length}</p>
        </div>
        <div class="p-3 bg-white rounded-xl border border-slate-200/80 text-center">
          <span class="text-[10px] font-bold uppercase text-slate-400">Archived</span>
          <p class="text-xl font-black text-slate-400 mt-0.5">${applications.filter(a => a.status === 'Rejected').length}</p>
        </div>
      </div>

      <!-- Applications List Table / Cards -->
      <div class="glass-card bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div class="p-5 border-b border-slate-100 flex items-center justify-between">
          <h3 class="text-sm font-bold text-slate-800">Submitted Applications</h3>
          <span class="text-xs text-slate-400">${applications.length} Records</span>
        </div>

        ${applications.length ? `
          <div class="divide-y divide-slate-100">
            ${applications.map(app => `
              <div class="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-slate-50/60 transition-colors">
                
                <div class="space-y-1">
                  <div class="flex items-center gap-2.5">
                    <h4 class="text-base font-bold text-slate-900">${app.role}</h4>
                    <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">${app.type}</span>
                  </div>
                  <div class="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span class="font-bold text-slate-700">${app.company}</span>
                    <span>·</span>
                    <span>Applied on <strong>${app.appliedDate}</strong></span>
                    <span>·</span>
                    <span class="text-emerald-600 font-semibold">${app.matchScore}% Match Profile</span>
                  </div>
                </div>

                <div class="flex items-center justify-between md:justify-end gap-6 pt-3 md:pt-0 border-t md:border-t-0 border-slate-100">
                  <div class="text-left md:text-right">
                    <span class="text-[10px] text-slate-400 block mb-0.5">Next Milestone</span>
                    <p class="text-xs font-bold text-slate-800">${app.nextStep}</p>
                  </div>

                  <div class="shrink-0">
                    ${renderBadge(app.status, statusVariantMap[app.status] || 'neutral')}
                  </div>
                </div>

              </div>
            `).join('')}
          </div>
        ` : `
          <div class="py-12 text-center text-slate-400">
            <i data-lucide="inbox" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
            <p class="text-sm font-semibold">No applications yet.</p>
            <p class="text-xs mt-1">Browse internships and submit your profile with 1 click.</p>
          </div>
        `}
      </div>

    </div>
  `;
}
