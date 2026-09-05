/**
 * College Industry Connections & Corporate Partnerships View
 * Displays active recruiting partners, open campus roles, and partnership invites
 */

import { store } from '../../store.js';
import { showToast, showModal, closeModal } from '../../components/ui.js';

export function renderCollegeIndustry() {
  const data = store.get();
  const connections = data.industryConnections || [];

  setTimeout(() => initIndustryEvents(), 10);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-2xl font-black text-slate-900">Industry & Corporate Connections</h1>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
              32 Enterprise Partners
            </span>
          </div>
          <p class="text-xs text-slate-500 mt-1">Direct recruitment pipelines with top tech corporations and emerging startups</p>
        </div>

        <button id="invite-company-btn" class="btn-glow px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start sm:self-auto">
          <i data-lucide="building-2" class="w-4 h-4"></i>
          <span>Invite Hiring Partner</span>
        </button>
      </div>

      <!-- Partner Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6" id="connections-grid">
        ${connections.map(comp => `
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group">
            <div>
              <div class="flex items-start justify-between gap-4 mb-4">
                <div class="flex items-center gap-3.5">
                  <img src="${comp.logo}" class="w-12 h-12 rounded-xl object-cover ring-1 ring-slate-100 shadow-sm" />
                  <div>
                    <h3 class="text-base font-bold text-slate-900 group-hover:text-purple-600 transition-colors">${comp.name}</h3>
                    <p class="text-xs text-slate-500">${comp.industry}</p>
                    <p class="text-[11px] text-purple-700 font-semibold">${comp.pocEmail}</p>
                  </div>
                </div>

                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${comp.connectionStatus === 'Connected' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'}">
                  ${comp.connectionStatus}
                </span>
              </div>

              <!-- Metrics -->
              <div class="grid grid-cols-3 gap-2 my-4 p-3 bg-slate-50 rounded-xl border border-slate-100 text-center text-xs">
                <div>
                  <span class="text-[10px] text-slate-400 block uppercase font-medium">Open Jobs</span>
                  <strong class="text-slate-800 text-sm font-black">${comp.openJobs}</strong>
                </div>
                <div>
                  <span class="text-[10px] text-slate-400 block uppercase font-medium">Internships</span>
                  <strong class="text-indigo-600 text-sm font-black">${comp.openInternships}</strong>
                </div>
                <div>
                  <span class="text-[10px] text-slate-400 block uppercase font-medium">Drive Status</span>
                  <span class="text-[11px] font-bold text-slate-700 block mt-0.5 truncate">${comp.hiringStatus}</span>
                </div>
              </div>
            </div>

            <!-- Action Bar -->
            <div class="pt-3 border-t border-slate-100 flex items-center justify-between gap-3 text-xs">
              <button class="view-comp-btn px-3.5 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors" data-name="${comp.name}">
                View Company
              </button>

              ${comp.connectionStatus === 'Connected' ? `
                <span class="text-emerald-600 font-bold flex items-center gap-1">
                  <i data-lucide="check-circle" class="w-4 h-4"></i> Connected
                </span>
              ` : `
                <button class="connect-comp-btn btn-glow px-4 py-1.5 font-bold rounded-lg" data-id="${comp.id}">
                  Connect
                </button>
              `}
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}

function initIndustryEvents() {
  if (window.lucide) window.lucide.createIcons();

  document.querySelectorAll('.view-comp-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const name = e.currentTarget.dataset.name;
      alert(`Demo: Viewing recruitment profile and MOU terms for ${name}.`);
    });
  });

  document.querySelectorAll('.connect-comp-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = e.currentTarget.dataset.id;
      store.connectWithCompany(id);
      showToast('Partner Connected!', 'Direct student recruitment pipeline established.', 'success');
      window.dispatchEvent(new Event('hashchange'));
    });
  });

  document.getElementById('invite-company-btn')?.addEventListener('click', () => {
    const modalHtml = `
      <form id="invite-partner-form" class="space-y-3.5 text-xs">
        <div>
          <label class="block font-bold text-slate-700 mb-1">Company Name *</label>
          <input type="text" id="inv-name" required placeholder="e.g. Google, Microsoft, Adobe" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
        </div>
        <div>
          <label class="block font-bold text-slate-700 mb-1">Recruiter / HR Email *</label>
          <input type="email" id="inv-email" required placeholder="recruiter@company.com" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
        </div>
        <div>
          <label class="block font-bold text-slate-700 mb-1">Invitation Message</label>
          <textarea rows="3" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none">We would love to invite your talent team to our campus career ecosystem for direct batch placements.</textarea>
        </div>
      </form>
    `;

    showModal('Invite Industry Hiring Partner', modalHtml, `
      <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl text-xs">Cancel</button>
      <button type="button" id="inv-submit" class="btn-glow px-4 py-2 font-bold text-xs rounded-xl">Send Official Invitation</button>
    `);

    document.getElementById('inv-submit')?.addEventListener('click', () => {
      closeModal();
      showToast('Invitation Dispatched!', 'Campus recruitment link sent to recruiter.', 'success');
    });
  });
}
