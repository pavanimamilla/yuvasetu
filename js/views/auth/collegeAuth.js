/**
 * College Authentication (Sign In & Campus Registration)
 */

import { store } from '../../store.js';
import { showToast } from '../../components/ui.js';

export function renderCollegeAuth(isRegister = false) {
  setTimeout(() => initCollegeAuthEvents(isRegister), 10);

  return `
    <div class="min-h-[calc(100vh-61px)] flex items-center justify-center p-4 bg-slate-50/80">
      <div class="max-w-md w-full glass-panel bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative">
        
        <!-- Back link -->
        <a href="#/" class="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 mb-6">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5 mr-1.5"></i> Back to Ecosystem Hub
        </a>

        <!-- Portal Header -->
        <div class="text-center mb-6">
          <div class="w-12 h-12 rounded-2xl bg-purple-600 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-purple-600/30">
            <i data-lucide="school" class="w-6 h-6"></i>
          </div>
          <h2 class="text-2xl font-black text-slate-900">College Administration</h2>
          <p class="text-xs text-slate-500 mt-1">Institutional analytics, student tracking & industry ties</p>
        </div>

        <!-- Auth Mode Toggle Tabs -->
        <div class="flex bg-slate-100 p-1 rounded-xl mb-6 text-xs font-bold">
          <button id="tab-college-signin" class="flex-1 py-2 rounded-lg transition-all ${!isRegister ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
            College Sign In
          </button>
          <button id="tab-college-register" class="flex-1 py-2 rounded-lg transition-all ${isRegister ? 'bg-white text-purple-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
            Register Campus
          </button>
        </div>

        <!-- Form -->
        <form id="college-auth-form" class="space-y-3.5">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">College / Institute Name <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="building" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="text" id="col-name" required value="Apex Institute of Technology" placeholder="e.g. Apex Institute of Technology" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Official College Email <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="mail" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="email" id="col-email" required value="dean.placement@apex.edu" placeholder="e.g. principal@institution.edu" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Password <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="lock" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="password" id="col-password" required value="College@123" placeholder="••••••••" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Mobile / Contact Number <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="phone" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="tel" id="col-mobile" required value="+91 98765 43210" placeholder="+91 98765 43210" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Campus Address <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="map-pin" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="text" id="col-address" required value="Apex Knowledge Park, Outer Ring Road, Bangalore" placeholder="Campus Location & City" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <button type="submit" class="w-full py-3 rounded-xl text-xs font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-md shadow-purple-600/30 flex items-center justify-center gap-2 transition-all mt-4">
            <span>${isRegister ? 'Register Institution' : 'Sign In as College'}</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>

          <!-- Quick Demo Fill -->
          <button type="button" id="demo-college-btn" class="w-full py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-semibold rounded-xl transition-colors border border-purple-200">
            Demo Instant Sign In (Pre-filled)
          </button>
        </form>

        <div class="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
          ${isRegister ? 'Already registered campus?' : "Don't have an account?"} 
          <a href="${isRegister ? '#/college/login' : '#/college/register'}" class="text-purple-600 font-bold hover:underline">
            ${isRegister ? 'Sign In' : 'Register'}
          </a>
        </div>

      </div>
    </div>
  `;
}

function initCollegeAuthEvents(isRegister) {
  if (window.lucide) window.lucide.createIcons();

  document.getElementById('tab-college-signin')?.addEventListener('click', () => {
    window.location.hash = '#/college/login';
  });
  document.getElementById('tab-college-register')?.addEventListener('click', () => {
    window.location.hash = '#/college/register';
  });

  document.getElementById('demo-college-btn')?.addEventListener('click', () => {
    store.switchRole('college');
    showToast('College Admin Access Granted', 'Logged into Apex Institute of Technology dashboard.', 'info');
    window.location.hash = '#/college/dashboard';
  });

  document.getElementById('college-auth-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('col-name').value;
    const email = document.getElementById('col-email').value;
    const mobile = document.getElementById('col-mobile').value;
    const address = document.getElementById('col-address').value;

    store.setCurrentUser({
      role: 'college',
      id: 'col-' + Date.now(),
      name,
      adminName: 'Dean of Placements',
      email,
      mobile,
      address,
      avatar: 'https://images.unsplash.com/photo-1562774053-701939374585?w=150&auto=format&fit=crop&q=80'
    });

    showToast('Success', `Welcome, ${name}! Redirecting to College Admin Dashboard.`, 'success');
    window.location.hash = '#/college/dashboard';
  });
}
