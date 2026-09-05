/**
 * College Admin Dashboard Overview
 * Displays 2,450 total students, 1,820 assessed, 72% avg score, 840 gaps, 32 industry connections & analytics
 */

import { store } from '../../store.js';
import { renderStatCard } from '../../components/ui.js';
import { createBarChart, createDoughnutChart } from '../../components/charts.js';

export function renderCollegeDashboard() {
  const data = store.get();
  const stats = data.collegeStats;
  const training = data.trainingPrograms || [];
  const connections = data.industryConnections || [];

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();

    // Render department score chart
    const deptLabels = stats.departmentDistribution.map(d => d.name.replace(' & ', ' '));
    const deptScores = stats.departmentDistribution.map(d => d.avgScore);
    createBarChart('dept-scores-canvas', deptLabels, deptScores, 'Avg Skill Score (%)', ['#6366f1', '#a855f7', '#06b6d4', '#10b981']);

    // Render assessed ratio chart
    createDoughnutChart('assessed-ratio-canvas', ['Assessed (1,820)', 'Pending (630)'], [1820, 630], ['#4f46e5', '#cbd5e1']);
  }, 20);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Top Institutional Banner -->
      <div class="glass-card bg-gradient-to-r from-purple-950 via-indigo-950 to-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 rounded-2xl bg-purple-600/30 border border-purple-400/30 flex items-center justify-center text-purple-300 shadow-md">
              <i data-lucide="school" class="w-8 h-8"></i>
            </div>
            <div>
              <div class="flex items-center gap-2">
                <h1 class="text-2xl sm:text-3xl font-black tracking-tight text-white">College Admin Dashboard</h1>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-500/30 text-purple-200 border border-purple-400/30">
                  Institutional
                </span>
              </div>
              <p class="text-xs sm:text-sm text-purple-200 mt-1">
                <strong class="text-white">${stats.name}</strong> · Admin: ${stats.adminName}
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2.5">
            <a href="#/college/students" class="px-4 py-2.5 bg-white text-purple-900 hover:bg-purple-50 text-xs font-bold rounded-xl shadow-md transition-all flex items-center gap-2">
              <i data-lucide="users" class="w-4 h-4 text-purple-600"></i>
              <span>View All Students</span>
            </a>
            <a href="#/college/training" class="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl backdrop-blur-md transition-all flex items-center gap-2 border border-white/20">
              <i data-lucide="award" class="w-4 h-4"></i>
              <span>Training Programs</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Core Institutional Metrics -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        ${renderStatCard('Total Students', stats.totalStudents.toLocaleString(), 'Undergrad + Postgrad', 'users', '+120 This Batch', 'text-indigo-600')}
        ${renderStatCard('Students Assessed', stats.studentsAssessed.toLocaleString(), '74.2% completion rate', 'sparkles', '+18% MoM', 'text-purple-600')}
        ${renderStatCard('Average Skill Score', `${stats.averageSkillScore}%`, 'Campus-wide readiness', 'award', '+5% improvement', 'text-cyan-600')}
        ${renderStatCard('Students With Gaps', stats.studentsWithGaps.toLocaleString(), 'Need intervention', 'alert-triangle', 'High priority', 'text-amber-600')}
        ${renderStatCard('Industry Partners', stats.industryConnections, 'Active recruiters', 'building', '4 Campus drives', 'text-emerald-600')}
      </div>

      <!-- Charts Row -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Department Scores Bar Chart -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-2 flex flex-col justify-between">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-sm font-bold text-slate-800">Department-wise Average Skill Scores</h3>
              <p class="text-xs text-slate-400">Benchmarked against national engineering standards</p>
            </div>
            <a href="#/college/analytics" class="text-xs font-bold text-purple-600 hover:underline">Deep Analytics</a>
          </div>

          <div class="h-64 w-full relative">
            <canvas id="dept-scores-canvas"></canvas>
          </div>
        </div>

        <!-- Assessment Participation Doughnut -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 class="text-sm font-bold text-slate-800 mb-1">Assessment Completion</h3>
            <p class="text-xs text-slate-400 mb-4">Total campus students evaluated via AI</p>

            <div class="h-48 w-full relative">
              <canvas id="assessed-ratio-canvas"></canvas>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 text-center">
            <a href="#/college/skill-gaps" class="w-full py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 font-bold text-xs rounded-xl transition-colors block">
              Investigate Skill Gaps
            </a>
          </div>
        </div>

      </div>

      <!-- Active Training Programs & Campus Industry Connections -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- Active Training Programs -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-sm font-bold text-slate-800">Active Skill Training Programs</h3>
              <p class="text-xs text-slate-400">Institutional programs launched to bridge detected gaps</p>
            </div>
            <a href="#/college/training" class="text-xs font-bold text-purple-600 hover:underline">Manage All</a>
          </div>

          <div class="space-y-3">
            ${training.slice(0, 3).map(tp => `
              <div class="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3">
                <div>
                  <h4 class="text-xs font-bold text-slate-900">${tp.name}</h4>
                  <p class="text-[11px] text-slate-500">${tp.skill} · ${tp.trainer}</p>
                  <div class="text-[10px] text-purple-600 font-semibold mt-1">${tp.enrolled} / ${tp.capacity} Students Enrolled</div>
                </div>
                <span class="px-2.5 py-1 rounded-full text-[10px] font-bold ${tp.status === 'Active' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-slate-100 text-slate-600'}">
                  ${tp.status}
                </span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Connected Hiring Partners -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-sm font-bold text-slate-800">Corporate Hiring Partners</h3>
              <p class="text-xs text-slate-400">Companies actively posting jobs & internships on campus</p>
            </div>
            <a href="#/college/industry-connections" class="text-xs font-bold text-purple-600 hover:underline">View All (32)</a>
          </div>

          <div class="space-y-3">
            ${connections.slice(0, 3).map(conn => `
              <div class="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60 flex items-center justify-between gap-3">
                <div class="flex items-center gap-3">
                  <img src="${conn.logo}" class="w-9 h-9 rounded-lg object-cover ring-1 ring-slate-200" />
                  <div>
                    <h4 class="text-xs font-bold text-slate-900">${conn.name}</h4>
                    <p class="text-[11px] text-slate-500">${conn.industry}</p>
                  </div>
                </div>
                <div class="text-right">
                  <span class="text-[10px] font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded">${conn.openJobs + conn.openInternships} Campus Roles</span>
                  <span class="text-[10px] text-slate-400 block mt-0.5">${conn.hiringStatus}</span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
}
