import React, { useState } from 'react';
import { BookPlus, Trash2, GraduationCap, CheckCircle2, Search, Layers } from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';
import Modal from '../common/Modal';
import Badge from '../common/Badge';

export default function CourseManager() {
  const { courses, addNewCourse } = useRecommendation();
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const [formData, setFormData] = useState({
    code: '',
    title: '',
    department: 'Computer Science & Engineering',
    type: 'Professional Elective',
    semester: 7,
    credits: 3,
    difficulty: 'Intermediate',
    category: 'Software Engineering',
    prerequisites: 'Data Structures, Python',
    coreSkills: 'React, Node.js, SQL',
    description: '',
    faculty: 'Prof. Faculty Member'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewCourse({
      ...formData,
      prerequisites: formData.prerequisites.split(',').map(s => s.trim()).filter(Boolean),
      coreSkills: formData.coreSkills.split(',').map(s => s.trim()).filter(Boolean),
      syllabus: [
        `Unit 1: Fundamentals of ${formData.title}`,
        `Unit 2: Architectural Patterns & Design Principles`,
        `Unit 3: Implementation, Frameworks & State Management`,
        `Unit 4: Performance Optimization & Testing`,
        `Unit 5: Capstone Application & Deployment`
      ],
      moocAlternative: {
        platform: "NPTEL / Coursera",
        title: `${formData.title} Online Certification`,
        estimatedHours: "40 hours"
      }
    });

    setIsAddModalOpen(false);
    setFormData({
      code: '',
      title: '',
      department: 'Computer Science & Engineering',
      type: 'Professional Elective',
      semester: 7,
      credits: 3,
      difficulty: 'Intermediate',
      category: 'Software Engineering',
      prerequisites: 'Data Structures, Python',
      coreSkills: 'React, Node.js, SQL',
      description: '',
      faculty: 'Prof. Faculty Member'
    });
  };

  const filtered = courses.filter(c => 
    c.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.department.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      
      {/* Header Bar */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Curriculum Elective Catalog</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            Manage university department electives, prerequisite dependencies, and skill tags.
          </p>
        </div>

        <button
          onClick={() => setIsAddModalOpen(true)}
          className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-xs font-semibold flex items-center gap-2 transition-colors shadow-sm self-start sm:self-auto"
        >
          <BookPlus className="w-4 h-4" />
          <span>Add New Elective Course</span>
        </button>
      </div>

      {/* Search and Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="relative w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">
            Showing {filtered.length} of {courses.length} courses
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-3.5">Code</th>
                <th className="p-3.5">Course Title</th>
                <th className="p-3.5">Department</th>
                <th className="p-3.5">Sem / Credits</th>
                <th className="p-3.5">Core Skills</th>
                <th className="p-3.5">Difficulty</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filtered.map(course => (
                <tr key={course.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50">
                  <td className="p-3.5 font-mono font-bold text-primary-700 dark:text-primary-400">{course.code}</td>
                  <td className="p-3.5">
                    <p className="font-semibold text-slate-900 dark:text-white">{course.title}</p>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400">{course.faculty}</p>
                  </td>
                  <td className="p-3.5 text-slate-600 dark:text-slate-400">{course.department}</td>
                  <td className="p-3.5 text-slate-700 dark:text-slate-300">Sem {course.semester} • {course.credits} Cr</td>
                  <td className="p-3.5">
                    <div className="flex flex-wrap gap-1 max-w-xs">
                      {course.coreSkills.map((sk, idx) => (
                        <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 px-1.5 py-0.5 rounded text-[10px]">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="p-3.5">
                    <Badge variant={course.difficulty === 'Advanced' ? 'purple' : 'default'} size="sm">
                      {course.difficulty}
                    </Badge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add Course Modal */}
      <Modal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add New University Elective Course"
        subtitle="Specify course syllabus metadata, prerequisites, and taught skills"
      >
        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Course Code</label>
              <input
                type="text"
                required
                placeholder="e.g. CS-419"
                value={formData.code}
                onChange={e => setFormData({ ...formData, code: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Credits</label>
              <input
                type="number"
                min="1"
                max="6"
                required
                value={formData.credits}
                onChange={e => setFormData({ ...formData, credits: Number(e.target.value) })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Course Title</label>
            <input
              type="text"
              required
              placeholder="e.g. Distributed Ledger Technology & Blockchain"
              value={formData.title}
              onChange={e => setFormData({ ...formData, title: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Department</label>
              <select
                value={formData.department}
                onChange={e => setFormData({ ...formData, department: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
              >
                <option value="Computer Science & Engineering">Computer Science & Engineering</option>
                <option value="Information Technology">Information Technology</option>
                <option value="Data Science & AI">Data Science & AI</option>
              </select>
            </div>
            <div>
              <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Category</label>
              <select
                value={formData.category}
                onChange={e => setFormData({ ...formData, category: e.target.value })}
                className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
              >
                <option value="Artificial Intelligence">Artificial Intelligence</option>
                <option value="Cloud & Systems">Cloud & Systems</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Cybersecurity">Cybersecurity</option>
                <option value="Data Engineering">Data Engineering</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Core Skills (Comma-separated)</label>
            <input
              type="text"
              required
              placeholder="e.g. Python, Machine Learning, PyTorch"
              value={formData.coreSkills}
              onChange={e => setFormData({ ...formData, coreSkills: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Prerequisites (Comma-separated)</label>
            <input
              type="text"
              required
              placeholder="e.g. Python, Linear Algebra"
              value={formData.prerequisites}
              onChange={e => setFormData({ ...formData, prerequisites: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
            />
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Description</label>
            <textarea
              rows={2}
              required
              placeholder="Course overview and syllabus scope..."
              value={formData.description}
              onChange={e => setFormData({ ...formData, description: e.target.value })}
              className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2.5 text-slate-900 dark:text-white"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setIsAddModalOpen(false)}
              className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-sm"
            >
              Save Elective Course
            </button>
          </div>
        </form>
      </Modal>

    </div>
  );
}
