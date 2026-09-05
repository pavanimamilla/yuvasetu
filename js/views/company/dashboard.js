/**
 * Recruiter / Company Dashboard Overview
 * Displays 12 Active Jobs, 8 Internships, 1,240 Applicants, 86 Shortlisted, 34 Interviews & Funnel analytics
 */

import { store } from '../../store.js';
import { renderStatCard } from '../../components/ui.js';
import { createBarChart, createDoughnutChart } from '../../components/charts.js';

export function renderCompanyDashboard() {
  const data = store.get();
  const profile = data.companyProfile;
  const stats = data.companyStats;
  const candidates = data.recruiterCandidates || [];

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();

    // 1. Hiring Funnel Bar Chart
    createBarChart(
      'hiring-funnel-canvas',
      ['Total Applicants', 'AI Screened', 'Shortlisted', 'Interviews', 'Offered'],
      [stats.totalApplicants, 620, stats.shortlisted, stats.interviews, 12],
      'Candidates in Pipeline',
      ['#6366f1', '#06b6d4', '#8b5cf6', '#f59e0b', '#10b981']
    );

    // 2. Role Demand Distribution Doughnut
    createDoughnutChart(
      'job-distribution-canvas',
      ['Frontend Eng (35%)', 'Full Stack (30%)', 'AI/ML (20%)', 'Backend (15%)'],
      [35, 30, 20, 15],
      ['#06b6d4', '#6366f1', '#8b5cf6', '#10b981']
    );
  }, 20);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Top Recruiter Hub Banner -->
      <div class="glass-card bg-gradient-to-r from-slate-950 via-cyan-950 to-indigo-950 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
        <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div class="flex items-center gap-4">
            <img src="${profile.logo}" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-cyan-500/30 shadow-md" />
            <div>
              <div class="flex items-center gap-2">
                <h1 class="text-2xl sm:text-3xl font-black tracking-tight text-white">Recruiter Dashboard</h1>
                <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-cyan-500/30 text-cyan-200 border border-cyan-400/30">
                  Talent Partner
                </span>
              </div>
              <p class="text-xs sm:text-sm text-cyan-200 mt-1">
                <strong class="text-white">${profile.name}</strong> · ${profile.industry}
              </p>
            </div>
          </div>

          <div class="flex flex-wrap gap-2.5">
            <a href="#/company/jobs/create" class="px-4 py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 text-xs font-black rounded-xl shadow-md transition-all flex items-center gap-2">
              <i data-lucide="plus" class="w-4 h-4"></i>
              <span>Post New Job</span>
            </a>
            <a href="#/company/candidates" class="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold rounded-xl backdrop-blur-md transition-all flex items-center gap-2 border border-white/20">
              <i data-lucide="cpu" class="w-4 h-4 text-cyan-400"></i>
              <span>AI Candidate Matching</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Core Recruiter Metrics -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        ${renderStatCard('Active Jobs', stats.activeJobs, 'Software, Cloud & AI', 'briefcase', '+2 New this week', 'text-cyan-600')}
        ${renderStatCard('Active Internships', stats.activeInternships, 'Campus batches 2026', 'compass', '3 High demand', 'text-indigo-600')}
        ${renderStatCard('Total Applicants', stats.totalApplicants.toLocaleString(), 'Verified campus talent', 'users', '+140 Last 7 days', 'text-purple-600')}
        ${renderStatCard('Shortlisted', stats.shortlisted, 'Match Score > 80%', 'check-circle-2', 'Screening stage', 'text-emerald-600')}
        ${renderStatCard('Interviews', stats.interviews, 'Technical & Managerial', 'calendar', '6 Scheduled today', 'text-amber-600')}
      </div>

      <!-- Analytics Row -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Funnel Bar Chart -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-2 flex flex-col justify-between">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-sm font-bold text-slate-800">Recruitment Funnel & Candidate Velocity</h3>
              <p class="text-xs text-slate-400">Tracking conversion from campus application to hire</p>
            </div>
            <a href="#/company/applications" class="text-xs font-bold text-cyan-600 hover:underline">Applications Kanban</a>
          </div>

          <div class="h-64 w-full relative">
            <canvas id="hiring-funnel-canvas"></canvas>
          </div>
        </div>

        <!-- Role Distribution Doughnut -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 class="text-sm font-bold text-slate-800 mb-1">Open Role Breakdown</h3>
            <p class="text-xs text-slate-400 mb-4">Distribution by engineering vertical</p>

            <div class="h-48 w-full relative">
              <canvas id="job-distribution-canvas"></canvas>
            </div>
          </div>

          <div class="mt-4 pt-3 border-t border-slate-100 text-center">
            <a href="#/company/required-skills" class="text-xs font-bold text-cyan-700 hover:underline">
              Configure Role Skills Benchmark →
            </a>
          </div>
        </div>

      </div>

      <!-- Top AI Candidate Matches Snippet -->
      <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div class="flex items-center justify-between mb-4">
          <div>
            <h3 class="text-sm font-bold text-slate-800">High-Match Candidate Recommendations</h3>
            <p class="text-xs text-slate-400">Students with highest verified assessment alignment for your active roles</p>
          </div>
          <a href="#/company/candidates" class="text-xs font-bold text-cyan-600 hover:underline">View All Candidates</a>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
          ${candidates.slice(0, 3).map(c => `
            <div class="p-4 rounded-xl border border-slate-100 bg-slate-50/60 flex flex-col justify-between">
              <div>
                <div class="flex items-start justify-between gap-2 mb-2">
                  <div class="flex items-center gap-2.5">
                    <img src="${c.avatar}" class="w-10 h-10 rounded-xl object-cover ring-1 ring-slate-200" />
                    <div>
                      <h4 class="text-xs font-bold text-slate-900">${c.name}</h4>
                      <p class="text-[10px] text-slate-400">${c.role}</p>
                    </div>
                  </div>
                  <span class="px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    ${c.matchScore}% Match
                  </span>
                </div>

                <p class="text-[11px] text-slate-500 mt-2">${c.college} · ${c.education}</p>

                <div class="flex flex-wrap gap-1 mt-2.5">
                  ${c.matchingSkills.slice(0, 3).map(sk => `
                    <span class="px-1.5 py-0.5 rounded text-[10px] font-medium bg-emerald-100/60 text-emerald-800">
                      ${sk}
                    </span>
                  `).join('')}
                </div>
              </div>

              <div class="mt-4 pt-3 border-t border-slate-200/60 flex items-center justify-between">
                <span class="text-[10px] font-semibold text-slate-400">Test: <strong>${c.assessmentScore}%</strong></span>
                <a href="#/company/candidates" class="text-xs font-bold text-cyan-600 hover:underline">Inspect Match</a>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}
