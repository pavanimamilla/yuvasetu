/**
 * College Institutional Skill Analytics View
 * Interactive charts covering most in-demand skills, campus skill distribution & emerging trends
 */

import { store } from '../../store.js';
import { createBarChart, createRadarChart, createDoughnutChart } from '../../components/charts.js';

export function renderCollegeAnalytics() {
  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();

    // 1. Most In-Demand vs Student Proficiency Bar Chart
    createBarChart(
      'skills-demand-canvas',
      ['React', 'Python', 'SQL', 'Node.js', 'AWS Cloud', 'Docker', 'TypeScript'],
      [88, 72, 65, 42, 38, 30, 45],
      'Student Mastery Rate (%)',
      ['#4f46e5', '#6366f1', '#06b6d4', '#f59e0b', '#ef4444', '#ec4899', '#8b5cf6']
    );

    // 2. Departmental Competency Radar
    createRadarChart(
      'dept-radar-canvas',
      ['Frontend', 'Backend & APIs', 'Data & AI', 'Cloud & DevOps', 'Problem Solving'],
      [82, 64, 76, 52, 70],
      'Campus Competency Average'
    );

    // 3. Emerging Technologies Doughnut
    createDoughnutChart(
      'emerging-tech-canvas',
      ['Generative AI / LLMs (42%)', 'Micro-frontends (24%)', 'Kubernetes (18%)', 'Rust / WebAssembly (16%)'],
      [42, 24, 18, 16],
      ['#6366f1', '#06b6d4', '#10b981', '#f59e0b']
    );
  }, 20);

  const topSkills = [
    { name: 'JavaScript / React', studentCount: 1420, avgProficiency: 82, trend: '+14%' },
    { name: 'Python & Data Structures', studentCount: 1250, avgProficiency: 74, trend: '+8%' },
    { name: 'SQL & Database Design', studentCount: 980, avgProficiency: 68, trend: '+5%' },
    { name: 'Git & Version Control', studentCount: 1650, avgProficiency: 85, trend: '+20%' },
    { name: 'Node.js / Express', studentCount: 520, avgProficiency: 45, trend: '-2% (Gap Alert)' },
    { name: 'Cloud & Docker DevOps', studentCount: 380, avgProficiency: 39, trend: '+2% (High Gap)' }
  ];

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-2xl font-black text-slate-900">Institutional Skill Analytics</h1>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-700 border border-purple-200">
              Campus Intelligence
            </span>
          </div>
          <p class="text-xs text-slate-500 mt-1">Cross-analyzing student competencies against real-time industry recruitment requirements</p>
        </div>

        <a href="#/college/skill-gaps" class="btn-glow px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
          <span>View Detected Gaps</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>

      <!-- Top Row Charts -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        <!-- Bar Chart: Mastery across High Demand Skills -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm lg:col-span-2 flex flex-col justify-between">
          <div class="mb-4">
            <h3 class="text-sm font-bold text-slate-800">Student Mastery in High-Demand Industry Skills</h3>
            <p class="text-xs text-slate-400">Comparing current student proficiency with recruiter demand benchmarks</p>
          </div>

          <div class="h-64 w-full relative">
            <canvas id="skills-demand-canvas"></canvas>
          </div>
        </div>

        <!-- Doughnut: Emerging Tech Interest -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
          <div>
            <h3 class="text-sm font-bold text-slate-800 mb-1">Emerging Tech Adoption</h3>
            <p class="text-xs text-slate-400 mb-4">Student elective & project focus areas</p>

            <div class="h-48 w-full relative">
              <canvas id="emerging-tech-canvas"></canvas>
            </div>
          </div>

          <p class="text-[11px] text-slate-400 text-center mt-3">Source: Student hackathon submissions & projects</p>
        </div>

      </div>

      <!-- Radar & Top Skills Row -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        <!-- Radar Chart: Overall Campus Domain Balance -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div class="mb-4">
            <h3 class="text-sm font-bold text-slate-800">Campus Domain Competency Radar</h3>
            <p class="text-xs text-slate-400">Institutional baseline across 5 key engineering verticals</p>
          </div>

          <div class="h-64 w-full relative">
            <canvas id="dept-radar-canvas"></canvas>
          </div>
        </div>

        <!-- Top Skills Among Students -->
        <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div class="flex items-center justify-between mb-4">
            <div>
              <h3 class="text-sm font-bold text-slate-800">Top Skills Among Students</h3>
              <p class="text-xs text-slate-400">Aggregate verified competencies across all batches</p>
            </div>
            <span class="text-xs font-bold text-purple-600">1,820 Evaluated</span>
          </div>

          <div class="divide-y divide-slate-100">
            ${topSkills.map(item => `
              <div class="py-3 flex items-center justify-between gap-3 text-xs">
                <div>
                  <h4 class="font-bold text-slate-900">${item.name}</h4>
                  <p class="text-[11px] text-slate-400">${item.studentCount} Students Verified · Avg: ${item.avgProficiency}%</p>
                </div>
                <div class="text-right">
                  <span class="text-[11px] font-bold ${item.trend.includes('Gap') ? 'text-rose-600' : 'text-emerald-600'}">
                    ${item.trend}
                  </span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

      </div>

    </div>
  `;
}
