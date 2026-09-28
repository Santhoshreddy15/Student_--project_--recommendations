import React, { useState } from 'react';
import { Play, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { MOCK_CAREERS } from '../../data/mockCareers';
import { useRecommendation } from '../../context/RecommendationContext';
import Badge from '../common/Badge';

export default function QuickDemo({ setActiveTab }) {
  const { runAssessment } = useRecommendation();
  const [selectedCareer, setSelectedCareer] = useState(MOCK_CAREERS[0].id);
  const [cgpa, setCgpa] = useState('8.2');
  const [primarySkill, setPrimarySkill] = useState('React / Frontend');
  const [skillLevel, setSkillLevel] = useState(4);

  const handleQuickRun = (e) => {
    e.preventDefault();
    
    // Create quick skill payload
    const quickSkills = {
      [primarySkill]: Number(skillLevel),
      "Python": primarySkill === 'Python' ? Number(skillLevel) : 2,
      "SQL & Databases": 3,
      "Git": 3,
      "Linux": 2
    };

    runAssessment({
      name: "Quick Demo Student",
      rollNumber: "DEMO-TEST",
      department: "Computer Science & Engineering",
      semester: 6,
      cgpa: parseFloat(cgpa) || 8.0,
      targetCareerId: selectedCareer,
      skills: quickSkills
    });

    setActiveTab('results');
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm p-6 sm:p-8 max-w-4xl mx-auto -mt-6 relative z-20">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1 rounded bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
              <Play className="w-3.5 h-3.5 fill-current" />
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Quick Viva Live Test</h3>
            <Badge variant="primary" size="sm">Interactive Simulator</Badge>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Test the recommendation engine with instant sample inputs without completing the full form.
          </p>
        </div>
      </div>

      <form onSubmit={handleQuickRun} className="pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        {/* Career Target */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Target Career Goal
          </label>
          <select
            value={selectedCareer}
            onChange={(e) => setSelectedCareer(e.target.value)}
            className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary-500 focus:outline-none"
          >
            {MOCK_CAREERS.map((c) => (
              <option key={c.id} value={c.id}>{c.title}</option>
            ))}
          </select>
        </div>

        {/* CGPA */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Current CGPA (Scale 10)
          </label>
          <input
            type="number"
            step="0.1"
            min="4.0"
            max="10.0"
            value={cgpa}
            onChange={(e) => setCgpa(e.target.value)}
            className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary-500 focus:outline-none"
          />
        </div>

        {/* Primary Skill */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Strongest Tech Skill
          </label>
          <select
            value={primarySkill}
            onChange={(e) => setPrimarySkill(e.target.value)}
            className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-800 dark:text-slate-200 focus:ring-2 focus:ring-primary-500 focus:outline-none"
          >
            <option value="React / Frontend">React / Frontend</option>
            <option value="Python">Python</option>
            <option value="Machine Learning">Machine Learning</option>
            <option value="Cloud & DevOps">Cloud & DevOps</option>
            <option value="Cybersecurity">Cybersecurity</option>
            <option value="SQL & Databases">SQL & Databases</option>
          </select>
        </div>

        {/* Proficiency */}
        <div>
          <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
            Proficiency Level: {skillLevel}/5
          </label>
          <div className="flex items-center gap-2 pt-1">
            <input
              type="range"
              min="1"
              max="5"
              value={skillLevel}
              onChange={(e) => setSkillLevel(e.target.value)}
              className="w-full accent-primary-600"
            />
            <span className="text-xs font-bold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded">
              {skillLevel}★
            </span>
          </div>
        </div>

        {/* Submit */}
        <div className="sm:col-span-2 lg:col-span-4 pt-2 flex justify-end">
          <button
            type="submit"
            className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
          >
            <span>Run Recommendation Pipeline</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </form>
    </div>
  );
}
