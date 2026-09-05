/**
 * College Profile View
 */

import { store } from '../../store.js';
import { showToast } from '../../components/ui.js';

export function renderCollegeProfile() {
  const data = store.get();
  const stats = data.collegeStats;

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
    document.getElementById('college-profile-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('Profile Saved', 'Institutional information updated successfully.', 'success');
    });
  }, 10);

  return `
    <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
      
      <!-- Top Card -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex items-center gap-4">
        <div class="w-16 h-16 rounded-2xl bg-purple-600 text-white flex items-center justify-center font-black text-2xl shadow-md shadow-purple-600/20">
          A
        </div>
        <div>
          <h1 class="text-xl font-black text-slate-900">${stats.name}</h1>
          <p class="text-xs text-slate-500">Autonomous Engineering & Technology Campus · NAAC A++ Accredited</p>
          <div class="flex items-center gap-2 mt-2">
            <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
              Approved Campus Node
            </span>
            <span class="text-xs text-slate-400">Bangalore, Karnataka</span>
          </div>
        </div>
      </div>

      <!-- Details Form -->
      <div class="glass-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
        <h3 class="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">Institutional Administrative Details</h3>

        <form id="college-profile-form" class="space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Campus Name</label>
              <input type="text" value="${stats.name}" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Placement Cell Official Email</label>
              <input type="email" value="${stats.adminEmail}" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Dean / Head of Placements</label>
              <input type="text" value="${stats.adminName}" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Active Batches</label>
              <input type="text" value="2025, 2026, 2027 Graduating Cohorts" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:outline-none" />
            </div>
          </div>

          <div class="pt-4 flex justify-end">
            <button type="submit" class="btn-glow px-6 py-2.5 rounded-xl font-bold">
              Save Institutional Updates
            </button>
          </div>
        </form>
      </div>

    </div>
  `;
}
