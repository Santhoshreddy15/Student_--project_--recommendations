import React from 'react';
import { Layers, Bookmark, CheckCircle2, ArrowRight, Sparkles, Cpu, Code2 } from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';
import Badge from '../common/Badge';

export default function ProjectSuggestions({ projects }) {
  const { bookmarks, toggleBookmarkItem } = useRecommendation();

  return (
    <div className="space-y-6">
      
      {/* Banner */}
      <div className="bg-primary-50/50 dark:bg-primary-950/40 border border-primary-200 dark:border-primary-900/60 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold text-primary-900 dark:text-primary-200 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span>Gap-Remediating Capstone Suggestions</span>
          </h3>
          <p className="text-xs text-primary-800 dark:text-primary-300 mt-1">
            These major and mini project ideas are selected to directly bridge your identified technical skill gaps.
          </p>
        </div>
        <Badge variant="primary" size="md">
          {projects.length} Tailored Topics
        </Badge>
      </div>

      {/* Projects Grid */}
      <div className="space-y-5">
        {projects.map((project, index) => {
          const isBookmarked = bookmarks.projects?.includes(project.id);

          return (
            <div 
              key={project.id}
              className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all space-y-4"
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-1.5">
                    <Badge variant="purple" size="sm">{project.type}</Badge>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">{project.domain}</span>
                    <Badge variant="default" size="sm">{project.difficulty}</Badge>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  <Badge variant="success" size="md">
                    {project.relevanceScore}% Gap Fit
                  </Badge>
                  
                  <button
                    onClick={() => toggleBookmarkItem('projects', project.id)}
                    className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition-colors no-print ${
                      isBookmarked 
                        ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800 font-semibold' 
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                    }`}
                  >
                    <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                    <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                  </button>
                </div>
              </div>

              {/* Abstract */}
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.abstract}
              </p>

              {/* Target skill gaps bridged */}
              <div className="p-3.5 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700 text-xs">
                <span className="font-bold text-slate-800 dark:text-slate-200 block mb-2">
                  Key Modules to Implement:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {project.keyModules.map((mod, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-xs">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:text-primary-400 mt-1.5 flex-shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech stack & Expected outcomes */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  <span className="font-semibold text-slate-600 dark:text-slate-400">Tech Stack:</span>
                  {project.techStack.map((tech, idx) => (
                    <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-[11px] px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="text-slate-500 dark:text-slate-400 text-[11px]">
                  <span>Target Outcome: <strong>{project.expectedOutcomes}</strong></span>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}
