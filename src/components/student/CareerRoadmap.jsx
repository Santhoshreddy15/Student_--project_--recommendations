import React, { useState } from 'react';
import { Calendar, CheckCircle2, Clock, MapPin, Award } from 'lucide-react';
import Badge from '../common/Badge';

export default function CareerRoadmap({ phases, careerTitle }) {
  const [completedTopics, setCompletedTopics] = useState({});

  const toggleTopic = (topicKey) => {
    setCompletedTopics(prev => ({
      ...prev,
      [topicKey]: !prev[topicKey]
    }));
  };

  return (
    <div className="space-y-8">
      
      {/* Roadmap Intro Banner */}
      <div className="bg-slate-900 dark:bg-slate-950 text-white rounded-2xl p-6 sm:p-8 shadow-sm border border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary-400">
              12-Week Structured Learning Pathway
            </span>
            <h2 className="text-xl sm:text-2xl font-bold mt-1">
              {careerTitle} Career Roadmap
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 mt-1">
              Step-by-step milestone timeline to bridge foundational skills, master modern tooling, and prepare placement-ready portfolios.
            </p>
          </div>
          <Badge variant="primary" size="lg" className="bg-primary-500/20 text-primary-300 border-primary-500/30">
            3 Core Phases
          </Badge>
        </div>
      </div>

      {/* Timeline Steps */}
      <div className="relative border-l-2 border-primary-200 dark:border-primary-900 ml-4 sm:ml-8 pl-6 sm:pl-8 space-y-10">
        {phases.map((phase, idx) => (
          <div key={idx} className="relative">
            
            {/* Timeline Marker Circle */}
            <div className="absolute -left-[35px] sm:-left-[43px] top-1.5 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold text-xs shadow-md border-4 border-white dark:border-slate-900">
              {idx + 1}
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm hover:border-slate-300 dark:hover:border-slate-700 transition-all">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100 dark:border-slate-800">
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{phase.phase}</h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                    <Clock className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                    <span>Estimated Duration: <strong>{phase.duration}</strong></span>
                  </div>
                </div>

                <Badge variant="primary" size="sm">
                  Milestone Block {idx + 1}
                </Badge>
              </div>

              {/* Topics Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {phase.topics.map((topic, tIdx) => {
                  const topicKey = `${idx}-${tIdx}`;
                  const isChecked = !!completedTopics[topicKey];

                  return (
                    <div
                      key={tIdx}
                      onClick={() => toggleTopic(topicKey)}
                      className={`p-3 rounded-xl border text-xs cursor-pointer flex items-center gap-3 transition-colors ${
                        isChecked 
                          ? 'bg-emerald-50/70 dark:bg-emerald-950/60 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300' 
                          : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:bg-slate-100/70 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                        isChecked ? 'bg-emerald-600 border-emerald-600 text-white' : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900'
                      }`}>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                      </div>
                      <span className={`font-medium ${isChecked ? 'line-through text-slate-400 dark:text-slate-500' : ''}`}>
                        {topic}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
