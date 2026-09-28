import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  Layers, 
  Calculator, 
  Award, 
  CheckCircle2, 
  ChevronRight,
  ExternalLink,
  Code2
} from 'lucide-react';
import { PROJECT_METADATA, VIVA_SECTIONS } from '../../data/projectDocs';
import ArchitectureView from './ArchitectureView';
import AlgorithmSimulator from './AlgorithmSimulator';
import Badge from '../common/Badge';

export default function VivaDocumentation() {
  const [activeSection, setActiveSection] = useState('overview'); // 'overview' | 'requirements' | 'architecture' | 'simulator' | 'references'

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Top Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm mb-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <Badge variant="purple" size="sm">Academic Viva & Examination Portal</Badge>
              <span className="text-xs text-slate-500 dark:text-slate-400">{PROJECT_METADATA.degree}</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
              {PROJECT_METADATA.projectTitle}
            </h1>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
              {PROJECT_METADATA.institution} • Academic Year {PROJECT_METADATA.academicYear}
            </p>
          </div>
          <Badge variant="primary" size="md">
            Major Project Report
          </Badge>
        </div>

        {/* Supervision info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 text-xs text-slate-600 dark:text-slate-400">
          <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 dark:text-slate-500 block mb-0.5">Project Supervisor:</span>
            <strong className="text-slate-900 dark:text-white">{PROJECT_METADATA.guide.name}</strong>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">{PROJECT_METADATA.guide.designation}</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 dark:text-slate-500 block mb-0.5">Student Lead:</span>
            <strong className="text-slate-900 dark:text-white">Rahul Verma (21CS084)</strong>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Algorithm Design & Math Modeling</p>
          </div>
          <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-slate-400 dark:text-slate-500 block mb-0.5">Evaluation Status:</span>
            <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">Final Defense Ready</strong>
            <p className="text-[11px] text-slate-500 dark:text-slate-400">Includes Interactive Vector Simulator</p>
          </div>
        </div>
      </div>

      {/* Docs Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 space-x-2 sm:space-x-4 overflow-x-auto pb-1 sm:pb-0">
        <button
          onClick={() => setActiveSection('overview')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
            activeSection === 'overview'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>Project Abstract & Objectives</span>
        </button>

        <button
          onClick={() => setActiveSection('requirements')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
            activeSection === 'requirements'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          <span>System Requirements (SRS)</span>
        </button>

        <button
          onClick={() => setActiveSection('architecture')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
            activeSection === 'architecture'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>System Architecture & DFD</span>
        </button>

        <button
          onClick={() => setActiveSection('simulator')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
            activeSection === 'simulator'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Calculator className="w-4 h-4" />
          <span>Interactive Math Simulator</span>
        </button>

        <button
          onClick={() => setActiveSection('references')}
          className={`pb-3 px-3 text-xs sm:text-sm font-semibold border-b-2 flex items-center gap-2 whitespace-nowrap transition-colors ${
            activeSection === 'references'
              ? 'border-primary-600 text-primary-700 dark:text-primary-300'
              : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
          }`}
        >
          <Award className="w-4 h-4" />
          <span>IEEE Citations & References</span>
        </button>
      </div>

      {/* SECTION: OVERVIEW */}
      {activeSection === 'overview' && (
        <div className="space-y-6">
          {/* Abstract */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-3">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">1. Project Abstract</h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {VIVA_SECTIONS.abstract}
            </p>
          </div>

          {/* Problem Statement & Objectives */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">2. Problem Statement</h3>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {VIVA_SECTIONS.problemStatement}
              </p>
            </div>

            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-3">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">3. Primary Project Objectives</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                {VIVA_SECTIONS.objectives.map((obj, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 dark:text-primary-400 mt-2 flex-shrink-0" />
                    <span>{obj}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Existing vs Proposed Table */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">4. Existing vs. Proposed System Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border border-slate-200 dark:border-slate-800 rounded-lg overflow-hidden">
                <thead className="bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-700">
                  <tr>
                    <th className="p-3">Parameter</th>
                    <th className="p-3 text-rose-700 dark:text-rose-400">Existing Manual Process</th>
                    <th className="p-3 text-primary-800 dark:text-primary-300">EduPath Decision-Support System</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                  {VIVA_SECTIONS.existingVsProposed.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                      <td className="p-3 font-semibold text-slate-900 dark:text-white bg-slate-50/50 dark:bg-slate-850/50">{row.parameter}</td>
                      <td className="p-3 text-slate-600 dark:text-slate-400">{row.existing}</td>
                      <td className="p-3 text-primary-900 dark:text-primary-300 font-medium">{row.proposed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SECTION: REQUIREMENTS */}
      {activeSection === 'requirements' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Functional */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Functional Requirements (FR)</h3>
              <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                <li className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">FR-1: Profile & Skill Vector Intake</strong>
                  <span>System must capture student roll number, department, semester, CGPA, and self-ratings across 17 technical skills on a 1-5 scale.</span>
                </li>
                <li className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">FR-2: Hybrid Recommendation Scoring</strong>
                  <span>Compute cosine vector similarity between student skills and course prerequisites, adjust for CGPA standing, and deduct prerequisite penalties.</span>
                </li>
                <li className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">FR-3: Capstone Topic Generation</strong>
                  <span>Map critical identified skill gaps directly to relevant major/minor engineering project titles.</span>
                </li>
                <li className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">FR-4: Faculty Weight Tuning</strong>
                  <span>Provide dynamic administrative sliders to configure linear formula multipliers in real time.</span>
                </li>
              </ul>
            </div>

            {/* Non-Functional */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Non-Functional Requirements (NFR)</h3>
              <ul className="space-y-3 text-xs text-slate-700 dark:text-slate-300">
                <li className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">NFR-1: Sub-Second Execution Latency</strong>
                  <span>Complete recommendation computation pipeline must execute in under 150 milliseconds on the client device.</span>
                </li>
                <li className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">NFR-2: Explainability & Transparency</strong>
                  <span>Every recommendation must provide an inspectable score breakdown (Skill match, CGPA factor, prerequisite compliance).</span>
                </li>
                <li className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">NFR-3: Cross-Device Responsiveness</strong>
                  <span>Seamless UI usability across desktop, tablet, and mobile displays without horizontal overflow.</span>
                </li>
                <li className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <strong className="text-slate-900 dark:text-white block mb-0.5">NFR-4: Zero External Dependency</strong>
                  <span>Fully operational offline via client-side storage cache with zero cloud infrastructure overhead.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      )}

      {/* SECTION: ARCHITECTURE */}
      {activeSection === 'architecture' && (
        <ArchitectureView />
      )}

      {/* SECTION: SIMULATOR */}
      {activeSection === 'simulator' && (
        <AlgorithmSimulator />
      )}

      {/* SECTION: REFERENCES */}
      {activeSection === 'references' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
          <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Academic Literature & IEEE Citations</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Standard peer-reviewed references establishing the theoretical foundation for our hybrid recommendation engine.
            </p>
          </div>

          <div className="space-y-4">
            {VIVA_SECTIONS.ieeeReferences.map((ref, idx) => (
              <div key={idx} className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-primary-700 dark:text-primary-400">[{idx + 1}]</span>
                  <span className="font-bold text-slate-900 dark:text-white">{ref.title}</span>
                </div>
                <p className="text-slate-600 dark:text-slate-300 pl-6">{ref.authors}</p>
                <p className="text-slate-500 dark:text-slate-400 italic pl-6">{ref.publication}</p>
                <p className="text-slate-400 dark:text-slate-500 font-mono text-[11px] pl-6">DOI: {ref.doi}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
