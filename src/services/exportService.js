import { PROJECT_METADATA } from '../data/projectDocs';

export const exportService = {
  printReport(studentProfile, recommendationData) {
    window.print();
  },

  downloadJsonReport(studentProfile, recommendationData) {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify({
      system: PROJECT_METADATA.projectTitle,
      institution: PROJECT_METADATA.institution,
      timestamp: new Date().toISOString(),
      studentProfile,
      recommendationData
    }, null, 2));

    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `Recommendation_Report_${studentProfile.rollNumber || 'Student'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  }
};
