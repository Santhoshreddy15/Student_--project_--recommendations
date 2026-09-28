import React, { useState } from 'react';
import { 
  GraduationCap, 
  Target, 
  Code, 
  CheckCircle2, 
  ArrowRight, 
  Sparkles, 
  RotateCcw,
  BookOpen,
  Sliders
} from 'lucide-react';
import { DEFAULT_SKILL_LIST, SAMPLE_STUDENTS } from '../../data/mockStudents';
import { MOCK_CAREERS } from '../../data/mockCareers';
import { useRecommendation } from '../../context/RecommendationContext';
import Badge from '../common/Badge';

export default function ProfileAssessment({ setActiveTab }) {
  const { studentProfile, runAssessment } = useRecommendation();

  // Form local states
  const [formData, setFormData] = useState({
    name: studentProfile.name || "Alex Johnson",
    rollNumber: studentProfile.rollNumber || "21CS084",
    department: studentProfile.department || "Computer Science & Engineering",
    semester: studentProfile.semester || 6,
    cgpa: studentProfile.cgpa || 8.42,
    targetCareerId: studentProfile.targetCareerId || "career-ml",
    weeklyHours: studentProfile.weeklyHours || 12,
    learningPreference: studentProfile.learningPreference || "practical",
    skills: { ...(studentProfile.skills || SAMPLE_STUDENTS[0].skills) }
  });

  const [activeStep, setActiveStep] = useState(1); // 1: Academics, 2: Career, 3: Skills
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Core Languages", "Web Technologies", "AI & Analytics", "Infrastructure", "Data & Storage", "Security"];

  const handleSkillChange = (skillName, val) => {
    setFormData(prev => ({
      ...prev,
      skills: {
        ...prev.skills,
        [skillName]: Number(val)
      }
    }));
  };

  const loadPreset = (presetIndex) => {
    const preset = SAMPLE_STUDENTS[presetIndex];
    setFormData({
      name: preset.name,
      rollNumber: preset.rollNumber,
      department: preset.department,
      semester: preset.semester,
      cgpa: preset.cgpa,
      targetCareerId: preset.targetCareerId,
      weeklyHours: preset.weeklyHours,
      learningPreference: preset.learningPreference,
      skills: { ...preset.skills }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    runAssessment(formData);
    setActiveTab('results');
  };

  const filteredSkills = selectedCategory === "All"
    ? DEFAULT_SKILL_LIST
    : DEFAULT_SKILL_LIST.filter(s => s.category === selectedCategory);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300">
              <GraduationCap className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              Student Academic & Skill Assessment
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
            Input your academic standing and self-evaluate technical skills to generate tailored recommendations.
          </p>
        </div>

        {/* Quick Demo Preset Buttons */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wider hidden sm:block">
            Quick Presets:
          </span>
          <button
            type="button"
            onClick={() => loadPreset(0)}
            className="px-2.5 py-1.5 text-xs font-medium bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg border border-slate-300 dark:border-slate-700 shadow-sm transition-colors"
          >
            Alex (AI/ML)
          </button>
          <button
            type="button"
            onClick={() => loadPreset(1)}
            className="px-2.5 py-1.5 text-xs font-medium bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg border border-slate-300 dark:border-slate-700 shadow-sm transition-colors"
          >
            Priya (FullStack)
          </button>
          <button
            type="button"
            onClick={() => loadPreset(2)}
            className="px-2.5 py-1.5 text-xs font-medium bg-white dark:bg-slate-900 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-lg border border-slate-300 dark:border-slate-700 shadow-sm transition-colors"
          >
            Rohan (DevOps)
          </button>
        </div>
      </div>

      {/* Progress Steps */}
      <div className="grid grid-cols-3 gap-2 sm:gap-4 my-8">
        <button
          onClick={() => setActiveStep(1)}
          className={`p-3 sm:p-4 rounded-xl border text-left transition-all ${
            activeStep === 1 
              ? 'bg-primary-50/70 dark:bg-primary-950/60 border-primary-300 dark:border-primary-700 text-primary-900 dark:text-primary-200 shadow-sm' 
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 block">Step 1</span>
          <span className="text-xs sm:text-sm font-semibold">Academic Record</span>
        </button>

        <button
          onClick={() => setActiveStep(2)}
          className={`p-3 sm:p-4 rounded-xl border text-left transition-all ${
            activeStep === 2 
              ? 'bg-primary-50/70 dark:bg-primary-950/60 border-primary-300 dark:border-primary-700 text-primary-900 dark:text-primary-200 shadow-sm' 
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 block">Step 2</span>
          <span className="text-xs sm:text-sm font-semibold">Career Aspiration</span>
        </button>

        <button
          onClick={() => setActiveStep(3)}
          className={`p-3 sm:p-4 rounded-xl border text-left transition-all ${
            activeStep === 3 
              ? 'bg-primary-50/70 dark:bg-primary-950/60 border-primary-300 dark:border-primary-700 text-primary-900 dark:text-primary-200 shadow-sm' 
              : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-slate-300'
          }`}
        >
          <span className="text-[11px] font-bold uppercase tracking-wider text-primary-600 dark:text-primary-400 block">Step 3</span>
          <span className="text-xs sm:text-sm font-semibold">Skill Self-Rating</span>
        </button>
      </div>

      {/* Main Form */}
      <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
        
        {/* STEP 1: Academic Info */}
        {activeStep === 1 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Student Academic Profile</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Enter institutional credentials and cumulative grade point average.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Full Student Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="e.g. Alex Johnson"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">University Roll / Register Number</label>
                <input
                  type="text"
                  required
                  value={formData.rollNumber}
                  onChange={(e) => setFormData({ ...formData, rollNumber: e.target.value })}
                  className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white font-mono focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  placeholder="e.g. 21CS084"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Department / Discipline</label>
                <select
                  value={formData.department}
                  onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                  className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                >
                  <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Data Science & AI">Data Science & AI</option>
                  <option value="Electronics & Communication">Electronics & Communication</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Current Semester</label>
                  <select
                    value={formData.semester}
                    onChange={(e) => setFormData({ ...formData, semester: Number(e.target.value) })}
                    className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  >
                    <option value={5}>5th Semester</option>
                    <option value={6}>6th Semester</option>
                    <option value={7}>7th Semester</option>
                    <option value={8}>8th Semester</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Cumulative CGPA (1-10)</label>
                  <input
                    type="number"
                    step="0.01"
                    min="4.0"
                    max="10.0"
                    required
                    value={formData.cgpa}
                    onChange={(e) => setFormData({ ...formData, cgpa: parseFloat(e.target.value) })}
                    className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white font-mono focus:ring-2 focus:ring-primary-500 focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Weekly Self-Study Time</label>
                <select
                  value={formData.weeklyHours}
                  onChange={(e) => setFormData({ ...formData, weeklyHours: Number(e.target.value) })}
                  className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                >
                  <option value={8}>6 - 8 hours / week</option>
                  <option value={12}>10 - 14 hours / week</option>
                  <option value={18}>15+ hours / week</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">Preferred Learning Orientation</label>
                <select
                  value={formData.learningPreference}
                  onChange={(e) => setFormData({ ...formData, learningPreference: e.target.value })}
                  className="w-full text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:outline-none"
                >
                  <option value="practical">Practical & Project-Centric</option>
                  <option value="theoretical">Theoretical & Research Oriented</option>
                  <option value="balanced">Balanced (Industry + Exam Syllabus)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-4">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium text-xs rounded-lg flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>Continue to Career Aspiration</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 2: Career Selection */}
        {activeStep === 2 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">Target Industry Career Pathway</h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Choose the software or engineering domain you aspire to pursue upon graduation.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {MOCK_CAREERS.map((c) => {
                const isSelected = formData.targetCareerId === c.id;
                return (
                  <div
                    key={c.id}
                    onClick={() => setFormData({ ...formData, targetCareerId: c.id })}
                    className={`p-5 rounded-xl border cursor-pointer transition-all ${
                      isSelected
                        ? 'border-primary-600 dark:border-primary-500 bg-primary-50/40 dark:bg-primary-950/40 ring-2 ring-primary-500/20 shadow-sm'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/40 dark:bg-slate-850/40 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-primary-700 dark:text-primary-300 bg-primary-100/70 dark:bg-primary-950 px-2 py-0.5 rounded">
                          {c.domain}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-2">{c.title}</h4>
                      </div>
                      {isSelected && (
                        <CheckCircle2 className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0" />
                      )}
                    </div>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                      {c.shortDescription}
                    </p>
                    <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
                      <span>Salary Benchmark: <strong className="text-slate-700 dark:text-slate-200">{c.averageEntrySalary}</strong></span>
                      <span className="text-emerald-700 dark:text-emerald-400 font-semibold">{c.industryGrowth}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-4">
              <button
                type="button"
                onClick={() => setActiveStep(1)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs rounded-lg transition-colors"
              >
                Back to Academics
              </button>
              <button
                type="button"
                onClick={() => setActiveStep(3)}
                className="px-5 py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-medium text-xs rounded-lg flex items-center gap-2 transition-colors shadow-sm"
              >
                <span>Continue to Skill Self-Rating</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* STEP 3: Skill Rating */}
        {activeStep === 3 && (
          <div className="space-y-6">
            <div className="border-b border-slate-100 dark:border-slate-800 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white">Technical Skill Self-Assessment</h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Rate your practical proficiency on a 1 (Novice) to 5 (Expert) scale.</p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 max-w-full">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded-md text-[11px] font-medium whitespace-nowrap transition-colors ${
                      selectedCategory === cat
                        ? 'bg-primary-600 text-white'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Skill sliders grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredSkills.map((skill) => {
                const currentRating = formData.skills[skill.name] || 1;
                return (
                  <div key={skill.id} className="p-3.5 bg-slate-50/70 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="text-xs font-bold text-slate-900 dark:text-white block">{skill.name}</span>
                        <span className="text-[10px] text-slate-400 dark:text-slate-500">{skill.category}</span>
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-primary-700 dark:text-primary-300">
                        {currentRating} / 5
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={currentRating}
                        onChange={(e) => handleSkillChange(skill.name, e.target.value)}
                        className="w-full accent-primary-600 h-2 bg-slate-200 dark:bg-slate-700 rounded-lg cursor-pointer"
                      />
                    </div>
                    <div className="flex justify-between text-[10px] text-slate-400 dark:text-slate-500 mt-1">
                      <span>1: Beginner</span>
                      <span>3: Competent</span>
                      <span>5: Advanced</span>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-100 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setActiveStep(2)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium text-xs rounded-lg transition-colors"
              >
                Back to Career Target
              </button>

              <button
                type="submit"
                className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-bold text-xs sm:text-sm rounded-lg flex items-center gap-2 transition-all shadow-md hover:shadow-lg"
              >
                <span>Calculate & Generate Recommendations</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

      </form>
    </div>
  );
}
