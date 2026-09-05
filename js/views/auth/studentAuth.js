/**
 * Student Authentication (Sign In & Register)
 * Implements password strength meter, visibility toggle, validation, and demo instant-fill
 */

import { store } from '../../store.js';
import { showToast } from '../../components/ui.js';

export function renderStudentAuth(isRegister = false) {
  setTimeout(() => initStudentAuthEvents(isRegister), 10);

  return `
    <div class="min-h-[calc(100vh-61px)] flex items-center justify-center p-4 bg-slate-50/80">
      <div class="max-w-md w-full glass-panel bg-white p-8 rounded-3xl border border-slate-200 shadow-xl relative">
        
        <!-- Back link -->
        <a href="#/" class="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-slate-800 mb-6">
          <i data-lucide="arrow-left" class="w-3.5 h-3.5 mr-1.5"></i> Back to Ecosystem Hub
        </a>

        <!-- Portal Header -->
        <div class="text-center mb-6">
          <div class="w-12 h-12 rounded-2xl bg-indigo-600 text-white flex items-center justify-center mx-auto mb-3 shadow-lg shadow-indigo-600/30">
            <i data-lucide="graduation-cap" class="w-6 h-6"></i>
          </div>
          <h2 class="text-2xl font-black text-slate-900">Student Portal</h2>
          <p class="text-xs text-slate-500 mt-1">Discover skills, bridge gaps & unlock opportunities</p>
        </div>

        <!-- Auth Mode Toggle Tabs -->
        <div class="flex bg-slate-100 p-1 rounded-xl mb-6 text-xs font-bold">
          <button id="tab-signin" class="flex-1 py-2 rounded-lg transition-all ${!isRegister ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
            Sign In
          </button>
          <button id="tab-register" class="flex-1 py-2 rounded-lg transition-all ${isRegister ? 'bg-white text-indigo-700 shadow-sm' : 'text-slate-500 hover:text-slate-800'}">
            Register Now
          </button>
        </div>

        <!-- Sign In Form -->
        <form id="student-signin-form" class="${isRegister ? 'hidden' : 'space-y-4'}">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Email Address <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="mail" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="email" id="signin-email" value="rahul.sharma@apex.edu" required placeholder="student@university.edu" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <div>
            <div class="flex justify-between items-center mb-1">
              <label class="block text-xs font-semibold text-slate-700">Password <span class="text-rose-500">*</span></label>
              <a href="javascript:void(0)" onclick="alert('Demo notice: You can sign in directly or use demo fill.')" class="text-[11px] text-indigo-600 hover:underline">Forgot password?</a>
            </div>
            <div class="relative">
              <i data-lucide="lock" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="password" id="signin-password" value="Password@123" required placeholder="••••••••" class="w-full pl-10 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white" />
              <button type="button" id="toggle-signin-password" class="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600">
                <i data-lucide="eye" class="w-4 h-4"></i>
              </button>
            </div>
          </div>

          <button type="submit" class="w-full py-3 rounded-xl text-xs font-bold btn-glow flex items-center justify-center gap-2">
            <span>Sign In to Dashboard</span>
            <i data-lucide="arrow-right" class="w-4 h-4"></i>
          </button>

          <!-- Demo Quick Signin -->
          <button type="button" id="demo-signin-btn" class="w-full py-2 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-xl transition-colors border border-indigo-200">
            Demo Instant Sign In (Pre-filled)
          </button>
        </form>

        <!-- Register Form -->
        <form id="student-register-form" class="${!isRegister ? 'hidden' : 'space-y-3.5'}">
          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Full Name <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="user" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="text" id="reg-name" required placeholder="e.g. Rahul Sharma" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Email Address <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="mail" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="email" id="reg-email" required placeholder="e.g. rahul@apex.edu" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <div>
            <label class="block text-xs font-semibold text-slate-700 mb-1">Residential Address <span class="text-rose-500">*</span></label>
            <div class="relative">
              <i data-lucide="map-pin" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
              <input type="text" id="reg-address" required placeholder="City, State, Country" class="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white" />
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Password <span class="text-rose-500">*</span></label>
              <div class="relative">
                <input type="password" id="reg-password" required placeholder="••••••••" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white" />
              </div>
            </div>
            <div>
              <label class="block text-xs font-semibold text-slate-700 mb-1">Confirm Password <span class="text-rose-500">*</span></label>
              <div class="relative">
                <input type="password" id="reg-confirm-password" required placeholder="••••••••" class="w-full px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none focus:bg-white" />
              </div>
            </div>
          </div>

          <!-- Password Strength Indicator -->
          <div id="password-strength-box" class="pt-1">
            <div class="flex justify-between items-center text-[11px] font-medium text-slate-500 mb-1">
              <span>Password Strength</span>
              <span id="strength-label" class="font-bold text-slate-400">Not entered</span>
            </div>
            <div class="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden flex gap-1">
              <div id="str-bar-1" class="h-full w-1/3 bg-slate-200 transition-colors"></div>
              <div id="str-bar-2" class="h-full w-1/3 bg-slate-200 transition-colors"></div>
              <div id="str-bar-3" class="h-full w-1/3 bg-slate-200 transition-colors"></div>
            </div>
          </div>

          <button type="submit" class="w-full py-3 rounded-xl text-xs font-bold btn-glow flex items-center justify-center gap-2 mt-2">
            <span>Create Student Account</span>
            <i data-lucide="user-plus" class="w-4 h-4"></i>
          </button>
        </form>

        <div class="mt-6 pt-4 border-t border-slate-100 text-center text-xs text-slate-500">
          Already registered? 
          <a href="#/student/login" class="text-indigo-600 font-bold hover:underline">Sign In</a>
        </div>

      </div>
    </div>
  `;
}

