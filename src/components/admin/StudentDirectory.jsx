import React, { useState } from 'react';
import { Users, Eye, Search, Filter, GraduationCap, ArrowRight } from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';
import { MOCK_CAREERS } from '../../data/mockCareers';
import Badge from '../common/Badge';
import Modal from '../common/Modal';

export default function StudentDirectory() {
  const { students } = useRecommendation();
  const [searchTerm, setSearchTerm] = useState('');
  const [departmentFilter, setDepartmentFilter] = useState('All');
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter(s => {
    const matchesSearch = s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          s.rollNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDept = departmentFilter === 'All' || s.department === departmentFilter;
    return matchesSearch && matchesDept;
  });

  const getCareerTitle = (id) => {
    return MOCK_CAREERS.find(c => c.id === id)?.title || id;
  };

  return (
    <div className="space-y-6">
      
      {/* Header */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-base font-bold text-slate-900 dark:text-white">Student Intake & Evaluation Directory</h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
            View submitted student profiles, academic standings, and target career distributions.
          </p>
        </div>
        <Badge variant="primary" size="md">
          {students.length} Registered Students
        </Badge>
      </div>

      {/* Filter and Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="p-4 border-b border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search by name or roll number..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full text-xs pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <select
              value={departmentFilter}
              onChange={(e) => setDepartmentFilter(e.target.value)}
              className="text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2 text-slate-800 dark:text-white focus:outline-none"
            >
              <option value="All">All Departments</option>
              <option value="Computer Science & Engineering">CSE</option>
              <option value="Information Technology">IT</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-3.5">Roll No</th>
                <th className="p-3.5">Student Name</th>
                <th className="p-3.5">Department</th>
                <th className="p-3.5">Sem</th>
                <th className="p-3.5">CGPA</th>
                <th className="p-3.5">Target Career</th>
                <th className="p-3.5 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {filteredStudents.map(student => (
                <tr key={student.id} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/50">
                  <td className="p-3.5 font-mono font-bold text-primary-700 dark:text-primary-400">{student.rollNumber}</td>
                  <td className="p-3.5 font-semibold text-slate-900 dark:text-white">{student.name}</td>
                  <td className="p-3.5 text-slate-600 dark:text-slate-400">{student.department}</td>
                  <td className="p-3.5 text-slate-700 dark:text-slate-300">Sem {student.semester}</td>
                  <td className="p-3.5 font-mono font-semibold text-slate-900 dark:text-white">{student.cgpa}</td>
                  <td className="p-3.5">
                    <span className="text-primary-800 dark:text-primary-300 bg-primary-50 dark:bg-primary-950/60 px-2 py-0.5 rounded font-medium border border-primary-100 dark:border-primary-900">
                      {getCareerTitle(student.targetCareerId)}
                    </span>
                  </td>
                  <td className="p-3.5 text-right">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded text-xs font-medium inline-flex items-center gap-1 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5 text-slate-500" />
                      <span>View Profile</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Student Inspector Modal */}
      <Modal
        isOpen={!!selectedStudent}
        onClose={() => setSelectedStudent(null)}
        title={selectedStudent ? `Student Record: ${selectedStudent.name} (${selectedStudent.rollNumber})` : ''}
        subtitle="Department Advising Profile & Skill Vector"
      >
        {selectedStudent && (
          <div className="space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-3 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
              <div>
                <span className="text-slate-400 dark:text-slate-500 block">Department:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">{selectedStudent.department}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-slate-500 block">CGPA Standing:</span>
                <span className="font-mono font-bold text-slate-900 dark:text-white">{selectedStudent.cgpa} / 10.0</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-slate-500 block">Current Semester:</span>
                <span className="font-semibold text-slate-800 dark:text-slate-200">Semester {selectedStudent.semester}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-slate-500 block">Target Career:</span>
                <span className="font-semibold text-primary-700 dark:text-primary-400">{getCareerTitle(selectedStudent.targetCareerId)}</span>
              </div>
            </div>

            <div>
              <span className="font-bold text-slate-800 dark:text-slate-200 block mb-2">Self-Evaluated Skill Vector:</span>
              <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto p-2 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                {Object.entries(selectedStudent.skills || {}).map(([skill, level]) => (
                  <div key={skill} className="flex justify-between items-center p-1.5 bg-slate-50 dark:bg-slate-800 rounded">
                    <span className="text-slate-700 dark:text-slate-300">{skill}</span>
                    <span className="font-mono font-bold text-primary-700 dark:text-primary-400">{level} / 5★</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-end pt-3 border-t border-slate-100 dark:border-slate-800">
              <button
                onClick={() => setSelectedStudent(null)}
                className="px-4 py-2 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </Modal>

    </div>
  );
}
