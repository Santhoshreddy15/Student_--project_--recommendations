import { SAMPLE_STUDENTS } from '../data/mockStudents';
import { MOCK_COURSES } from '../data/mockCourses';
import { DEFAULT_WEIGHTS } from './recommendationEngine';

const STORAGE_KEYS = {
  STUDENTS: 'edupath_students_v1',
  COURSES: 'edupath_courses_v1',
  WEIGHTS: 'edupath_weights_v1',
  ACTIVE_USER: 'edupath_active_user_v1',
  SAVED_BOOKMARKS: 'edupath_bookmarks_v1'
};

export const storageService = {
  getStudents() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.STUDENTS);
      return data ? JSON.parse(data) : SAMPLE_STUDENTS;
    } catch (e) {
      console.warn("Storage read error", e);
      return SAMPLE_STUDENTS;
    }
  },

  saveStudents(students) {
    try {
      localStorage.setItem(STORAGE_KEYS.STUDENTS, JSON.stringify(students));
    } catch (e) {
      console.error("Storage write error", e);
    }
  },

  addOrUpdateStudent(student) {
    const students = this.getStudents();
    const existingIndex = students.findIndex(s => s.id === student.id || s.rollNumber === student.rollNumber);
    
    if (existingIndex >= 0) {
      students[existingIndex] = { ...students[existingIndex], ...student };
    } else {
      students.unshift({
        ...student,
        id: student.id || `std-${Date.now()}`,
        submissionDate: new Date().toISOString().split('T')[0]
      });
    }
    this.saveStudents(students);
    return students;
  },

  getCourses() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.COURSES);
      return data ? JSON.parse(data) : MOCK_COURSES;
    } catch (e) {
      return MOCK_COURSES;
    }
  },

  saveCourses(courses) {
    localStorage.setItem(STORAGE_KEYS.COURSES, JSON.stringify(courses));
  },

  addCourse(newCourse) {
    const courses = this.getCourses();
    const course = {
      ...newCourse,
      id: newCourse.id || `CS${Math.floor(700 + Math.random() * 200)}`,
      demandScore: 88
    };
    courses.push(course);
    this.saveCourses(courses);
    return courses;
  },

  getWeights() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.WEIGHTS);
      return data ? JSON.parse(data) : DEFAULT_WEIGHTS;
    } catch (e) {
      return DEFAULT_WEIGHTS;
    }
  },

  saveWeights(weights) {
    localStorage.setItem(STORAGE_KEYS.WEIGHTS, JSON.stringify(weights));
  },

  getBookmarks() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SAVED_BOOKMARKS);
      return data ? JSON.parse(data) : { courses: [], projects: [] };
    } catch (e) {
      return { courses: [], projects: [] };
    }
  },

  toggleBookmark(type, id) {
    const bookmarks = this.getBookmarks();
    const list = bookmarks[type] || [];
    const index = list.indexOf(id);
    if (index >= 0) {
      list.splice(index, 1);
    } else {
      list.push(id);
    }
    bookmarks[type] = list;
    localStorage.setItem(STORAGE_KEYS.SAVED_BOOKMARKS, JSON.stringify(bookmarks));
    return bookmarks;
  },

  getActiveUser() {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.ACTIVE_USER);
      return data ? JSON.parse(data) : null;
    } catch (e) {
      return null;
    }
  },

  setActiveUser(user) {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.ACTIVE_USER, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEYS.ACTIVE_USER);
    }
  }
};
