/**
 * Recruiter Create Internship View
 * Post summer and pre-placement internships directly to student portals
 */

import { store } from '../../store.js';
import { showToast } from '../../components/ui.js';

let internSkills = ['React', 'JavaScript', 'Tailwind CSS'];

export function renderCompanyCreateInternship() {
  setTimeout(() => initCreateInternshipEvents(), 10);

  return `
    <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Create Internship Opportunity</h1>
          <p class="text-xs text-slate-500 mt-1">Recruit interns with fast-track conversion to full-time engineering roles</p>
        </div>
        <a href="#/company/dashboard" class="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 self-start sm:self-auto">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
          <span>Back to Dashboard</span>
        </a>
      </div>

      <!-- Internship Creation Form -->
      <div class="glass-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
        <form id="create-intern-form" class="space-y-5 text-xs">
          
          <div>
            <label class="block font-bold text-slate-700 mb-1">Internship Title *</label>
            <input type="text" id="int-title" required placeholder="e.g. Frontend Development Intern, Cloud Engineering Intern" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Internship Duration *</label>
              <select id="int-dur" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                <option value="3 Months" selected>3 Months</option>
                <option value="4 Months">4 Months</option>
                <option value="6 Months">6 Months</option>
              </select>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Work Mode *</label>
              <select id="int-mode" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                <option value="Hybrid" selected>Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Location *</label>
              <input type="text" id="int-loc" value="Bangalore / Hybrid" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Monthly Stipend *</label>
              <input type="text" id="int-stipend" value="₹35,000 / mo" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Batch Eligibility</label>
              <input type="text" id="int-elig" value="2026 / 2027 Graduating Batches" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Internship Description *</label>
            <textarea rows="4" id="int-desc" required placeholder="Describe mentorship, project scope, and learning environment..." class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none">Join our innovative engineering team as an intern. You will be paired with a senior mentor, contribute directly to product features, and learn industry-standard Git and CI/CD development practices.</textarea>
          </div>

          <!-- Required Skills -->
          <div>
            <label class="block font-bold text-slate-700 mb-1">Required Skills for Eligibility</label>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div class="flex flex-wrap gap-1.5" id="intern-tags-container">
                ${internSkills.map(s => `
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-800 font-bold text-xs">
                    ${s}
                    <button type="button" onclick="removeInternSkill('${s}')" class="hover:text-rose-600">×</button>
                  </span>
                `).join('')}
              </div>
              <div class="flex gap-2 pt-1">
                <input type="text" id="add-int-input" placeholder="Type a skill and press Enter or Add..." class="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs" />
                <button type="button" id="add-int-btn" class="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-xs">Add</button>
              </div>
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Application Deadline *</label>
            <input type="date" id="int-deadline" value="2026-11-15" required class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-slate-400 text-[11px]">Instant distribution across 32 partner colleges</span>
            <button type="submit" class="btn-glow px-8 py-3 rounded-xl font-bold text-xs flex items-center gap-2">
              <i data-lucide="check" class="w-4 h-4"></i>
              <span>Publish Internship</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  `;
}

function initCreateInternshipEvents() {
  if (window.lucide) window.lucide.createIcons();

  window.removeInternSkill = (skill) => {
    internSkills = internSkills.filter(s => s !== skill);
    renderInternTags();
  };

  function renderInternTags() {
    const container = document.getElementById('intern-tags-container');
    if (container) {
      container.innerHTML = internSkills.map(s => `
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-indigo-100 text-indigo-800 font-bold text-xs">
          ${s}
          <button type="button" onclick="removeInternSkill('${s}')" class="hover:text-rose-600">×</button>
        </span>
      `).join('');
    }
  }

  const addInput = document.getElementById('add-int-input');
  const addBtn = document.getElementById('add-int-btn');

  const addSkill = () => {
    const val = addInput?.value.trim();
    if (val && !internSkills.includes(val)) {
      internSkills.push(val);
      addInput.value = '';
      renderInternTags();
    }
  };

  addBtn?.addEventListener('click', addSkill);
  addInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  });

  document.getElementById('create-intern-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('int-title').value;
    const duration = document.getElementById('int-dur').value;
    const workMode = document.getElementById('int-mode').value;
    const location = document.getElementById('int-loc').value;
    const stipend = document.getElementById('int-stipend').value;
    const description = document.getElementById('int-desc').value;
    const deadline = document.getElementById('int-deadline').value;

    store.createInternship({
      title,
      duration,
      workMode,
      location,
      stipend,
      description,
      requiredSkills: [...internSkills],
      deadline
    });

    showToast('Internship Published Successfully!', `${title} is now open for campus applications.`, 'success');
    window.location.hash = '#/company/dashboard';
  });
}
