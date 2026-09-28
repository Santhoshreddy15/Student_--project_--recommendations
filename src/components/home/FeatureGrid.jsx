import React from 'react';
import { 
  Sliders, 
  BarChart2, 
  FileCheck, 
  Target, 
  Layers, 
  Printer, 
  BookMarked,
  Sparkles
} from 'lucide-react';

export default function FeatureGrid({ setActiveTab }) {
  const features = [
    {
      icon: Target,
      title: "Granular Skill Gap Analysis",
      desc: "Compares student self-ratings against target job benchmarks (Full Stack, ML, Cloud, Cyber, Data) with visual progress meters."
    },
    {
      icon: BarChart2,
      title: "Cosine Vector Matcher",
      desc: "Calculates mathematical similarity between student capability vectors and department elective syllabi."
    },
    {
      icon: FileCheck,
      title: "Prerequisite Rule Enforcer",
      desc: "Evaluates essential foundational dependencies (e.g. Data Structures, Math) and applies calibrated suitability penalties."
    },
    {
      icon: Layers,
      title: "Tailored Capstone Generator",
      desc: "Suggests actionable major & mini engineering project topics specifically tailored to address individual skill deficiencies."
    },
    {
      icon: Sliders,
      title: "Faculty Weight Tuning",
      desc: "Allows academic advisors to adjust linear combination weights (CGPA vs. Skill Match vs. Career Affinity) in real-time."
    },
    {
      icon: Printer,
      title: "Formal Recommendation Reports",
      desc: "Generates clean, printable student advising reports and downloadable JSON data exports for academic viva presentations."
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Core System Features & Modules
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Practical functional modules engineered specifically for engineering curriculum advising.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, idx) => {
            const Icon = f.icon;
            return (
              <div 
                key={idx} 
                className="p-6 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 hover:bg-white dark:hover:bg-slate-800 hover:border-slate-300 dark:hover:border-slate-700 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 flex items-center justify-center mb-4 border border-primary-100 dark:border-primary-900">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">{f.title}</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">{f.desc}</p>
              </div>
            );
          })}
        </div>

        {/* Action strip */}
        <div className="mt-12 bg-slate-900 dark:bg-slate-950 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm border border-slate-800">
          <div>
            <h3 className="text-lg font-bold">Ready to test the recommendation engine?</h3>
            <p className="text-xs text-slate-400 mt-1">
              Start with a sample profile or input custom student grades and technical skills.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('assessment')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-500 font-semibold text-xs text-white transition-colors"
            >
              Start Full Assessment
            </button>
            <button
              onClick={() => setActiveTab('docs')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 font-semibold text-xs text-slate-200 border border-slate-700 transition-colors"
            >
              View Viva Docs
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
