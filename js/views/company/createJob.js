/**
 * Recruiter Create Job View
 * Comprehensive multi-field wizard with dynamic skill tag selection & instant posting
 */

import { store } from '../../store.js';
import { showToast } from '../../components/ui.js';

let selectedRequiredSkills = ['React', 'JavaScript', 'TypeScript'];
let selectedPreferredSkills = ['Tailwind CSS', 'Next.js'];

export function renderCompanyCreateJob() {
  setTimeout(() => initCreateJobEvents(), 10);

  return `
    <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Post New Full-Time Job</h1>
          <p class="text-xs text-slate-500 mt-1">Publish engineering or product roles across all connected partner college campuses</p>
        </div>
        <a href="#/company/dashboard" class="text-xs font-bold text-slate-500 hover:text-slate-800 flex items-center gap-1 self-start sm:self-auto">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
          <span>Back to Dashboard</span>
        </a>
      </div>

      <!-- Job Creation Form -->
      <div class="glass-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
        <form id="create-job-form" class="space-y-5 text-xs">
          
          <!-- Basic Info -->
          <div>
            <label class="block font-bold text-slate-700 mb-1">Job Title *</label>
            <input type="text" id="job-title" required placeholder="e.g. Senior Frontend Engineer, Cloud Systems Developer" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Job Type *</label>
              <select id="job-type" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                <option value="Full-Time" selected>Full-Time</option>
                <option value="Contract">Contract</option>
                <option value="Part-Time">Part-Time</option>
              </select>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Work Mode *</label>
              <select id="job-mode" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                <option value="Hybrid" selected>Hybrid</option>
                <option value="Remote">Remote</option>
                <option value="On-site">On-site</option>
              </select>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Office Location *</label>
              <input type="text" id="job-loc" value="Bangalore, India" required class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Experience Required *</label>
              <input type="text" id="job-exp" value="0 - 2 Years (Freshers Welcome)" required class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Salary Range / CTC *</label>
              <input type="text" id="job-salary" value="₹10 - ₹15 LPA" required class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>
          </div>

          <!-- Description -->
          <div>
            <label class="block font-bold text-slate-700 mb-1">Job Description & Responsibilities *</label>
            <textarea rows="4" id="job-desc" required placeholder="Outline key engineering goals, day-to-day work, and tech stack expectations..." class="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none">We are looking for an ambitious engineer to design high-velocity UI architectures, collaborate with full-stack teams, and create seamless digital products for thousands of global users.</textarea>
          </div>

          <!-- Required Skills Interactive Tag Box -->
          <div>
            <label class="block font-bold text-slate-700 mb-1">Required Skills (Mandatory for AI Matching)</label>
            <div class="p-3 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
              <div class="flex flex-wrap gap-1.5" id="required-tags-container">
                ${selectedRequiredSkills.map(s => `
                  <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-100 text-cyan-800 font-bold text-xs">
                    ${s}
                    <button type="button" onclick="removeReqSkill('${s}')" class="hover:text-rose-600">×</button>
                  </span>
                `).join('')}
              </div>
              <div class="flex gap-2 pt-1">
                <input type="text" id="add-req-input" placeholder="Type a skill and press Enter or Add..." class="flex-1 px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs" />
                <button type="button" id="add-req-btn" class="px-3 py-1.5 bg-slate-200 hover:bg-slate-300 rounded-lg font-bold text-xs">Add</button>
              </div>
            </div>
          </div>

          <!-- Education & Deadline -->
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Education Requirements</label>
              <input type="text" id="job-edu" value="B.Tech / B.E. / MCA in CS, IT or equivalent" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Application Deadline *</label>
              <input type="date" id="job-deadline" value="2026-11-30" required class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>
          </div>

          <div class="pt-4 border-t border-slate-100 flex items-center justify-between">
            <span class="text-slate-400 text-[11px]">AI Candidate Matching activates automatically upon publishing</span>
            <button type="submit" class="btn-glow px-8 py-3 rounded-xl font-bold text-xs flex items-center gap-2">
              <i data-lucide="check" class="w-4 h-4"></i>
              <span>Publish Job</span>
            </button>
          </div>

        </form>
      </div>

    </div>
  `;
}

function initCreateJobEvents() {
  if (window.lucide) window.lucide.createIcons();

  window.removeReqSkill = (skill) => {
    selectedRequiredSkills = selectedRequiredSkills.filter(s => s !== skill);
    renderSkillTags();
  };

  function renderSkillTags() {
    const container = document.getElementById('required-tags-container');
    if (container) {
      container.innerHTML = selectedRequiredSkills.map(s => `
        <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-cyan-100 text-cyan-800 font-bold text-xs">
          ${s}
          <button type="button" onclick="removeReqSkill('${s}')" class="hover:text-rose-600">×</button>
        </span>
      `).join('');
    }
  }

  const addInput = document.getElementById('add-req-input');
  const addBtn = document.getElementById('add-req-btn');

  const addSkill = () => {
    const val = addInput?.value.trim();
    if (val && !selectedRequiredSkills.includes(val)) {
      selectedRequiredSkills.push(val);
      addInput.value = '';
      renderSkillTags();
    }
  };

  addBtn?.addEventListener('click', addSkill);
  addInput?.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      addSkill();
    }
  });

  document.getElementById('create-job-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const title = document.getElementById('job-title').value;
    const type = document.getElementById('job-type').value;
    const workMode = document.getElementById('job-mode').value;
    const location = document.getElementById('job-loc').value;
    const experience = document.getElementById('job-exp').value;
    const salary = document.getElementById('job-salary').value;
    const description = document.getElementById('job-desc').value;
    const education = document.getElementById('job-edu').value;
    const deadline = document.getElementById('job-deadline').value;

    store.createJob({
      title,
      type,
      workMode,
      location,
      experience,
      salary,
      description,
      requiredSkills: [...selectedRequiredSkills],
      preferredSkills: ['Git', 'Testing'],
      education,
      deadline
    });

    showToast('Job Published Successfully!', `${title} is now visible to eligible students.`, 'success');
    window.location.hash = '#/company/candidates';
  });
}
