/**
 * Student Profile & Settings View
 */

import { store } from '../../store.js';
import { showToast, renderCircularProgress } from '../../components/ui.js';

export function renderStudentProfile() {
  const user = store.get().currentUser;

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();

    document.getElementById('student-profile-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      const updatedUser = {
        ...user,
        name: document.getElementById('prof-name').value,
        department: document.getElementById('prof-dept').value,
        year: document.getElementById('prof-year').value,
        address: document.getElementById('prof-address').value,
        profileCompletion: 90
      };
      store.setCurrentUser(updatedUser);
      showToast('Profile Updated!', 'Your profile details have been successfully saved.', 'success');
      window.location.hash = '#/student/dashboard';
    });

    document.getElementById('simulate-resume-upload')?.addEventListener('click', () => {
      showToast('Resume Uploaded!', 'AI parser extracted 4 additional skills to your profile.', 'success');
      store.addStudentSkill('TypeScript', 'Frontend', 'Intermediate', 72);
      store.addStudentSkill('Tailwind CSS', 'Frontend', 'Advanced', 88);
    });
  }, 10);

  return `
    <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
      
      <!-- Top Card -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <img src="${user.avatar}" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-indigo-600/20" />
          <div>
            <h1 class="text-xl font-black text-slate-900">${user.name}</h1>
            <p class="text-xs text-slate-500">${user.email} · ${user.department}</p>
            <div class="flex items-center gap-2 mt-2">
              <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                Verified Student
              </span>
              <span class="text-xs text-slate-400">Apex Institute of Technology</span>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-4">
          ${renderCircularProgress(user.profileCompletion || 75, 80, 8, '#4f46e5')}
          <div>
            <span class="text-xs font-bold text-slate-700 block">Profile Score</span>
            <span class="text-[11px] text-slate-400">Complete tasks to reach 100%</span>
          </div>
        </div>
      </div>

      <!-- Profile Form -->
      <div class="glass-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
        <h3 class="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">Personal & Academic Details</h3>

        <form id="student-profile-form" class="space-y-4">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Full Name</label>
              <input type="text" id="prof-name" value="${user.name}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
              <input type="email" id="prof-email" value="${user.email}" disabled class="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-xs text-slate-500 cursor-not-allowed" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Academic Department</label>
              <input type="text" id="prof-dept" value="${user.department || 'Computer Science & Engineering'}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
            </div>

            <div>
              <label class="block text-xs font-bold text-slate-700 mb-1">Current Year of Study</label>
              <select id="prof-year" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none">
                <option value="1st Year">1st Year</option>
                <option value="2nd Year">2nd Year</option>
                <option value="3rd Year" selected>3rd Year</option>
                <option value="4th Year">4th Year</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block text-xs font-bold text-slate-700 mb-1">Residential Address</label>
            <input type="text" id="prof-address" value="${user.address || 'Bangalore, Karnataka, India'}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
          </div>

          <!-- Resume Attachment Simulator -->
          <div class="pt-4 border-t border-slate-100">
            <label class="block text-xs font-bold text-slate-700 mb-2">Resume & Portfolio</label>
            <div class="border-2 border-dashed border-slate-200 rounded-2xl p-6 text-center bg-slate-50/50 hover:bg-indigo-50/20 transition-colors">
              <i data-lucide="file-text" class="w-8 h-8 text-indigo-500 mx-auto mb-2"></i>
              <p class="text-xs font-bold text-slate-700">Resume_Rahul_Sharma_2026.pdf (Uploaded)</p>
              <p class="text-[11px] text-slate-400 mt-0.5">Parsed by AI: 6 verified technical skill sets</p>
              <button type="button" id="simulate-resume-upload" class="mt-3 px-3 py-1.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 text-xs font-bold rounded-lg transition-colors">
                Re-upload / Auto-Extract Skills
              </button>
            </div>
          </div>

          <div class="pt-4 flex justify-end gap-3">
            <button type="submit" class="btn-glow px-6 py-2.5 rounded-xl text-xs font-bold">
              Save Profile Changes
            </button>
          </div>
        </form>
      </div>

    </div>
  `;
}
