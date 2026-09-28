import React from 'react';
import { UserCheck, Cpu, Map, ArrowRight } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Profile & Skill Ingestion",
      icon: UserCheck,
      desc: "Student provides academic data (CGPA, department, semester), selects target career path, and self-evaluates proficiency across 17 technical skills."
    },
    {
      step: "02",
      title: "Hybrid Recommendation Engine",
      icon: Cpu,
      desc: "Computes cosine vector similarity between student skills and course prerequisites, adjusts for CGPA eligibility, and applies prerequisite fulfillment rules."
    },
    {
      step: "03",
      title: "Actionable Roadmaps & Capstone Matching",
      icon: Map,
      desc: "Generates ranked elective recommendations, MOOC alternatives, customized capstone project topics to bridge skill gaps, and a 12-week roadmap."
    }
  ];

  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            How The System Works
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            A three-stage computational pipeline designed for explainability and academic evaluation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx} 
                className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 relative shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold text-slate-200 dark:text-slate-800 font-mono">
                      {item.step}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 flex items-center justify-center border border-primary-100 dark:border-primary-900">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center text-xs font-semibold text-primary-600 dark:text-primary-400">
                  <span>Stage {idx + 1} Module</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
