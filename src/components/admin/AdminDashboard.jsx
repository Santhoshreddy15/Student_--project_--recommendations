import React, { useState } from 'react';
import { 
  BarChart3, 
  Sliders, 
  BookOpen, 
  Users, 
  PieChart, 
  TrendingUp, 
  Award, 
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';
import { MOCK_CAREERS } from '../../data/mockCareers';
import AlgorithmWeights from './AlgorithmWeights';
import CourseManager from './CourseManager';
import StudentDirectory from './StudentDirectory';
import Badge from '../common/Badge';

export default function AdminDashboard({ setActiveTab }) {
  const { students, courses, weights } = useRecommendation();
  const [activeAdminTab, setActiveAdminTab] = useState('analytics'); // 'analytics' | 'weights' | 'courses' | 'students'

  // Career distribution stats
  const careerCounts = {};
  MOCK_CAREERS.forEach(c => careerCounts[c.id] = 0);
  students.forEach(s => {
    if (careerCounts[s.targetCareerId] !== undefined) {
      careerCounts[s.targetCareerId]++;
    }
  });

  const avgCgpa = (students.reduce((acc, s) => acc + s.cgpa, 0) / (students.length || 1)).toFixed(2);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Faculty Portal Top Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="primary" size="sm">Faculty & HOD Management Portal</Badge>
              <span className="text-xs text-slate-500 dark:text-slate-400">Academic Year 2025 - 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              Department Advising & Algorithm Control
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              Supervise student career preferences, configure recommendation weights, and maintain elective course offerings.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Badge variant="success" size="md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 mr-1.5" />
              Engine Online & Healthy
            </Badge>
          </div>
        </div>

        {/* Top Metric Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Evaluated Students</span>
            <p className="text-2xl font-bold text-slate-900 dark:text-white mt-1">{students.length}</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Submitted Profiles</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Elective Catalog</span>
            <p className="text-2xl font-bold text-primary-700 dark:text-primary-400 mt-1">{courses.length}</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Active Syllabus Units</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Batch Avg CGPA</span>
            <p className="text-2xl font-bold text-emerald-700 dark:text-emerald-400 mt-1">{avgCgpa}</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Academic Baseline</p>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 rounded-xl p-4">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Skill Factor Weight</span>
            <p className="text-2xl font-bold text-indigo-700 dark:text-indigo-400 mt-1">{(weights.skillWeight * 100).toFixed(0)}%</p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">Scoring Model</p>
          </div>
        </div>
      </div>

      {/* Admin Tab Navigation */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 space-x-2 sm:space-x-4 overflow-x-auto pb-1 sm:pb-0">
        <button
          onClick={() => setActiveAdminTab('analytics')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
            activeAdminTab === 'analytics'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>Department Demand Analytics</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('weights')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
            activeAdminTab === 'weights'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>Algorithm Formula Weights</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('courses')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
            activeAdminTab === 'courses'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>Elective Catalog Manager</span>
        </button>

        <button
          onClick={() => setActiveAdminTab('students')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
            activeAdminTab === 'students'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Users className="w-4 h-4" />
          <span>Student Directory</span>
        </button>
      </div>

      {/* Admin Content Area */}
      {activeAdminTab === 'analytics' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Career Aspiration Distribution */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Student Career Goal Distribution</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">Aggregate career preferences declared during student intakes.</p>

              <div className="space-y-3.5">
                {MOCK_CAREERS.map(c => {
                  const count = careerCounts[c.id] || 0;
                  const pct = Math.round((count / (students.length || 1)) * 100);
                  return (
                    <div key={c.id}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-semibold text-slate-800 dark:text-slate-200">{c.title}</span>
                        <span className="text-slate-500 dark:text-slate-400 font-mono">{count} students ({pct}%)</span>
                      </div>
                      <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-primary-600 rounded-full transition-all duration-500"
                          style={{ width: `${Math.max(5, pct)}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Department Skill Gap Trends */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">Most Common Technical Skill Deficiencies</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">Core competencies where student self-ratings are furthest below hiring benchmarks.</p>

                <div className="space-y-2.5 text-xs">
                  <div className="p-3 rounded-lg bg-rose-50/60 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-rose-900 dark:text-rose-300">Cloud & DevOps / Docker</span>
                      <p className="text-[11px] text-rose-700 dark:text-rose-400">Average student level: 1.8 / 4.0 Benchmark</p>
                    </div>
                    <Badge variant="danger" size="sm">Critical Priority</Badge>
                  </div>

                  <div className="p-3 rounded-lg bg-amber-50/60 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-amber-900 dark:text-amber-300">Deep Learning & PyTorch</span>
                      <p className="text-[11px] text-amber-700 dark:text-amber-400">Average student level: 2.1 / 3.5 Benchmark</p>
                    </div>
                    <Badge variant="warning" size="sm">Moderate Gap</Badge>
                  </div>

                  <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-between">
                    <div>
                      <span className="font-bold text-slate-800 dark:text-slate-200">REST APIs & Microservices</span>
                      <p className="text-[11px] text-slate-600 dark:text-slate-400">Average student level: 3.4 / 4.0 Benchmark</p>
                    </div>
                    <Badge variant="primary" size="sm">Stable Area</Badge>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                <span>Faculty Advising Action:</span>
                <span className="text-primary-700 dark:text-primary-400 font-semibold">Organize Docker Workshop</span>
              </div>
            </div>

          </div>
        </div>
      )}

      {activeAdminTab === 'weights' && (
        <AlgorithmWeights />
      )}

      {activeAdminTab === 'courses' && (
        <CourseManager />
      )}

      {activeAdminTab === 'students' && (
        <StudentDirectory />
      )}

    </div>
  );
}
