/**
 * College Students Directory View
 * Searchable, filterable student roster with detailed skill scores and assessment status
 */

import { store } from '../../store.js';
import { showModal, closeModal, renderBadge } from '../../components/ui.js';

export function renderCollegeStudents() {
  const data = store.get();
  const students = data.collegeStudents || [];

  setTimeout(() => initStudentsEvents(), 10);

  const departments = ['All', 'Computer Science', 'Information Tech', 'Electronics & Comm', 'Data Science & AI'];
  const years = ['All', '2nd Year', '3rd Year', '4th Year'];

  return `
    <div class="space-y-6 animate-fade-in">
      
      <!-- Header -->
      <div class="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Student Directory</h1>
          <p class="text-xs text-slate-500 mt-1">Institutional records, AI verified assessments, career trajectories & skill gap flags</p>
        </div>

        <div class="flex items-center gap-2 self-start sm:self-auto">
          <span class="px-3 py-1.5 bg-purple-50 text-purple-700 text-xs font-bold rounded-xl border border-purple-200">
            Total Enrolled: 2,450
          </span>
        </div>
      </div>

      <!-- Filters & Search -->
      <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm space-y-3">
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
          
          <!-- Search -->
          <div class="relative sm:col-span-2">
            <i data-lucide="search" class="w-4 h-4 text-slate-400 absolute left-3.5 top-3"></i>
            <input type="text" id="std-search" placeholder="Search by student name, role or skill..." class="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none" />
          </div>

          <!-- Department Filter -->
          <div>
            <select id="std-dept" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none">
              <option value="All">All Departments</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Information Tech">Information Tech</option>
              <option value="Electronics & Comm">Electronics & Comm</option>
              <option value="Data Science & AI">Data Science & AI</option>
            </select>
          </div>

          <!-- Year Filter -->
          <div>
            <select id="std-year" class="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:ring-2 focus:ring-purple-500 focus:outline-none">
              <option value="All">All Years</option>
              <option value="2nd Year">2nd Year</option>
              <option value="3rd Year">3rd Year</option>
              <option value="4th Year">4th Year</option>
            </select>
          </div>

        </div>
      </div>

      <!-- Student Table -->
      <div class="glass-card bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse" id="students-table">
            <thead>
              <tr class="bg-slate-50/80 text-[11px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100">
                <th class="py-3.5 px-6">Student Name</th>
                <th class="py-3.5 px-6">Department</th>
                <th class="py-3.5 px-6">Year</th>
                <th class="py-3.5 px-6">Verified Skills</th>
                <th class="py-3.5 px-6">Skill Score</th>
                <th class="py-3.5 px-6">Target Role</th>
                <th class="py-3.5 px-6">Assessment</th>
                <th class="py-3.5 px-6 text-right">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100 text-xs" id="students-table-body">
              ${renderStudentTableRows(students)}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  `;
}

function renderStudentTableRows(students) {
  if (!students.length) {
    return `
      <tr>
        <td colspan="8" class="py-10 text-center text-slate-400">
          No students found matching current filter parameters.
        </td>
      </tr>
    `;
  }

  return students.map(s => {
    const scoreColor = s.skillScore >= 80 ? 'text-emerald-600 bg-emerald-50 border-emerald-200' :
                       s.skillScore >= 70 ? 'text-indigo-600 bg-indigo-50 border-indigo-200' :
                       'text-amber-600 bg-amber-50 border-amber-200';

    return `
      <tr class="hover:bg-slate-50/60 transition-colors">
        <td class="py-4 px-6 font-bold text-slate-900">
          <div class="flex items-center gap-2.5">
            <div class="w-7 h-7 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-black text-xs">
              ${s.name.charAt(0)}
            </div>
            <div>
              <span class="block text-slate-900 font-bold">${s.name}</span>
              <span class="text-[10px] text-slate-400 font-normal">${s.email}</span>
            </div>
          </div>
        </td>
        <td class="py-4 px-6 text-slate-600 font-medium">${s.department}</td>
        <td class="py-4 px-6 text-slate-500">${s.year}</td>
        <td class="py-4 px-6">
          <div class="flex flex-wrap gap-1 max-w-xs">
            ${s.skills.slice(0, 3).map(sk => `
              <span class="px-1.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                ${sk}
              </span>
            `).join('')}
            ${s.skills.length > 3 ? `<span class="text-[10px] text-slate-400">+${s.skills.length - 3}</span>` : ''}
          </div>
        </td>
        <td class="py-4 px-6">
          <span class="px-2.5 py-1 rounded-full text-xs font-extrabold border ${scoreColor}">
            ${s.skillScore}%
          </span>
        </td>
        <td class="py-4 px-6 font-semibold text-slate-700">${s.careerRole}</td>
        <td class="py-4 px-6">
          <span class="px-2 py-0.5 rounded text-[10px] font-bold ${s.assessmentStatus === 'Completed' ? 'bg-emerald-50 text-emerald-700' : 'bg-amber-50 text-amber-700'}">
            ${s.assessmentStatus}
          </span>
        </td>
        <td class="py-4 px-6 text-right">
          <button class="view-student-btn px-3 py-1.5 bg-purple-50 hover:bg-purple-600 hover:text-white text-purple-700 text-xs font-bold rounded-lg transition-colors" data-id="${s.id}">
            View Student
          </button>
        </td>
      </tr>
    `;
  }).join('');
}

