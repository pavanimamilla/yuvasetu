/**
 * Industry / Company Authentication (Recruiter Sign In & Register)
 */

import { store } from '../../store.js';
import { showToast } from '../../components/ui.js';

export function renderCompanyAuth(isRegister = false) {
  setTimeout(() => initCompanyAuthEvents(isRegister), 10);

  return `
    <div class="min-h-[calc(100vh-61px)] flex items-center justify-center p-4 bg-slate-50/80">
      <div class="max-w-md w-full glass-panel bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative">
        
        <!-- Back link -->
        <a href="#/" class="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 mb-6">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5 mr-1.5"></i> Back to Ecosystem Hub
        </a>

        <!-- Portal Header -->
        <div class="text-center mb-6">
          <div class="w-12 h-12 rounded-2xl bg-cyan-600 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-cyan-600/30">
            <i data-lucide="building-2" class="w-6 h-6"></i>
          </div>
          <h2 class="text-2xl font-black text-slate-900">Industry Recruiter Hub</h2>
          <p class="text-xs text-slate-500 mt-1">Discover vetted candidates, post roles & hire talent</p>
        </div>

        <!-- Auth Mode Toggle Tabs -->
        <div class="flex bg-slate-100 p-1 rounded-xl mb-6 text-xs font-bold">
          <button id="tab-comp-signin" class="flex-1 py-2 rounded-lg transition-all ${!isRegister ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
            Sign In
          </button>
          <button id="tab-comp-register" class="flex-1 py-2 rounded-lg transition-all ${isRegister ? 'bg-white text-cyan-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
            Register Company
          </button>
        </div>

        <!-- Form -->
        <form id="company-auth-form" class="space-y-3.5">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Company / Organization Name <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="briefcase" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="text" id="comp-name" required value="NexaTech Labs" placeholder="e.g. NexaTech Labs" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Recruiter Work Email <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="mail" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="email" id="comp-email" required value="recruiter@nexatech.io" placeholder="recruiter@company.com" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Password <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="lock" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="password" id="comp-password" required value="Recruiter@123" placeholder="••••••••" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-cyan-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <button type="submit" class="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 shadow-md shadow-cyan-600/30 flex items-center justify-center gap-2 transition-all mt-4">
            <span>${isRegister ? 'Register Company' : 'Sign In as Recruiter'}</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>

          <!-- Quick Demo Fill -->
          <button type="button" id="demo-company-btn" class="w-full py-2 bg-cyan-50 hover:bg-cyan-100 text-cyan-700 text-xs font-semibold rounded-xl transition-colors border border-cyan-200">
            Demo Instant Sign In (Pre-filled)
          </button>
        </form>

        <div class="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
          ${isRegister ? 'Already registered company?' : 'Looking to hire campus talent?'} 
          <a href="${isRegister ? '#/company/login' : '#/company/register'}" class="text-cyan-600 font-bold hover:underline">
            ${isRegister ? 'Sign In' : 'Register Now'}
          </a>
        </div>

      </div>
    </div>
  `;
}

function initCompanyAuthEvents(isRegister) {
  if (window.lucide) window.lucide.createIcons();

  document.getElementById('tab-comp-signin')?.addEventListener('click', () => {
    window.location.hash = '#/company/login';
  });
  document.getElementById('tab-comp-register')?.addEventListener('click', () => {
    window.location.hash = '#/company/register';
  });

  document.getElementById('demo-company-btn')?.addEventListener('click', () => {
    store.switchRole('company');
    showToast('Recruiter Access Granted', 'Logged into NexaTech Labs hiring dashboard.', 'info');
    window.location.hash = '#/company/dashboard';
  });

  document.getElementById('company-auth-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('comp-name').value;
    const email = document.getElementById('comp-email').value;

    store.setCurrentUser({
      role: 'company',
      id: 'comp-' + Date.now(),
      name,
      recruiterName: 'Talent Acquisition Partner',
      email,
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80'
    });

    showToast('Success', `Welcome, ${name}! Redirecting to Recruiter Dashboard.`, 'success');
    window.location.hash = '#/company/dashboard';
  });
}
