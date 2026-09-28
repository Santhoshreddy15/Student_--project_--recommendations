import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import { MOCK_COURSES } from '../../data/mockCourses';
import { useRecommendation } from '../../context/RecommendationContext';
import Badge from '../common/Badge';

export default function AlgorithmSimulator() {
  const { studentProfile, weights } = useRecommendation();
  const [selectedCourseId, setSelectedCourseId] = useState(MOCK_COURSES[0].id);

  const course = MOCK_COURSES.find(c => c.id === selectedCourseId) || MOCK_COURSES[0];
  const skills = studentProfile.skills || {};

  // Step 1: Calculate Dot Product & Magnitudes
  let dotProduct = 0;
  let studentMagSq = 0;
  let courseMagSq = 0;
  const vectorRows = [];

  course.coreSkills.forEach(skillName => {
    const studentProf = skills[skillName] || 0;
    const courseTarget = 4.0;
    const product = studentProf * courseTarget;

    dotProduct += product;
    studentMagSq += studentProf * studentProf;
    courseMagSq += courseTarget * courseTarget;

    vectorRows.push({
      skillName,
      studentProf,
      courseTarget,
      product
    });
  });

  const studentMag = Math.sqrt(studentMagSq);
  const courseMag = Math.sqrt(courseMagSq);
  const cosineSim = (studentMag > 0 && courseMag > 0) ? (dotProduct / (studentMag * courseMag)) : 0.2;

  // Step 2: CGPA
  const cgpa = studentProfile.cgpa || 8.0;
  const normalizedCgpa = Math.min(1.0, Math.max(0.2, (cgpa - 4.0) / 6.0));

  // Step 3: Career Affinity
  const careerAffinity = 0.85;

  // Step 4: Prerequisite Penalties
  let penalties = 0;
  const prereqDetails = [];
  course.prerequisites.forEach(p => {
    const level = skills[p] || 0;
    const violated = level < 2;
    if (violated) penalties += weights.prereqPenalty;
    prereqDetails.push({ name: p, level, violated });
  });

  // Final score
  const part1 = cosineSim * weights.skillWeight;
  const part2 = normalizedCgpa * weights.cgpaWeight;
  const part3 = careerAffinity * weights.careerWeight;
  const rawScore = part1 + part2 + part3 - penalties;
  const finalScore = Math.max(25, Math.min(99, Math.round(rawScore * 100)));

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-sm space-y-6">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-100 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-950 text-indigo-700 dark:text-indigo-300">
              <Calculator className="w-5 h-5" />
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              Interactive Mathematical Vector Simulator
            </h3>
          </div>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Live step-by-step vector algebra breakdown demonstrating how the engine computes recommendation scores for viva defense.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <label className="text-xs font-semibold text-slate-600 dark:text-slate-400">Inspect Course:</label>
          <select
            value={selectedCourseId}
            onChange={(e) => setSelectedCourseId(e.target.value)}
            className="text-xs bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg p-2 font-medium text-slate-800 dark:text-white"
          >
            {MOCK_COURSES.map(c => (
              <option key={c.id} value={c.id}>{c.code} - {c.title}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Stage 1: Vector Space Table */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
          <span>Stage 1: Skill Vector Space Modeling</span>
        </h4>

        <div className="overflow-x-auto border border-slate-200 dark:border-slate-800 rounded-xl">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
              <tr>
                <th className="p-3">Evaluated Skill Element</th>
                <th className="p-3">Student Proficiency (V_s)</th>
                <th className="p-3">Course Target (V_c)</th>
                <th className="p-3">Dot Product Term (V_s · V_c)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {vectorRows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                  <td className="p-3 font-medium text-slate-900 dark:text-white">{row.skillName}</td>
                  <td className="p-3 font-mono text-primary-700 dark:text-primary-400 font-bold">{row.studentProf} / 5</td>
                  <td className="p-3 font-mono text-slate-600 dark:text-slate-400">{row.courseTarget} / 5</td>
                  <td className="p-3 font-mono text-slate-900 dark:text-white font-bold">{row.product.toFixed(1)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="p-3.5 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 font-mono text-xs flex flex-wrap items-center justify-between gap-2 text-slate-700 dark:text-slate-300">
          <div>Dot Product ∑(V_s · V_c) = <strong className="text-slate-900 dark:text-white">{dotProduct.toFixed(2)}</strong></div>
          <div>||V_s|| = <strong className="text-slate-900 dark:text-white">{studentMag.toFixed(2)}</strong></div>
          <div>||V_c|| = <strong className="text-slate-900 dark:text-white">{courseMag.toFixed(2)}</strong></div>
          <div className="text-primary-700 dark:text-primary-300 font-bold">Cosine Sim = {cosineSim.toFixed(3)} ({(cosineSim * 100).toFixed(1)}%)</div>
        </div>
      </div>

      {/* Stage 2: Prerequisite & Constraint Verification */}
      <div className="space-y-3">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          <span>Stage 2: Prerequisite Verification Matrix</span>
        </h4>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {prereqDetails.map((pr, idx) => (
            <div 
              key={idx}
              className={`p-3 rounded-xl border text-xs flex items-center justify-between ${
                pr.violated 
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-200 dark:border-rose-900 text-rose-900 dark:text-rose-300' 
                  : 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-900 text-emerald-900 dark:text-emerald-300'
              }`}
            >
              <div>
                <span className="font-bold">{pr.name}</span>
                <p className="text-[11px] text-slate-600 dark:text-slate-400">Student level: {pr.level}/5 (Min req: 2/5)</p>
              </div>
              <Badge variant={pr.violated ? 'danger' : 'success'} size="sm">
                {pr.violated ? 'Violation (-15%)' : 'Passed'}
              </Badge>
            </div>
          ))}
        </div>
      </div>

      {/* Stage 3: Multi-Criteria Linear Combination */}
      <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300">
          <span>Stage 3: Weighted Linear Combination & Final Score</span>
        </h4>

        <div className="p-4 rounded-xl bg-slate-900 dark:bg-slate-950 text-slate-200 font-mono text-xs space-y-2 border border-slate-800">
          <div>• Skill Component: {weights.skillWeight.toFixed(2)} × {cosineSim.toFixed(3)} = <strong className="text-primary-300">+{part1.toFixed(3)}</strong></div>
          <div>• Academic CGPA Component: {weights.cgpaWeight.toFixed(2)} × {normalizedCgpa.toFixed(3)} = <strong className="text-primary-300">+{part2.toFixed(3)}</strong></div>
          <div>• Career Affinity Component: {weights.careerWeight.toFixed(2)} × {careerAffinity.toFixed(3)} = <strong className="text-primary-300">+{part3.toFixed(3)}</strong></div>
          <div>• Prerequisite Deduction: <strong className="text-rose-400">-{penalties.toFixed(3)}</strong></div>
          <div className="pt-2 border-t border-slate-800 text-white font-bold text-sm flex justify-between">
            <span>Computed Recommendation Fit:</span>
            <span className="text-emerald-400 font-bold">{finalScore}% Match</span>
          </div>
        </div>
      </div>

    </div>
  );
}
