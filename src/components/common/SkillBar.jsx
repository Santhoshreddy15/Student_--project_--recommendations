import React from 'react';

export default function SkillBar({ skill, current, benchmark, status, percentage }) {
  const getStatusColor = (s) => {
    switch (s) {
      case 'Mastered':
        return 'bg-emerald-500';
      case 'Approaching':
        return 'bg-amber-500';
      default:
        return 'bg-rose-500';
    }
  };

  const getBadgeColor = (s) => {
    switch (s) {
      case 'Mastered':
        return 'text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border-emerald-200 dark:border-emerald-800';
      case 'Approaching':
        return 'text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 border-amber-200 dark:border-amber-800';
      default:
        return 'text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 border-rose-200 dark:border-rose-800';
    }
  };

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-lg p-3.5 hover:border-slate-300 dark:hover:border-slate-700 transition-all">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="font-medium text-sm text-slate-800 dark:text-slate-200">{skill}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className={`text-xs px-2 py-0.5 rounded border font-medium ${getBadgeColor(status)}`}>
            {status}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
            {current} / {benchmark} (Req)
          </span>
        </div>
      </div>

      {/* Progress Bar Container */}
      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2.5 overflow-hidden flex relative">
        {/* Fill based on current student capability */}
        <div 
          className={`h-full rounded-full transition-all duration-500 ${getStatusColor(status)}`}
          style={{ width: `${Math.min(100, (current / 5) * 100)}%` }}
        />
        {/* Benchmark Marker line */}
        <div 
          className="absolute top-0 bottom-0 w-0.5 bg-slate-400 dark:bg-slate-500 z-10"
          style={{ left: `${(benchmark / 5) * 100}%` }}
          title={`Required Benchmark: ${benchmark}/5`}
        />
      </div>

      <div className="flex justify-between items-center mt-1.5 text-[11px] text-slate-400 dark:text-slate-500">
        <span>Novice (1)</span>
        <span>Competent (3)</span>
        <span>Expert (5)</span>
      </div>
    </div>
  );
}
