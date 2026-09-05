/**
 * Student Internships Directory View
 * Search, filter by mode/role/duration, and 1-click apply with modal and state updates
 */

import { store } from '../../store.js';
import { showToast, showModal, closeModal, renderBadge } from '../../components/ui.js';

export function renderStudentInternships() {
  const data = store.get();
  const internships = data.internships || [];
  const applications = data.applications || [];

  setTimeout(() => initInternshipEvents(), 10);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Internships & Campus Openings</h1>
          <p class="text-xs text-slate-500 mt-1">Discover verified engineering and design internships matched to your AI skill profile</p>
        </div>
        <a href="#/student/applications" class="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl transition-colors border border-slate-200 flex items-center gap-2 self-start sm:self-auto">
          <i data-lucide="send" class="w-4 h-4 text-indigo-600"></i>
          <span>Track My Applications (${applications.length})</span>
        </a>
      </div>

      <!-- Filters Bar -->
      <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          
          <!-- Search -->
          <div class="relative sm:col-span-2">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
            <input type="text" id="int-search" placeholder="Search internships, companies or skills..." class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
          </div>

          <!-- Work Mode Filter -->
          <div>
            <select id="int-mode" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              <option value="All">All Work Modes</option>
              <option value="Remote">Remote</option>
              <option value="Hybrid">Hybrid</option>
              <option value="On-site">On-site</option>
            </select>
          </div>

          <!-- Duration Filter -->
          <div>
            <select id="int-duration" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              <option value="All">Any Duration</option>
              <option value="3 Months">3 Months</option>
              <option value="4 Months">4 Months</option>
              <option value="6 Months">6 Months</option>
            </select>
          </div>

        </div>
      </div>

      <!-- Internships List -->
      <div id="internships-list" class="space-y-4">
        ${renderInternshipCards(internships, applications)}
      </div>

    </div>
  `;
}

function renderInternshipCards(internships, applications) {
  if (!internships.length) {
    return `
      <div class="py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
        <i data-lucide="search-x" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
        <p class="text-sm font-semibold">No internships found matching your filter criteria.</p>
      </div>
    `;
  }

  return internships.map(item => {
    const hasApplied = applications.some(a => a.opportunityId === item.id);
    const matchScore = item.title.includes('Frontend') ? 92 : item.title.includes('Full Stack') ? 85 : 79;

    return `
      <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6" data-id="${item.id}" data-mode="${item.workMode}" data-duration="${item.duration}" data-title="${item.title.toLowerCase()}" data-company="${item.company.toLowerCase()}">
        
        <div class="flex items-start gap-4">
          <img src="${item.logo || 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=100&auto=format&fit=crop&q=80'}" class="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-100 shrink-0" />
          
          <div class="space-y-1.5">
            <div class="flex flex-wrap items-center gap-2">
              <h3 class="text-base font-bold text-slate-900">${item.title}</h3>
              ${item.featured ? '<span class="px-2 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">Featured</span>' : ''}
              <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                ${matchScore}% Match
              </span>
            </div>

            <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500">
              <span class="font-bold text-slate-700">${item.company}</span>
              <span>·</span>
              <span class="flex items-center gap-1"><i data-lucide="map-pin" class="w-3.5 h-3.5 text-slate-400"></i> ${item.location}</span>
              <span>·</span>
              <span class="flex items-center gap-1"><i data-lucide="clock" class="w-3.5 h-3.5 text-slate-400"></i> ${item.duration}</span>
              <span>·</span>
              <span class="font-semibold text-indigo-600">${item.stipend}</span>
            </div>

            <p class="text-xs text-slate-500 mt-2 max-w-2xl">${item.description}</p>

            <!-- Required Skills Chips -->
            <div class="flex flex-wrap items-center gap-1.5 pt-2">
              <span class="text-[11px] font-semibold text-slate-400 mr-1">Required:</span>
              ${item.requiredSkills.map(s => `
                <span class="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  ${s}
                </span>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- Action / Deadline -->
        <div class="flex md:flex-col items-center md:items-end justify-between gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
          <div class="text-right text-[11px] text-slate-400">
            <span>Deadline:</span>
            <div class="font-bold text-slate-700">${item.deadline}</div>
          </div>

          ${hasApplied ? `
            <button disabled class="px-4 py-2.5 bg-emerald-50 text-emerald-700 font-bold text-xs rounded-xl border border-emerald-200 flex items-center gap-1.5 cursor-not-allowed">
              <i data-lucide="check" class="w-3.5 h-3.5"></i>
              <span>Applied</span>
            </button>
          ` : `
            <button class="apply-internship-btn btn-glow px-5 py-2.5 text-xs font-bold rounded-xl flex items-center gap-1.5" data-id="${item.id}">
              <span>Apply Now</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          `}
        </div>

      </div>
    `;
  }).join('');
}

