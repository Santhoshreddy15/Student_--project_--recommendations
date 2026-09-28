import React, { useState } from 'react';
import { ArrowDown, Database, Cpu, Monitor } from 'lucide-react';
import Badge from '../common/Badge';

export default function ArchitectureView() {
  const [selectedTier, setSelectedTier] = useState('logic');

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-8">
      
      <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">System Architecture & Data Flow Diagram (DFD)</h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
          3-Tier architectural topology separating student intake, algorithmic compute pipeline, and data stores.
        </p>
      </div>

      {/* 3-Tier Interactive Diagram */}
      <div className="space-y-4">
        
        {/* Tier 1: Presentation Tier */}
        <div 
          onClick={() => setSelectedTier('presentation')}
          className={`p-5 rounded-2xl border cursor-pointer transition-all ${
            selectedTier === 'presentation' 
              ? 'border-primary-500 dark:border-primary-400 bg-primary-50/40 dark:bg-primary-950/40 ring-2 ring-primary-500/20 shadow-sm' 
              : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 flex items-center justify-center">
                <Monitor className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Tier 1: Presentation & Intake Layer (Client)</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">React 18 SPA • Responsive Tailwind Components • State Synchronization</p>
              </div>
            </div>
            <Badge variant="primary" size="sm">Client Tier</Badge>
          </div>

          {selectedTier === 'presentation' && (
            <div className="mt-4 pt-3 border-t border-primary-100 dark:border-primary-900 text-xs text-slate-700 dark:text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-in fade-in">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-primary-100 dark:border-primary-900">
                <strong className="block text-primary-900 dark:text-primary-300 mb-1">Student Portal</strong>
                <span>Multi-step profile intake, 17-skill proficiency self-rating sliders, career goal selector.</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-primary-100 dark:border-primary-900">
                <strong className="block text-primary-900 dark:text-primary-300 mb-1">Results Visualizer</strong>
                <span>Skill gap benchmark meters, course fit score cards, 12-week roadmap milestones.</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-primary-100 dark:border-primary-900">
                <strong className="block text-primary-900 dark:text-primary-300 mb-1">Faculty Portal</strong>
                <span>Real-time algorithm factor sliders, course catalog editor, student directory.</span>
              </div>
            </div>
          )}
        </div>

        {/* Connecting arrow */}
        <div className="flex justify-center my-1 text-slate-300 dark:text-slate-700">
          <ArrowDown className="w-5 h-5" />
        </div>

        {/* Tier 2: Logic / Processing Tier */}
        <div 
          onClick={() => setSelectedTier('logic')}
          className={`p-5 rounded-2xl border cursor-pointer transition-all ${
            selectedTier === 'logic' 
              ? 'border-indigo-500 dark:border-indigo-400 bg-indigo-50/40 dark:bg-indigo-950/40 ring-2 ring-indigo-500/20 shadow-sm' 
              : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300 flex items-center justify-center">
                <Cpu className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Tier 2: Algorithmic Compute & Decision-Support Pipeline</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Vector Space Modeling • Cosine Similarity • Rule Filter • Gap Remediator</p>
              </div>
            </div>
            <Badge variant="purple" size="sm">Logic Tier</Badge>
          </div>

          {selectedTier === 'logic' && (
            <div className="mt-4 pt-3 border-t border-indigo-100 dark:border-indigo-900 text-xs text-slate-700 dark:text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-in fade-in">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-indigo-100 dark:border-indigo-900">
                <strong className="block text-indigo-900 dark:text-indigo-300 mb-1">Cosine Vector Engine</strong>
                <span>Computes dot products between student skill vectors and elective syllabus competency vectors.</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-indigo-100 dark:border-indigo-900">
                <strong className="block text-indigo-900 dark:text-indigo-300 mb-1">Prerequisite Validator</strong>
                <span>Verifies foundational coursework; applies calibrated deductions for prerequisite deficiencies.</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-indigo-100 dark:border-indigo-900">
                <strong className="block text-indigo-900 dark:text-indigo-300 mb-1">Capstone Matcher</strong>
                <span>Cross-references critical skill deficits to recommend targeted project topics bridging the gap.</span>
              </div>
            </div>
          )}
        </div>

        {/* Connecting arrow */}
        <div className="flex justify-center my-1 text-slate-300 dark:text-slate-700">
          <ArrowDown className="w-5 h-5" />
        </div>

        {/* Tier 3: Data Tier */}
        <div 
          onClick={() => setSelectedTier('data')}
          className={`p-5 rounded-2xl border cursor-pointer transition-all ${
            selectedTier === 'data' 
              ? 'border-emerald-500 dark:border-emerald-400 bg-emerald-50/40 dark:bg-emerald-950/40 ring-2 ring-emerald-500/20 shadow-sm' 
              : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 hover:bg-slate-50 dark:hover:bg-slate-800'
          }`}
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                <Database className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">Tier 3: Academic Data Persistence & Schemas</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">Structured JSON Schemas • LocalStorage Cache • REST Adaptable</p>
              </div>
            </div>
            <Badge variant="success" size="sm">Data Tier</Badge>
          </div>

          {selectedTier === 'data' && (
            <div className="mt-4 pt-3 border-t border-emerald-100 dark:border-emerald-900 text-xs text-slate-700 dark:text-slate-300 grid grid-cols-1 sm:grid-cols-3 gap-3 animate-in fade-in">
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900">
                <strong className="block text-emerald-900 dark:text-emerald-300 mb-1">Course Catalog Store</strong>
                <span>8+ university electives with 5-unit syllabus modules, prerequisites, and MOOC mappings.</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900">
                <strong className="block text-emerald-900 dark:text-emerald-300 mb-1">Career Benchmarks</strong>
                <span>Required competency benchmarks and weight distributions for 5 primary tech job roles.</span>
              </div>
              <div className="bg-white dark:bg-slate-800 p-3 rounded-lg border border-emerald-100 dark:border-emerald-900">
                <strong className="block text-emerald-900 dark:text-emerald-300 mb-1">Student Assessment Logs</strong>
                <span>Submitted student profiles, evaluation timestamps, and bookmarked electives/capstones.</span>
              </div>
            </div>
          )}
        </div>

      </div>

    </div>
  );
}
