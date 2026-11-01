# 🎓 Student Project & Course Recommendation System

> An intelligent, AI-powered academic recommendation platform that pairs engineering and computer science students with personalized capstone projects, relevant technical courses, and tailored career roadmaps using cosine-similarity multi-criteria decision algorithms.

![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-5.4.6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.4.11-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Status](https://img.shields.io/badge/Deployment-Vercel_Ready-000000?style=for-the-badge&logo=vercel&logoColor=white)

---

## 🌟 Key Features

### 👨‍🎓 For Students
* **Skill & Profile Assessment:** Input current technical proficiencies, GPA/CGPA, academic interests, and career ambitions.
* **Smart Project Suggestions:** Get matched with capstone and mini-project ideas with difficulty levels, tech stacks, and domain tags.
* **Course & Elective Guidance:** Discover target courses and electives ranked by algorithmic match score and prerequisite compatibility.
* **Career Path Roadmap:** Interactive career progression timelines showing skill gaps, recommended certifications, and industry requirements.
* **LinkedIn Profile Optimizer:** Tailored recommendations to enhance resume and LinkedIn positioning for campus recruitment.
* **Saved History & PDF Export:** Save assessment results and export comprehensive PDF recommendation reports.

### 🛡️ For Faculty & Admins
* **Admin Dashboard:** Real-time visibility into student assessments, popular tech domains, and skill trends.
* **Algorithm Weight Tuning:** Dynamically adjust algorithm parameters (Skill Match Weight, CGPA Weight, Career Alignment Weight, and Prerequisite Penalty).
* **Course & Project Manager:** Add, edit, or archive available courses, faculty mentors, and project repositories.
* **Student Directory:** Search, filter, and inspect individual student profiles and recommendation histories.

### 📚 Academic Viva & Documentation Suite
* **Interactive Algorithm Simulator:** Step-by-step mathematical demonstration of Vector Cosine Similarity and Multi-Criteria Scoring for viva presentations.
* **System Architecture View:** Visual workflow diagrams depicting data ingestion, scoring engines, and presentation layers.
* **Embedded AI Assistant Chatbot:** Interactive assistant to guide students through elective choices and project planning.

---

## ⚙️ Recommendation Algorithm

The recommendation engine scores projects and courses using a **Multi-Criteria Cosine Similarity Scoring Engine**:

$$\text{Final Score} = (W_{skill} \cdot S_{cosine}) + (W_{cgpa} \cdot S_{cgpa}) + (W_{career} \cdot S_{career}) - P_{prereq}$$

### Core Parameters:
| Weight Parameter | Default Value | Description |
| :--- | :---: | :--- |
| **Skill Match ($W_{skill}$)** | `0.50` (50%) | Cosine similarity between student skill proficiencies and required course/project skills. |
| **Career Alignment ($W_{career}$)** | `0.30` (30%) | Alignment score with the student's selected target job role or industry sector. |
| **Academic CGPA ($W_{cgpa}$)** | `0.20` (20%) | Scaled normalization to reward foundational academic standing. |
| **Prerequisite Penalty ($P_{prereq}$)** | `0.15` (15%) | Deterministic deduction applied when foundational prerequisite courses are unfulfilled. |

---

## 🛠️ Technology Stack

* **Frontend Framework:** [React 18](https://react.dev/)
* **Build Tooling:** [Vite 5](https://vitejs.dev/)
* **Styling & Design System:** [Tailwind CSS 3](https://tailwindcss.com/) with PostCSS & Autoprefixer
* **Icons:** [Lucide React](https://lucide.dev/)
* **Class Utilities:** `clsx`, `tailwind-merge`
* **Deployment Platform:** [Vercel](https://vercel.com/) / Static Hosting

---

## 📁 Project Directory Structure

```text
student-project-recommendations/
├── src/
│   ├── components/
│   │   ├── admin/             # Admin dashboard, weight tuning, course manager
│   │   ├── auth/              # Login & authentication modals
│   │   ├── common/            # Navbar, Footer, Chatbot, Modals, Badges, Toast
│   │   ├── docs/              # Viva documentation, architecture diagrams, algorithm simulator
│   │   ├── home/              # Hero banner, feature highlights, problem-solution views
│   │   └── student/           # Assessment forms, project suggestions, course roadmaps
│   ├── context/               # AuthContext, RecommendationContext, ThemeContext
│   ├── data/                  # Mock datasets (projects, courses, careers, students)
│   ├── services/              # Recommendation cosine engine, export, storage service
│   ├── App.jsx                # Main application controller & routing
│   ├── main.jsx               # React DOM entry point
│   └── index.css              # Tailwind base directives & custom themes
├── public/                    # Static assets & favicon
├── package.json               # Package dependencies and npm run scripts
├── tailwind.config.js         # Tailwind theme customizations
├── vite.config.js             # Vite configuration
└── README.md                  # Project documentation
```

---

## 🚀 Getting Started Locally

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) (v18.0.0 or higher) and npm installed.

```bash
node -v
npm -v
```

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Santhoshreddy15/student-project-recommendations.git
   cd student-project-recommendations
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```text
   http://localhost:5173
   ```

### Build for Production

To create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

## 📄 License & Credits

Developed by **[Santhoshreddy15](https://github.com/Santhoshreddy15)** as an academic and engineering decision support platform.
Open-source and available under the [MIT License](LICENSE).

