/**
 * Recruiter Required Skills Benchmark Configurator
 * Define Required, Important, and Preferred skills for standardized hiring profiles
 */

import { store } from '../../store.js';
import { showToast, showModal, closeModal } from '../../components/ui.js';

export function renderCompanyRequiredSkills() {
  const data = store.get();
  const benchmarks = data.roleRequirements || [];

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
  }, 10);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Required Skills for Roles</h1>
          <p class="text-xs text-slate-500 mt-1">Configure skill importance benchmarks used by the AI candidate matching engine</p>
        </div>

        <button onclick="alert('Demo: Added new benchmark role template');" class="btn-glow px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 self-start sm:self-auto">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Add Role Benchmark</span>
        </button>
      </div>

      <!-- Role Benchmark Cards -->
      <div class="space-y-6">
        ${benchmarks.map(item => `
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-slate-100">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 flex items-center justify-center font-black">
                  <i data-lucide="sliders" class="w-5 h-5"></i>
                </div>
                <div>
                  <h3 class="text-base font-bold text-slate-900">${item.role}</h3>
                  <span class="text-[11px] text-slate-400">Weighted AI Match Model Active</span>
                </div>
              </div>

              <span class="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                ${item.required.length + item.important.length + item.preferred.length} Parameters
              </span>
            </div>

            <!-- Tiered Skills Grid -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              
              <!-- Required -->
              <div class="p-4 rounded-xl bg-rose-50/50 border border-rose-100">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-rose-800 font-extrabold uppercase text-[11px] flex items-center gap-1">
                    <i data-lucide="shield-alert" class="w-3.5 h-3.5 text-rose-600"></i>
                    <span>Required (50% Weight)</span>
                  </span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${item.required.map(s => `
                    <span class="px-2 py-1 rounded-md text-xs font-bold bg-white text-rose-800 border border-rose-200 shadow-xs">
                      ${s}
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Important -->
              <div class="p-4 rounded-xl bg-amber-50/50 border border-amber-100">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-amber-800 font-extrabold uppercase text-[11px] flex items-center gap-1">
                    <i data-lucide="alert-circle" class="w-3.5 h-3.5 text-amber-600"></i>
                    <span>Important (30% Weight)</span>
                  </span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${item.important.map(s => `
                    <span class="px-2 py-1 rounded-md text-xs font-bold bg-white text-amber-800 border border-amber-200 shadow-xs">
                      ${s}
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Preferred -->
              <div class="p-4 rounded-xl bg-indigo-50/50 border border-indigo-100">
                <div class="flex items-center justify-between mb-2">
                  <span class="text-indigo-800 font-extrabold uppercase text-[11px] flex items-center gap-1">
                    <i data-lucide="sparkles" class="w-3.5 h-3.5 text-indigo-600"></i>
                    <span>Preferred (20% Weight)</span>
                  </span>
                </div>
                <div class="flex flex-wrap gap-1.5">
                  ${item.preferred.map(s => `
                    <span class="px-2 py-1 rounded-md text-xs font-bold bg-white text-indigo-800 border border-indigo-200 shadow-xs">
                      ${s}
                    </span>
                  `).join('')}
                </div>
              </div>

            </div>

            <!-- Card footer actions -->
            <div class="pt-2 flex justify-end gap-2">
              <button onclick="alert('Benchmark weights updated successfully!');" class="px-3.5 py-1.5 text-xs font-bold text-cyan-700 hover:bg-cyan-50 rounded-lg transition-colors border border-cyan-200">
                Re-calibrate Weights
              </button>
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}
