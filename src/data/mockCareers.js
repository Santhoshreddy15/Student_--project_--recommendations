export const MOCK_CAREERS = [
  {
    id: "career-fullstack",
    title: "Full Stack Software Engineer",
    domain: "Software Development",
    shortDescription: "Builds responsive client-side interfaces and robust server-side microservices.",
    requiredSkills: [
      { name: "React / Frontend", weight: 0.25, benchmark: 4 },
      { name: "Node.js / Express", weight: 0.25, benchmark: 4 },
      { name: "SQL & Databases", weight: 0.20, benchmark: 3 },
      { name: "REST APIs", weight: 0.15, benchmark: 4 },
      { name: "Git", weight: 0.15, benchmark: 3 }
    ],
    recommendedCourses: ["CS703", "CS702"],
    averageEntrySalary: "$85,000 - $110,000 / INR 8-14 LPA",
    industryGrowth: "High (22% YoY)",
    roadmapPhases: [
      {
        phase: "Phase 1: Frontend Mastery",
        duration: "Weeks 1 - 4",
        topics: ["Modern JavaScript (ES6+)", "React Hooks & Component Lifecycle", "Tailwind CSS & State Management", "Responsive UI Design"]
      },
      {
        phase: "Phase 2: Backend Architecture & DBs",
        duration: "Weeks 5 - 8",
        topics: ["Node.js / Express API Architecture", "PostgreSQL / MongoDB Schemas", "Authentication & JWT / OAuth", "Error Handling & Input Validation"]
      },
      {
        phase: "Phase 3: Production Deployment & DevOps",
        duration: "Weeks 9 - 12",
        topics: ["Docker Containerization", "CI/CD with GitHub Actions", "Cloud Hosting (AWS / Vercel)", "System Design Basics & Caching (Redis)"]
      }
    ]
  },
  {
    id: "career-ml",
    title: "Machine Learning / AI Engineer",
    domain: "Artificial Intelligence & Data",
    shortDescription: "Designs, trains, and deploys predictive statistical models and deep neural networks.",
    requiredSkills: [
      { name: "Python", weight: 0.30, benchmark: 4 },
      { name: "Machine Learning", weight: 0.25, benchmark: 4 },
      { name: "Deep Learning", weight: 0.20, benchmark: 3 },
      { name: "SQL & Databases", weight: 0.15, benchmark: 3 },
      { name: "Cloud & DevOps", weight: 0.10, benchmark: 2 }
    ],
    recommendedCourses: ["CS701", "CS707"],
    averageEntrySalary: "$95,000 - $125,000 / INR 10-18 LPA",
    industryGrowth: "Very High (35% YoY)",
    roadmapPhases: [
      {
        phase: "Phase 1: Math & Data Foundations",
        duration: "Weeks 1 - 4",
        topics: ["NumPy, Pandas, Matplotlib", "Linear Algebra & Probability", "Exploratory Data Analysis (EDA)", "Scikit-Learn Regression & Classification"]
      },
      {
        phase: "Phase 2: Deep Learning & Neural Nets",
        duration: "Weeks 5 - 8",
        topics: ["PyTorch / TensorFlow Frameworks", "CNNs for Computer Vision", "Transformers & Hugging Face", "Transfer Learning & Fine-Tuning"]
      },
      {
        phase: "Phase 3: MLOps & Production Pipelines",
        duration: "Weeks 9 - 12",
        topics: ["FastAPI Model Serving", "Dockerizing ML Inference", "Model Monitoring & Drift Detection", "Vector DBs & RAG Architecture"]
      }
    ]
  },
  {
    id: "career-cloud",
    title: "Cloud DevOps & Platform Engineer",
    domain: "Infrastructure & Systems",
    shortDescription: "Automates multi-cloud infrastructure, CI/CD delivery pipelines, and container clusters.",
    requiredSkills: [
      { name: "Cloud & DevOps", weight: 0.30, benchmark: 4 },
      { name: "Docker", weight: 0.25, benchmark: 4 },
      { name: "Linux", weight: 0.20, benchmark: 4 },
      { name: "Git", weight: 0.15, benchmark: 4 },
      { name: "Python", weight: 0.10, benchmark: 3 }
    ],
    recommendedCourses: ["CS702", "CS708"],
    averageEntrySalary: "$90,000 - $120,000 / INR 9-16 LPA",
    industryGrowth: "High (27% YoY)",
    roadmapPhases: [
      {
        phase: "Phase 1: Linux & Networking Core",
        duration: "Weeks 1 - 4",
        topics: ["Linux Shell Scripting & CLI", "TCP/IP, DNS, Subnetting, SSL/TLS", "Git Branching & Release Workflows", "Python Automation Scripts"]
      },
      {
        phase: "Phase 2: Containers & Orchestration",
        duration: "Weeks 5 - 8",
        topics: ["Docker Multi-Stage Builds", "Kubernetes Pods, Services, Ingress", "Helm Charts & Configuration", "Terraform Infrastructure as Code"]
      },
      {
        phase: "Phase 3: CI/CD & Observability",
        duration: "Weeks 9 - 12",
        topics: ["GitHub Actions / GitLab CI Pipelines", "Prometheus Metrics & Grafana Dashboards", "ELK / Loki Log Aggregation", "AWS IAM & Security Posture"]
      }
    ]
  },
  {
    id: "career-cyber",
    title: "Cybersecurity & Security Analyst",
    domain: "Information Security",
    shortDescription: "Protects systems, audits software vulnerabilities, and enforces compliance policies.",
    requiredSkills: [
      { name: "Cybersecurity", weight: 0.30, benchmark: 4 },
      { name: "Linux", weight: 0.25, benchmark: 4 },
      { name: "SQL & Databases", weight: 0.15, benchmark: 3 },
      { name: "Python", weight: 0.15, benchmark: 3 },
      { name: "Git", weight: 0.15, benchmark: 3 }
    ],
    recommendedCourses: ["CS704", "CS702"],
    averageEntrySalary: "$88,000 - $115,000 / INR 8-15 LPA",
    industryGrowth: "High (31% YoY)",
    roadmapPhases: [
      {
        phase: "Phase 1: Security Foundations",
        duration: "Weeks 1 - 4",
        topics: ["Security Principles (CIA Triad)", "Network Scanning with Nmap & Wireshark", "Linux Privilege Management", "Applied Cryptography Fundamentals"]
      },
      {
        phase: "Phase 2: Web & Application Security",
        duration: "Weeks 5 - 8",
        topics: ["OWASP Top 10 Exploits & Mitigations", "Burp Suite & Dynamic Application Testing", "API Security & JWT Tampering", "Secure Code Review Practices"]
      },
      {
        phase: "Phase 3: SOC & Incident Response",
        duration: "Weeks 9 - 12",
        topics: ["SIEM (Splunk / Elastic Security)", "Log Analysis & Threat Hunting", "Vulnerability Remediation Planning", "Compliance & CIS Benchmarks"]
      }
    ]
  },
  {
    id: "career-data",
    title: "Data Engineer / Analytics Specialist",
    domain: "Data Systems",
    shortDescription: "Architects scalable data pipelines, automated ETL workflows, and cloud data warehouses.",
    requiredSkills: [
      { name: "SQL & Databases", weight: 0.30, benchmark: 4 },
      { name: "Python", weight: 0.25, benchmark: 4 },
      { name: "Data Engineering", weight: 0.25, benchmark: 3 },
      { name: "Cloud & DevOps", weight: 0.10, benchmark: 2 },
      { name: "Git", weight: 0.10, benchmark: 3 }
    ],
    recommendedCourses: ["CS705", "CS702"],
    averageEntrySalary: "$90,000 - $118,000 / INR 9-15 LPA",
    industryGrowth: "High (25% YoY)",
    roadmapPhases: [
      {
        phase: "Phase 1: Advanced SQL & Data Modeling",
        duration: "Weeks 1 - 4",
        topics: ["Window Functions & Query Optimization", "Dimensional Modeling (Kimball Methodology)", "Relational Schema Normalization", "Python for Data Extraction"]
      },
      {
        phase: "Phase 2: Distributed Processing & ETL",
        duration: "Weeks 5 - 8",
        topics: ["Apache Spark (PySpark) Transformations", "Apache Airflow DAG Authoring", "Data Quality Testing with Great Expectations", "Parquet & Delta Lake Formats"]
      },
      {
        phase: "Phase 3: Modern Data Stack & Warehousing",
        duration: "Weeks 9 - 12",
        topics: ["Snowflake / BigQuery Warehouse Architecture", "Data Transformation with dbt", "Kafka Streaming Ingestion", "BI Dashboard Modeling (Looker/PowerBI)"]
      }
    ]
  }
];
