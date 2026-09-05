/**
 * Student AI Skill Assessment Engine
 * Step-by-step interactive test runner with real-time progress, option selection, and scoring
 */

import { store } from '../../store.js';
import { showToast } from '../../components/ui.js';

let currentQuestionIndex = 0;
let userAnswers = {};
let isAssessmentStarted = false;

export function renderStudentAssessment() {
  const data = store.get();
  const questions = data.assessmentQuestions || [];
  const previousResult = data.assessmentResult;

  // Check if we are in progress or starting fresh
  setTimeout(() => initAssessmentEvents(questions), 10);

  if (!isAssessmentStarted) {
    return `
      <div class="max-w-3xl mx-auto space-y-6 animate-fade-in">
        
        <!-- Welcome Card -->
        <div class="glass-card bg-white p-8 rounded-3xl border border-slate-100 shadow-xl text-center relative overflow-hidden">
          <div class="w-16 h-16 rounded-3xl bg-gradient-to-tr from-indigo-600 via-purple-600 to-cyan-500 text-white flex items-center justify-center mx-auto mb-5 shadow-lg shadow-indigo-500/30">
            <i data-lucide="sparkles" class="w-8 h-8"></i>
          </div>

          <h1 class="text-3xl font-black text-slate-900 tracking-tight">AI Skill Assessment</h1>
          <p class="text-slate-500 text-sm max-w-lg mx-auto mt-2 leading-relaxed">
            Evaluate your technical depth, algorithmic problem solving, and workplace readiness. Our AI benchmark engine automatically maps your answers to detect career skill gaps.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8 max-w-xl mx-auto text-left">
            <div class="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <i data-lucide="help-circle" class="w-5 h-5 text-indigo-600 mx-auto mb-1"></i>
              <div class="text-xs font-bold text-slate-800">${questions.length} Adaptive Questions</div>
              <div class="text-[10px] text-slate-400">Technical & Logical</div>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <i data-lucide="timer" class="w-5 h-5 text-purple-600 mx-auto mb-1"></i>
              <div class="text-xs font-bold text-slate-800">~10 Minutes</div>
              <div class="text-[10px] text-slate-400">Untimed / Self-paced</div>
            </div>

            <div class="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <i data-lucide="award" class="w-5 h-5 text-emerald-600 mx-auto mb-1"></i>
              <div class="text-xs font-bold text-slate-800">Verified Badge</div>
              <div class="text-[10px] text-slate-400">Shared with Recruiters</div>
            </div>
          </div>

          ${previousResult.taken ? `
            <div class="mb-6 p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100 max-w-md mx-auto flex items-center justify-between text-left">
              <div>
                <p class="text-xs font-bold text-indigo-950">Previous Assessment Score</p>
                <p class="text-[11px] text-indigo-800">Completed on ${previousResult.date}</p>
              </div>
              <div class="text-right">
                <span class="text-xl font-black text-indigo-600">${previousResult.overallScore}</span>
                <span class="text-xs text-slate-400">/ 100</span>
                <a href="#/student/assessment-result" class="block text-[11px] font-bold text-indigo-700 hover:underline">View Breakdown</a>
              </div>
            </div>
          ` : ''}

          <div class="flex items-center justify-center gap-3">
            <button id="start-assessment-btn" class="btn-glow px-8 py-3.5 rounded-xl text-sm font-extrabold flex items-center gap-2">
              <span>Start Assessment</span>
              <i data-lucide="arrow-right" class="w-4 h-4"></i>
            </button>
          </div>
        </div>

      </div>
    `;
  }

  // Active Quiz View (1 question at a time)
  const q = questions[currentQuestionIndex];
  const progressPercent = Math.round(((currentQuestionIndex + 1) / questions.length) * 100);

  return `
    <div class="max-w-2xl mx-auto space-y-6 animate-fade-in">
      
      <!-- Top Test Status Bar -->
      <div class="bg-white p-4 rounded-2xl border border-slate-100 shadow-sm flex items-center justify-between">
        <div>
          <span class="text-[11px] font-bold uppercase tracking-wider text-indigo-600">${q.category}</span>
          <h4 class="text-xs font-bold text-slate-800">Question ${currentQuestionIndex + 1} of ${questions.length}</h4>
        </div>
        <div class="w-36 text-right">
          <div class="text-[11px] font-bold text-slate-500 mb-1">${progressPercent}% Completed</div>
          <div class="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
            <div class="h-full bg-indigo-600 rounded-full transition-all duration-300" style="width: ${progressPercent}%"></div>
          </div>
        </div>
      </div>

      <!-- Question Card -->
      <div class="glass-card bg-white p-6 sm:p-8 rounded-3xl border border-slate-100 shadow-lg space-y-6">
        <div>
          <span class="text-[10px] font-bold px-2 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
            ${q.role}
          </span>
          <h2 class="text-base sm:text-lg font-bold text-slate-900 mt-3 leading-relaxed">
            ${q.question}
          </h2>
        </div>

        <!-- Options list -->
        <div class="space-y-3" id="options-container">
          ${q.options.map((opt, idx) => {
            const isSelected = userAnswers[currentQuestionIndex] === idx;
            return `
              <div class="option-item p-4 rounded-2xl border cursor-pointer transition-all flex items-start gap-3.5 ${isSelected ? 'border-indigo-600 bg-indigo-50/50 shadow-sm' : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'}" data-index="${idx}">
                <div class="w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${isSelected ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300'}">
                  ${isSelected ? '<i data-lucide="check" class="w-3 h-3"></i>' : `<span class="text-[10px] font-bold text-slate-400">${String.fromCharCode(65 + idx)}</span>`}
                </div>
                <span class="text-xs sm:text-sm font-medium text-slate-800 leading-relaxed">${opt}</span>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Navigation Buttons -->
        <div class="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <button id="prev-question-btn" class="px-4 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 transition-colors flex items-center gap-1.5 ${currentQuestionIndex === 0 ? 'opacity-40 cursor-not-allowed' : ''}">
            <i data-lucide="arrow-left" class="w-3.5 h-3.5"></i>
            <span>Previous</span>
          </button>

          ${currentQuestionIndex === questions.length - 1 ? `
            <button id="submit-assessment-btn" class="btn-glow px-6 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2">
              <i data-lucide="check-circle" class="w-4 h-4"></i>
              <span>Submit Assessment</span>
            </button>
          ` : `
            <button id="next-question-btn" class="btn-glow px-5 py-2.5 rounded-xl text-xs font-bold flex items-center gap-1.5">
              <span>Next Question</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
          `}
        </div>

      </div>

    </div>
  `;
}

function initAssessmentEvents(questions) {
  if (window.lucide) window.lucide.createIcons();

  document.getElementById('start-assessment-btn')?.addEventListener('click', () => {
    isAssessmentStarted = true;
    currentQuestionIndex = 0;
    userAnswers = {};
    window.dispatchEvent(new Event('hashchange'));
  });

  document.querySelectorAll('.option-item').forEach(item => {
    item.addEventListener('click', (e) => {
      const idx = parseInt(e.currentTarget.dataset.index, 10);
      userAnswers[currentQuestionIndex] = idx;
      window.dispatchEvent(new Event('hashchange'));
    });
  });

  document.getElementById('prev-question-btn')?.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
      currentQuestionIndex--;
      window.dispatchEvent(new Event('hashchange'));
    }
  });

  document.getElementById('next-question-btn')?.addEventListener('click', () => {
    if (userAnswers[currentQuestionIndex] === undefined) {
      showToast('Select an Option', 'Please choose an answer before moving forward.', 'warning');
      return;
    }
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      window.dispatchEvent(new Event('hashchange'));
    }
  });

  document.getElementById('submit-assessment-btn')?.addEventListener('click', () => {
    if (userAnswers[currentQuestionIndex] === undefined) {
      showToast('Select an Option', 'Please answer the final question.', 'warning');
      return;
    }

    // Process submission in store
    store.submitAssessment(userAnswers);
    isAssessmentStarted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    showToast('Assessment Completed!', 'AI Skill Score & Gap Matrix Generated.', 'success');
    window.location.hash = '#/student/assessment-result';
  });
}
