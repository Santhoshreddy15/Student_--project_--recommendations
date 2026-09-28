import React, { useState } from 'react';
import { 
  GraduationCap, 
  Compass, 
  BookOpen, 
  BarChart3, 
  FileText, 
  User, 
  Menu, 
  X, 
  ChevronDown, 
  Sun,
  Moon,
  UserCheck
} from 'lucide-react';
import { useAuth, DEMO_USERS } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import Badge from './Badge';

export default function Navbar({ activeTab, setActiveTab }) {
  const { currentUser, switchDemoRole, setIsAuthModalOpen } = useAuth();
  const { isDark, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [roleDropdownOpen, setRoleDropdownOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: Compass },
    { id: 'profile', label: 'Student Profile', icon: User },
    { id: 'assessment', label: 'Assessment', icon: GraduationCap },
    { id: 'results', label: 'Recommendations', icon: BookOpen },
    { id: 'admin', label: 'Faculty Portal', icon: BarChart3 },
    { id: 'docs', label: 'Viva Docs & Arch', icon: FileText },
  ];

  const handleNavClick = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors no-print">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo & Project Title */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => setActiveTab('home')}>
            <div className="w-10 h-10 rounded-lg bg-primary-600 flex items-center justify-center text-white shadow-sm">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 dark:text-white tracking-tight text-base">EduPath</span>
                <span className="text-[10px] font-semibold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 px-1.5 py-0.5 rounded border border-slate-200 dark:border-slate-700">
                  v1.2
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 hidden sm:block">
                Recommendation Engine
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md text-xs lg:text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary-50 dark:bg-primary-950/70 text-primary-700 dark:text-primary-300 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400'}`} />
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Right Actions: Dark Mode Toggle, Role Switcher, & Action */}
          <div className="hidden lg:flex items-center gap-2.5">
            
            {/* Dark / Light Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition-colors"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-600" />}
            </button>

            {/* Quick Demo Persona Dropdown */}
            <div className="relative">
              <button
                onClick={() => setRoleDropdownOpen(!roleDropdownOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-700 dark:text-slate-200 transition-colors"
              >
                <UserCheck className="w-3.5 h-3.5 text-primary-600 dark:text-primary-400" />
                <span>
                  {currentUser ? (
                    currentUser.role === 'faculty' ? 'Faculty Mode' : `Student: ${currentUser.name.split(' ')[0]}`
                  ) : 'Select Demo User'}
                </span>
                <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
              </button>

              {roleDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-slate-900 rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 py-2 z-50 text-xs animate-in fade-in slide-in-from-top-2">
                  <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100 dark:border-slate-800">
                    Switch Viva Persona
                  </div>

                  <button
                    onClick={() => {
                      switchDemoRole('student1');
                      setRoleDropdownOpen(false);
                      setActiveTab('profile');
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Alex Johnson (CSE)</p>
                      <p className="text-[11px] text-slate-500">CGPA 8.42 • Target: AI/ML</p>
                    </div>
                    {currentUser?.rollNumber === '21CS084' && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    )}
                  </button>

                  <button
                    onClick={() => {
                      switchDemoRole('student2');
                      setRoleDropdownOpen(false);
                      setActiveTab('profile');
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between"
                  >
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Priya Sharma (IT)</p>
                      <p className="text-[11px] text-slate-500">CGPA 8.95 • Target: Full Stack</p>
                    </div>
                    {currentUser?.rollNumber === '21IT045' && (
                      <span className="w-2 h-2 rounded-full bg-emerald-500" />
                    )}
                  </button>

                  <button
                    onClick={() => {
                      switchDemoRole('faculty');
                      setRoleDropdownOpen(false);
                      setActiveTab('admin');
                    }}
                    className="w-full text-left px-3 py-2 hover:bg-slate-50 dark:hover:bg-slate-800 flex items-center justify-between border-t border-slate-100 dark:border-slate-800"
                  >
                    <div>
                      <p className="font-medium text-slate-800 dark:text-slate-200">Dr. K. S. Ramanathan</p>
                      <p className="text-[11px] text-slate-500">HOD & Project Guide (Faculty)</p>
                    </div>
                    {currentUser?.role === 'faculty' && (
                      <span className="w-2 h-2 rounded-full bg-primary-600" />
                    )}
                  </button>
                </div>
              )}
            </div>

            {/* Auth / Profile Link */}
            <button
              onClick={() => setIsAuthModalOpen(true)}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-primary-600 hover:bg-primary-700 text-white transition-colors flex items-center gap-1.5 shadow-sm"
            >
              <User className="w-3.5 h-3.5" />
              <span>Portal Login</span>
            </button>
          </div>

          {/* Mobile buttons */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 pt-2 pb-4 space-y-1 animate-in fade-in">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium ${
                  isActive
                    ? 'bg-primary-50 dark:bg-primary-950/80 text-primary-700 dark:text-primary-300 font-semibold'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? 'text-primary-600 dark:text-primary-400' : 'text-slate-400'}`} />
                {item.label}
              </button>
            );
          })}

          <div className="pt-3 border-t border-slate-100 dark:border-slate-800 mt-2 space-y-2">
            <button
              onClick={() => {
                setIsAuthModalOpen(true);
                setMobileMenuOpen(false);
              }}
              className="w-full py-2 bg-primary-600 text-white rounded-lg text-xs font-semibold text-center"
            >
              Portal Login / Switch User
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
