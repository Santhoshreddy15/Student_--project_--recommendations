import React from 'react';
import { AlertTriangle, CheckCircle2, ArrowRight } from 'lucide-react';
import { VIVA_SECTIONS } from '../../data/projectDocs';

export default function ProblemSolution() {
  return (
    <section className="py-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Problem Statement & Proposed Solution
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Why traditional elective selection fails and how algorithmic profiling delivers actionable clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Traditional Challenges */}
          <div className="bg-rose-50/40 dark:bg-rose-950/20 border border-rose-200/80 dark:border-rose-900/40 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-rose-700 dark:text-rose-400 font-bold text-base mb-4">
              <AlertTriangle className="w-5 h-5" />
              <h3>Existing Limitations in Academic Advising</h3>
            </div>
            
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                <span><strong>Uninformed Elective Picking:</strong> Students select courses based on peer popularity rather than prerequisite mastery and career goals.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                <span><strong>Hidden Skill Deficiencies:</strong> Gaps in essential competencies remain unmeasured until final-semester placement interviews.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                <span><strong>Disconnected Final Projects:</strong> Capstone projects are chosen randomly without reinforcing weak technical domains.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 flex-shrink-0" />
                <span><strong>Manual Counseling Bottleneck:</strong> Faculty advisors lack tools to analyze multi-dimensional skill vectors across entire student batches.</span>
              </li>
            </ul>
          </div>

          {/* EduPath Proposed System */}
          <div className="bg-primary-50/40 dark:bg-primary-950/20 border border-primary-200/80 dark:border-primary-900/40 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-2.5 text-primary-800 dark:text-primary-300 font-bold text-base mb-4">
              <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-primary-400" />
              <h3>EduPath Intelligent Recommendation Solution</h3>
            </div>
            
            <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span><strong>Multi-Criteria Scoring:</strong> Cosine vector similarity weighted by CGPA and prerequisite compliance formulas.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span><strong>Visual Skill Gap Benchmarking:</strong> Real-time comparison against 5 industry job roles with visual progress meters.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span><strong>Gap-Targeted Capstone Generator:</strong> Suggests realistic major/minor project titles specifically designed to eliminate skill gaps.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-2 flex-shrink-0" />
                <span><strong>Faculty Dynamic Controls:</strong> Department chairs can adjust algorithmic weights and monitor student demand trends.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Existing vs Proposed Table */}
        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
            <thead className="bg-slate-100/80 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-3.5">Evaluation Parameter</th>
                <th className="p-3.5 text-rose-700 dark:text-rose-400">Conventional Advising</th>
                <th className="p-3.5 text-primary-800 dark:text-primary-300">EduPath System</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
              {VIVA_SECTIONS.existingVsProposed.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-3.5 font-medium text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-850/50">{row.parameter}</td>
                  <td className="p-3.5 text-slate-600 dark:text-slate-400">{row.existing}</td>
                  <td className="p-3.5 text-primary-900 dark:text-primary-300 font-medium">{row.proposed}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