function initStudentAuthEvents(isRegister) {
  if (window.lucide) window.lucide.createIcons();

  // Tab switching
  document.getElementById('tab-signin')?.addEventListener('click', () => {
    window.location.hash = '#/student/login';
  });
  document.getElementById('tab-register')?.addEventListener('click', () => {
    window.location.hash = '#/student/register';
  });

  // Password visibility
  const toggleBtn = document.getElementById('toggle-signin-password');
  const passInput = document.getElementById('signin-password');
  toggleBtn?.addEventListener('click', () => {
    const isPass = passInput.type === 'password';
    passInput.type = isPass ? 'text' : 'password';
  });

  // Password Strength evaluation
  const regPass = document.getElementById('reg-password');
  regPass?.addEventListener('input', (e) => {
    const val = e.target.value;
    const bar1 = document.getElementById('str-bar-1');
    const bar2 = document.getElementById('str-bar-2');
    const bar3 = document.getElementById('str-bar-3');
    const label = document.getElementById('strength-label');

    if (!val) {
      bar1.className = 'h-full w-1/3 bg-slate-200';
      bar2.className = 'h-full w-1/3 bg-slate-200';
      bar3.className = 'h-full w-1/3 bg-slate-200';
      label.innerText = 'Not entered';
      label.className = 'font-bold text-slate-400';
      return;
    }

    if (val.length < 6) {
      bar1.className = 'h-full w-1/3 bg-rose-500';
      bar2.className = 'h-full w-1/3 bg-slate-200';
      bar3.className = 'h-full w-1/3 bg-slate-200';
      label.innerText = 'Weak';
      label.className = 'font-bold text-rose-500';
    } else if (val.length < 9) {
      bar1.className = 'h-full w-1/3 bg-amber-500';
      bar2.className = 'h-full w-1/3 bg-amber-500';
      bar3.className = 'h-full w-1/3 bg-slate-200';
      label.innerText = 'Medium';
      label.className = 'font-bold text-amber-500';
    } else {
      bar1.className = 'h-full w-1/3 bg-emerald-500';
      bar2.className = 'h-full w-1/3 bg-emerald-500';
      bar3.className = 'h-full w-1/3 bg-emerald-500';
      label.innerText = 'Strong';
      label.className = 'font-bold text-emerald-600';
    }
  });

  // Sign In handler
  document.getElementById('student-signin-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value;
    store.setCurrentUser({
      role: 'student',
      id: 'std-1',
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email: email,
      department: 'Computer Science & Engineering',
      year: '3rd Year',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      profileCompletion: 75,
      preferredRoles: ['Frontend Developer', 'Full Stack Developer', 'Software Engineer'],
      address: 'Bangalore, Karnataka, India'
    });
    showToast('Signed In Successfully!', 'Welcome back to your Student Dashboard.', 'success');
    window.location.hash = '#/student/dashboard';
  });

  // Demo Sign in quick button
  document.getElementById('demo-signin-btn')?.addEventListener('click', () => {
    store.switchRole('student');
    showToast('Welcome Rahul Sharma!', 'Signed in with demo student profile.', 'success');
    window.location.hash = '#/student/dashboard';
  });

  // Register handler
  document.getElementById('student-register-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('reg-name').value;
    const email = document.getElementById('reg-email').value;
    const address = document.getElementById('reg-address').value;
    const pass = document.getElementById('reg-password').value;
    const confirm = document.getElementById('reg-confirm-password').value;

    if (pass !== confirm) {
      alert('Passwords do not match! Please check and try again.');
      return;
    }

    store.setCurrentUser({
      role: 'student',
      id: 'std-' + Date.now(),
      name,
      email,
      department: 'Computer Science & Engineering',
      year: '3rd Year',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      profileCompletion: 60,
      preferredRoles: ['Frontend Developer', 'Software Engineer'],
      address
    });

    showToast('Account Created!', `Welcome to CareerSync AI, ${name}!`, 'success');
    window.location.hash = '#/student/dashboard';
  });
}
