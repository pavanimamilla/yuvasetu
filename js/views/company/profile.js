/**
 * Company Brand Profile View
 * Manage enterprise recruiter profile, contact, company size and hiring focus
 */

import { store } from '../../store.js';
import { showToast } from '../../components/ui.js';

export function renderCompanyProfile() {
  const data = store.get();
  const profile = data.companyProfile;

  setTimeout(() => {
    if (window.lucide) window.lucide.createIcons();

    document.getElementById('company-profile-form')?.addEventListener('submit', (e) => {
      e.preventDefault();
      profile.name = document.getElementById('comp-p-name').value;
      profile.industry = document.getElementById('comp-p-ind').value;
      profile.website = document.getElementById('comp-p-web').value;
      profile.location = document.getElementById('comp-p-loc').value;
      profile.size = document.getElementById('comp-p-size').value;
      profile.description = document.getElementById('comp-p-desc').value;
      profile.contact = document.getElementById('comp-p-contact').value;

      store.notify();
      showToast('Profile Updated!', 'Company profile changes saved successfully.', 'success');
    });
  }, 10);

  return `
    <div class="max-w-4xl mx-auto space-y-6 animate-fade-in">
      
      <!-- Top Card -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-6">
        <div class="flex items-center gap-4">
          <img src="${profile.logo}" class="w-16 h-16 rounded-2xl object-cover ring-2 ring-cyan-500/20 shadow-md" />
          <div>
            <h1 class="text-xl font-black text-slate-900">${profile.name}</h1>
            <p class="text-xs text-slate-500">${profile.industry} · ${profile.location}</p>
            <div class="flex items-center gap-2 mt-2">
              <span class="px-2.5 py-0.5 rounded text-[10px] font-bold bg-cyan-50 text-cyan-700 border border-cyan-200">
                Verified Recruiter Account
              </span>
              <a href="${profile.website}" target="_blank" class="text-xs text-cyan-600 font-bold hover:underline">${profile.website}</a>
            </div>
          </div>
        </div>

        <div class="flex items-center gap-2">
          <span class="px-3 py-1.5 bg-slate-50 text-slate-700 text-xs font-bold rounded-xl border border-slate-200">
            ${profile.size}
          </span>
        </div>
      </div>

      <!-- Edit Form -->
      <div class="glass-card bg-white p-6 sm:p-8 rounded-2xl border border-slate-100 shadow-sm">
        <h3 class="text-base font-bold text-slate-900 mb-4 pb-3 border-b border-slate-100">Enterprise Hiring Organization Details</h3>

        <form id="company-profile-form" class="space-y-4 text-xs">
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label class="block font-bold text-slate-700 mb-1">Company Name</label>
              <input type="text" id="comp-p-name" value="${profile.name}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Recruitment Email</label>
              <input type="email" id="comp-p-email" value="${profile.email}" disabled class="w-full px-3 py-2 bg-slate-100 border border-slate-200 rounded-xl text-slate-500 cursor-not-allowed" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Industry Vertical</label>
              <input type="text" id="comp-p-ind" value="${profile.industry}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Website URL</label>
              <input type="url" id="comp-p-web" value="${profile.website}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Office Locations</label>
              <input type="text" id="comp-p-loc" value="${profile.location}" required class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1">Company Headcount</label>
              <select id="comp-p-size" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none">
                <option value="50 - 250 Employees">50 - 250 Employees</option>
                <option value="250 - 500 Employees" selected>250 - 500 Employees</option>
                <option value="500 - 2000 Employees">500 - 2000 Employees</option>
                <option value="2000+ Employees">2000+ Employees</option>
              </select>
            </div>
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">Company Overview</label>
            <textarea rows="3" id="comp-p-desc" class="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none">${profile.description}</textarea>
          </div>

          <div>
            <label class="block font-bold text-slate-700 mb-1">HR / Talent Contact Number</label>
            <input type="text" id="comp-p-contact" value="${profile.contact}" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-cyan-500 focus:outline-none" />
          </div>

          <div class="pt-4 flex justify-end gap-3">
            <button type="submit" class="btn-glow px-6 py-2.5 rounded-xl font-bold">
              Save Changes
            </button>
          </div>
        </form>
      </div>

    </div>
  `;
}