function initInternshipEvents() {
  if (window.lucide) window.lucide.createIcons();

  const search = document.getElementById('int-search');
  const mode = document.getElementById('int-mode');
  const duration = document.getElementById('int-duration');

  const filter = () => {
    const q = (search?.value || '').toLowerCase();
    const selMode = mode?.value || 'All';
    const selDur = duration?.value || 'All';

    const items = store.get().internships || [];
    const applications = store.get().applications || [];

    const filtered = items.filter(item => {
      const matchSearch = item.title.toLowerCase().includes(q) || item.company.toLowerCase().includes(q) || item.requiredSkills.some(s => s.toLowerCase().includes(q));
      const matchMode = selMode === 'All' || item.workMode === selMode;
      const matchDur = selDur === 'All' || item.duration === selDur;
      return matchSearch && matchMode && matchDur;
    });

    const listContainer = document.getElementById('internships-list');
    if (listContainer) {
      listContainer.innerHTML = renderInternshipCards(filtered, applications);
      if (window.lucide) window.lucide.createIcons();
      wireApplyButtons();
    }
  };

  search?.addEventListener('input', filter);
  mode?.addEventListener('change', filter);
  duration?.addEventListener('change', filter);

  function wireApplyButtons() {
    document.querySelectorAll('.apply-internship-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const opp = store.get().internships.find(i => i.id === id);
        if (!opp) return;

        const modalHtml = `
          <div class="space-y-4 text-xs">
            <div class="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200">
              <img src="${opp.logo}" class="w-10 h-10 rounded-lg object-cover" />
              <div>
                <h4 class="font-bold text-sm text-slate-800">${opp.title}</h4>
                <p class="text-slate-500">${opp.company} · ${opp.stipend}</p>
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Your Verified Profile</label>
              <div class="p-3 bg-indigo-50/50 rounded-xl border border-indigo-100 text-slate-600">
                <p class="font-bold text-indigo-900">${store.get().currentUser.name} (${store.get().currentUser.department})</p>
                <p class="text-[11px] text-slate-500 mt-1">AI Assessment Score: <strong>${store.get().assessmentResult.overallScore}/100</strong></p>
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Cover Note / Statement of Purpose (Optional)</label>
              <textarea rows="3" placeholder="Explain why you are excited for this internship role..." class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none"></textarea>
            </div>
          </div>
        `;

        const footerHtml = `
          <button type="button" id="apply-cancel" class="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl text-xs">Cancel</button>
          <button type="button" id="apply-confirm" class="btn-glow px-4 py-2 font-bold text-xs rounded-xl">Submit Application</button>
        `;

        showModal(`Apply to ${opp.company}`, modalHtml, footerHtml);

        document.getElementById('apply-cancel')?.addEventListener('click', closeModal);
        document.getElementById('apply-confirm')?.addEventListener('click', () => {
          store.applyToOpportunity(opp, 'Internship');
          closeModal();
          showToast('Application Submitted!', `Your application for ${opp.title} was delivered to ${opp.company}.`, 'success');
          filter();
        });
      });
    });
  }

  wireApplyButtons();
}
