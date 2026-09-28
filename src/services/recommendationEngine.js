import { MOCK_COURSES } from '../data/mockCourses';
import { MOCK_CAREERS } from '../data/mockCareers';
import { MOCK_PROJECTS } from '../data/mockProjects';

export const DEFAULT_WEIGHTS = {
  skillWeight: 0.50,
  cgpaWeight: 0.20,
  careerWeight: 0.30,
  prereqPenalty: 0.15
};

/**
 * Calculates cosine similarity between student skills and course target skills
 */
function calculateSkillCosineSimilarity(studentSkills, courseSkills) {
  if (!courseSkills || courseSkills.length === 0) return 0.5;

  let dotProduct = 0;
  let studentMagnitude = 0;
  let courseMagnitude = 0;

  courseSkills.forEach(skillName => {
    const studentProficiency = studentSkills[skillName] || 0; // 0-5
    const courseRequirement = 4.0; // standard benchmark target

    dotProduct += studentProficiency * courseRequirement;
    studentMagnitude += studentProficiency * studentProficiency;
    courseMagnitude += courseRequirement * courseRequirement;
  });

  if (studentMagnitude === 0 || courseMagnitude === 0) return 0.1;

  const similarity = dotProduct / (Math.sqrt(studentMagnitude) * Math.sqrt(courseMagnitude));
  return Math.min(1.0, Math.max(0.0, similarity));
}

/**
 * Evaluates prerequisite fulfillment and calculates penalty
 */
function evaluatePrerequisites(studentSkills, prerequisites) {
  if (!prerequisites || prerequisites.length === 0) {
    return { passed: true, missingPrereqs: [], penaltyMultiplier: 0 };
  }

  const missingPrereqs = [];
  prerequisites.forEach(prereq => {
    const level = studentSkills[prereq] || 0;
    if (level < 2) {
      missingPrereqs.push({ name: prereq, currentLevel: level });
    }
  });

  return {
    passed: missingPrereqs.length === 0,
    missingPrereqs,
    penaltyMultiplier: missingPrereqs.length
  };
}

/**
 * Generates skill gap metrics against target career
 */
export function calculateSkillGaps(studentSkills = {}, targetCareerId) {
  const career = MOCK_CAREERS.find(c => c.id === targetCareerId) || MOCK_CAREERS[0];
  const gaps = [];
  let totalBenchmark = 0;
  let totalStudent = 0;

  career.requiredSkills.forEach(req => {
    const current = studentSkills[req.name] || 0;
    const benchmark = req.benchmark;
    const diff = benchmark - current;
    const status = diff <= 0 ? 'Mastered' : (diff === 1 ? 'Approaching' : 'Needs Focus');

    gaps.push({
      skill: req.name,
      current,
      benchmark,
      gap: Math.max(0, diff),
      weight: req.weight,
      status,
      percentage: Math.min(100, Math.round((current / benchmark) * 100))
    });

    totalBenchmark += benchmark * req.weight;
    totalStudent += Math.min(benchmark, current) * req.weight;
  });

  const readinessIndex = Math.min(100, Math.round((totalStudent / totalBenchmark) * 100));

  return {
    career,
    readinessIndex,
    gaps,
    masteredCount: gaps.filter(g => g.status === 'Mastered').length,
    criticalGaps: gaps.filter(g => g.status === 'Needs Focus')
  };
}

/**
 * Main recommendation pipeline
 */
export function generateRecommendations(studentProfile, customCourses = null, customWeights = null) {
  const courses = customCourses || MOCK_COURSES;
  const weights = customWeights || DEFAULT_WEIGHTS;
  const { skills = {}, cgpa = 7.5, targetCareerId = "career-fullstack" } = studentProfile;

  const targetCareer = MOCK_CAREERS.find(c => c.id === targetCareerId) || MOCK_CAREERS[0];
  const careerSkillSet = new Set(targetCareer.requiredSkills.map(s => s.name));

  // Normalized CGPA score [0.0 - 1.0]
  const normalizedCgpa = Math.min(1.0, Math.max(0.2, (parseFloat(cgpa) - 4.0) / 6.0));

  // 1. Process Courses
  const scoredCourses = courses.map(course => {
    const skillSim = calculateSkillCosineSimilarity(skills, course.coreSkills);
    
    // Career overlap
    const overlapCount = course.coreSkills.filter(s => careerSkillSet.has(s)).length;
    const careerAffinity = course.coreSkills.length > 0 ? (overlapCount / course.coreSkills.length) : 0.4;
    
    // Prereq evaluation
    const prereqResult = evaluatePrerequisites(skills, course.prerequisites);
    const penalty = prereqResult.penaltyMultiplier * weights.prereqPenalty;

    // Combined Weighted Score
    const rawScore = (
      (skillSim * weights.skillWeight) +
      (normalizedCgpa * weights.cgpaWeight) +
      (careerAffinity * weights.careerWeight) -
      penalty
    );

    const matchScore = Math.max(25, Math.min(99, Math.round(rawScore * 100)));

    let fitReason = "";
    if (matchScore >= 85) fitReason = "High synergy with your career goals and strong prerequisite readiness.";
    else if (matchScore >= 70) fitReason = "Recommended elective to strengthen core technical proficiencies.";
    else fitReason = "Optional elective; bridge foundational prerequisites to maximize benefit.";

    return {
      ...course,
      matchScore,
      skillSimScore: Math.round(skillSim * 100),
      careerAffinityScore: Math.round(careerAffinity * 100),
      prereqResult,
      fitReason
    };
  });

  // Sort descending by match score
  scoredCourses.sort((a, b) => b.matchScore - a.matchScore);

  // 2. Skill Gaps
  const skillGapAnalysis = calculateSkillGaps(skills, targetCareerId);

  // 3. Tailored Projects
  const scoredProjects = MOCK_PROJECTS.map(project => {
    let relevanceScore = 0;
    
    // Check if project directly addresses student's missing skills
    skillGapAnalysis.criticalGaps.forEach(gap => {
      if (project.gapSkillsCovered.includes(gap.skill)) {
        relevanceScore += 35;
      }
    });

    if (project.targetCareer === targetCareerId) {
      relevanceScore += 40;
    }

    const finalScore = Math.min(98, Math.max(45, relevanceScore));
    return {
      ...project,
      relevanceScore: finalScore,
      targetGaps: project.gapSkillsCovered.filter(s => 
        skillGapAnalysis.gaps.some(g => g.skill === s && g.status !== 'Mastered')
      )
    };
  }).sort((a, b) => b.relevanceScore - a.relevanceScore);

  return {
    studentProfile,
    targetCareer,
    recommendedCourses: scoredCourses,
    topCourses: scoredCourses.slice(0, 4),
    skillGapAnalysis,
    recommendedProjects: scoredProjects.slice(0, 3),
    careerRoadmap: targetCareer.roadmapPhases,
    generatedAt: new Date().toISOString()
  };
}
