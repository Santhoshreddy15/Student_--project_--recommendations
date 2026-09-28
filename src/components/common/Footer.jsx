import React from 'react';
import { GraduationCap, BookOpen, ShieldCheck, Mail, GitBranch, Award } from 'lucide-react';
import { PROJECT_METADATA } from '../../data/projectDocs';

export default function Footer({ setActiveTab }) {
  return (
    <footer className="bg-slate-900 text-slate-300 border-t border-slate-800 pt-12 pb-8 text-sm no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Project Info */}
          <div className="md:col-span-1 space-y-3">
            <div className="flex items-center gap-2 text-white">
              <div className="w-8 h-8 rounded bg-primary-600 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-bold text-base tracking-tight">{PROJECT_METADATA.shortTitle}</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Automated multi-criteria decision-support system analyzing academic standing and skill proficiencies for engineering students.
            </p>
            <div className="pt-2 text-xs text-slate-400">
              <span className="text-primary-400 font-semibold">{PROJECT_METADATA.degree}</span>
              <p className="text-[11px] text-slate-500 mt-0.5">{PROJECT_METADATA.academicYear}</p>
            </div>
          </div>

          {/* Col 2: System Navigation */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Project Modules</h4>
            <ul className="space-y-2 text-xs">
              <li>
                <button onClick={() => setActiveTab('profile')} className="hover:text-primary-400 transition-colors">
                  LinkedIn-Style Student Profile
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('assessment')} className="hover:text-primary-400 transition-colors">
                  Student Profile Intake Form
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('results')} className="hover:text-primary-400 transition-colors">
                  Skill Gap & Course Matcher
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('admin')} className="hover:text-primary-400 transition-colors">
                  Faculty Weight Configurator
                </button>
              </li>
              <li>
                <button onClick={() => setActiveTab('docs')} className="hover:text-primary-400 transition-colors">
                  Viva Architecture & Math Model
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Project Team & Guide */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Project Team</h4>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {PROJECT_METADATA.teamMembers.map((m, idx) => (
                <li key={idx} className="flex items-center justify-between py-0.5">
                  <span>{m.name}</span>
                  <span className="text-[11px] font-mono text-slate-400 bg-slate-800 px-1.5 py-0.2 rounded">
                    {m.rollNo}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-slate-800/80 text-xs">
              <span className="text-slate-400 text-[11px] block">Project Under Supervision Of:</span>
              <span className="text-white font-medium">{PROJECT_METADATA.guide.name}</span>
              <span className="text-[11px] text-slate-400 block">{PROJECT_METADATA.guide.designation}</span>
            </div>
          </div>

          {/* Col 4: Institutional Attribution */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Academic Institution</h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-3">
              {PROJECT_METADATA.institution}
            </p>
            <div className="bg-slate-800/80 rounded-lg p-3 border border-slate-700/60 text-[11px] space-y-1.5">
              <div className="flex items-center gap-1.5 text-primary-300 font-medium">
                <Award className="w-3.5 h-3.5" />
                <span>Final Year Major Project Viva</span>
              </div>
              <p className="text-slate-400 text-[10px]">
                Complies with UGC / AICTE curriculum standards for computer engineering project evaluation.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {PROJECT_METADATA.shortTitle}. Built for College Final Year Project Viva Demonstration.</p>
          <div className="flex items-center gap-4 text-xs">
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => setActiveTab('docs')}>IEEE References</span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => setActiveTab('docs')}>Architecture DFD</span>
            <span className="hover:text-slate-400 cursor-pointer" onClick={() => setActiveTab('docs')}>Mathematical Formulation</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
