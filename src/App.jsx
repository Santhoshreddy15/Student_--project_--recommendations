import React, { useState } from 'react';
import { AuthProvider } from './context/AuthContext';
import { RecommendationProvider } from './context/RecommendationContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Toast from './components/common/Toast';
import LoginModal from './components/auth/LoginModal';

// Home components
import HeroSection from './components/home/HeroSection';
import QuickDemo from './components/home/QuickDemo';
import ProblemSolution from './components/home/ProblemSolution';
import HowItWorks from './components/home/HowItWorks';
import FeatureGrid from './components/home/FeatureGrid';
import ProjectTeam from './components/home/ProjectTeam';

// Student components
import LinkedInProfile from './components/student/LinkedInProfile';
import ProfileAssessment from './components/student/ProfileAssessment';
import ResultsOverview from './components/student/ResultsOverview';

// Admin components
import AdminDashboard from './components/admin/AdminDashboard';

// Docs / Viva components
import VivaDocumentation from './components/docs/VivaDocumentation';

function MainLayout() {
  const [activeTab, setActiveTab] = useState('home'); // 'home' | 'profile' | 'assessment' | 'results' | 'admin' | 'docs'

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-800 dark:text-slate-100 transition-colors duration-200">
      {/* Top Navbar */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activeTab === 'home' && (
          <div>
            <HeroSection setActiveTab={setActiveTab} />
            <div className="px-4 sm:px-6 lg:px-8">
              <QuickDemo setActiveTab={setActiveTab} />
            </div>
            <ProblemSolution />
            <HowItWorks />
            <FeatureGrid setActiveTab={setActiveTab} />
            <ProjectTeam />
          </div>
        )}

        {activeTab === 'profile' && (
          <LinkedInProfile setActiveTab={setActiveTab} />
        )}

        {activeTab === 'assessment' && (
          <ProfileAssessment setActiveTab={setActiveTab} />
        )}

        {activeTab === 'results' && (
          <ResultsOverview setActiveTab={setActiveTab} />
        )}

        {activeTab === 'admin' && (
          <AdminDashboard setActiveTab={setActiveTab} />
        )}

        {activeTab === 'docs' && (
          <VivaDocumentation />
        )}
      </main>

      {/* Academic Footer */}
      <Footer setActiveTab={setActiveTab} />

      {/* Toast notifications & SSO Modal */}
      <Toast />
      <LoginModal />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <RecommendationProvider>
          <MainLayout />
        </RecommendationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
