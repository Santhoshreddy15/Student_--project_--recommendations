import React, { useState } from 'react';
import { Sliders, RotateCcw, Check, Sparkles, AlertCircle, Info } from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';
import { DEFAULT_WEIGHTS } from '../../services/recommendationEngine';
import Badge from '../common/Badge';

export default function AlgorithmWeights() {
  const { weights, updateAlgorithmWeights } = useRecommendation();
  const [localWeights, setLocalWeights] = useState({ ...weights });

  const handleChange = (key, val) => {
    setLocalWeights(prev => ({
      ...prev,
      [key]: parseFloat(val)
    }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    updateAlgorithmWeights(localWeights);
  };

  const handleReset = () => {
    setLocalWeights({ ...DEFAULT_WEIGHTS });
    updateAlgorithmWeights(DEFAULT_WEIGHTS);
  };

  const totalWeight = Math.round((localWeights.skillWeight + localWeights.cgpaWeight + localWeights.careerWeight) * 100);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
              <Sliders className="w-5 h-5" />
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Dynamic Recommendation Weight Configurator
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Tune the linear combination factors used by the decision-support engine during scoring calculation.
          </p>
        </div>

        <button
          onClick={handleReset}
          className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center gap-1.5 transition-colors self-start sm:self-auto"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>Reset Defaults</span>
        </button>
      </div>

      {/* Formula Mathematical Preview */}
      <div className="bg-slate-900 dark:bg-slate-950 text-slate-200 rounded-xl p-4 font-mono text-xs overflow-x-auto border border-slate-800">
        <span className="text-slate-400 text-[10px] uppercase font-sans tracking-wider block mb-1">
          Active Mathematical Scoring Equation:
        </span>
        <div className="text-primary-300">
          S(c, s) = ({localWeights.skillWeight.toFixed(2)} · Sim_skills) + ({localWeights.cgpaWeight.toFixed(2)} · Score_cgpa) + ({localWeights.careerWeight.toFixed(2)} · Match_career) - ({localWeights.prereqPenalty.toFixed(2)} · Penalties)
        </div>
      </div>

      {/* Sliders Form */}
      <form onSubmit={handleSave} className="space-y-6">
        
        {/* Weight 1: Skill Cosine Similarity */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-200">w1: Technical Skill Similarity Weight</span>
            <span className="font-mono font-bold text-primary-700 dark:text-primary-300 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
              {(localWeights.skillWeight * 100).toFixed(0)}%
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Governs the influence of cosine similarity between student's self-ratings and course curriculum skill vectors.
          </p>
          <input
            type="range"
            min="0.10"
            max="0.80"
            step="0.05"
            value={localWeights.skillWeight}
            onChange={(e) => handleChange('skillWeight', e.target.value)}
            className="w-full accent-primary-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>

        {/* Weight 2: CGPA Standing */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-200">w2: Academic Standing (CGPA) Factor</span>
            <span className="font-mono font-bold text-primary-700 dark:text-primary-300 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
              {(localWeights.cgpaWeight * 100).toFixed(0)}%
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Normalized grade multiplier giving higher weight to students with strong academic track records for advanced electives.
          </p>
          <input
            type="range"
            min="0.05"
            max="0.50"
            step="0.05"
            value={localWeights.cgpaWeight}
            onChange={(e) => handleChange('cgpaWeight', e.target.value)}
            className="w-full accent-primary-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>

        {/* Weight 3: Career Affinity */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-200">w3: Target Career Synergy Weight</span>
            <span className="font-mono font-bold text-primary-700 dark:text-primary-300 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
              {(localWeights.careerWeight * 100).toFixed(0)}%
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Boosts electives and capstone themes directly relevant to the student's declared career destination.
          </p>
          <input
            type="range"
            min="0.10"
            max="0.60"
            step="0.05"
            value={localWeights.careerWeight}
            onChange={(e) => handleChange('careerWeight', e.target.value)}
            className="w-full accent-primary-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>

        {/* Penalty: Prerequisite Deficiency */}
        <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="font-bold text-slate-800 dark:text-slate-200">p: Prerequisite Violation Penalty</span>
            <span className="font-mono font-bold text-rose-700 dark:text-rose-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
              -{(localWeights.prereqPenalty * 100).toFixed(0)}% / deficiency
            </span>
          </div>
          <p className="text-[11px] text-slate-500 dark:text-slate-400">
            Percentage deducted from recommendation score for each unfulfilled prerequisite skill (level &lt; 2/5).
          </p>
          <input
            type="range"
            min="0.05"
            max="0.30"
            step="0.05"
            value={localWeights.prereqPenalty}
            onChange={(e) => handleChange('prereqPenalty', e.target.value)}
            className="w-full accent-rose-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
          />
        </div>

        {/* Save button */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
            <Info className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span>Sum of positive weights: <strong>{totalWeight}%</strong></span>
          </div>

          <button
            type="submit"
            className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white text-xs font-semibold rounded-lg flex items-center gap-2 transition-colors shadow-sm"
          >
            <Check className="w-4 h-4" />
            <span>Apply Weights & Recalculate</span>
          </button>
        </div>

      </form>
    </div>
  );
}
