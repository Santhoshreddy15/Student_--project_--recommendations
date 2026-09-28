import React from 'react';
import { CheckCircle2, AlertCircle, Info } from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';

export default function Toast() {
  const { toast } = useRecommendation();

  if (!toast) return null;

  const icons = {
    success: <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />,
    error: <AlertCircle className="w-5 h-5 text-rose-600 flex-shrink-0" />,
    info: <Info className="w-5 h-5 text-primary-600 flex-shrink-0" />
  };

  const bgColors = {
    success: 'bg-white dark:bg-slate-900 border-emerald-200 dark:border-emerald-800 text-slate-800 dark:text-slate-100 shadow-lg',
    error: 'bg-white dark:bg-slate-900 border-rose-200 dark:border-rose-800 text-slate-800 dark:text-slate-100 shadow-lg',
    info: 'bg-white dark:bg-slate-900 border-primary-200 dark:border-primary-800 text-slate-800 dark:text-slate-100 shadow-lg'
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 max-w-md w-full no-print">
      <div className={`flex items-center gap-3 p-4 rounded-lg border ${bgColors[toast.type || 'info']}`}>
        {icons[toast.type || 'info']}
        <p className="text-sm font-medium flex-1">{toast.message}</p>
      </div>
    </div>
  );
}
