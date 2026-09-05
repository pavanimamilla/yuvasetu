/**
 * Application Top Navigation Bar
 * Features brand logo, ecosystem switcher, user badge, and mobile drawer toggle
 */

import { store } from '../store.js';

export function renderNavbar() {
  const user = store.get().currentUser;
  const currentHash = window.location.hash || '#/';

  const roleNameMap = {
    student: 'Student Portal',
    college: 'College Admin',
    company: 'Recruiter Hub'
  };

  const roleColorMap = {
    student: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    college: 'bg-purple-50 text-purple-700 border-purple-200',
    company: 'bg-cyan-50 text-cyan-700 border-cyan-200'
  };

  const roleTitle = user ? (roleNameMap[user.role] || 'Member') : 'Guest';
  const roleColor = user ? (roleColorMap[user.role] || 'bg-slate-100 text-slate-700') : 'bg-slate-100 text-slate-700';

  return `
    <header class="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200/80 px-4 sm:px-6 py-2.5 transition-all">
      <div class="max-w-7xl mx-auto flex items-center justify-between gap-4">
        
        <!-- Left: Hamburger (mobile) + Brand -->
        <div class="flex items-center gap-3">
          ${user && currentHash !== '#/' ? `
          <button id="mobile-menu-toggle" class="lg:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 focus:outline-none">
            <i data-lucide="menu" class="w-5 h-5"></i>
          </button>` : ''}

          <a href="#/" class="flex items-center gap-2.5 group">
            <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-600 via-indigo-500 to-cyan-400 flex items-center justify-center text-white shadow-md shadow-indigo-500/20 group-hover:scale-105 transition-transform">
              <i data-lucide="sparkles" class="w-5 h-5"></i>
            </div>
            <div>
              <span class="text-base sm:text-lg font-extrabold tracking-tight text-slate-900 flex items-center gap-1.5">
                Career<span class="text-indigo-600">Sync</span>
                <span class="text-[10px] px-1.5 py-0.5 rounded font-bold uppercase tracking-wider bg-indigo-100 text-indigo-700">AI</span>
              </span>
              <p class="text-[10px] text-slate-400 font-medium hidden sm:block -mt-0.5">Student · College · Industry</p>
            </div>
          </a>
        </div>

        <!-- Center: Quick Demo Portal Switcher (Hackathon Highlight) -->
        <div class="hidden md:flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200 text-xs font-semibold">
          <span class="text-[11px] uppercase tracking-wider text-slate-400 px-2 py-1 font-bold">Demo Switch:</span>
          <button onclick="window.location.hash='#/student/dashboard'" class="px-2.5 py-1 rounded-lg transition-all ${user?.role === 'student' && currentHash.startsWith('#/student') ? 'bg-white text-indigo-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'}">
            <i data-lucide="graduation-cap" class="w-3.5 h-3.5 inline mr-1"></i> Student
          </button>
          <button onclick="window.location.hash='#/college/dashboard'" class="px-2.5 py-1 rounded-lg transition-all ${user?.role === 'college' && currentHash.startsWith('#/college') ? 'bg-white text-purple-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'}">
            <i data-lucide="school" class="w-3.5 h-3.5 inline mr-1"></i> College
          </button>
          <button onclick="window.location.hash='#/company/dashboard'" class="px-2.5 py-1 rounded-lg transition-all ${user?.role === 'company' && currentHash.startsWith('#/company') ? 'bg-white text-cyan-700 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'}">
            <i data-lucide="building-2" class="w-3.5 h-3.5 inline mr-1"></i> Industry
          </button>
          <button onclick="window.location.hash='#/'" class="px-2 py-1 rounded-lg transition-all text-slate-500 hover:text-slate-800" title="Back to Landing">
            <i data-lucide="home" class="w-3.5 h-3.5 inline"></i>
          </button>
        </div>

        <!-- Right: Actions & User info -->
        <div class="flex items-center gap-2 sm:gap-3">
          ${user ? `
          <!-- Active Role Badge -->
          <span class="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${roleColor}">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 mr-1.5 animate-pulse"></span>
            ${roleTitle}
          </span>

          <!-- Notifications bell -->
          <button class="relative p-2 text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-xl transition-colors">
            <i data-lucide="bell" class="w-4 h-4"></i>
            <span class="absolute top-1.5 right-1.5 w-2 h-2 bg-indigo-600 rounded-full ring-2 ring-white"></span>
          </button>

          <!-- User dropdown / profile link -->
          <div class="flex items-center gap-2 pl-2 border-l border-slate-200">
            <img src="${user.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80'}" alt="Avatar" class="w-8 h-8 rounded-xl object-cover ring-1 ring-slate-200" />
            <div class="hidden lg:block text-left">
              <p class="text-xs font-bold text-slate-800 leading-tight">${user.name || 'User'}</p>
              <p class="text-[10px] text-slate-400 capitalize">${user.role}</p>
            </div>
          </div>
          ` : `
          <!-- Landing page login CTAs -->
          <a href="#/student/login" class="text-xs font-semibold text-slate-700 hover:text-indigo-600 px-3 py-1.5">Sign In</a>
          <a href="#/" class="text-xs font-bold bg-indigo-600 text-white hover:bg-indigo-700 px-3.5 py-1.5 rounded-xl shadow-sm transition-colors">Get Started</a>
          `}
        </div>

      </div>
    </header>
  `;
}
