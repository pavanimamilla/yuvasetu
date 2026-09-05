/**
 * Role-Aware Sidebar Navigation Component
 * Adapts seamlessly between Student, College, and Company views
 * Supports mobile slide-out drawer mode.
 */

import { store } from '../store.js';

export function renderSidebar() {
  const user = store.get().currentUser;
  const currentHash = window.location.hash || '#/';

  if (!user || currentHash === '#/' || currentHash.includes('/login') || currentHash.includes('/register')) {
    return '';
  }

  const navConfigs = {
    student: [
      { path: '#/student/dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
      { path: '#/student/skills', label: 'My Skills', icon: 'zap' },
      { path: '#/student/jobs', label: 'Job Roles', icon: 'briefcase' },
      { path: '#/student/internships', label: 'Internships', icon: 'compass' },
      { path: '#/student/assessment', label: 'AI Skill Assessment', icon: 'sparkles', badge: 'AI' },
      { path: '#/student/skill-gap', label: 'Skill Gap', icon: 'bar-chart-2' },
      { path: '#/student/recommended-roles', label: 'Recommended Roles', icon: 'target' },
      { path: '#/student/resources', label: 'Learning Resources', icon: 'book-open' },
      { path: '#/student/applications', label: 'Applications', icon: 'send' },
      { path: '#/student/profile', label: 'Profile', icon: 'user' },
      { path: '#/student/settings', label: 'Settings', icon: 'settings' }
    ],
    college: [
      { path: '#/college/dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
      { path: '#/college/students', label: 'Students', icon: 'users' },
      { path: '#/college/analytics', label: 'Skill Analytics', icon: 'pie-chart' },
      { path: '#/college/skill-gaps', label: 'Skill Gaps', icon: 'alert-triangle' },
      { path: '#/college/training', label: 'Training Programs', icon: 'award' },
      { path: '#/college/industry-connections', label: 'Industry Connections', icon: 'building' },
      { path: '#/college/profile', label: 'Profile', icon: 'user' },
      { path: '#/college/settings', label: 'Settings', icon: 'settings' }
    ],
    company: [
      { path: '#/company/dashboard', label: 'Dashboard', icon: 'layout-dashboard' },
      { path: '#/company/profile', label: 'Company Profile', icon: 'building-2' },
      { path: '#/company/jobs/create', label: 'Create Job', icon: 'plus-circle' },
      { path: '#/company/internships/create', label: 'Create Internship', icon: 'file-plus' },
      { path: '#/company/required-skills', label: 'Required Skills', icon: 'sliders' },
      { path: '#/company/candidates', label: 'Candidate Matching', icon: 'cpu', badge: 'AI Match' },
      { path: '#/company/applications', label: 'Applications', icon: 'inbox' },
      { path: '#/company/settings', label: 'Settings', icon: 'settings' }
    ]
  };

  const navItems = navConfigs[user.role] || [];

  return `
    <!-- Desktop Sidebar -->
    <aside id="desktop-sidebar" class="hidden lg:flex flex-col w-64 border-r border-slate-200/80 bg-white min-h-[calc(100vh-61px)] p-4 select-none shrink-0">
      
      <!-- Role Header -->
      <div class="px-3 py-2 mb-3 bg-slate-50/80 rounded-xl border border-slate-100 flex items-center justify-between">
        <div>
          <span class="text-[10px] font-bold uppercase tracking-wider text-slate-400">Portal View</span>
          <p class="text-xs font-bold text-slate-800 capitalize">${user.role} Workspace</p>
        </div>
        <a href="#/" class="text-slate-400 hover:text-slate-600" title="Exit to Landing">
          <i data-lucide="log-out" class="w-4 h-4"></i>
        </a>
      </div>

      <!-- Navigation Links -->
      <nav class="flex-1 space-y-1 overflow-y-auto pr-1">
        ${navItems.map(item => {
          const isActive = currentHash === item.path || (item.path !== '#/student/dashboard' && item.path !== '#/college/dashboard' && item.path !== '#/company/dashboard' && currentHash.startsWith(item.path));
          const activeClasses = isActive
            ? 'bg-indigo-50 text-indigo-700 font-bold shadow-sm shadow-indigo-100/50'
            : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70 font-medium';

          return `
            <a href="${item.path}" class="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs transition-all ${activeClasses}">
              <div class="flex items-center gap-2.5">
                <i data-lucide="${item.icon}" class="w-4 h-4 ${isActive ? 'text-indigo-600' : 'text-slate-400'}"></i>
                <span>${item.label}</span>
              </div>
              ${item.badge ? `
                <span class="text-[10px] font-bold px-1.5 py-0.5 rounded-full ${isActive ? 'bg-indigo-200/60 text-indigo-800' : 'bg-indigo-100 text-indigo-700'}">
                  ${item.badge}
                </span>` : ''}
            </a>
          `;
        }).join('')}
      </nav>

      <!-- Bottom Profile Mini Card -->
      <div class="pt-3 mt-3 border-t border-slate-100">
        <div class="flex items-center gap-3 p-2 rounded-xl hover:bg-slate-50 transition-colors">
          <img src="${user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&auto=format&fit=crop&q=80'}" class="w-8 h-8 rounded-lg object-cover" />
          <div class="truncate flex-1">
            <p class="text-xs font-bold text-slate-800 truncate">${user.name || 'User'}</p>
            <p class="text-[10px] text-slate-400 truncate">${user.email || ''}</p>
          </div>
        </div>
      </div>
    </aside>

    <!-- Mobile Drawer Sidebar (Hidden by default, toggled via JS) -->
    <div id="mobile-sidebar-backdrop" class="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 hidden lg:hidden">
      <div class="w-72 bg-white h-full shadow-2xl flex flex-col p-4">
        <div class="flex items-center justify-between pb-3 border-b border-slate-100">
          <span class="text-sm font-bold text-slate-800">${user.role.toUpperCase()} Menu</span>
          <button id="mobile-sidebar-close" class="p-1 rounded-lg text-slate-400 hover:text-slate-600">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>
        <nav class="flex-1 space-y-1 overflow-y-auto py-3">
          ${navItems.map(item => `
            <a href="${item.path}" onclick="document.getElementById('mobile-sidebar-backdrop').classList.add('hidden')" class="flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-100">
              <div class="flex items-center gap-2.5">
                <i data-lucide="${item.icon}" class="w-4 h-4 text-slate-500"></i>
                <span>${item.label}</span>
              </div>
              ${item.badge ? `<span class="text-[10px] bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded font-bold">${item.badge}</span>` : ''}
            </a>
          `).join('')}
        </nav>
      </div>
    </div>
  `;
}
