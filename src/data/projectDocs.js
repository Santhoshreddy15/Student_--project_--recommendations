export const PROJECT_METADATA = {
  projectTitle: "Automated Student Course & Career Recommendation System",
  shortTitle: "EduPath Recommendation Engine",
  academicYear: "2025 - 2026",
  degree: "Bachelor of Technology in Computer Science & Engineering",
  institution: "Department of Computer Science & Engineering, College of Engineering & Technology",
  guide: {
    name: "Dr. K. S. Ramanathan",
    designation: "Professor & Head of Department",
    department: "Computer Science & Engineering"
  },
  teamMembers: [
    {
      name: "Rahul Verma",
      rollNo: "21CS084",
      role: "Algorithm Design & Core Recommendation Engine",
      contribution: "Vector similarity modeling, mathematical weighting formulas, and scoring pipeline."
    },
    {
      name: "Sneha Mukherjee",
      rollNo: "21CS092",
      role: "Frontend UI/UX Architecture & Data Visualization",
      contribution: "React component hierarchy, responsive layouts, skill radar charts, and accessibility."
    },
    {
      name: "Arjun Nair",
      rollNo: "21CS105",
      role: "Data Schema Engineering & Admin Analytics",
      contribution: "Course syllabus ontology, prerequisite dependency graphs, and CRUD management."
    }
  ]
};

export const VIVA_SECTIONS = {
  abstract: "Undergraduate engineering students frequently face difficulty selecting elective courses, capstone project titles, and industry certification paths that harmonize with their individual academic standing, prerequisite proficiency, and target career domains. Traditional counseling processes are largely manual, generalized, and unable to account for granular skill variations across student cohorts. This project implements an intelligent, hybrid decision-support system that processes structured student profiles—including CGPA, department prerequisites, self-assessed technical proficiencies, and career goals—to deliver personalized, ranked elective recommendations and gap-remediation roadmaps. By blending rule-based academic constraints with weighted vector similarity matching, the system yields high-precision recommendations while maintaining transparent explainability essential for academic evaluation.",
  
  problemStatement: "Current academic advising relies on static syllabus brochures and peer recommendations, leading to high elective mismatch rates, prerequisite deficiencies, and unguided career transitions. Students lack an automated tool capable of evaluating their multi-dimensional skill profiles against dynamic industry benchmarks and departmental elective catalogs.",
  
  objectives: [
    "To build an interactive, student-friendly academic profile and skill self-assessment interface.",
    "To formulate a hybrid recommendation algorithm combining weighted vector cosine similarity with academic prerequisite rules.",
    "To compute granular skill gap metrics comparing current student capabilities against industry-standard benchmarks for 5+ tech career domains.",
    "To automatically generate tailored capstone project titles and milestone-driven 12-week roadmaps bridging identified deficiencies.",
    "To provide an administrative dashboard allowing department faculty to tune algorithmic weights, update course offerings, and analyze student skill distributions."
  ],

  existingVsProposed: [
    {
      parameter: "Advising Mechanism",
      existing: "Manual faculty counseling or peer word-of-mouth",
      proposed: "Automated, algorithmic multi-criteria decision engine"
    },
    {
      parameter: "Personalization Level",
      existing: "One-size-fits-all batch electives",
      proposed: "Granular student-specific profile & skill vector matching"
    },
    {
      parameter: "Skill Gap Identification",
      existing: "None; students discover gaps during interviews",
      proposed: "Real-time benchmark comparison with visual progress indicators"
    },
    {
      parameter: "Capstone Alignment",
      existing: "Randomly chosen project titles without skill synergy",
      proposed: "Targeted project suggestions designed to bridge identified deficiencies"
    },
    {
      parameter: "Faculty Control",
      existing: "Static syllabus without real-time demand feedback",
      proposed: "Dynamic weight adjustment and student interest analytics"
    }
  ],

  algorithmExplanation: {
    title: "Hybrid Rule-Based & Weighted Vector Matching Formulation",
    summary: "The engine calculates an Overall Recommendation Score S(c, s) for candidate elective course c and student profile s using a weighted linear combination of three normalized components:",
    formula: "S(c, s) = w_1 \\cdot Sim_{skills}(c, s) + w_2 \\cdot Score_{cgpa}(c, s) + w_3 \\cdot Match_{career}(c, s) - Penalty_{prereq}(c, s)",
    components: [
      {
        name: "Skill Vector Cosine Similarity (Sim_skills)",
        desc: "Computes the cosine similarity between the student's normalized skill proficiency vector V_s and the course's prerequisite/taught skill weight vector V_c: Sim(V_s, V_c) = (V_s · V_c) / (||V_s|| ||V_c||)."
      },
      {
        name: "Academic Standing Factor (Score_cgpa)",
        desc: "Normalized multiplier based on student's cumulative grade point average: Score_cgpa = min(1.0, (CGPA - 5.0) / 4.5). Higher CGPA increases eligibility for advanced theoretical/practical electives."
      },
      {
        name: "Career Target Affinity (Match_career)",
        desc: "Binary or weighted overlap between candidate course syllabus competencies and the benchmark skill set of the student's declared target role."
      },
      {
        name: "Prerequisite Constraint Penalty (Penalty_prereq)",
        desc: "Applies an algorithmic penalty (default 15% reduction per deficiency) if core prerequisite skills fall below the threshold level (proficiency < 2/5)."
      }
    ]
  },

  ieeeReferences: [
    {
      title: "Course Recommendation System Based on Collaborative Filtering and Deep Learning",
      authors: "H. Zhang, T. Huang, Z. Lv et al.",
      publication: "IEEE Transactions on Learning Technologies, vol. 14, no. 6, pp. 745–756, 2021.",
      doi: "10.1109/TLT.2021.3128912"
    },
    {
      title: "Personalized Career Pathway Recommendation Using Multi-Attribute Skill Graphs",
      authors: "A. K. Sharma, M. R. Patel, S. Gupta",
      publication: "IEEE Access, vol. 10, pp. 48120–48135, 2022.",
      doi: "10.1109/ACCESS.2022.3172089"
    },
    {
      title: "Decision Support Systems for Curriculum Advising in Higher Education",
      authors: "L. M. Rodriguez, E. C. Vance",
      publication: "ACM Transactions on Computing Education, vol. 20, no. 3, pp. 1–24, 2020.",
      doi: "10.1145/3397334"
    }
  ]
};
