import React, { createContext, useContext, useState, useEffect } from 'react';
import { generateRecommendations } from '../services/recommendationEngine';
import { storageService } from '../services/storageService';
import { SAMPLE_STUDENTS } from '../data/mockStudents';
import { useAuth } from './AuthContext';

const RecommendationContext = createContext();

export function RecommendationProvider({ children }) {
  const { currentUser } = useAuth();

  // Storage synced states
  const [courses, setCourses] = useState(() => storageService.getCourses());
  const [weights, setWeights] = useState(() => storageService.getWeights());
  const [students, setStudents] = useState(() => storageService.getStudents());
  const [bookmarks, setBookmarks] = useState(() => storageService.getBookmarks());

  // Active student assessment form state
  const [studentProfile, setStudentProfile] = useState(() => {
    return SAMPLE_STUDENTS[0];
  });

  // Active computed recommendation state
  const [recommendationResult, setRecommendationResult] = useState(() => {
    return generateRecommendations(SAMPLE_STUDENTS[0], storageService.getCourses(), storageService.getWeights());
  });

  // Notification toast state
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'info') => {
    setToast({ message, type, id: Date.now() });
    setTimeout(() => {
      setToast(null);
    }, 3500);
  };

  // Sync profile when current user changes
  useEffect(() => {
    if (currentUser && currentUser.role === 'student') {
      const match = students.find(s => s.rollNumber === currentUser.rollNumber) || SAMPLE_STUDENTS[0];
      setStudentProfile(match);
      const computed = generateRecommendations(match, courses, weights);
      setRecommendationResult(computed);
    }
  }, [currentUser]);

  // Recalculate when profile, courses, or weights update
  const runAssessment = (profileData) => {
    const updatedProfile = {
      ...studentProfile,
      ...profileData,
      rollNumber: profileData.rollNumber || studentProfile.rollNumber || `21CS${Math.floor(100 + Math.random() * 800)}`,
      name: profileData.name || studentProfile.name || "Student User"
    };

    setStudentProfile(updatedProfile);
    
    // Save to students list
    const updatedStudentsList = storageService.addOrUpdateStudent(updatedProfile);
    setStudents(updatedStudentsList);

    // Run recommendation engine
    const results = generateRecommendations(updatedProfile, courses, weights);
    setRecommendationResult(results);
    showToast("Recommendations generated successfully!", "success");
    return results;
  };

  const updateAlgorithmWeights = (newWeights) => {
    setWeights(newWeights);
    storageService.saveWeights(newWeights);
    // Recalculate for current student
    const results = generateRecommendations(studentProfile, courses, newWeights);
    setRecommendationResult(results);
    showToast("Algorithm weights updated and recommendations refreshed.", "info");
  };

  const addNewCourse = (courseData) => {
    const updated = storageService.addCourse(courseData);
    setCourses([...updated]);
    // Recalculate
    const results = generateRecommendations(studentProfile, updated, weights);
    setRecommendationResult(results);
    showToast(`Course ${courseData.code} added to catalog.`, "success");
  };

  const toggleBookmarkItem = (type, id) => {
    const updated = storageService.toggleBookmark(type, id);
    setBookmarks({ ...updated });
    const isAdded = updated[type]?.includes(id);
    showToast(isAdded ? `Item added to saved list` : `Item removed from saved list`, "info");
  };

  return (
    <RecommendationContext.Provider value={{
      courses,
      weights,
      students,
      bookmarks,
      studentProfile,
      setStudentProfile,
      recommendationResult,
      runAssessment,
      updateAlgorithmWeights,
      addNewCourse,
      toggleBookmarkItem,
      toast,
      showToast
    }}>
      {children}
    </RecommendationContext.Provider>
  );
}

export function useRecommendation() {
  const context = useContext(RecommendationContext);
  if (!context) {
    throw new Error("useRecommendation must be used within a RecommendationProvider");
  }
  return context;
}
