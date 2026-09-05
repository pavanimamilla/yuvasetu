/**
 * Recruiter AI Candidate Matching View
 * Deep ranking of campus talent with circular match indicators, skill overlap & 1-click shortlist
 */

import { store } from '../../store.js';
import { renderCircularProgress, showModal, closeModal, showToast, renderBadge } from '../../components/ui.js';

export function renderCompanyCandidateMatching() {
  const data = store.get();
  const candidates = data.recruiterCandidates || [];

  setTimeout(() => initCandidateEvents(), 10);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-2xl font-black text-slate-900">AI Candidate Matching</h1>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
              Neural Match Engine
            </span>
          </div>
          <p class="text-xs text-slate-500 mt-1">Autonomous candidate ranking scoring student skill graphs against published job benchmarks</p>
        </div>

        <a href="#/company/applications" class="px-4 py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 text-xs font-bold rounded-xl transition-colors border border-slate-200 flex items-center gap-2 self-start sm:self-auto">
          <i data-lucide="inbox" class="w-4 h-4 text-cyan-600"></i>
          <span>Applications Kanban</span>
        </a>
      </div>

      <!-- Filters & Sorting Bar -->
      <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          
          <!-- Search -->
          <div>
            <div class="relative">
              <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="text" id="cand-search" placeholder="Search candidate name or skill..." class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>
          </div>

          <!-- Role Filter -->
          <div>
            <select id="cand-role" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none">
              <option value="All">All Job Roles</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Full Stack Developer">Full Stack Developer</option>
              <option value="AI/ML Engineer">AI/ML Engineer</option>
            </select>
          </div>

          <!-- Match Score Filter -->
          <div>
            <select id="cand-score" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none">
              <option value="All">Any Match Score</option>
              <option value="90">90%+ Elite Match</option>
              <option value="80">80%+ Strong Match</option>
              <option value="70">70%+ Qualified</option>
            </select>
          </div>

          <!-- Status Filter -->
          <div>
            <select id="cand-status" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none">
              <option value="All">All Pipeline Stages</option>
              <option value="New">New</option>
              <option value="Shortlisted">Shortlisted</option>
              <option value="Interview">Interview</option>
            </select>
          </div>

        </div>
      </div>

      <!-- Candidate Cards Grid -->
      <div id="candidates-grid" class="space-y-4">
        ${renderCandidateCards(candidates)}
      </div>

    </div>
  `;
}

function renderCandidateCards(candidates) {
  if (!candidates.length) {
    return `
      <div class="py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
        <i data-lucide="users" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
        <p class="text-sm font-semibold">No candidates match the specified filter criteria.</p>
      </div>
    `;
  }

  return candidates.map(c => `
    <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col lg:flex-row lg:items-center justify-between gap-6 group">
      
      <!-- Left: Match Circle + Profile Details -->
      <div class="flex items-start sm:items-center gap-5">
        <div class="shrink-0">
          ${renderCircularProgress(c.matchScore, 86, 8, c.matchScore >= 90 ? '#10b981' : '#06b6d4')}
        </div>

        <div class="space-y-2">
          <div class="flex flex-wrap items-center gap-2">
            <h3 class="text-base font-bold text-slate-900 group-hover:text-cyan-600 transition-colors">${c.name}</h3>
            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600">${c.role}</span>
            <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold ${c.status === 'Shortlisted' ? 'bg-emerald-50 text-emerald-700' : c.status === 'Interview' ? 'bg-purple-50 text-purple-700' : 'bg-slate-100 text-slate-600'}">
              ${c.status}
            </span>
          </div>

          <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <span class="font-bold text-slate-700">${c.college}</span>
            <span>·</span>
            <span>${c.education}</span>
            <span>·</span>
            <span>Exp: <strong class="text-slate-800">${c.experience}</strong></span>
            <span>·</span>
            <span>Assessment: <strong class="text-indigo-600 font-bold">${c.assessmentScore}%</strong></span>
          </div>

          <!-- Matching vs Missing Skills -->
          <div class="flex flex-wrap items-center gap-4 text-xs pt-1">
            <div class="flex items-center gap-1.5">
              <span class="text-[11px] font-semibold text-slate-400">Matching:</span>
              ${c.matchingSkills.map(s => `
                <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ${s}
                </span>
              `).join('')}
            </div>

            ${c.missingSkills?.length ? `
              <div class="flex items-center gap-1.5">
                <span class="text-[11px] font-semibold text-slate-400">Missing:</span>
                ${c.missingSkills.map(s => `
                  <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-rose-50 text-rose-700 border border-rose-200">
                    ${s}
                  </span>
                `).join('')}
              </div>
            ` : ''}
          </div>
        </div>
      </div>

      <!-- Right: Action Buttons -->
      <div class="flex sm:flex-row lg:flex-col items-stretch sm:items-center lg:items-end justify-between gap-2.5 shrink-0 pt-4 lg:pt-0 border-t lg:border-t-0 border-slate-100">
        <div class="flex items-center gap-2">
          <button class="view-profile-btn px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs rounded-xl transition-colors" data-id="${c.id}">
            View Profile
          </button>

          ${c.status === 'Shortlisted' ? `
            <button class="advance-status-btn px-3.5 py-2 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs rounded-xl transition-colors shadow-sm" data-id="${c.id}" data-target="Interview">
              Schedule Interview
            </button>
          ` : `
            <button class="shortlist-btn btn-glow px-4 py-2 font-bold text-xs rounded-xl" data-id="${c.id}">
              Shortlist
            </button>
          `}
        </div>

        <button class="contact-cand-btn text-xs font-semibold text-cyan-700 hover:underline text-right" data-id="${c.id}">
          Send Direct Message →
        </button>
      </div>

    </div>
  `).join('');
}

function initCandidateEvents() {
  if (window.lucide) window.lucide.createIcons();

  const search = document.getElementById('cand-search');
  const role = document.getElementById('cand-role');
  const score = document.getElementById('cand-score');
  const status = document.getElementById('cand-status');

  const filter = () => {
    const q = (search?.value || '').toLowerCase();
    const selRole = role?.value || 'All';
    const selScore = score?.value || 'All';
    const selStatus = status?.value || 'All';

    const candidates = store.get().recruiterCandidates || [];

    const filtered = candidates.filter(c => {
      const matchSearch = c.name.toLowerCase().includes(q) || c.matchingSkills.some(s => s.toLowerCase().includes(q));
      const matchRole = selRole === 'All' || c.role === selRole;
      const matchScore = selScore === 'All' || c.matchScore >= parseInt(selScore, 10);
      const matchStatus = selStatus === 'All' || c.status === selStatus;
      return matchSearch && matchRole && matchScore && matchStatus;
    });

    const grid = document.getElementById('candidates-grid');
    if (grid) {
      grid.innerHTML = renderCandidateCards(filtered);
      if (window.lucide) window.lucide.createIcons();
      wireCandidateButtons();
    }
  };

  search?.addEventListener('input', filter);
  role?.addEventListener('change', filter);
  score?.addEventListener('change', filter);
  status?.addEventListener('change', filter);

  function wireCandidateButtons() {
    // Shortlist button
    document.querySelectorAll('.shortlist-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        store.updateCandidateStatus(id, 'Shortlisted');
        showToast('Candidate Shortlisted!', 'Candidate moved to screening pipeline.', 'success');
        filter();
      });
    });

    // Schedule Interview button
    document.querySelectorAll('.advance-status-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const target = e.currentTarget.dataset.target;
        store.updateCandidateStatus(id, target);
        showToast('Status Updated!', `Candidate moved to ${target} stage.`, 'success');
        filter();
      });
    });

    // View Profile Modal
    document.querySelectorAll('.view-profile-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const cand = store.get().recruiterCandidates.find(c => c.id === id);
        if (!cand) return;

        const modalHtml = `
          <div class="space-y-4 text-xs">
            <div class="flex items-center gap-4 p-3 bg-cyan-50/50 rounded-xl border border-cyan-100">
              <img src="${cand.avatar}" class="w-12 h-12 rounded-xl object-cover ring-1 ring-cyan-200" />
              <div>
                <h4 class="font-bold text-sm text-slate-900">${cand.name}</h4>
                <p class="text-slate-500">${cand.college} · ${cand.education}</p>
                <div class="flex items-center gap-2 mt-1">
                  <span class="text-emerald-700 font-extrabold">${cand.matchScore}% Role Match</span>
                  <span>·</span>
                  <span class="text-indigo-600 font-bold">Assessment: ${cand.assessmentScore}%</span>
                </div>
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Matching Technical Skills</label>
              <div class="flex flex-wrap gap-1.5">
                ${cand.matchingSkills.map(s => `
                  <span class="px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ${s}
                  </span>
                `).join('')}
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Recruiter Notes</label>
              <p class="p-3 bg-slate-50 rounded-xl border border-slate-100 text-slate-600">${cand.notes || 'Strong candidate with verified technical benchmark scores.'}</p>
            </div>
          </div>
        `;

        showModal(`Candidate Profile: ${cand.name}`, modalHtml, `
          <button type="button" onclick="closeModal()" class="px-4 py-2 font-bold text-slate-600 hover:bg-slate-100 rounded-xl text-xs">Close</button>
          <button type="button" onclick="alert('Demo: Opening candidate calendar'); closeModal();" class="btn-glow px-4 py-2 font-bold text-xs rounded-xl">Schedule Interview</button>
        `);
      });
    });

    // Contact button
    document.querySelectorAll('.contact-cand-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const cand = store.get().recruiterCandidates.find(c => c.id === id);
        alert(`Demo: Sent recruitment inquiry email to ${cand?.name}`);
      });
    });
  }

  wireCandidateButtons();
}
