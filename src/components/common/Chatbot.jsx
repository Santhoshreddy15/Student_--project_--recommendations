import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, 
  X, 
  Send, 
  Bot, 
  User, 
  Sparkles, 
  ChevronDown, 
  Minus,
  Maximize2,
  GraduationCap
} from 'lucide-react';
import { useRecommendation } from '../../context/RecommendationContext';
import { MOCK_COURSES } from '../../data/mockCourses';
import { MOCK_CAREERS } from '../../data/mockCareers';
import { MOCK_PROJECTS } from '../../data/mockProjects';

export default function Chatbot() {
  const { studentProfile, recommendationResult, weights } = useRecommendation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: "msg-1",
      sender: "bot",
      text: `Hello ${studentProfile?.name?.split(' ')[0] || 'Student'}! 👋 I am your EduPath Academic Advisor Bot. I can analyze your course recommendations, suggest capstone projects, or explain how to bridge your technical skill gaps. How can I help you today?`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Suggested prompt pills
  const promptSuggestions = [
    "Why is my top elective recommended?",
    "How can I bridge my critical skill gaps?",
    "Suggest a capstone project for my skills",
    "Explain the scoring formula for viva"
  ];

  // Dynamic context-aware knowledge responder
  const generateBotReply = (userQuery) => {
    const q = userQuery.toLowerCase();
    const targetCareer = MOCK_CAREERS.find(c => c.id === studentProfile.targetCareerId) || MOCK_CAREERS[0];
    const topCourse = recommendationResult?.topCourses?.[0] || MOCK_COURSES[0];
    const gaps = recommendationResult?.skillGapAnalysis?.criticalGaps || [];
    const readiness = recommendationResult?.skillGapAnalysis?.readinessIndex || 80;

    if (q.includes("why") && (q.includes("elective") || q.includes("course") || q.includes("top") || q.includes("recommended"))) {
      return `Based on your profile, **${topCourse.title} (${topCourse.code})** is your highest recommendation (${topCourse.matchScore}% Match). 
- **Reason:** It directly reinforces your declared target career as a **${targetCareer.title}**.
- **Prerequisites:** ${topCourse.prereqResult.passed ? '✅ You fulfill all prerequisite skills.' : `⚠️ Please review ${topCourse.prereqResult.missingPrereqs.map(p => p.name).join(', ')}.`}
- **Syllabus Synergy:** High vector cosine similarity with your proficiency in ${topCourse.coreSkills.slice(0, 3).join(', ')}.`;
    }

    if (q.includes("gap") || q.includes("bridge") || q.includes("docker") || q.includes("cloud") || q.includes("critical")) {
      if (gaps.length > 0) {
        const gapList = gaps.map(g => `• **${g.skill}**: Current ${g.current}/5 vs ${g.benchmark}/5 Required`).join('\n');
        return `Your current assessment identifies **${gaps.length} critical skill gap(s)** for the **${targetCareer.title}** role:\n\n${gapList}\n\n**Actionable Advice:**\n1. Follow **Phase 1** of your 12-week roadmap.\n2. Choose a tailored capstone project like *"Personalized Recommendation Engine"* or *"CI/CD Pipeline with DevSecOps"* to build practical portfolio proof.`;
      }
      return `Great news! You have no critical skill gaps for **${targetCareer.title}**. Your role readiness index is at an impressive **${readiness}%**!`;
    }

    if (q.includes("capstone") || q.includes("project") || q.includes("suggest") || q.includes("topic")) {
      const proj = MOCK_PROJECTS.find(p => p.targetCareer === studentProfile.targetCareerId) || MOCK_PROJECTS[0];
      return `I recommend the capstone topic: **"${proj.title}"** (${proj.type}).
- **Domain:** ${proj.domain}
- **Why it fits you:** It specifically exercises ${proj.gapSkillsCovered.join(', ')} to eliminate your identified gap areas.
- **Tech Stack:** ${proj.techStack.join(', ')}.`;
    }

    if (q.includes("formula") || q.includes("viva") || q.includes("algorithm") || q.includes("calculate") || q.includes("math")) {
      return `For your viva defense, explain that the decision engine calculates score **S(c, s)** via a weighted linear combination:
\`\`\`
S(c, s) = (w1 · Sim_skills) + (w2 · Score_cgpa) + (w3 · Match_career) - Penalties
\`\`\`
- Current active weights: Skill Sim = **${(weights.skillWeight * 100).toFixed(0)}%**, CGPA = **${(weights.cgpaWeight * 100).toFixed(0)}%**, Career = **${(weights.careerWeight * 100).toFixed(0)}%**.
- Cosine similarity measures the angle between your self-rating vector and course requirements in high-dimensional skill space.`;
    }

    if (q.includes("cgpa") || q.includes("grades") || q.includes("gpa")) {
      return `Your current CGPA is **${studentProfile.cgpa} / 10.0**. In our algorithm, your academic standing contributes **${(weights.cgpaWeight * 100).toFixed(0)}%** toward elective suitability scoring. Maintaining a CGPA above 8.0 qualifies you for advanced research-oriented electives!`;
    }

    return `I understand you are asking about "${userQuery}". As a ${studentProfile.department} student targeting **${targetCareer.title}**, I recommend reviewing your **Recommendations tab** for curated electives and exploring the **12-Week Roadmap** to structure your final-year preparation.`;
  };

  const handleSendMessage = (textToSend) => {
    const text = textToSend || inputMessage;
    if (!text.trim()) return;

    const userMsg = {
      id: `msg-${Date.now()}`,
      sender: "user",
      text: text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputMessage('');
    setIsTyping(true);

    setTimeout(() => {
      const reply = generateBotReply(text);
      const botMsg = {
        id: `msg-${Date.now() + 1}`,
        sender: "bot",
        text: reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 no-print">
      
      {/* Floating Trigger Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="px-4 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-2xl flex items-center gap-2.5 transition-all transform hover:scale-105 group border-2 border-white dark:border-slate-800"
          title="Open AI Academic Advisor Chatbot"
        >
          <div className="relative">
            <Bot className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-primary-600 animate-ping" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-emerald-400 rounded-full border-2 border-primary-600" />
          </div>
          <span className="text-xs font-bold tracking-tight pr-1">Ask Advisor Bot</span>
        </button>
      )}

      {/* Chat Window Container */}
      {isOpen && (
        <div className="w-[360px] sm:w-[400px] h-[520px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-primary-600 to-primary-800 text-white flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-tight">EduPath AI Advisor</h4>
                <p className="text-[10px] text-primary-200 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  Context: {studentProfile.name.split(' ')[0]} ({studentProfile.department?.split(' ')[0]})
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs bg-slate-50/50 dark:bg-slate-950/40">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900/60 text-primary-700 dark:text-primary-300 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                    AI
                  </div>
                )}

                <div
                  className={`p-3 rounded-2xl max-w-[82%] leading-relaxed shadow-sm ${
                    msg.sender === 'user'
                      ? 'bg-primary-600 text-white rounded-tr-none'
                      : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-line text-xs">{msg.text}</p>
                  <span className={`text-[9px] block mt-1 ${msg.sender === 'user' ? 'text-primary-200 text-right' : 'text-slate-400'}`}>
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-2 items-center text-slate-400 text-[11px] italic">
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-bounce" />
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-bounce delay-100" />
                <span className="w-2 h-2 rounded-full bg-primary-500 animate-bounce delay-200" />
                <span>Advisor is analyzing...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick suggestions pills */}
          <div className="p-2 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 flex items-center gap-1.5 overflow-x-auto">
            {promptSuggestions.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(prompt)}
                className="px-2 py-1 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-primary-50 dark:hover:bg-primary-950/60 text-slate-600 dark:text-slate-300 hover:text-primary-700 dark:hover:text-primary-300 text-[10px] font-medium whitespace-nowrap transition-colors border border-slate-200 dark:border-slate-700"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 flex items-center gap-2"
          >
            <input
              type="text"
              placeholder="Ask about electives, gaps, or projects..."
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              className="flex-1 bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
            />

            <button
              type="submit"
              disabled={!inputMessage.trim()}
              className="p-2 rounded-xl bg-primary-600 hover:bg-primary-700 text-white disabled:opacity-40 disabled:hover:bg-primary-600 transition-colors flex-shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>
      )}

    </div>
  );
}
