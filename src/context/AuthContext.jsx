import React, { createContext, useContext, useState, useEffect } from 'react';
import { SAMPLE_STUDENTS } from '../data/mockStudents';
import { storageService } from '../services/storageService';

const AuthContext = createContext();

export const DEMO_USERS = {
  student1: {
    id: "std-101",
    name: "Alex Johnson",
    email: "alex.johnson@college.edu",
    role: "student",
    rollNumber: "21CS084",
    department: "Computer Science & Engineering",
    semester: 6,
    cgpa: 8.42,
    avatar: "AJ"
  },
  student2: {
    id: "std-102",
    name: "Priya Sharma",
    email: "priya.sharma@college.edu",
    role: "student",
    rollNumber: "21IT045",
    department: "Information Technology",
    semester: 6,
    cgpa: 8.95,
    avatar: "PS"
  },
  faculty: {
    id: "fac-201",
    name: "Dr. K. S. Ramanathan",
    email: "hod.cse@college.edu",
    role: "faculty",
    designation: "Professor & Head of Department",
    department: "Computer Science & Engineering",
    avatar: "KR"
  }
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const saved = storageService.getActiveUser();
    return saved || DEMO_USERS.student1;
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'

  useEffect(() => {
    storageService.setActiveUser(currentUser);
  }, [currentUser]);

  const login = (user) => {
    setCurrentUser(user);
    setIsAuthModalOpen(false);
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const switchDemoRole = (roleKey) => {
    if (DEMO_USERS[roleKey]) {
      setCurrentUser(DEMO_USERS[roleKey]);
    } else if (roleKey === 'guest') {
      setCurrentUser(null);
    }
  };

  return (
    <AuthContext.Provider value={{
      currentUser,
      setCurrentUser,
      login,
      logout,
      switchDemoRole,
      isAuthModalOpen,
      setIsAuthModalOpen,
      authMode,
      setAuthMode
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
