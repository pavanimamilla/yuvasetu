/**
 * Reusable UI Components & Helpers
 * Clean, modern SaaS widgets, modals, toasts, and progress indicators
 */

// Toast notification trigger
export function showToast(title, message = '', type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  const id = 'toast-' + Date.now();
  toast.id = id;

  const bgColors = {
    success: 'bg-emerald-600 text-white border-emerald-500',
    info: 'bg-indigo-600 text-white border-indigo-500',
    warning: 'bg-amber-600 text-white border-amber-500',
    error: 'bg-rose-600 text-white border-rose-500'
  };

  const icons = {
    success: '<i data-lucide="check-circle" class="w-5 h-5 flex-shrink-0"></i>',
    info: '<i data-lucide="info" class="w-5 h-5 flex-shrink-0"></i>',
    warning: '<i data-lucide="alert-triangle" class="w-5 h-5 flex-shrink-0"></i>',
    error: '<i data-lucide="x-circle" class="w-5 h-5 flex-shrink-0"></i>'
  };

  toast.className = `flex items-start gap-3 p-4 rounded-xl shadow-2xl border ${bgColors[type] || bgColors.success} transform transition-all duration-300 translate-y-4 opacity-0 max-w-sm pointer-events-auto backdrop-blur-md`;
  toast.innerHTML = `
    ${icons[type] || icons.success}
    <div class="flex-1 text-sm">
      <div class="font-bold tracking-tight">${title}</div>
      ${message ? `<div class="mt-0.5 text-xs opacity-90">${message}</div>` : ''}
    </div>
    <button onclick="document.getElementById('${id}').remove()" class="text-white/80 hover:text-white ml-2">
      <i data-lucide="x" class="w-4 h-4"></i>
    </button>
  `;

  container.appendChild(toast);
  if (window.lucide) window.lucide.createIcons();

  // Animate in
  setTimeout(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  }, 20);

  // Auto remove after 4.5s
  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Modal dialog manager
export function showModal(title, contentHtml, footerHtml = '') {
  const modalContainer = document.getElementById('modal-container');
  if (!modalContainer) return;

  modalContainer.innerHTML = `
    <div class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-opacity animate-fade-in" id="active-modal-overlay">
      <div class="bg-white rounded-2xl shadow-2xl border border-slate-100 max-w-lg w-full overflow-hidden transform transition-all duration-200 scale-100 max-h-[90vh] flex flex-col">
        <div class="px-6 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <h3 class="text-lg font-bold text-slate-800">${title}</h3>
          <button id="modal-close-btn" class="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-200/60 transition-colors">
            <i data-lucide="x" class="w-5 h-5"></i>
          </button>
        </div>
        <div class="p-6 overflow-y-auto flex-1">
          ${contentHtml}
        </div>
        ${footerHtml ? `
        <div class="px-6 py-3.5 border-t border-slate-100 bg-slate-50/50 flex justify-end gap-2.5">
          ${footerHtml}
        </div>
        ` : ''}
      </div>
    </div>
  `;

  if (window.lucide) window.lucide.createIcons();

  // Wire close buttons
  document.getElementById('modal-close-btn')?.addEventListener('click', closeModal);
  document.getElementById('active-modal-overlay')?.addEventListener('click', (e) => {
    if (e.target.id === 'active-modal-overlay') closeModal();
  });
}

export function closeModal() {
  const modalContainer = document.getElementById('modal-container');
  if (modalContainer) modalContainer.innerHTML = '';
}

// Circular progress indicator (SVG)
export function renderCircularProgress(percentage, size = 110, strokeWidth = 10, strokeColor = '#4f46e5') {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (percentage / 100) * circumference;

  return `
    <div class="relative flex items-center justify-center" style="width: ${size}px; height: ${size}px;">
      <svg class="circular-progress transform -rotate-90" width="${size}" height="${size}">
        <circle
          stroke="#e2e8f0"
          stroke-width="${strokeWidth}"
          fill="transparent"
          r="${radius}"
          cx="${size / 2}"
          cy="${size / 2}"
        />
        <circle
          stroke="${strokeColor}"
          stroke-width="${strokeWidth}"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${offset}"
          stroke-linecap="round"
          fill="transparent"
          r="${radius}"
          cx="${size / 2}"
          cy="${size / 2}"
        />
      </svg>
      <div class="absolute inset-0 flex flex-col items-center justify-center text-center">
        <span class="text-2xl font-black text-slate-800 leading-none">${percentage}%</span>
        <span class="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1">Match</span>
      </div>
    </div>
  `;
}

// Horizontal progress bar
export function renderProgressBar(percentage, label = '', color = 'bg-indigo-600') {
  return `
    <div class="w-full">
      ${label ? `
      <div class="flex justify-between items-center mb-1.5 text-xs font-semibold text-slate-600">
        <span>${label}</span>
        <span>${percentage}%</span>
      </div>` : ''}
      <div class="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
        <div class="h-full rounded-full ${color} transition-all duration-700 ease-out" style="width: ${percentage}%"></div>
      </div>
    </div>
  `;
}

// Badge helper
export function renderBadge(text, variant = 'primary') {
  const styles = {
    primary: 'bg-indigo-50 text-indigo-700 border-indigo-200/60',
    secondary: 'bg-cyan-50 text-cyan-700 border-cyan-200/60',
    success: 'bg-emerald-50 text-emerald-700 border-emerald-200/60',
    warning: 'bg-amber-50 text-amber-700 border-amber-200/60',
    danger: 'bg-rose-50 text-rose-700 border-rose-200/60',
    purple: 'bg-purple-50 text-purple-700 border-purple-200/60',
    neutral: 'bg-slate-100 text-slate-700 border-slate-200'
  };

  return `<span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[variant] || styles.neutral}">${text}</span>`;
}

// Stat Card helper
export function renderStatCard(title, value, subtitle, icon, trend = null, colorClass = 'text-indigo-600') {
  return `
    <div class="glass-card bg-white p-5 rounded-2xl border border-slate-100/90 shadow-sm relative overflow-hidden group">
      <div class="flex items-center justify-between">
        <div>
          <p class="text-xs font-semibold uppercase tracking-wider text-slate-400">${title}</p>
          <h4 class="text-2xl font-black text-slate-800 mt-1">${value}</h4>
          ${subtitle ? `<p class="text-xs text-slate-500 mt-1">${subtitle}</p>` : ''}
        </div>
        <div class="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center ${colorClass} group-hover:scale-110 transition-transform">
          <i data-lucide="${icon}" class="w-6 h-6"></i>
        </div>
      </div>
      ${trend ? `
      <div class="mt-3 pt-2.5 border-t border-slate-50 flex items-center text-xs font-medium text-emerald-600">
        <i data-lucide="trending-up" class="w-3.5 h-3.5 mr-1"></i>
        <span>${trend}</span>
      </div>` : ''}
    </div>
  `;
}
