/**
 * Student Learning Resources View
 * Curated courses, tutorials, docs, projects, certifications & practice sandboxes
 */

import { store } from '../../store.js';
import { showToast } from '../../components/ui.js';

export function renderStudentResources() {
  const data = store.get();
  const resources = data.learningResources || [];

  setTimeout(() => initResourcesEvents(), 10);

  const categories = ['All', 'Courses', 'Tutorials', 'Documentation', 'Projects', 'Certifications', 'Practice'];

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div class="flex items-center gap-2">
            <h1 class="text-2xl font-black text-slate-900">Learning Resources</h1>
            <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200">
              Gap Aligned
            </span>
          </div>
          <p class="text-xs text-slate-500 mt-1">Recommended modules curated specifically to eliminate your diagnosed skill gaps</p>
        </div>

        <a href="#/student/skill-gap" class="text-xs font-bold text-indigo-600 hover:underline flex items-center gap-1 self-start sm:self-auto">
          <span>Review My Skill Gaps</span>
          <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </a>
      </div>

      <!-- Filters -->
      <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
        <div class="flex flex-col md:flex-row items-center justify-between gap-3">
          
          <!-- Category Pills -->
          <div class="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0" id="res-cat-tabs">
            ${categories.map((cat, i) => `
              <button class="res-cat-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}" data-cat="${cat}">
                ${cat}
              </button>
            `).join('')}
          </div>

          <!-- Difficulty Dropdown -->
          <div class="w-full md:w-48 shrink-0">
            <select id="res-difficulty" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              <option value="All">All Difficulties</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>

        </div>
      </div>

      <!-- Resources Grid -->
      <div id="resources-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${renderResourceCards(resources)}
      </div>

    </div>
  `;
}

function renderResourceCards(items) {
  if (!items.length) {
    return `
      <div class="col-span-full py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
        <i data-lucide="book-x" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
        <p class="text-sm font-semibold">No resources found matching this filter.</p>
      </div>
    `;
  }

  const diffColors = {
    Beginner: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    Intermediate: 'bg-blue-50 text-blue-700 border-blue-200',
    Advanced: 'bg-purple-50 text-purple-700 border-purple-200'
  };

  return items.map(res => `
    <div class="glass-card bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between group">
      <div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-wider">
            ${res.category}
          </span>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded-full border ${diffColors[res.difficulty] || 'bg-slate-100 text-slate-700'}">
            ${res.difficulty}
          </span>
        </div>

        <h3 class="text-sm font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-2 mb-2">
          ${res.title}
        </h3>

        <p class="text-xs text-slate-500 leading-relaxed mb-4 line-clamp-3">
          ${res.description}
        </p>

        <div class="flex flex-wrap items-center gap-3 text-xs text-slate-500 pt-2 border-t border-slate-50">
          <span class="flex items-center gap-1 font-semibold text-slate-700">
            <i data-lucide="tag" class="w-3.5 h-3.5 text-indigo-500"></i> ${res.skill}
          </span>
          <span>·</span>
          <span class="flex items-center gap-1 text-slate-400">
            <i data-lucide="clock" class="w-3.5 h-3.5"></i> ${res.duration}
          </span>
          <span>·</span>
          <span class="text-amber-500 font-bold flex items-center gap-0.5">
            ★ ${res.rating}
          </span>
        </div>
      </div>

      <div class="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
        <span class="text-[11px] text-slate-400 font-medium">${res.provider}</span>
        <button onclick="alert('Demo: Redirecting to learning partner curriculum for ${res.skill}');" class="px-4 py-2 bg-indigo-50 hover:bg-indigo-600 hover:text-white text-indigo-700 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5">
          <span>Start Learning</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function initResourcesEvents() {
  if (window.lucide) window.lucide.createIcons();

  const catButtons = document.querySelectorAll('.res-cat-btn');
  const diffSelect = document.getElementById('res-difficulty');

  const filter = () => {
    const activeCat = document.querySelector('.res-cat-btn.bg-indigo-600')?.dataset.cat || 'All';
    const activeDiff = diffSelect?.value || 'All';

    const items = store.get().learningResources || [];

    const filtered = items.filter(r => {
      const matchCat = activeCat === 'All' || r.category === activeCat;
      const matchDiff = activeDiff === 'All' || r.difficulty === activeDiff;
      return matchCat && matchDiff;
    });

    const grid = document.getElementById('resources-grid');
    if (grid) {
      grid.innerHTML = renderResourceCards(filtered);
      if (window.lucide) window.lucide.createIcons();
    }
  };

  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => {
        b.className = 'res-cat-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors bg-slate-100 text-slate-600 hover:bg-slate-200';
      });
      btn.className = 'res-cat-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors bg-indigo-600 text-white';
      filter();
    });
  });

  diffSelect?.addEventListener('change', filter);
}
