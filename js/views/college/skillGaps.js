/**
 * College Skill Gaps Diagnostic View
 * Aggregate institutional skill deficiencies with 1-click "Create Training Program" intervention
 */

import { store } from '../../store.js';
import { showModal, closeModal, showToast } from '../../components/ui.js';

export function renderCollegeSkillGaps() {
  const data = store.get();
  const gaps = data.collegeSkillGaps || [];

  setTimeout(() => initSkillGapEvents(), 10);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-2xl font-black text-slate-900">Institutional Skill Gaps Report</h1>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
              840 Students Flagged
            </span>
          </div>
          <p class="text-xs text-slate-500 mt-1">Discrepancies identified between college academic outcomes and corporate hiring criteria</p>
        </div>

        <a href="#/college/training" class="px-4 py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-bold rounded-xl transition-colors border border-purple-200 flex items-center gap-2 self-start sm:self-auto">
          <i data-lucide="award" class="w-4 h-4"></i>
          <span>Active Training Programs</span>
        </a>
      </div>

      <!-- Critical Gap Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${gaps.map(gap => {
          const isHigh = gap.gapLevel === 'High';
          return `
            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group">
              <div>
                <div class="flex items-start justify-between gap-2 mb-3">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${isHigh ? 'bg-rose-50 text-rose-700 border border-rose-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
                    ${gap.gapLevel} Gap Severity
                  </span>
                  <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    Demand: ${gap.industryDemand}
                  </span>
                </div>

                <h3 class="text-lg font-black text-slate-900 group-hover:text-purple-600 transition-colors">
                  ${gap.skill}
                </h3>

                <div class="my-4 p-4 rounded-xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                  <div class="flex justify-between items-center">
                    <span class="text-slate-400">Students Needing Improvement:</span>
                    <strong class="text-slate-800 text-sm font-black">${gap.studentsNeedingImprovement}</strong>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-slate-400">Affected Departments:</span>
                    <span class="font-semibold text-slate-700">${gap.departments.join(', ')}</span>
                  </div>
                  <div class="flex justify-between items-center">
                    <span class="text-slate-400">Current Intervention:</span>
                    <span class="font-bold ${gap.status === 'Program Active' ? 'text-emerald-600' : 'text-rose-600'}">${gap.status}</span>
                  </div>
                </div>
              </div>

              <div class="pt-4 border-t border-slate-100">
                <button class="create-program-btn w-full py-2.5 rounded-xl text-xs font-bold btn-glow flex items-center justify-center gap-2" data-skill="${gap.skill}" data-count="${gap.studentsNeedingImprovement}">
                  <i data-lucide="plus-circle" class="w-4 h-4"></i>
                  <span>Create Training Program</span>
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}

function initSkillGapEvents() {
  if (window.lucide) window.lucide.createIcons();

  document.querySelectorAll('.create-program-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const skillName = e.currentTarget.dataset.skill;
      const count = e.currentTarget.dataset.count;

      const modalHtml = `
        <form id="create-training-form" class="space-y-4 text-xs">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Target Skill Gap</label>
            <input type="text" id="prog-skill" value="${skillName}" required class="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-700 font-semibold" readonly />
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Training Program Title *</label>
            <input type="text" id="prog-name" value="Comprehensive ${skillName} Bootcamp" required placeholder="e.g. Intensive Full Stack Accelerator" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Industry Trainer / Partner</label>
              <input type="text" id="prog-trainer" value="NexaTech Corporate Mentors" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Duration</label>
              <select id="prog-duration" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none">
                <option value="4 Weeks">4 Weeks</option>
                <option value="6 Weeks" selected>6 Weeks</option>
                <option value="8 Weeks">8 Weeks</option>
                <option value="12 Weeks">12 Weeks</option>
              </select>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Target Capacity</label>
              <input type="number" id="prog-capacity" value="${Math.min(parseInt(count, 10), 200)}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>
            <div>
              <label class="block font-bold text-slate-700 mb-1">Start Date</label>
              <input type="date" id="prog-start" value="${new Date().toISOString().split('T')[0]}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>
          </div>
        </form>
      `;

      const footerHtml = `
        <button type="button" id="prog-cancel" class="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl text-xs">Cancel</button>
        <button type="button" id="prog-submit" class="btn-glow px-4 py-2 font-bold text-xs rounded-xl">Launch Program</button>
      `;

      showModal(`Launch Training for ${skillName}`, modalHtml, footerHtml);

      document.getElementById('prog-cancel')?.addEventListener('click', closeModal);
      document.getElementById('prog-submit')?.addEventListener('click', () => {
        const name = document.getElementById('prog-name').value;
        const skill = document.getElementById('prog-skill').value;
        const trainer = document.getElementById('prog-trainer').value;
        const duration = document.getElementById('prog-duration').value;
        const capacity = parseInt(document.getElementById('prog-capacity').value, 10);
        const startDate = document.getElementById('prog-start').value;

        store.createTrainingProgram({ name, skill, trainer, duration, capacity, startDate });
        closeModal();
        showToast('Training Program Created!', `${name} is now open for student enrollments.`, 'success');
        window.location.hash = '#/college/training';
      });
    });
  });
}
