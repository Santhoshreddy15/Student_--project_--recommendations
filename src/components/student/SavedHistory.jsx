import React from 'react';
import { Bookmark, BookOpen, Layers, Trash2, ArrowRight } from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';
import { MOCK_COURSES } from '../../data/mockCourses';
import { MOCK_PROJECTS } from '../../data/mockProjects';
import Badge from '../common/Badge';

export default function SavedHistory() {
  const { bookmarks, toggleBookmarkItem, courses } = useRecommendation();

  const savedCoursesList = courses.filter(c => bookmarks.courses?.includes(c.id));
  const savedProjectsList = MOCK_PROJECTS.filter(p => bookmarks.projects?.includes(p.id));

  return (
    <div className="space-y-8">
      
      {/* Saved Courses Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary-600 dark:text-primary-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Saved Elective Courses</h3>
          </div>
          <Badge variant="primary" size="sm">{savedCoursesList.length} Courses</Badge>
        </div>

        {savedCoursesList.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-400 dark:text-slate-500">
            No courses bookmarked yet. Click the "Save" button on any recommended course card to bookmark it here.
          </div>
        ) : (
          <div className="space-y-3">
            {savedCoursesList.map(course => (
              <div key={course.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 flex items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs font-bold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/60 px-2 py-0.5 rounded border border-primary-200 dark:border-primary-900">
                      {course.code}
                    </span>
                    <span className="text-xs font-semibold text-slate-900 dark:text-white">{course.title}</span>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{course.department} • {course.credits} Credits</p>
                </div>

                <button
                  onClick={() => toggleBookmarkItem('courses', course.id)}
                  className="p-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg text-xs flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Remove</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Saved Projects Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-4">
          <div className="flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Saved Capstone Project Topics</h3>
          </div>
          <Badge variant="purple" size="sm">{savedProjectsList.length} Topics</Badge>
        </div>

        {savedProjectsList.length === 0 ? (
          <div className="py-8 text-center text-xs text-slate-400 dark:text-slate-500">
            No capstone projects bookmarked yet.
          </div>
        ) : (
          <div className="space-y-3">
            {savedProjectsList.map(proj => (
              <div key={proj.id} className="p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">{proj.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{proj.type} • {proj.domain}</p>
                </div>

                <button
                  onClick={() => toggleBookmarkItem('projects', proj.id)}
                  className="p-2 text-rose-600 hover:bg-rose-50 dark:hover:bg-rose-950/50 rounded-lg text-xs flex items-center gap-1 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                  <span>Remove</span>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}
