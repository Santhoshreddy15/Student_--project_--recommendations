import React, { useState } from 'react';
import { Lock, Mail, ArrowRight, Eye, EyeOff, GraduationCap } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import Modal from '../common/Modal';

export default function LoginModal() {
  const { isAuthModalOpen, setIsAuthModalOpen, login, switchDemoRole } = useAuth();
  const [email, setEmail] = useState('alex.johnson@college.edu');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState('student');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    login({
      id: `user-${Date.now()}`,
      name: email.split('@')[0].replace('.', ' ').toUpperCase(),
      email,
      role,
      department: "Computer Science & Engineering",
      semester: 6,
      cgpa: 8.42
    });
  };

  const handleQuickDemo = (roleKey) => {
    switchDemoRole(roleKey);
    setIsAuthModalOpen(false);
  };

  return (
    <Modal
      isOpen={isAuthModalOpen}
      onClose={() => setIsAuthModalOpen(false)}
      title="University Single Sign-On (SSO)"
      subtitle="Sign in to your EduPath Student or Department Faculty Portal"
      maxWidth="max-w-md"
    >
      <div className="space-y-4 text-xs">
        
        {/* LinkedIn / Academic Preset Quick Card */}
        <div className="p-3.5 bg-slate-50 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <div className="flex items-center gap-1.5 text-slate-700 dark:text-slate-300 font-bold mb-2">
            <GraduationCap className="w-4 h-4 text-primary-600 dark:text-primary-400" />
            <span>Instant Demo Persona Sign-In</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => handleQuickDemo('student1')}
              className="p-2.5 bg-white dark:bg-slate-900 hover:bg-primary-50 dark:hover:bg-primary-950/40 border border-slate-200 dark:border-slate-700 rounded-lg text-left transition-all"
            >
              <strong className="block text-slate-900 dark:text-white">Alex Johnson</strong>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">Student • AI/ML Path</span>
            </button>

            <button
              type="button"
              onClick={() => handleQuickDemo('faculty')}
              className="p-2.5 bg-white dark:bg-slate-900 hover:bg-primary-50 dark:hover:bg-primary-950/40 border border-slate-200 dark:border-slate-700 rounded-lg text-left transition-all"
            >
              <strong className="block text-slate-900 dark:text-white">Dr. Ramanathan</strong>
              <span className="text-[10px] text-slate-500 dark:text-slate-400">HOD • Faculty Admin</span>
            </button>
          </div>
        </div>

        <div className="relative flex py-1 items-center">
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
          <span className="flex-shrink mx-3 text-slate-400 text-[11px]">or login with institutional ID</span>
          <div className="flex-grow border-t border-slate-200 dark:border-slate-700"></div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Institutional Email / Roll Number
            </label>
            <div className="relative">
              <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs"
                placeholder="21cs084@college.edu"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Account Password
            </label>
            <div className="relative">
              <Lock className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-9 pr-10 py-2 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 text-xs"
                placeholder="••••••••"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
              >
                {showPassword ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-[11px]">
            <label className="flex items-center gap-1.5 cursor-pointer text-slate-600 dark:text-slate-400">
              <input 
                type="checkbox" 
                checked={rememberMe} 
                onChange={(e) => setRememberMe(e.target.checked)} 
                className="rounded text-primary-600"
              />
              <span>Remember this browser</span>
            </label>
            <span className="text-primary-600 dark:text-primary-400 hover:underline cursor-pointer">
              Forgot password?
            </span>
          </div>

          <div>
            <label className="block font-semibold text-slate-700 dark:text-slate-300 mb-1">Portal View Mode</label>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                onClick={() => setRole('student')}
                className={`py-2 rounded-lg border text-xs font-semibold transition-all ${
                  role === 'student' 
                    ? 'bg-primary-50 dark:bg-primary-950/60 border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 ring-1 ring-primary-500' 
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                Student View
              </button>
              <button
                type="button"
                onClick={() => setRole('faculty')}
                className={`py-2 rounded-lg border text-xs font-semibold transition-all ${
                  role === 'faculty' 
                    ? 'bg-primary-50 dark:bg-primary-950/60 border-primary-300 dark:border-primary-700 text-primary-700 dark:text-primary-300 ring-1 ring-primary-500' 
                    : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                }`}
              >
                Faculty & HOD
              </button>
            </div>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full py-2.5 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl flex items-center justify-center gap-2 transition-colors shadow-sm text-xs"
            >
              <span>Sign In with University Credentials</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </form>

      </div>
    </Modal>
  );
}
