export const MOCK_COURSES = [
  {
    id: "CS701",
    code: "CS-411",
    title: "Deep Learning & Neural Networks",
    department: "Computer Science & Engineering",
    type: "Professional Elective - V",
    semester: 7,
    credits: 3,
    difficulty: "Advanced",
    category: "Artificial Intelligence",
    prerequisites: ["Python", "Linear Algebra", "Data Structures"],
    coreSkills: ["Python", "Machine Learning", "Deep Learning", "PyTorch", "TensorFlow"],
    description: "Covers convolutional architectures, recurrent networks, attention mechanisms, transformers, and practical model optimization.",
    syllabus: [
      "Unit 1: Feedforward Networks, Backpropagation & Optimization Algorithms",
      "Unit 2: Convolutional Neural Networks (CNNs) for Computer Vision",
      "Unit 3: Sequence Modeling: RNNs, LSTMs, and GRUs",
      "Unit 4: Transformer Architectures & Self-Attention Mechanisms",
      "Unit 5: Model Deployment, Quantization & Edge AI Inference"
    ],
    faculty: "Dr. R. K. Bhattacharya",
    nptelMoocUrl: "https://nptel.ac.in/courses/106106184",
    moocAlternative: {
      platform: "Coursera / DeepLearning.AI",
      title: "Deep Learning Specialization (Andrew Ng)",
      estimatedHours: "40 hours"
    },
    demandScore: 94
  },
  {
    id: "CS702",
    code: "CS-412",
    title: "Cloud Computing & Distributed Systems",
    department: "Computer Science & Engineering",
    type: "Professional Elective - V",
    semester: 7,
    credits: 3,
    difficulty: "Intermediate",
    category: "Cloud & Systems",
    prerequisites: ["Operating Systems", "Computer Networks"],
    coreSkills: ["Cloud & DevOps", "Docker", "Kubernetes", "Linux", "Distributed Systems"],
    description: "Study of virtualization, container orchestration, microservices patterns, serverless paradigms, and distributed consensus.",
    syllabus: [
      "Unit 1: Cloud Service Models (IaaS, PaaS, SaaS) & Hypervisor Virtualization",
      "Unit 2: Microservices Architecture & Containerization with Docker",
      "Unit 3: Cluster Orchestration with Kubernetes and Helm",
      "Unit 4: Distributed Storage, CAP Theorem, and Paxos/Raft Consensus",
      "Unit 5: Serverless Computing, IAM Security, and Cost Governance"
    ],
    faculty: "Prof. S. Nandakumar",
    nptelMoocUrl: "https://nptel.ac.in/courses/106105167",
    moocAlternative: {
      platform: "AWS Training & Certification",
      title: "AWS Certified Solutions Architect Associate",
      estimatedHours: "35 hours"
    },
    demandScore: 92
  },
  {
    id: "CS703",
    code: "CS-413",
    title: "Full-Stack Web Engineering & Microservices",
    department: "Information Technology",
    type: "Professional Elective - IV",
    semester: 6,
    credits: 4,
    difficulty: "Intermediate",
    category: "Software Engineering",
    prerequisites: ["JavaScript Basics", "Database Management Systems"],
    coreSkills: ["React / Frontend", "Node.js / Express", "REST APIs", "SQL & Databases", "TypeScript"],
    description: "End-to-end development of scalable single-page applications, RESTful microservices, state management, caching, and CI/CD pipelines.",
    syllabus: [
      "Unit 1: Modern JavaScript (ES6+), React State Management & Hooks",
      "Unit 2: Node.js Event Loop, Express Routing & Middleware Engineering",
      "Unit 3: Relational vs NoSQL Schema Design (PostgreSQL / MongoDB)",
      "Unit 4: JWT Authentication, OAuth2, and RBAC Security",
      "Unit 5: Automated Testing (Jest/Cypress) and CI/CD Pipelines"
    ],
    faculty: "Prof. Ananya Sen",
    nptelMoocUrl: "https://nptel.ac.in/courses/106106222",
    moocAlternative: {
      platform: "freeCodeCamp / FullStackOpen",
      title: "Full Stack Open (University of Helsinki)",
      estimatedHours: "60 hours"
    },
    demandScore: 96
  },
  {
    id: "CS704",
    code: "CS-414",
    title: "Cyber Security & Ethical Hacking",
    department: "Computer Science & Engineering",
    type: "Professional Elective - VI",
    semester: 8,
    credits: 3,
    difficulty: "Intermediate",
    category: "Cybersecurity",
    prerequisites: ["Computer Networks", "Operating Systems"],
    coreSkills: ["Cybersecurity", "Network Security", "Linux", "Cryptography", "Penetration Testing"],
    description: "Principles of network defense, vulnerability assessment, web application security (OWASP Top 10), and applied cryptography.",
    syllabus: [
      "Unit 1: Threat Modeling, Attack Vectors, and Information Gathering",
      "Unit 2: Applied Cryptography: Symmetric/Asymmetric Ciphers, PKI & TLS",
      "Unit 3: Web Application Vulnerabilities (SQLi, XSS, CSRF, SSRF)",
      "Unit 4: Network Penetration Testing, Wireshark, Metasploit & Nmap",
      "Unit 5: Incident Response, Digital Forensics, and SOC Operations"
    ],
    faculty: "Dr. Vikram Sethi",
    nptelMoocUrl: "https://nptel.ac.in/courses/106105217",
    moocAlternative: {
      platform: "TryHackMe / PortSwigger",
      title: "CompTIA Security+ / Web Security Academy",
      estimatedHours: "45 hours"
    },
    demandScore: 89
  },
  {
    id: "CS705",
    code: "CS-415",
    title: "Data Engineering & Stream Processing",
    department: "Data Science & AI",
    type: "Professional Elective - V",
    semester: 7,
    credits: 3,
    difficulty: "Advanced",
    category: "Data Engineering",
    prerequisites: ["Database Systems", "Python or Java"],
    coreSkills: ["Data Engineering", "SQL & Databases", "Apache Kafka", "Apache Spark", "Python"],
    description: "Building production data lakes, batch and real-time ETL pipelines, stream processing with Kafka and Spark, and modern data warehousing.",
    syllabus: [
      "Unit 1: Data Modeling: Dimensional Modeling & Star/Snowflake Schemas",
      "Unit 2: Large-Scale Distributed Compute with Apache Spark",
      "Unit 3: Event Streaming Architecture with Apache Kafka",
      "Unit 4: Orchestration with Apache Airflow & Data Quality Checks",
      "Unit 5: Modern Cloud Warehouses (Snowflake / BigQuery / dbt)"
    ],
    faculty: "Dr. Madhavan Pillai",
    nptelMoocUrl: "https://nptel.ac.in/courses/106104016",
    moocAlternative: {
      platform: "DataTalks.Club",
      title: "Data Engineering Zoomcamp",
      estimatedHours: "50 hours"
    },
    demandScore: 91
  },
  {
    id: "CS706",
    code: "CS-416",
    title: "Mobile Application Development (Flutter & Android)",
    department: "Information Technology",
    type: "Open Elective - II",
    semester: 6,
    credits: 3,
    difficulty: "Beginner-Intermediate",
    category: "Mobile Development",
    prerequisites: ["Object-Oriented Programming (Java/Dart/C++)"],
    coreSkills: ["Mobile Development", "Flutter", "React Native", "REST APIs", "UI/UX Design"],
    description: "Cross-platform mobile application architecture, state management with Bloc/Provider, native device APIs, local SQLite storage, and app publishing.",
    syllabus: [
      "Unit 1: Mobile UI Principles, Dart Language & Flutter Widget Tree",
      "Unit 2: Responsive Layouts, Navigation & Responsive State Management",
      "Unit 3: Asynchronous HTTP Networking, JSON Parsing & Caching",
      "Unit 4: Native Features: GPS, Camera, SQLite, and Push Notifications",
      "Unit 5: App Optimization, Security, and Google Play Store Publishing"
    ],
    faculty: "Prof. Sneha Deshmukh",
    nptelMoocUrl: "https://nptel.ac.in/courses/106106156",
    moocAlternative: {
      platform: "Google Developers / Android",
      title: "Android Basics with Compose / Flutter Apprentice",
      estimatedHours: "35 hours"
    },
    demandScore: 85
  },
  {
    id: "CS707",
    code: "CS-417",
    title: "Natural Language Processing & LLMs",
    department: "Data Science & AI",
    type: "Professional Elective - VI",
    semester: 8,
    credits: 3,
    difficulty: "Advanced",
    category: "Artificial Intelligence",
    prerequisites: ["Python", "Machine Learning Basics", "Probability"],
    coreSkills: ["Python", "Machine Learning", "NLP", "PyTorch", "Prompt Engineering"],
    description: "Tokenization, word embeddings, sequence-to-sequence models, fine-tuning large language models, retrieval augmented generation (RAG).",
    syllabus: [
      "Unit 1: Text Preprocessing, N-grams, TF-IDF, and Word2Vec/GloVe",
      "Unit 2: BERT, RoBERTa, and Encoder-Decoder Architectures",
      "Unit 3: Generative LLMs (GPT family), Decoders, and Attention Variants",
      "Unit 4: Retrieval-Augmented Generation (RAG) & Vector Databases",
      "Unit 5: Parameter-Efficient Fine-Tuning (LoRA, QLoRA) & Safety"
    ],
    faculty: "Dr. R. K. Bhattacharya",
    nptelMoocUrl: "https://nptel.ac.in/courses/106105158",
    moocAlternative: {
      platform: "Hugging Face",
      title: "Hugging Face NLP & Deep Learning Course",
      estimatedHours: "45 hours"
    },
    demandScore: 97
  },
  {
    id: "CS708",
    code: "CS-418",
    title: "DevOps & Continuous Delivery Engineering",
    department: "Computer Science & Engineering",
    type: "Open Elective - III",
    semester: 7,
    credits: 3,
    difficulty: "Intermediate",
    category: "Cloud & Systems",
    prerequisites: ["Linux Basics", "Git Version Control"],
    coreSkills: ["Cloud & DevOps", "Docker", "CI/CD", "Linux", "Git"],
    description: "Modern software delivery pipelines, Infrastructure as Code with Terraform, monitoring with Prometheus/Grafana, and GitOps workflows.",
    syllabus: [
      "Unit 1: DevOps Culture, Git Branching Strategies & Release Management",
      "Unit 2: CI/CD Pipeline Automation with GitHub Actions & GitLab CI",
      "Unit 3: Infrastructure as Code (IaC) with Terraform and Ansible",
      "Unit 4: Observability: Log Aggregation, Metrics & Prometheus/Grafana",
      "Unit 5: DevSecOps: Static Analysis, Dependency Scanning & Policy as Code"
    ],
    faculty: "Prof. S. Nandakumar",
    nptelMoocUrl: "https://nptel.ac.in/courses/106105220",
    moocAlternative: {
      platform: "KodeKloud",
      title: "DevOps Pre-Requisite & Certified Kubernetes Administrator",
      estimatedHours: "40 hours"
    },
    demandScore: 93
  }
];
