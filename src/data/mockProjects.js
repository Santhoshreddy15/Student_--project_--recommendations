export const MOCK_PROJECTS = [
  {
    id: "proj-1",
    title: "Personalized Course Recommendation Engine using Hybrid Filtering",
    domain: "Artificial Intelligence & Web",
    difficulty: "Advanced",
    type: "Major Capstone Project",
    targetCareer: "career-ml",
    gapSkillsCovered: ["Machine Learning", "Python", "React / Frontend", "REST APIs"],
    abstract: "A web-based system that analyzes student academic histories, self-assessed skill levels, and career targets to dynamically suggest elective courses using hybrid cosine similarity and decision-rule weighting.",
    keyModules: [
      "Student Academic Profile & Skill Intake Interface",
      "Vector Space Modeling & Cosine Similarity Calculator",
      "Rule-Based Prerequisite Checker & Credit Validator",
      "Interactive Faculty Analytics & Syllabus Optimization Dashboard"
    ],
    techStack: ["React", "FastAPI / Node.js", "Python (Scikit-Learn)", "PostgreSQL"],
    expectedOutcomes: "Delivers top-5 elective suggestions with >88% relevance accuracy and printable career roadmap reports."
  },
  {
    id: "proj-2",
    title: "Microservices-Based Campus Placement Portal with Resume Parser",
    domain: "Software Development",
    difficulty: "Intermediate-Advanced",
    type: "Major Capstone Project",
    targetCareer: "career-fullstack",
    gapSkillsCovered: ["Node.js / Express", "React / Frontend", "SQL & Databases", "REST APIs"],
    abstract: "A high-performance portal connecting campus recruiters and graduating students with automated PDF resume parsing, job role eligibility filtering, and real-time interview scheduling.",
    keyModules: [
      "Role-Based Authentication (Student, TPO Admin, Recruiter)",
      "Automated PDF Resume Extraction & Keyword Matcher",
      "Placement Drive Registration & Eligibility Matrix",
      "Notification Dispatcher with Email / SMS Triggers"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Docker"],
    expectedOutcomes: "Reduces campus placement drive coordination overhead by 60% with instant candidate shortlisting."
  },
  {
    id: "proj-3",
    title: "Automated Multi-Stage CI/CD Pipeline with Security Scanning (DevSecOps)",
    domain: "Infrastructure & Security",
    difficulty: "Advanced",
    type: "Major Capstone Project",
    targetCareer: "career-cloud",
    gapSkillsCovered: ["Cloud & DevOps", "Docker", "Linux", "Cybersecurity", "Git"],
    abstract: "An end-to-end containerized deployment pipeline incorporating static code analysis (SonarQube), container vulnerability scanning (Trivy), and automated rollback on Kubernetes clusters.",
    keyModules: [
      "Git Push Trigger & Automated Unit Testing Workflow",
      "SAST / DAST Vulnerability Scanning Integration",
      "Docker Image Build & Secure Registry Push",
      "Kubernetes Deployment with Prometheus Metric Healthchecks"
    ],
    techStack: ["GitHub Actions", "Docker", "Kubernetes", "Trivy", "Terraform", "Prometheus"],
    expectedOutcomes: "Ensures zero-vulnerability container releases and zero-downtime blue/green deployment strategy."
  },
  {
    id: "proj-4",
    title: "Real-Time Student Attendance & Threat Detection using Computer Vision",
    domain: "Computer Vision & IoT",
    difficulty: "Advanced",
    type: "Major Capstone Project",
    targetCareer: "career-ml",
    gapSkillsCovered: ["Python", "Deep Learning", "REST APIs"],
    abstract: "A non-intrusive classroom automation system using OpenCV and YOLOv8 to log student attendance from video feeds while monitoring safety anomalies and crowd densities.",
    keyModules: [
      "Multi-Face Detection & Facial Embedding Generation",
      "Database Synchronization with Timestamp Logs",
      "Anomaly Detection for Restricted Lab Access Hours",
      "Web Management Dashboard for Department Faculty"
    ],
    techStack: ["Python", "OpenCV", "PyTorch / YOLOv8", "Flask", "SQLite", "React"],
    expectedOutcomes: "Maintains 96.5% facial recognition accuracy under varying classroom lighting conditions."
  },
  {
    id: "proj-5",
    title: "Cloud Data Warehouse & Student Performance Predictor (ETL Pipeline)",
    domain: "Data Systems",
    difficulty: "Intermediate",
    type: "Mini / Major Project",
    targetCareer: "career-data",
    gapSkillsCovered: ["SQL & Databases", "Data Engineering", "Python"],
    abstract: "An end-to-end data pipeline extracting multi-semester academic records, transforming raw exam data with dbt, and training early warning models for students at academic risk.",
    keyModules: [
      "Automated Ingestion from Multi-Source CSV / LMS Dumps",
      "Data Cleaning & Transformation with Apache Airflow & Pandas",
      "Star Schema Data Modeling in PostgreSQL / DuckDB",
      "Interactive BI Dashboard with Retention Risk Indicators"
    ],
    techStack: ["Python", "Apache Airflow", "PostgreSQL / DuckDB", "Metabase / Chart.js", "Docker"],
    expectedOutcomes: "Automates weekly academic report generation and identifies at-risk students 3 weeks before midterms."
  },
  {
    id: "proj-6",
    title: "Intrusion Detection System for Campus Wi-Fi using Network Packet Analysis",
    domain: "Information Security",
    difficulty: "Advanced",
    type: "Major Capstone Project",
    targetCareer: "career-cyber",
    gapSkillsCovered: ["Cybersecurity", "Linux", "Python", "SQL & Databases"],
    abstract: "A lightweight network monitoring solution analyzing PCAP stream data for port scans, ARP spoofing, and unauthorized DNS tunneling on campus subnet segments.",
    keyModules: [
      "Raw Packet Capture & Header Decoding via Scapy",
      "Signature & Anomaly-Based Intrusion Rule Engine",
      "Real-Time Alert Dispatch & IP Blacklisting Module",
      "Security Analyst Incident Log Viewer"
    ],
    techStack: ["Python (Scapy)", "Snort Rules", "Linux iptables", "React Dashboard", "FastAPI"],
    expectedOutcomes: "Detects unauthorized subnet scans within 1.2 seconds with under 3% false alarm rate."
  }
];
