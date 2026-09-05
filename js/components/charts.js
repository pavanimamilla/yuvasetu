/**
 * Chart.js Visualization Helpers
 * Clean rendering for Radar, Bar, Doughnut, and Line charts
 */

const activeCharts = {};

function safeDestroyChart(canvasId) {
  if (activeCharts[canvasId]) {
    try {
      activeCharts[canvasId].destroy();
    } catch (e) {
      console.warn('Error destroying chart', e);
    }
    delete activeCharts[canvasId];
  }
}

export function createRadarChart(canvasId, labels, data, datasetLabel = 'Skill Score') {
  safeDestroyChart(canvasId);
  const ctx = document.getElementById(canvasId);
  if (!ctx || !window.Chart) return;

  activeCharts[canvasId] = new window.Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels,
      datasets: [{
        label: datasetLabel,
        data: data,
        backgroundColor: 'rgba(99, 102, 241, 0.25)',
        borderColor: '#6366f1',
        borderWidth: 2.5,
        pointBackgroundColor: '#4f46e5',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#4f46e5',
        pointRadius: 4
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: 'rgba(203, 213, 225, 0.4)' },
          grid: { color: 'rgba(203, 213, 225, 0.4)' },
          suggestedMin: 30,
          suggestedMax: 100,
          ticks: {
            backdropColor: 'transparent',
            color: '#64748b',
            font: { size: 10 }
          },
          pointLabels: {
            color: '#1e293b',
            font: { size: 12, weight: '600' }
          }
        }
      },
      plugins: {
        legend: { display: false }
      }
    }
  });
}

export function createBarChart(canvasId, labels, data, label = 'Students', bgColors = null) {
  safeDestroyChart(canvasId);
  const ctx = document.getElementById(canvasId);
  if (!ctx || !window.Chart) return;

  const defaultColors = [
    '#4f46e5', '#06b6d4', '#8b5cf6', '#10b981', '#f59e0b', '#ec4899', '#6366f1'
  ];

  activeCharts[canvasId] = new window.Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [{
        label: label,
        data: data,
        backgroundColor: bgColors || defaultColors.slice(0, data.length),
        borderRadius: 8,
        borderSkipped: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: {
          grid: { display: false },
          ticks: { color: '#64748b', font: { size: 11, weight: '500' } }
        },
        y: {
          grid: { color: 'rgba(241, 245, 249, 0.8)' },
          ticks: { color: '#64748b', font: { size: 11 } }
        }
      }
    }
  });
}

export function createDoughnutChart(canvasId, labels, data, colors = null) {
  safeDestroyChart(canvasId);
  const ctx = document.getElementById(canvasId);
  if (!ctx || !window.Chart) return;

  const defaultColors = ['#4f46e5', '#06b6d4', '#10b981', '#f59e0b', '#8b5cf6'];

  activeCharts[canvasId] = new window.Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors || defaultColors,
        borderWidth: 2,
        borderColor: '#ffffff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '72%',
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            usePointStyle: true,
            boxWidth: 8,
            font: { size: 11, weight: '500' },
            color: '#475569'
          }
        }
      }
    }
  });
}
