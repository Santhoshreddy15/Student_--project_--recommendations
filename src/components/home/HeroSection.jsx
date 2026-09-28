import React from 'react';
import { ArrowRight, BookOpen, CheckCircle, Sparkles, FileCode, Layers, Award } from 'lucide-react';
import { PROJECT_METADATA } from '../../data/projectDocs';
import Badge from '../common/Badge';

export default function HeroSection({ setActiveTab }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900 py-16 lg:py-20 border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top pill badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-primary-200 dark:border-primary-800 text-primary-800 dark:text-primary-300 shadow-sm text-xs font-medium">
            <span className="w-2 h-2 rounded-full bg-primary-600 animate-pulse" />
            <span>Final Year Engineering Project Demonstration • Dept. of CSE</span>
          </div>
        </div>

        {/* Hero Main Heading & Description */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Automated Course & Career Recommendation System
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            An academic decision-support platform that evaluates engineering student profiles, skill proficiencies, and career goals to recommend optimized electives, capstone projects, and industry roadmaps.
          </p>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('assessment')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs sm:text-sm transition-all shadow-sm hover:shadow flex items-center justify-center gap-2"
            >
              <span>Take Student Assessment</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => setActiveTab('profile')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm border border-slate-300 dark:border-slate-700 transition-colors flex items-center justify-center gap-2"
            >
              <BookOpen className="w-4 h-4 text-primary-600 dark:text-primary-400" />
              <span>Student Profile</span>
            </button>

            <button
              onClick={() => setActiveTab('docs')}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs sm:text-sm transition-colors flex items-center justify-center gap-2"
            >
              <FileCode className="w-4 h-4 text-slate-500 dark:text-slate-400" />
              <span>Viva Architecture & Docs</span>
            </button>
          </div>
        </div>

        {/* Key Real Metrics Row */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <p className="text-2xl font-bold text-primary-700 dark:text-primary-400">Cosine + Rule</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Hybrid Matching Algorithm</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">5 Domains</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Full Stack, AI/ML, Cloud, Data, Cyber</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">8 Electives</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Syllabus-Aligned University Courses</p>
          </div>
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm text-center">
            <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">12-Week</p>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Actionable Remediation Roadmaps</p>
          </div>
        </div>

      </div>
    </section>
  );
}
