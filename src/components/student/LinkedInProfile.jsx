import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Edit3, 
  CheckCircle2, 
  Award, 
  Plus, 
  Download, 
  Sparkles,
  GitBranch,
  GraduationCap
} from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';
import { useAuth } from '../../context/AuthContext';
import { MOCK_CAREERS } from '../../data/mockCareers';
import { PROJECT_METADATA } from '../../data/projectDocs';
import Badge from '../common/Badge';
import Modal from '../common/Modal';

export default function LinkedInProfile({ setActiveTab }) {
  const { studentProfile, recommendationResult, bookmarks } = useRecommendation();

  const [isAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);
  
  // Custom user project list (local state + saved bookmarks)
  const [userProjects, setUserProjects] = useState([
    {
      id: "up-1",
      title: "Real-Time Student Attendance & Computer Vision Pipeline",
      role: "Lead Developer",
      duration: "Jan 2026 - Present",
      status: "In Progress",
      domain: "Artificial Intelligence",
      description: "Implemented YOLOv8 facial embeddings and automated attendance sync with department MySQL database.",
      skills: ["Python", "PyTorch", "OpenCV", "SQL & Databases"],
      githubUrl: "https://github.com/student/attendance-cv"
    },
    {
      id: "up-2",
      title: "Distributed Microservices E-Commerce Backend",
      role: "Backend Architect",
      duration: "Aug 2025 - Dec 2025",
      status: "Completed",
      domain: "Software Engineering",
      description: "Designed RESTful API gateway with JWT authorization, Redis caching, and Docker container deployment.",
      skills: ["Node.js / Express", "React / Frontend", "Docker", "REST APIs"],
      githubUrl: "https://github.com/student/microservices-shop"
    }
  ]);

  const [newProjectForm, setNewProjectForm] = useState({
    title: '',
    role: 'Project Lead',
    duration: '2026',
    status: 'In Progress',
    domain: 'Software Development',
    description: '',
    skills: 'React, Node.js, SQL',
    githubUrl: ''
  });

  const handleAddProject = (e) => {
    e.preventDefault();
    setUserProjects([
      {
        ...newProjectForm,
        id: `up-${Date.now()}`,
        skills: newProjectForm.skills.split(',').map(s => s.trim()).filter(Boolean)
      },
      ...userProjects
    ]);
    setIsAddProjectModalOpen(false);
  };

  const targetCareer = MOCK_CAREERS.find(c => c.id === studentProfile.targetCareerId) || MOCK_CAREERS[0];
  const readinessIndex = recommendationResult?.skillGapAnalysis?.readinessIndex || 82;
  const topCourse = recommendationResult?.topCourses?.[0];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      
      {/* 1. LinkedIn-style Hero Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        
        {/* Cover Banner */}
        <div className="h-36 sm:h-48 bg-gradient-to-r from-primary-700 via-primary-800 to-slate-900 relative p-4 flex justify-end items-start">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-xs font-medium border border-white/20">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Class of {new Date().getFullYear() + 1}</span>
          </div>
        </div>

        {/* Profile Details Container */}
        <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 relative">
          
          {/* Avatar floating over banner */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between -mt-16 sm:-mt-20 mb-4 gap-4">
            <div className="flex items-end gap-4">
              <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white dark:bg-slate-900 p-1.5 shadow-xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary-500 to-indigo-600 flex items-center justify-center text-white font-extrabold text-3xl sm:text-4xl shadow-inner border-2 border-white dark:border-slate-800">
                  {studentProfile.name.split(' ').map(n => n[0]).join('')}
                </div>
              </div>

              <div className="pb-1 hidden sm:block">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800 text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Verified Student Profile
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2 flex-wrap">
              <button
                onClick={() => setActiveTab('assessment')}
                className="px-4 py-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold text-xs transition-colors shadow-sm flex items-center gap-1.5"
              >
                <Edit3 className="w-3.5 h-3.5" />
                <span>Edit Assessment</span>
              </button>

              <button
                onClick={() => setIsAddProjectModalOpen(true)}
                className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs transition-colors flex items-center gap-1.5 border border-slate-300 dark:border-slate-700"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Project</span>
              </button>

              <button
                onClick={() => window.print()}
                className="p-2 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-50 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 border border-slate-300 dark:border-slate-700 text-xs transition-colors"
                title="Print Student Portfolio"
              >
                <Download className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Name & Headline */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {studentProfile.name}
              </h1>
              <CheckCircle2 className="w-5 h-5 text-primary-600" />
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 font-medium leading-snug">
              Undergraduate Student in {studentProfile.department} • Aspiring <span className="text-primary-600 dark:text-primary-400 font-semibold">{targetCareer.title}</span>
            </p>

            <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-slate-500 dark:text-slate-400 pt-1">
              <span className="flex items-center gap-1">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                {PROJECT_METADATA.institution.split(',')[0]}
              </span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                Semester {studentProfile.semester} • Roll: <strong className="font-mono text-slate-700 dark:text-slate-300">{studentProfile.rollNumber}</strong>
              </span>
              <span className="flex items-center gap-1">
                <Award className="w-3.5 h-3.5 text-emerald-600" />
                CGPA: <strong className="font-mono text-slate-900 dark:text-white">{studentProfile.cgpa} / 10.0</strong>
              </span>
            </div>
          </div>

          {/* Open to Work / Capstone Banner */}
          <div className="mt-5 p-3.5 bg-primary-50/60 dark:bg-primary-950/40 border border-primary-200 dark:border-primary-900/60 rounded-xl flex items-center justify-between text-xs">
            <div>
              <strong className="text-primary-900 dark:text-primary-200 block">
                Open for Final Year Capstone Collaborations & Industry Internships
              </strong>
              <span className="text-primary-700 dark:text-primary-400 text-[11px]">
                Target Roles: {targetCareer.title} • {targetCareer.domain}
              </span>
            </div>
            <Badge variant="primary" size="sm">Active</Badge>
          </div>

        </div>
      </div>

      {/* 2. Featured Analytics & Readiness Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
        <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-primary-600" />
          <span>System Evaluation & Career Synergy</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Target Role Readiness</span>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-3xl font-extrabold text-primary-600 dark:text-primary-400">{readinessIndex}%</span>
              <span className="text-xs text-slate-500">Benchmark Fit</span>
            </div>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
              Evaluated for {targetCareer.title}
            </p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Top Recommended Elective</span>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-1 line-clamp-1">{topCourse?.title || "Deep Learning"}</p>
            <p className="text-[11px] text-emerald-600 dark:text-emerald-400 font-semibold mt-0.5">
              {topCourse?.matchScore}% Algorithmic Synergy ({topCourse?.code})
            </p>
          </div>

          <div className="p-4 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">Active Capstone Focus</span>
            <p className="text-base font-bold text-slate-900 dark:text-white mt-1 line-clamp-1">{userProjects[0]?.title}</p>
            <p className="text-[11px] text-indigo-600 dark:text-indigo-400 font-semibold mt-0.5">
              {userProjects[0]?.status} • {userProjects[0]?.domain}
            </p>
          </div>
        </div>
      </div>

      {/* 3. About Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-3">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">About & Academic Goals</h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
          Motivated 6th-semester Computer Science undergraduate with a cumulative grade point average of {studentProfile.cgpa}. Passionate about architecting scalable systems and applying machine learning algorithms to real-world problems. Actively bridging skill benchmarks in distributed architectures and containerization while preparing for campus placement drives and capstone project defense.
        </p>
      </div>

      {/* 4. Skills & Assessment Ratings */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Technical Skills & Self-Assessments</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Ratings verified through the decision-support assessment engine.</p>
          </div>
          <button
            onClick={() => setActiveTab('assessment')}
            className="text-xs text-primary-600 dark:text-primary-400 font-semibold hover:underline"
          >
            Update Ratings
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {Object.entries(studentProfile.skills || {}).slice(0, 8).map(([skill, level]) => (
            <div key={skill} className="p-3 bg-slate-50 dark:bg-slate-800/60 rounded-xl border border-slate-200 dark:border-slate-700/80 flex items-center justify-between">
              <div>
                <span className="text-xs font-bold text-slate-800 dark:text-slate-200">{skill}</span>
                <span className="text-[10px] text-slate-400 dark:text-slate-500 block">Verified via Assessment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="font-mono text-xs font-bold text-primary-700 dark:text-primary-400 bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                  {level} / 5 ★
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Student Projects & Saved Capstones */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
          <div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">Academic Projects & Capstones</h3>
            <p className="text-xs text-slate-500 dark:text-slate-400">Engineering coursework and personal portfolio development.</p>
          </div>

          <button
            onClick={() => setIsAddProjectModalOpen(true)}
            className="px-3 py-1.5 rounded-lg bg-primary-50 dark:bg-primary-950/60 text-primary-700 dark:text-primary-300 hover:bg-primary-100 text-xs font-semibold flex items-center gap-1 transition-colors border border-primary-200 dark:border-primary-800"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>Add Project</span>
          </button>
        </div>

        <div className="space-y-4">
          {userProjects.map((proj) => (
            <div key={proj.id} className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-850/50 space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{proj.title}</h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{proj.role} • {proj.duration} • {proj.domain}</p>
                </div>
                <Badge variant={proj.status === 'Completed' ? 'success' : 'primary'} size="sm">
                  {proj.status}
                </Badge>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                {proj.description}
              </p>

              <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-slate-200/60 dark:border-slate-800 text-xs">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {proj.skills.map((sk, idx) => (
                    <span key={idx} className="bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono text-[10px] px-2 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                      {sk}
                    </span>
                  ))}
                </div>

                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-primary-600 dark:text-primary-400 font-semibold text-xs hover:underline"
                  >
                    <GitBranch className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Education Section */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-4">
        <h3 className="text-base font-bold text-slate-900 dark:text-white">Academic Education</h3>
        
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-950 text-primary-700 dark:text-primary-300 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white">{PROJECT_METADATA.institution}</h4>
            <p className="text-xs text-slate-700 dark:text-slate-300 font-medium">{PROJECT_METADATA.degree}</p>
            <p className="text-xs text-slate-500 dark:text-slate-400">2022 - 2026 • Cumulative GPA: <strong className="text-slate-800 dark:text-slate-200">{studentProfile.cgpa} / 10.0</strong></p>
            <p className="text-xs text-slate-600 dark:text-slate-400 pt-1">
              Core Coursework: Data Structures, Operating Systems, Database Management Systems, Machine Learning, Computer Networks.
            </p>
          </div>
        </div>
      </div>

      {/* Modal to Add Custom Project */}
      <Modal
        isOpen={isAddProjectModalOpen}
        onClose={() => setIsAddProjectModalOpen(false)}
        title="Add Academic Project to Profile"
        subtitle="Document your capstone or mini project for your portfolio"
      >
        <form onSubmit={handleAddProject} className="space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Project Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Cloud-Native Healthcare Records Management"
              value={newProjectForm.title}
              onChange={e => setNewProjectForm({ ...newProjectForm, title: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Your Role</label>
              <input
                type="text"
                required
                placeholder="e.g. Full Stack Developer"
                value={newProjectForm.role}
                onChange={e => setNewProjectForm({ ...newProjectForm, role: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Project Status</label>
              <select
                value={newProjectForm.status}
                onChange={e => setNewProjectForm({ ...newProjectForm, status: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
              >
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
                <option value="Planned">Planned</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Technologies (Comma-separated)</label>
            <input
              type="text"
              required
              placeholder="e.g. React, Node.js, Docker, MongoDB"
              value={newProjectForm.skills}
              onChange={e => setNewProjectForm({ ...newProjectForm, skills: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Project Description</label>
            <textarea
              rows={3}
              required
              placeholder="Summary of architecture, key modules, and problem solved..."
              value={newProjectForm.description}
              onChange={e => setNewProjectForm({ ...newProjectForm, description: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">GitHub Repository URL (Optional)</label>
            <input
              type="url"
              placeholder="https://github.com/your-username/project-repo"
              value={newProjectForm.githubUrl}
              onChange={e => setNewProjectForm({ ...newProjectForm, githubUrl: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAddProjectModalOpen(false)}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-sm"
            >
              Save Project
            </button>
          </div>
        </form>
      </Modal>

    </div>
  );
}
