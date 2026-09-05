/**
 * Recruiter Applications Kanban Workflow Board
 * Move campus candidates seamlessly across New, Under Review, Shortlisted, Interview, Selected, Rejected
 */

import { store } from '../../store.js';
import { showToast } from '../../components/ui.js';

export function renderCompanyApplications() {
  const data = store.get();
  const candidates = data.recruiterCandidates || [];

  setTimeout(() => initKanbanEvents(), 10);

  const columns = [
    { id: 'New', title: 'New Applicants', color: 'border-slate-300 bg-slate-50/50' },
    { id: 'Under Review', title: 'Under Review', color: 'border-amber-300 bg-amber-50/20' },
    { id: 'Shortlisted', title: 'Shortlisted', color: 'border-cyan-300 bg-cyan-50/20' },
    { id: 'Interview', title: 'Interview Stage', color: 'border-indigo-300 bg-indigo-50/20' },
    { id: 'Selected', title: 'Offer Extended', color: 'border-emerald-300 bg-emerald-50/20' }
  ];

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Applicant Pipeline Kanban</h1>
          <p class="text-xs text-slate-500 mt-1">Drag or advance candidates through recruitment stages with automated notification triggers</p>
        </div>

        <div class="flex items-center gap-2 self-start sm:self-auto">
          <span class="px-3 py-1.5 bg-cyan-50 text-cyan-700 text-xs font-bold rounded-xl border border-cyan-200">
            Total Pipeline: ${candidates.length} Candidates
          </span>
        </div>
      </div>

      <!-- Kanban Columns Container -->
      <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto pb-4">
        ${columns.map(col => {
          const colCandidates = candidates.filter(c => c.status === col.id);
          return `
            <div class="flex flex-col rounded-2xl border ${col.color} p-3 min-h-[500px]">
              
              <!-- Column Header -->
              <div class="flex items-center justify-between pb-3 mb-3 border-b border-slate-200/60">
                <span class="text-xs font-black text-slate-800">${col.title}</span>
                <span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-white text-slate-700 shadow-xs">
                  ${colCandidates.length}
                </span>
              </div>

              <!-- Candidate Cards List in Column -->
              <div class="space-y-3 flex-1 overflow-y-auto pr-1">
                ${colCandidates.map(c => `
                  <div class="glass-card bg-white p-4 rounded-xl border border-slate-200 shadow-sm space-y-2.5">
                    <div class="flex items-start justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <img src="${c.avatar}" class="w-8 h-8 rounded-lg object-cover ring-1 ring-slate-100" />
                        <div>
                          <h4 class="text-xs font-bold text-slate-900 leading-tight">${c.name}</h4>
                          <span class="text-[10px] text-slate-400 block">${c.role}</span>
                        </div>
                      </div>
                      <span class="px-1.5 py-0.5 rounded text-[10px] font-extrabold bg-emerald-50 text-emerald-700">
                        ${c.matchScore}%
                      </span>
                    </div>

                    <p class="text-[10px] text-slate-500">${c.college}</p>

                    <div class="flex flex-wrap gap-1">
                      ${c.matchingSkills.slice(0, 2).map(sk => `
                        <span class="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 text-slate-700">
                          ${sk}
                        </span>
                      `).join('')}
                    </div>

                    <!-- Stage Advance Dropdown -->
                    <div class="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <span class="text-[9px] text-slate-400">Move stage:</span>
                      <select class="change-stage-select text-[10px] font-bold bg-slate-50 border border-slate-200 rounded px-1.5 py-0.5 focus:outline-none" data-id="${c.id}">
                        <option value="New" ${c.status === 'New' ? 'selected' : ''}>New</option>
                        <option value="Under Review" ${c.status === 'Under Review' ? 'selected' : ''}>Under Review</option>
                        <option value="Shortlisted" ${c.status === 'Shortlisted' ? 'selected' : ''}>Shortlist</option>
                        <option value="Interview" ${c.status === 'Interview' ? 'selected' : ''}>Interview</option>
                        <option value="Selected" ${c.status === 'Selected' ? 'selected' : ''}>Offer</option>
                        <option value="Rejected" ${c.status === 'Rejected' ? 'selected' : ''}>Reject</option>
                      </select>
                    </div>

                  </div>
                `).join('')}

                ${!colCandidates.length ? `
                  <div class="h-32 border-2 border-dashed border-slate-200 rounded-xl flex items-center justify-center text-center p-3 text-slate-400 text-[11px]">
                    No candidates currently in this stage
                  </div>
                ` : ''}
              </div>

            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}

function initKanbanEvents() {
  document.querySelectorAll('.change-stage-select').forEach(select => {
    select.addEventListener('change', (e) => {
      const id = e.currentTarget.dataset.id;
      const targetStatus = e.currentTarget.value;
      store.updateCandidateStatus(id, targetStatus);
      showToast('Candidate Stage Updated', `Moved to ${targetStatus} stage.`, 'success');
      window.dispatchEvent(new Event('hashchange'));
    });
  });
}
