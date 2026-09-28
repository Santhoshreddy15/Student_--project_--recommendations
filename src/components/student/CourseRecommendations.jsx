import React, { useState } from 'react';
import { 
  BookOpen, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink, 
  Bookmark, 
  AlertCircle, 
  CheckCircle2, 
  GraduationCap,
  Sparkles,
  Search
} from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';
import Badge from '../common/Badge';

export default function CourseRecommendations({ courses }) {
  const { bookmarks, toggleBookmarkItem } = useRecommendation();
  const [expandedCourseId, setExpandedCourseId] = useState(courses[0]?.id || null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('All');

  const categories = ['All', 'Artificial Intelligence', 'Cloud & Systems', 'Software Engineering', 'Cybersecurity', 'Data Engineering'];

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          course.coreSkills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCat = filterCategory === 'All' || course.category === filterCategory;
    return matchesSearch && matchesCat;
  });

  const getScoreBadge = (score) => {
    if (score >= 85) return <Badge variant="success" size="lg">{score}% High Fit</Badge>;
    if (score >= 70) return <Badge variant="primary" size="lg">{score}% Recommended</Badge>;
    return <Badge variant="warning" size="lg">{score}% Moderate Fit</Badge>;
  };

  return (
    <div className="space-y-6">
      
      {/* Search & Filter bar */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-3 no-print">
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
          <input
            type="text"
            placeholder="Search by title, code, or skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 text-slate-800 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilterCategory(cat)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                filterCategory === cat
                  ? 'bg-primary-600 text-white font-semibold'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Courses List */}
      <div className="space-y-4">
        {filteredCourses.map((course, index) => {
          const isExpanded = expandedCourseId === course.id;
          const isBookmarked = bookmarks.courses?.includes(course.id);
          const hasPrereqWarning = !course.prereqResult.passed;

          return (
            <div 
              key={course.id}
              className={`bg-white dark:bg-slate-900 rounded-xl border transition-all overflow-hidden ${
                isExpanded 
                  ? 'border-primary-300 dark:border-primary-700 shadow-md ring-1 ring-primary-500/20' 
                  : 'border-slate-200 dark:border-slate-800 shadow-sm hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              {/* Main Card Header */}
              <div className="p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3">
                    <span className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold font-mono text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                      #{index + 1}
                    </span>

                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-mono text-xs font-bold text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/60 px-2 py-0.5 rounded border border-primary-100 dark:border-primary-900">
                          {course.code}
                        </span>
                        <span className="text-xs text-slate-500 dark:text-slate-400">
                          {course.type} • {course.credits} Credits • Sem {course.semester}
                        </span>
                        <Badge variant="default" size="sm">{course.difficulty}</Badge>
                      </div>

                      <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">
                        {course.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed max-w-2xl">
                        {course.description}
                      </p>
                    </div>
                  </div>

                  {/* Match Score & Bookmark */}
                  <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 flex-shrink-0">
                    {getScoreBadge(course.matchScore)}
                    
                    <div className="flex items-center gap-2 no-print">
                      <button
                        onClick={() => toggleBookmarkItem('courses', course.id)}
                        className={`p-2 rounded-lg border text-xs flex items-center gap-1 transition-colors ${
                          isBookmarked 
                            ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-800 font-semibold' 
                            : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700'
                        }`}
                        title={isBookmarked ? "Remove bookmark" : "Bookmark this course"}
                      >
                        <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-current' : ''}`} />
                        <span>{isBookmarked ? 'Saved' : 'Save'}</span>
                      </button>

                      <button
                        onClick={() => setExpandedCourseId(isExpanded ? null : course.id)}
                        className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium flex items-center gap-1 transition-colors"
                      >
                        <span>{isExpanded ? 'Hide Syllabus' : 'View Syllabus'}</span>
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Prerequisites status bar */}
                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-slate-600 dark:text-slate-400">Core Skills Taught:</span>
                    <div className="flex items-center gap-1.5 flex-wrap">
                      {course.coreSkills.map((sk, idx) => (
                        <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-2 py-0.5 rounded text-[11px] font-medium">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>

                  {hasPrereqWarning ? (
                    <div className="flex items-center gap-1 text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/60 px-2.5 py-1 rounded border border-amber-200 dark:border-amber-800 text-[11px]">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>Missing Prereqs: {course.prereqResult.missingPrereqs.map(p => p.name).join(', ')}</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-800 text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Prerequisites Fulfilled</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Collapsible Syllabus & MOOC section */}
              {isExpanded && (
                <div className="bg-slate-50/70 dark:bg-slate-850/70 p-5 sm:p-6 border-t border-slate-200 dark:border-slate-800 space-y-5 animate-in fade-in">
                  
                  {/* Syllabus Modules */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2.5 flex items-center gap-1.5">
                      <GraduationCap className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                      <span>Approved University Syllabus (5 Units)</span>
                    </h4>
                    <ul className="space-y-1.5 bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
                      {course.syllabus.map((unit, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                          <span>{unit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* MOOC & Online Certification Equivalents */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs">
                      <span className="font-bold text-slate-900 dark:text-white block mb-1">Recommended MOOC Alternative</span>
                      <p className="font-semibold text-primary-700 dark:text-primary-300">{course.moocAlternative.title}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5">Platform: {course.moocAlternative.platform} • Est. Time: {course.moocAlternative.estimatedHours}</p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs flex flex-col justify-between">
                      <div>
                        <span className="font-bold text-slate-900 dark:text-white block mb-1">SWAYAM / NPTEL Reference</span>
                        <p className="text-slate-600 dark:text-slate-400 text-[11px]">Course Instructor: {course.faculty}</p>
                      </div>
                      <a 
                        href={course.nptelMoocUrl} 
                        target="_blank" 
                        rel="noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 hover:text-primary-800 text-xs font-semibold"
                      >
                        <span>Open NPTEL Syllabus Portal</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>

                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
