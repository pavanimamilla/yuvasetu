/**
 * Student AI Skill Assessment Results View
 * Radar visualization of competencies, score breakdown, strong skills & improvement areas
 */

import { store } from '../../store.js';
import { createRadarChart } from '../../components/charts.js';
import { renderProgressBar } from '../../components/ui.js';

export function renderStudentAssessmentResult() {
  const data = store.get();
  const res = data.assessmentResult;

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
    // Render radar chart
    createRadarChart('assessment-radar-canvas', 
      ['Technical Skills', 'Problem Solving', 'Communication', 'Role Readiness'],
      [res.categories.technical, res.categories.problemSolving, res.categories.communication, res.categories.roleReadiness],
      'Proficiency Index'
    );
  }, 20);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Top Result Banner -->
      <div class="glass-card bg-gradient-to-r from-slate-900 via-indigo-950 to-purple-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-2">
              <i data-lucide="check-circle" class="w-3.5 h-3.5"></i> Assessment Completed Successfully
            </span>
            <h1 class="text-3xl font-black tracking-tight text-white">Your AI Assessment Results</h1>
            <p class="text-xs sm:text-sm text-slate-300 mt-1">Verified on ${res.date || 'Today'} · Benchmark: Software & Frontend Roles</p>
          </div>

          <div class="flex items-center gap-4 bg-white/10 p-4 rounded-2xl backdrop-blur-md border border-white/10">
            <div class="text-right">
              <span class="text-3xl sm:text-4xl font-black text-white">${res.overallScore}</span>
              <span class="text-xs text-indigo-200">/ 100</span>
              <div class="text-[10px] text-indigo-300 uppercase tracking-wider font-bold">Overall Score</div>
            </div>
            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <i data-lucide="award" class="w-6 h-6"></i>
            </div>
          </div>
        </div>
      </div>

      <!-- Charts & Breakdown Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- Competency Radar Chart -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 class="text-sm font-bold text-slate-800 mb-1">Competency Radar Diagnostic</h3>
            <p class="text-xs text-slate-400 mb-4">Multi-dimensional assessment across core software engineering domains</p>
            
            <div class="h-64 w-full relative">
              <canvas id="assessment-radar-canvas"></canvas>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-slate-100 text-center text-xs">
            <div class="p-2 bg-slate-50 rounded-xl">
              <span class="text-slate-400 text-[10px] block">Technical</span>
              <strong class="text-slate-800 font-extrabold text-sm">${res.categories.technical}%</strong>
            </div>
            <div class="p-2 bg-slate-50 rounded-xl">
              <span class="text-slate-400 text-[10px] block">Problem Solving</span>
              <strong class="text-slate-800 font-extrabold text-sm">${res.categories.problemSolving}%</strong>
            </div>
          </div>
        </div>

        <!-- Category Progress Bars & Detailed Metric -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm space-y-5">
          <div>
            <h3 class="text-sm font-bold text-slate-800 mb-1">Domain Score Breakdown</h3>
            <p class="text-xs text-slate-400">Detailed scoring across all test categories</p>
          </div>

          <div class="space-y-4">
            ${renderProgressBar(res.categories.technical, 'Technical Knowledge & Frameworks', 'bg-indigo-600')}
            ${renderProgressBar(res.categories.problemSolving, 'Data Structures & Algorithmic Logic', 'bg-purple-600')}
            ${renderProgressBar(res.categories.roleReadiness, 'Role Readiness & Git Workflow', 'bg-cyan-600')}
            ${renderProgressBar(res.categories.communication, 'Professional Communication & Teamwork', 'bg-emerald-600')}
          </div>

          <!-- Strong vs Skills to Improve -->
          <div class="pt-4 border-t border-slate-100 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div class="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-100">
              <div class="text-xs font-bold text-emerald-900 flex items-center gap-1.5 mb-2">
                <i data-lucide="thumbs-up" class="w-3.5 h-3.5 text-emerald-600"></i>
                <span>Strong Skills</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${res.strongSkills.map(s => `
                  <span class="px-2 py-0.5 rounded-md text-[11px] font-bold bg-white text-emerald-700 border border-emerald-200">
                    ${s}
                  </span>
                `).join('')}
              </div>
            </div>

            <div class="p-3.5 rounded-xl bg-rose-50/60 border border-rose-100">
              <div class="text-xs font-bold text-rose-900 flex items-center gap-1.5 mb-2">
                <i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-rose-600"></i>
                <span>Skills To Improve</span>
              </div>
              <div class="flex flex-wrap gap-1.5">
                ${res.skillsToImprove.map(s => `
                  <span class="px-2 py-0.5 rounded-md text-[11px] font-bold bg-white text-rose-700 border border-rose-200">
                    ${s}
                  </span>
                `).join('')}
              </div>
            </div>

          </div>
        </div>

      </div>

      <!-- Action Banner: Bridge Skill Gap -->
      <div class="bg-gradient-to-r from-indigo-50 via-purple-50 to-cyan-50 border border-indigo-100 p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div class="flex items-center gap-3.5">
          <div class="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-md">
            <i data-lucide="target" class="w-6 h-6"></i>
          </div>
          <div>
            <h4 class="text-sm font-bold text-slate-900">Ready to bridge your detected skill gaps?</h4>
            <p class="text-xs text-slate-600 mt-0.5">Explore your personalized step-by-step roadmap to become 100% role-ready.</p>
          </div>
        </div>

        <a href="#/student/skill-gap" class="btn-glow px-6 py-3 rounded-xl text-xs font-bold whitespace-nowrap flex items-center gap-2">
          <span>View My Skill Gap</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </a>
      </div>

    </div>
  `;
}
