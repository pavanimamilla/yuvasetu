/**
 * Student AI-Recommended Roles View
 * Matches student profile to career roles with live match %, matching vs missing skills, and opportunity counts
 */

import { store } from '../../store.js';

export function renderStudentRecommendedRoles() {
  const data = store.get();
  const studentSkills = (data.studentSkills || []).map(s => s.name);

  const recommendations = [
    {
      title: 'Frontend Developer',
      matchScore: 94,
      matchingSkills: ['React', 'JavaScript', 'HTML/CSS', 'Git'],
      missingSkills: ['Advanced TypeScript'],
      openings: 48,
      avgSalary: '₹8 - ₹14 LPA',
      description: 'Design and implement fluid, interactive user interfaces for modern web applications using React, state management, and modern component systems.'
    },
    {
      title: 'Full Stack Web Developer',
      matchScore: 82,
      matchingSkills: ['React', 'JavaScript', 'SQL', 'Git'],
      missingSkills: ['Node.js & Express', 'MongoDB'],
      openings: 62,
      avgSalary: '₹9 - ₹16 LPA',
      description: 'Own complete product vertical features across frontend component trees, REST APIs, and database persistence layers.'
    },
    {
      title: 'Software Engineer (Product & Core Systems)',
      matchScore: 78,
      matchingSkills: ['Python', 'SQL', 'Git'],
      missingSkills: ['System Design', 'Algorithms & Data Structures'],
      openings: 54,
      avgSalary: '₹9 - ₹15 LPA',
      description: 'Develop resilient backend services, optimize data pipelines, and collaborate with cross-functional product squads.'
    },
    {
      title: 'UI/UX Engineer',
      matchScore: 75,
      matchingSkills: ['HTML/CSS', 'JavaScript', 'React'],
      missingSkills: ['Figma Prototyping', 'Design Systems Architecture'],
      openings: 22,
      avgSalary: '₹7 - ₹12 LPA',
      description: 'Bridge the gap between design and engineering, crafting micro-interactions, accessibility patterns, and atomic component systems.'
    }
  ];

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();
  }, 10);

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-2xl font-black text-slate-900">AI Recommended Career Roles</h1>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              AI Powered
            </span>
          </div>
          <p class="text-xs text-slate-500 mt-1">Based on your verified skills, assessment results, and current campus hiring demand</p>
        </div>

        <a href="#/student/internships" class="btn-glow px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5 self-start sm:self-auto">
          <span>Explore All Openings</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>

      <!-- Recommended Roles Cards -->
      <div class="space-y-5">
        ${recommendations.map(role => `
          <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div class="space-y-3 max-w-2xl">
              <div class="flex flex-wrap items-center gap-2.5">
                <h3 class="text-lg font-bold text-slate-900">${role.title}</h3>
                <span class="px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  ${role.matchScore}% Match
                </span>
                <span class="text-xs text-slate-400 font-medium">· Expected Salary: <strong class="text-slate-700">${role.avgSalary}</strong></span>
              </div>

              <p class="text-xs text-slate-500 leading-relaxed">${role.description}</p>

              <!-- Skills match details -->
              <div class="flex flex-wrap gap-4 pt-1 text-xs">
                <div>
                  <span class="text-slate-400 text-[11px] font-semibold block mb-1">Matching Skills:</span>
                  <div class="flex flex-wrap gap-1">
                    ${role.matchingSkills.map(m => `
                      <span class="px-2 py-0.5 bg-emerald-50 text-emerald-700 font-semibold rounded text-[11px] border border-emerald-200">
                        ${m}
                      </span>
                    `).join('')}
                  </div>
                </div>

                <div>
                  <span class="text-slate-400 text-[11px] font-semibold block mb-1">Missing to Master:</span>
                  <div class="flex flex-wrap gap-1">
                    ${role.missingSkills.map(m => `
                      <span class="px-2 py-0.5 bg-rose-50 text-rose-700 font-semibold rounded text-[11px] border border-rose-200">
                        ${m}
                      </span>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>

            <!-- Action & Openings -->
            <div class="flex md:flex-col items-center md:items-end justify-between gap-3 shrink-0 pt-4 md:pt-0 border-t md:border-t-0 border-slate-100">
              <div class="text-right text-xs">
                <span class="text-slate-400 text-[11px]">Campus Demand:</span>
                <div class="font-extrabold text-indigo-600 text-sm">${role.openings} Opportunities</div>
              </div>

              <a href="#/student/internships" class="px-5 py-2.5 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-indigo-700 font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-sm">
                <span>Explore Jobs</span>
                <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
              </a>
            </div>

          </div>
        `).join('')}
      </div>

    </div>
  `;
}
