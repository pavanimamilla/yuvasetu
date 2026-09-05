/**
 * Student "My Skills" View
 * Search, add, remove skills with proficiency levels & progress indicators
 */

import { store } from '../../store.js';
import { showToast, showModal, closeModal, renderProgressBar } from '../../components/ui.js';

export function renderStudentSkills() {
  const data = store.get();
  const skills = data.studentSkills || [];

  setTimeout(() => initSkillsEvents(), 10);

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'DevOps', 'General'];

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
        <div>
          <h1 class="text-2xl font-black text-slate-900">My Skills</h1>
          <p class="text-xs text-slate-500 mt-1">Manage your technical competencies, track proficiency, and discover gap insights</p>
        </div>
        <button id="add-skill-modal-btn" class="btn-glow px-4 py-2.5 rounded-xl text-xs font-bold flex items-center justify-center gap-2 self-start sm:self-auto">
          <i data-lucide="plus" class="w-4 h-4"></i>
          <span>Add New Skill</span>
        </button>
      </div>

      <!-- Filters & Search Bar -->
      <div class="flex flex-col md:flex-row items-center justify-between gap-4 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
        <!-- Search -->
        <div class="relative w-full md:w-80">
          <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
          <input type="text" id="skills-search" placeholder="Search your skills..." class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white" />
        </div>

        <!-- Category tabs -->
        <div class="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0" id="category-filter-tabs">
          ${categories.map((cat, i) => `
            <button class="cat-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors ${i === 0 ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'}" data-category="${cat}">
              ${cat}
            </button>
          `).join('')}
        </div>
      </div>

      <!-- Skills Cards Grid -->
      <div id="skills-grid" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        ${renderSkillsCards(skills)}
      </div>

      <!-- Add Skill Quick Trending Suggestions -->
      <div class="bg-indigo-50/60 border border-indigo-100 rounded-2xl p-6">
        <h3 class="text-sm font-bold text-indigo-950 mb-2 flex items-center gap-2">
          <i data-lucide="trending-up" class="w-4 h-4 text-indigo-600"></i>
          <span>In-Demand Industry Skills to Add</span>
        </h3>
        <p class="text-xs text-indigo-900/70 mb-4">Adding these verified skills can boost your internship match score by up to 25%</p>

        <div class="flex flex-wrap gap-2">
          ${['TypeScript', 'Node.js', 'Docker', 'Tailwind CSS', 'AWS', 'Next.js', 'System Design'].map(skill => `
            <button class="add-trending-chip px-3 py-1.5 bg-white hover:bg-indigo-600 hover:text-white text-indigo-700 rounded-xl text-xs font-semibold border border-indigo-200 transition-all flex items-center gap-1.5 shadow-xs" data-skill="${skill}">
              <span>+</span> <span>${skill}</span>
            </button>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}

function renderSkillsCards(skills) {
  if (!skills.length) {
    return `
      <div class="col-span-full py-12 text-center text-slate-400 bg-white rounded-2xl border border-dashed border-slate-200">
        <i data-lucide="zap-off" class="w-8 h-8 mx-auto mb-2 text-slate-300"></i>
        <p class="text-sm font-semibold">No skills found matching this criteria.</p>
        <p class="text-xs mt-1">Try searching another keyword or add a new skill.</p>
      </div>
    `;
  }

  const levelColorMap = {
    Beginner: 'bg-amber-50 text-amber-700 border-amber-200',
    Intermediate: 'bg-blue-50 text-blue-700 border-blue-200',
    Advanced: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    Expert: 'bg-emerald-50 text-emerald-700 border-emerald-200'
  };

  const barColorMap = {
    Beginner: 'bg-amber-500',
    Intermediate: 'bg-blue-500',
    Advanced: 'bg-indigo-600',
    Expert: 'bg-emerald-500'
  };

  return skills.map(s => `
    <div class="glass-card bg-white p-5 rounded-2xl border border-slate-100 shadow-sm relative group flex flex-col justify-between" data-category="${s.category}" data-name="${s.name.toLowerCase()}">
      <div>
        <div class="flex items-start justify-between gap-2 mb-3">
          <div>
            <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">${s.category || 'General'}</span>
            <h4 class="text-base font-bold text-slate-900 mt-0.5">${s.name}</h4>
          </div>
          <span class="px-2.5 py-1 rounded-full text-xs font-semibold border ${levelColorMap[s.level] || 'bg-slate-100 text-slate-700 border-slate-200'}">
            ${s.level}
          </span>
        </div>

        <div class="my-4">
          ${renderProgressBar(s.percentage, `Proficiency: ${s.percentage}%`, barColorMap[s.level])}
        </div>
      </div>

      <div class="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
        <span class="text-slate-400 text-[11px]">Skill ID: ${s.id}</span>
        <button class="delete-skill-btn text-slate-400 hover:text-rose-600 p-1 rounded-lg hover:bg-rose-50 transition-colors" data-id="${s.id}" title="Remove skill">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function initSkillsEvents() {
  if (window.lucide) window.lucide.createIcons();

  // Search filter
  const searchInput = document.getElementById('skills-search');
  searchInput?.addEventListener('input', filterSkills);

  // Category filter
  const catButtons = document.querySelectorAll('.cat-btn');
  catButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      catButtons.forEach(b => {
        b.className = 'cat-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors bg-slate-100 text-slate-600 hover:bg-slate-200';
      });
      btn.className = 'cat-btn px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-colors bg-indigo-600 text-white';
      filterSkills();
    });
  });

  function filterSkills() {
    const q = (document.getElementById('skills-search')?.value || '').toLowerCase();
    const activeCat = document.querySelector('.cat-btn.bg-indigo-600')?.dataset.category || 'All';
    const allSkills = store.get().studentSkills || [];

    const filtered = allSkills.filter(s => {
      const matchText = s.name.toLowerCase().includes(q) || (s.category || '').toLowerCase().includes(q);
      const matchCat = activeCat === 'All' || s.category === activeCat;
      return matchText && matchCat;
    });

    const grid = document.getElementById('skills-grid');
    if (grid) {
      grid.innerHTML = renderSkillsCards(filtered);
      if (window.lucide) window.lucide.createIcons();
      wireDeleteButtons();
    }
  }

  function wireDeleteButtons() {
    document.querySelectorAll('.delete-skill-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        if (confirm('Are you sure you want to remove this skill?')) {
          store.removeStudentSkill(id);
          showToast('Skill Removed', 'Your skill portfolio has been updated.', 'info');
          filterSkills();
        }
      });
    });
  }

  wireDeleteButtons();

  // Trending add chips
  document.querySelectorAll('.add-trending-chip').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const skillName = e.currentTarget.dataset.skill;
      store.addStudentSkill(skillName, 'Technical', 'Intermediate', 70);
      showToast('Skill Added!', `${skillName} added to your profile.`, 'success');
      filterSkills();
    });
  });

  // Modal open for adding custom skill
  document.getElementById('add-skill-modal-btn')?.addEventListener('click', () => {
    const modalContent = `
      <form id="new-skill-form" class="space-y-4">
        <div>
          <label class="block text-xs font-bold text-slate-700 mb-1">Skill Name *</label>
          <input type="text" id="modal-skill-name" required placeholder="e.g. Docker, TypeScript, GraphQL" class="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white" />
        </div>

        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Category</label>
            <select id="modal-skill-category" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="DevOps">DevOps</option>
              <option value="AI / ML">AI / ML</option>
              <option value="Design">Design</option>
              <option value="General">General</option>
            </select>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Proficiency Level</label>
            <select id="modal-skill-level" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
              <option value="Beginner">Beginner (~45%)</option>
              <option value="Intermediate" selected>Intermediate (~65%)</option>
              <option value="Advanced">Advanced (~85%)</option>
              <option value="Expert">Expert (~95%)</option>
            </select>
          </div>
        </div>
      </form>
    `;

    const footerButtons = `
      <button type="button" id="modal-cancel-btn" class="px-4 py-2 text-xs font-bold text-slate-600 hover:bg-slate-100 rounded-xl">Cancel</button>
      <button type="button" id="modal-submit-skill-btn" class="btn-glow px-4 py-2 text-xs font-bold rounded-xl">Add Skill</button>
    `;

    showModal('Add New Skill', modalContent, footerButtons);

    document.getElementById('modal-cancel-btn')?.addEventListener('click', closeModal);
    document.getElementById('modal-submit-skill-btn')?.addEventListener('click', () => {
      const name = document.getElementById('modal-skill-name')?.value;
      if (!name) {
        alert('Please enter a skill name.');
        return;
      }
      const category = document.getElementById('modal-skill-category')?.value || 'General';
      const level = document.getElementById('modal-skill-level')?.value || 'Intermediate';
      const percentMap = { Beginner: 45, Intermediate: 65, Advanced: 85, Expert: 95 };

      store.addStudentSkill(name, category, level, percentMap[level]);
      closeModal();
      showToast('Skill Added!', `${name} added to your profile.`, 'success');
      filterSkills();
    });
  });
}