function initStudentsEvents() {
  if (window.lucide) window.lucide.createIcons();

  const search = document.getElementById('std-search');
  const dept = document.getElementById('std-dept');
  const year = document.getElementById('std-year');

  const filter = () => {
    const q = (search?.value || '').toLowerCase();
    const selDept = dept?.value || 'All';
    const selYear = year?.value || 'All';

    const students = store.get().collegeStudents || [];

    const filtered = students.filter(s => {
      const matchSearch = s.name.toLowerCase().includes(q) || s.careerRole.toLowerCase().includes(q) || s.skills.some(sk => sk.toLowerCase().includes(q));
      const matchDept = selDept === 'All' || s.department === selDept;
      const matchYear = selYear === 'All' || s.year === selYear;
      return matchSearch && matchDept && matchYear;
    });

    const tbody = document.getElementById('students-table-body');
    if (tbody) {
      tbody.innerHTML = renderStudentTableRows(filtered);
      wireViewButtons();
    }
  };

  search?.addEventListener('input', filter);
  dept?.addEventListener('change', filter);
  year?.addEventListener('change', filter);

  function wireViewButtons() {
    document.querySelectorAll('.view-student-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;
        const student = store.get().collegeStudents.find(s => s.id === id);
        if (!student) return;

        const modalHtml = `
          <div class="space-y-4 text-xs">
            <div class="flex items-center gap-3 p-3 bg-purple-50/60 rounded-xl border border-purple-100">
              <div class="w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-black text-base">
                ${student.name.charAt(0)}
              </div>
              <div>
                <h4 class="font-bold text-sm text-slate-900">${student.name}</h4>
                <p class="text-slate-500">${student.department} · ${student.year}</p>
                <p class="text-[11px] text-purple-700 font-semibold">${student.email}</p>
              </div>
            </div>

            <div class="grid grid-cols-2 gap-3">
              <div class="p-3 bg-slate-50 rounded-xl">
                <span class="text-[10px] font-bold text-slate-400 block uppercase">Overall Skill Score</span>
                <span class="text-xl font-black text-purple-700">${student.skillScore}%</span>
              </div>
              <div class="p-3 bg-slate-50 rounded-xl">
                <span class="text-[10px] font-bold text-slate-400 block uppercase">Career Pathway</span>
                <span class="text-xs font-bold text-slate-800">${student.careerRole}</span>
              </div>
            </div>

            <div>
              <label class="block font-bold text-slate-700 mb-1.5">Verified Student Skills</label>
              <div class="flex flex-wrap gap-1.5">
                ${student.skills.map(sk => `
                  <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-indigo-50 text-indigo-700 border border-indigo-100">
                    ${sk}
                  </span>
                `).join('')}
              </div>
            </div>

            <div>
              <label class="block font-bold text-rose-700 mb-1.5">Flagged Skill Gaps for Improvement</label>
              <div class="flex flex-wrap gap-1.5">
                ${(student.gaps || ['Node.js', 'System Design']).map(gap => `
                  <span class="px-2.5 py-1 rounded-lg text-xs font-semibold bg-rose-50 text-rose-700 border border-rose-100">
                    ⚠ ${gap}
                  </span>
                `).join('')}
              </div>
            </div>
          </div>
        `;

        showModal(`Student Profile: ${student.name}`, modalHtml, `
          <a href="#/college/training" onclick="closeModal()" class="px-4 py-2 bg-purple-600 text-white font-bold text-xs rounded-xl hover:bg-purple-700 transition-colors">
            Enroll in Training Program
          </a>
        `);
      });
    });
  }

  wireViewButtons();
}
