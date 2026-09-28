import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Target, 
  Layers, 
  Calendar, 
  Printer, 
  Download, 
  RefreshCw, 
  CheckCircle2, 
  AlertCircle,
  FileText,
  Bookmark
} from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';
import { exportService } from '../../services/exportService';
import SkillBar from '../common/SkillBar';
import Badge from '../common/Badge';
import CourseRecommendations from './CourseRecommendations';
import ProjectSuggestions from './ProjectSuggestions';
import CareerRoadmap from './CareerRoadmap';
import SavedHistory from './SavedHistory';

export default function ResultsOverview({ setActiveTab }) {
  const { recommendationResult, studentProfile } = useRecommendation();
  const [activeSubTab, setActiveSubTab] = useState('courses'); // 'courses' | 'projects' | 'roadmap' | 'saved'

  if (!recommendationResult) {
    return (
      <div className="max-w-4xl mx-auto py-16 text-center">
        <p className="text-slate-500 text-sm">No assessment results found. Please take the assessment first.</p>
        <button
          onClick={() => setActiveTab('assessment')}
          className="mt-4 px-4 py-2 bg-primary-600 text-white rounded-lg text-xs font-semibold"
        >
          Go to Assessment
        </button>
      </div>
    );
  }

  const { targetCareer, skillGapAnalysis, topCourses, recommendedCourses, recommendedProjects, careerRoadmap } = recommendationResult;

  const handlePrint = () => {
    exportService.printReport(studentProfile, recommendationResult);
  };

  const handleExport = () => {
    exportService.downloadJsonReport(studentProfile, recommendationResult);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Top Banner / Student Summary */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">
                Evaluation Output Report
              </span>
              <Badge variant="primary" size="sm">
                Semester {studentProfile.semester} • {studentProfile.department}
              </Badge>
            </div>
            
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Recommendation Profile: {studentProfile.name}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Roll No: <span className="font-mono font-semibold text-slate-700 dark:text-slate-300">{studentProfile.rollNumber}</span> • CGPA: <strong className="text-slate-800 dark:text-slate-200">{studentProfile.cgpa}</strong> • Target Career: <strong className="text-primary-700 dark:text-primary-400">{targetCareer.title}</strong>
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-2 no-print flex-wrap">
            <button
              onClick={() => setActiveTab('assessment')}
              className="px-3 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5 text-slate-500" />
              <span>Retake Form</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-2 bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg text-xs font-medium flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Printer className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
              <span>Print Report</span>
            </button>

            <button
              onClick={handleExport}
              className="px-3.5 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Export JSON</span>
            </button>
          </div>
        </div>

        {/* Readiness Score & Gap Metric Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-6">
          <div className="bg-primary-50/60 dark:bg-primary-950/40 border border-primary-200 dark:border-primary-900/60 rounded-xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-primary-800 dark:text-primary-300">
              Role Readiness Index
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-primary-900 dark:text-primary-200">{skillGapAnalysis.readinessIndex}%</span>
              <span className="text-xs text-primary-700 dark:text-primary-400">Target Fit</span>
            </div>
            <p className="text-[11px] text-primary-800/80 dark:text-primary-400 mt-1">
              Based on weighted benchmarks for {targetCareer.title}
            </p>
          </div>

          <div className="bg-emerald-50/60 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-900/60 rounded-xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
              Mastered Skills
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-emerald-900 dark:text-emerald-200">{skillGapAnalysis.masteredCount}</span>
              <span className="text-xs text-emerald-700 dark:text-emerald-400">of {skillGapAnalysis.gaps.length} Core Areas</span>
            </div>
            <p className="text-[11px] text-emerald-800/80 dark:text-emerald-400 mt-1">
              Meet or exceed required industry benchmarks
            </p>
          </div>

          <div className="bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 rounded-xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800 dark:text-amber-300">
              Critical Skill Gaps
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-amber-900 dark:text-amber-200">{skillGapAnalysis.criticalGaps.length}</span>
              <span className="text-xs text-amber-700 dark:text-amber-400">Areas Requiring Focus</span>
            </div>
            <p className="text-[11px] text-amber-800/80 dark:text-amber-400 mt-1">
              Targeted in recommended capstones & electives
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Suggested Electives
            </span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-slate-900 dark:text-white">{recommendedCourses.length}</span>
              <span className="text-xs text-slate-500">Ranked Syllabi</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Top match: <strong>{topCourses[0]?.code} ({topCourses[0]?.matchScore}%)</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Skill Gap Visualizer Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800 mb-6">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Skill Gap Benchmark Analysis ({targetCareer.title})
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Comparison of current student proficiency level against standard entry-level hiring benchmarks.
            </p>
          </div>
          <Badge variant="primary" size="sm">
            Target Domain: {targetCareer.domain}
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skillGapAnalysis.gaps.map((gapItem, idx) => (
            <SkillBar
              key={idx}
              skill={gapItem.skill}
              current={gapItem.current}
              benchmark={gapItem.benchmark}
              status={gapItem.status}
              percentage={gapItem.percentage}
            />
          ))}
        </div>
      </div>

      {/* Sub navigation for Detailed Breakdown */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 no-print space-x-2 sm:space-x-4">
        <button
          onClick={() => setActiveSubTab('courses')}
          className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors ${
            activeSubTab === 'courses'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Recommended Electives & MOOCs ({recommendedCourses.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('projects')}
          className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors ${
            activeSubTab === 'projects'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Tailored Capstones ({recommendedProjects.length})</span>
        </button>

        <button
          onClick={() => setActiveSubTab('roadmap')}
          className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors ${
            activeSubTab === 'roadmap'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Calendar className="w-4 h-4" />
          <span>12-Week Roadmap</span>
        </button>

        <button
          onClick={() => setActiveSubTab('saved')}
          className={`pb-3 px-3 sm:px-4 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 transition-colors ${
            activeSubTab === 'saved'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Bookmark className="w-4 h-4" />
          <span>Saved Bookmarks</span>
        </button>
      </div>

      {/* Sub tab views */}
      {activeSubTab === 'courses' && (
        <CourseRecommendations courses={recommendedCourses} />
      )}

      {activeSubTab === 'projects' && (
        <ProjectSuggestions projects={recommendedProjects} />
      )}

      {activeSubTab === 'roadmap' && (
        <CareerRoadmap phases={careerRoadmap} careerTitle={targetCareer.title} />
      )}

      {activeSubTab === 'saved' && (
        <SavedHistory />
      )}

    </div>
  );
}
