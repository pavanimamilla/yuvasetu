/**
 * Master Ecosystem Landing Page
 * Features 3 interactive portal cards, ecosystem flow diagram, and live telemetry
 */

export function renderLanding() {
  return `
    <div class="relative min-h-[calc(100vh-61px)] flex flex-col justify-between overflow-hidden bg-slate-950 text-slate-100 hero-mesh">
      
      <!-- Background Ambient Glow & Grid -->
      <div class="absolute inset-0 grid-pattern pointer-events-none opacity-60"></div>
      
      <!-- Ambient Orb Accents -->
      <div class="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"></div>
      <div class="absolute bottom-10 right-10 w-80 h-80 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Main Content Container -->
      <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 flex-1 flex flex-col justify-center">
        
        <!-- Center Header -->
        <div class="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6 backdrop-blur-md">
            <span class="w-2 h-2 rounded-full bg-indigo-400 animate-ping"></span>
            Next-Gen AI Career Ecosystem Platform
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
            Empowering Talent. <br/>
            <span class="bg-gradient-to-r from-indigo-400 via-purple-300 to-cyan-400 bg-clip-text text-transparent">
              Connecting Opportunities.
            </span>
          </h1>

          <p class="mt-4 text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl mx-auto">
            An AI-powered ecosystem connecting Students, Colleges and Industry. Seamlessly analyze skill gaps, align academic curricula, and accelerate industry hiring.
          </p>

          <!-- Visual Workflow Badge -->
          <div class="mt-8 flex items-center justify-center gap-2 sm:gap-4 text-xs font-medium text-slate-300 flex-wrap">
            <span class="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-1.5 shadow-sm">
              <i data-lucide="compass" class="w-3.5 h-3.5 text-indigo-400"></i> Students Discover
            </span>
            <i data-lucide="arrow-right" class="w-3 h-3 text-slate-500 hidden sm:inline"></i>
            <span class="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-1.5 shadow-sm">
              <i data-lucide="bar-chart-2" class="w-3.5 h-3.5 text-purple-400"></i> Colleges Analyze
            </span>
            <i data-lucide="arrow-right" class="w-3 h-3 text-slate-500 hidden sm:inline"></i>
            <span class="px-3 py-1.5 rounded-lg bg-slate-900/80 border border-slate-800 flex items-center gap-1.5 shadow-sm">
              <i data-lucide="check-circle" class="w-3.5 h-3.5 text-cyan-400"></i> Industry Hires
            </span>
          </div>
        </div>

        <!-- 3 Interactive Ecosystem Cards -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto w-full">
          
          <!-- Panel 1: Student -->
          <div class="gradient-border-card group rounded-2xl bg-slate-900/90 border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-indigo-950/40">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-indigo-700 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30 mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="graduation-cap" class="w-7 h-7"></i>
              </div>
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-2xl font-bold text-white tracking-tight">Student</h3>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">Candidate</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed">
                Discover your skills, identify skill gaps, learn from AI recommendations, and find the right career opportunities.
              </p>

              <ul class="mt-5 space-y-2 text-xs text-slate-300">
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-indigo-400"></i> AI-Powered Skill Assessment
                </li>
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-indigo-400"></i> Real-time Skill Gap Analysis
                </li>
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-indigo-400"></i> Tailored Internships & Jobs
                </li>
              </ul>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a href="#/student/login" class="w-full py-3 px-4 rounded-xl text-center text-sm font-bold btn-glow flex items-center justify-center gap-2">
                <span>Continue as Student</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <div class="flex justify-between items-center text-[11px] text-slate-400 px-1">
                <span>New here?</span>
                <a href="#/student/register" class="text-indigo-400 hover:text-indigo-300 font-semibold underline">Register Now</a>
              </div>
            </div>
          </div>

          <!-- Panel 2: College -->
          <div class="gradient-border-card group rounded-2xl bg-slate-900/90 border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-purple-950/40">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-white shadow-lg shadow-purple-500/30 mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="school" class="w-7 h-7"></i>
              </div>
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-2xl font-bold text-white tracking-tight">College</h3>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30">Institution</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed">
                Manage students, analyze skills, identify skill gaps, and build stronger industry connections.
              </p>

              <ul class="mt-5 space-y-2 text-xs text-slate-300">
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-purple-400"></i> Department Skill Analytics
                </li>
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-purple-400"></i> Institutional Gap Diagnostic
                </li>
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-purple-400"></i> Targeted Training Programs
                </li>
              </ul>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a href="#/college/login" class="w-full py-3 px-4 rounded-xl text-center text-sm font-bold bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:from-purple-500 hover:to-indigo-500 shadow-lg shadow-purple-600/30 flex items-center justify-center gap-2 transition-all">
                <span>Continue as College</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <div class="flex justify-between items-center text-[11px] text-slate-400 px-1">
                <span>Institutional account</span>
                <a href="#/college/register" class="text-purple-400 hover:text-purple-300 font-semibold underline">Register Campus</a>
              </div>
            </div>
          </div>

          <!-- Panel 3: Industry / Company -->
          <div class="gradient-border-card group rounded-2xl bg-slate-900/90 border border-slate-800/80 p-6 sm:p-8 flex flex-col justify-between hover:-translate-y-2 transition-all duration-300 backdrop-blur-xl shadow-xl shadow-cyan-950/40">
            <div>
              <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/30 mb-6 group-hover:scale-110 transition-transform">
                <i data-lucide="building-2" class="w-7 h-7"></i>
              </div>
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-2xl font-bold text-white tracking-tight">Industry / Company</h3>
                <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">Recruiter</span>
              </div>
              <p class="text-sm text-slate-300 leading-relaxed">
                Find skilled candidates, create jobs and internships, and connect with the right talent faster.
              </p>

              <ul class="mt-5 space-y-2 text-xs text-slate-300">
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-cyan-400"></i> AI Candidate Matching Score
                </li>
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-cyan-400"></i> Role Skill Benchmarking
                </li>
                <li class="flex items-center gap-2">
                  <i data-lucide="check" class="w-3.5 h-3.5 text-cyan-400"></i> Direct Campus Pipeline
                </li>
              </ul>
            </div>

            <div class="mt-8 pt-6 border-t border-slate-800/80 flex flex-col gap-2.5">
              <a href="#/company/login" class="w-full py-3 px-4 rounded-xl text-center text-sm font-bold bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-500 hover:to-blue-500 shadow-lg shadow-cyan-600/30 flex items-center justify-center gap-2 transition-all">
                <span>Continue as Industry</span>
                <i data-lucide="arrow-right" class="w-4 h-4"></i>
              </a>
              <div class="flex justify-between items-center text-[11px] text-slate-400 px-1">
                <span>Hiring partner?</span>
                <a href="#/company/register" class="text-cyan-400 hover:text-cyan-300 font-semibold underline">Register Company</a>
              </div>
            </div>
          </div>

        </div>

        <!-- Ecosystem Live Telemetry Banner -->
        <div class="mt-16 max-w-4xl mx-auto w-full grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-md text-center">
          <div>
            <div class="text-2xl font-extrabold text-white">2,450+</div>
            <div class="text-[11px] font-medium text-slate-400 mt-0.5">Students Enrolled</div>
          </div>
          <div>
            <div class="text-2xl font-extrabold text-indigo-400">1,820</div>
            <div class="text-[11px] font-medium text-slate-400 mt-0.5">Assessed with AI</div>
          </div>
          <div>
            <div class="text-2xl font-extrabold text-cyan-400">94%</div>
            <div class="text-[11px] font-medium text-slate-400 mt-0.5">Candidate Match Accuracy</div>
          </div>
          <div>
            <div class="text-2xl font-extrabold text-purple-400">32+</div>
            <div class="text-[11px] font-medium text-slate-400 mt-0.5">Active Industry Partners</div>
          </div>
        </div>

      </div>

      <!-- Footer -->
      <footer class="relative z-10 border-t border-slate-900/80 px-6 py-4 text-center text-xs text-slate-400">
        AI-Powered Student–College–Industry Career Ecosystem · Built for Hackathon Excellence
      </footer>

    </div>
  `;
}
