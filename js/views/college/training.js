/**
 * College Training Programs Management View
 * Tracks active bootcamps, student enrollment numbers, completion benchmarks & program creation
 */

import { store } from '../../store.js';
import { showModal, closeModal, showToast, renderProgressBar } from '../../components/ui.js';

export function renderCollegeTraining() {
  const data = store.get();
  const programs = data.trainingPrograms || [];

  setTimeout(() => initTrainingEvents(), 10);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Campus Training Programs</h1>
          <p class="text-xs text-slate-500 mt-1">Intervention bootcamps and upskilling tracks initiated by the institution to bridge industry skill gaps</p>
        </div>

        <button id="add-training-btn" class="btn-glow px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start sm:self-auto">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Create Training Program</span>
        </button>
      </div>

      <!-- Training Programs Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="training-programs-grid">
        ${programs.map(prog => {
          const enrollPercent = Math.round((prog.enrolled / prog.capacity) * 100);
          return `
            <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group">
              <div>
                <div class="flex items-start justify-between gap-2 mb-3">
                  <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
                    ${prog.skill}
                  </span>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold ${prog.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : prog.status === 'Upcoming' ? 'bg-blue-50 text-blue-700 border border-blue-200' : 'bg-slate-100 text-slate-700'}">
                    ${prog.status}
                  </span>
                </div>

                <h3 class="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  ${prog.name}
                </h3>

                <div class="flex items-center gap-4 text-xs text-slate-500 my-2">
                  <span>Trainer: <strong class="text-slate-800">${prog.trainer}</strong></span>
                  <span>·</span>
                  <span>Duration: <strong class="text-slate-800">${prog.duration}</strong></span>
                </div>

                <!-- Progress & Enrollment Metrics -->
                <div class="my-4 space-y-3 bg-slate-50 p-4 rounded-xl border border-slate-100 text-xs">
                  <div>
                    <div class="flex justify-between items-center mb-1 font-semibold text-slate-700">
                      <span>Enrollment Capacity</span>
                      <span>${prog.enrolled} / ${prog.capacity} Students (${enrollPercent}%)</span>
                    </div>
                    <div class="w-full h-2 bg-slate-200/80 rounded-full overflow-hidden">
                      <div class="h-full bg-purple-600 rounded-full" style="width: ${enrollPercent}%"></div>
                    </div>
                  </div>

                  <div class="flex justify-between items-center text-slate-500 pt-1 border-t border-slate-200/60">
                    <span>Target Completion Rate:</span>
                    <strong class="text-emerald-600 font-bold">${prog.completionRate}</strong>
                  </div>
                </div>
              </div>

              <!-- Action Bar -->
              <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span class="text-slate-400 text-[11px]">Starts: ${prog.startDate}</span>
                <button onclick="alert('Demo: Student enrollment roster for ${prog.name}');" class="px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors">
                  View Enrolled Students
                </button>
              </div>
            </div>
          `;
        }).join('')}
      </div>

    </div>
  `;
}

function initTrainingEvents() {
  if (window.lucide) window.lucide.createIcons();

  document.getElementById('add-training-btn')?.addEventListener('click', () => {
    const modalHtml = `
      <form id="new-prog-modal-form" class="space-y-4 text-xs">
        <div>
          <label class="block font-bold text-slate-700 mb-1">Program Title *</label>
          <input type="text" id="m-prog-name" required placeholder="e.g. Next-Gen Cloud & DevOps Accelerator" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Target Skill *</label>
            <input type="text" id="m-prog-skill" required placeholder="e.g. AWS & Kubernetes" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Duration</label>
            <select id="m-prog-duration" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none">
              <option value="4 Weeks">4 Weeks</option>
              <option value="6 Weeks" selected>6 Weeks</option>
              <option value="8 Weeks">8 Weeks</option>
            </select>
          </div>
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block font-bold text-slate-700 mb-1">Lead Instructor / Firm</label>
            <input type="text" id="m-prog-trainer" value="Senior Industry Specialist" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
          </div>
          <div>
            <label class="block font-bold text-slate-700 mb-1">Student Capacity</label>
            <input type="number" id="m-prog-cap" value="150" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
          </div>
        </div>
      </form>
    `;

    const footerHtml = `
      <button type="button" id="m-prog-cancel" class="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl text-xs">Cancel</button>
      <button type="button" id="m-prog-submit" class="btn-glow px-4 py-2 font-bold text-xs rounded-xl">Create Program</button>
    `;

    showModal('Create Campus Training Program', modalHtml, footerHtml);

    document.getElementById('m-prog-cancel')?.addEventListener('click', closeModal);
    document.getElementById('m-prog-submit')?.addEventListener('click', () => {
      const name = document.getElementById('m-prog-name').value;
      const skill = document.getElementById('m-prog-skill').value;
      const duration = document.getElementById('m-prog-duration').value;
      const trainer = document.getElementById('m-prog-trainer').value;
      const capacity = parseInt(document.getElementById('m-prog-cap').value, 10);

      if (!name || !skill) {
        alert('Please fill out all required fields.');
        return;
      }

      store.createTrainingProgram({ name, skill, duration, trainer, capacity });
      closeModal();
      showToast('Program Created!', `${name} is now available in the curriculum.`, 'success');
      window.dispatchEvent(new Event('hashchange'));
    });
  });
}
