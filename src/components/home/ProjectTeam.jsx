import React from 'react';
import { User, Award, School, BookCheck } from 'lucide-react';
import { PROJECT_METADATA } from '../../data/projectDocs';
import Badge from '../common/Badge';

export default function ProjectTeam() {
  return (
    <section className="py-16 bg-slate-50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/80 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs font-semibold mb-3">
            <School className="w-3.5 h-3.5" />
            <span>Academic Project Credentials</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
            Project Team & Faculty Supervision
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Developed as a final-year major engineering project under the Department of Computer Science & Engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECT_METADATA.teamMembers.map((member, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col justify-between hover:border-slate-300 dark:hover:border-slate-700 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 flex items-center justify-center font-bold text-sm">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <Badge variant="primary" size="sm">
                    {member.rollNo}
                  </Badge>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white">{member.name}</h3>
                <p className="text-xs font-semibold text-primary-600 dark:text-primary-400 mt-0.5">{member.role}</p>

                <p className="text-xs text-slate-600 dark:text-slate-400 mt-3 leading-relaxed">
                  {member.contribution}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-slate-100 dark:border-slate-800 text-[11px] text-slate-400 dark:text-slate-500">
                B.Tech Computer Science & Engineering
              </div>
            </div>
          ))}
        </div>

        {/* Project Guide Card */}
        <div className="mt-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-6 shadow-sm max-w-2xl mx-auto flex flex-col sm:flex-row items-center gap-6">
          <div className="w-16 h-16 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 flex items-center justify-center flex-shrink-0 border border-slate-300 dark:border-slate-700">
            <Award className="w-8 h-8 text-primary-700 dark:text-primary-400" />
          </div>
          <div className="text-center sm:text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
              Project Supervisor & Guide
            </span>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">{PROJECT_METADATA.guide.name}</h4>
            <p className="text-xs text-slate-600 dark:text-slate-400">{PROJECT_METADATA.guide.designation}</p>
            <p className="text-xs text-slate-500 dark:text-slate-500 mt-1">{PROJECT_METADATA.institution}</p>
          </div>
        </div>

      </div>
    </section>
  );
}
