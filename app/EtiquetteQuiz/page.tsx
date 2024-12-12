"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Home, BookOpen, CheckCircle2, XCircle } from "lucide-react";

interface EtiquetteSection {
    title: string;
    icon?: string;  
    quiz: {
      question: string;
      options: string[];
      correctAnswer: string;
      explanation: string;
      id: string;
    }[];
  }

const etiquetteData: EtiquetteSection[] = [
  {
    title: "The Proper Way to Bow and Greet Someone",
    icon: "🙇‍♀️",
    quiz: [
      {
        question: "Is bowing common in casual greetings in Japan?",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Bowing is a traditional and respectful form of greeting in Japan, commonly used in both casual and formal situations.",
        id: "bowing-common",
      },
    ],
  },
  {
    title: "Dining Do’s and Don’ts—Using Chopsticks Respectfully",
    icon: "🥢",
    quiz: [
      {
        question: "Is it okay to stick chopsticks upright in rice?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Sticking chopsticks upright in rice resembles a funeral custom and is considered disrespectful.",
        id: "chopsticks-rice",
      },
      {
        question: "Can you pass food directly from one set of chopsticks to another?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Passing food directly from one set of chopsticks to another resembles a funeral custom and is also considered disrespectful.",
        id: "pass-food",
      },
    ],
  },
  {
    title: "Wearing Shoes Inside a Japanese Home?",
    icon: "👞👟👠",
    quiz: [
      {
        question: "Is it okay to wear shoes inside a Japanese home?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Wearing shoes inside is considered unclean and disrespectful in Japan, and shoes must be removed before entering homes, temples, or certain restaurants.",
        id: "shoes-home",
      },
    ],
  },
  {
    title: "Navigating Public Transportation with Politeness",
    icon: "🚉🚅",
    quiz: [
      {
        question: "Is speaking on the phone allowed on public transportation?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Speaking on the phone is considered rude in Japan's public transportation system, as people value peace and quiet.",
        id: "phone-public",
      },
      {
        question: "Should you give up your seat for elderly passengers?",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "It is customary to give up your seat to elderly or disabled passengers as a sign of respect and politeness.",
        id: "give-seat",
      },
    ],
  },
  {
    title: "Kyoto Etiquette",
    icon: "🦊",
    quiz: [
      {
        question: "Should you bow slightly before entering temples and shrines in Kyoto?",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "It is customary to bow slightly before entering sacred spaces like temples and shrines in Kyoto.",
        id: "kyoto-bow",
      },
      {
        question: "Is it acceptable to take photos in restricted areas of Kyoto’s temples?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Visitors should avoid taking photos in restricted areas of Kyoto’s temples to respect the sacredness of these spaces.",
        id: "kyoto-photos",
      },
    ],
  },
  {
    title: "Tokyo Etiquette",
    icon: "🗼",
    quiz: [
      {
        question: "Is tipping common in Tokyo restaurants and hotels?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Tipping is not common in Japan, including Tokyo, so you don’t need to leave extra money at restaurants or hotels.",
        id: "tokyo-tipping",
      },
      {
        question: "Is it customary to bow slightly when entering shops in Tokyo?",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "It is polite to bow slightly when entering shops in Tokyo as a greeting to the staff.",
        id: "tokyo-bowing",
      },
    ],
  },
  {
    title: "Osaka Etiquette",
    icon: "🏰",
    quiz: [
      {
        question: "Is it necessary to say 'itadakimasu' before starting a meal in Osaka?",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "It is customary to say 'itadakimasu' before starting a meal in Osaka to express gratitude.",
        id: "osaka-itadakimasu",
      },
      {
        question: "Is Osaka known for a more formal atmosphere than other cities?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Osaka is known for its more casual atmosphere, but politeness is still important in formal occasions.",
        id: "osaka-formal",
      },
    ],
  },
  {
    title: "Nagoya Etiquette",
    icon: "⛩️",
    quiz: [
      {
        question: "Should you dress modestly when visiting Nagoya Castle?",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Visitors are expected to dress modestly and behave respectfully when visiting Nagoya Castle.",
        id: "nagoya-dress",
      },
      {
        question: "Is it important to follow the traditional way of eating hitsumabushi in Nagoya?",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Following the traditional method of eating hitsumabushi is considered respectful in Nagoya.",
        id: "nagoya-hitsumabushi",
      },
    ],
  },
  {
    title: "Fukuoka Etiquette",
    icon: "🛍️",
    quiz: [
      {
        question: "Should you dispose of your trash properly when enjoying yatai in Fukuoka?",
        options: ["True", "False"],
        correctAnswer: "True",
        explanation: "Properly disposing of trash is essential when enjoying yatai (food stalls) in Fukuoka.",
        id: "fukuoka-trash",
      },
      {
        question: "Is it acceptable to obstruct participants during the Hakata Gion Yamakasa festival?",
        options: ["True", "False"],
        correctAnswer: "False",
        explanation: "Spectators should avoid obstructing participants and follow local customs during the Hakata Gion Yamakasa festival.",
        id: "fukuoka-festival",
      },
    ],
  },
];

const EtiquetteQuiz: React.FC = () => {
    const router = useRouter();
    const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string }>({});
    const [showResults, setShowResults] = useState(false);
  
    const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>, questionId: string) => {
      const { value } = e.target;
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: value,
      }));
    };
  
    const checkAnswer = (questionId: string, correctAnswer: string) => {
      return selectedAnswers[questionId] === correctAnswer;
    };
  
    const calculateScore = () => {
      const totalQuestions = etiquetteData.reduce((total, section) => total + section.quiz.length, 0);
      const correctAnswers = Object.keys(selectedAnswers).filter(
        (questionId) => checkAnswer(questionId, etiquetteData.flatMap(section => section.quiz).find(q => q.id === questionId)?.correctAnswer || '')
      ).length;
      return Math.round((correctAnswers / totalQuestions) * 100);
    };
  
    const renderScore = () => {
      const score = calculateScore();
      let message = "";
      let color = "";
  
      if (score < 50) {
        message = "Keep studying! You're still learning.";
        color = "text-red-500";
      } else if (score < 75) {
        message = "Good start! There's room for improvement.";
        color = "text-yellow-500";
      } else {
        message = "Excellent job! You're becoming a cultural expert!";
        color = "text-green-600";
      }
  
      return (
        <div className="fixed z-50 inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-md">
            <h2 className="text-3xl font-bold mb-4">Quiz Results</h2>
            <div className={`text-6xl font-extrabold mb-4 ${color}`}>{score}%</div>
            <p className={`text-xl font-semibold ${color}`}>{message}</p>
            <button 
              onClick={() => setShowResults(false)} 
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Close
            </button>
          </div>
        </div>
      );
    };
  
    return (
      <div 
        className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 py-12 px-4"
      >
        <div className="max-w-5xl mx-auto">
          <div className="flex justify-between mb-8 space-x-4">
            <button
              onClick={() => router.push("/HomePage")}
              className="flex items-center space-x-2 px-4 py-2 bg-white text-red-500 rounded-lg shadow-md hover:bg-red-50 transition"
            >
              <ArrowLeft size={20} />
              <span>Home</span>
            </button>
            <button
              onClick={() => router.push("/EtiquettePage")}
              className="flex items-center space-x-2 px-4 py-2 bg-white text-red-500 rounded-lg shadow-md hover:bg-red-50 transition"
            >
              <BookOpen size={20} />
              <span>Study More</span>
            </button>
          </div>
  
          <h1 className="text-5xl font-extrabold text-center text-red-600 mb-6 drop-shadow-lg">
            Japanese Cultural Etiquette Quiz
          </h1>
          <p className="text-center text-gray-700 text-lg mb-12 max-w-2xl mx-auto">
            Test your knowledge of Japanese cultural etiquette and see how well you understand the subtle nuances of respect and tradition.
          </p>
  
          {etiquetteData.map((etiquette, index) => (
            <div
              key={index}
              className="mb-10 bg-white p-8 rounded-2xl shadow-xl border-l-4 border-red-500 hover:shadow-2xl transition-all"
            >
              <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <span className="mr-4 text-3xl">{etiquette.icon}</span>
                {etiquette.title}
              </h2>
  
              <div className="space-y-6">
                {etiquette.quiz.map((quizItem) => (
                  <div 
                    key={quizItem.id} 
                    className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
                  >
                    <p className="text-lg font-medium text-gray-700 mb-4">
                      {quizItem.question}
                    </p>
                    {quizItem.options.map((option) => (
                      <div
                        key={option}
                        className="flex items-center mb-3 space-x-3 p-3 rounded-lg hover:bg-gray-200 transition"
                      >
                        <input
                          type="radio"
                          id={`${quizItem.id}-${option}`}
                          name={quizItem.id}
                          value={option}
                          onChange={(e) => handleAnswerChange(e, quizItem.id)}
                          className="w-5 h-5 accent-red-500 cursor-pointer"
                        />
                        <label
                          htmlFor={`${quizItem.id}-${option}`}
                          className="text-gray-700 font-medium cursor-pointer"
                        >
                          {option}
                        </label>
                      </div>
                    ))}
                    {selectedAnswers[quizItem.id] && (
                      <div
                        className={`mt-4 p-4 rounded-lg font-medium flex items-center space-x-3 ${
                          checkAnswer(quizItem.id, quizItem.correctAnswer)
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {checkAnswer(quizItem.id, quizItem.correctAnswer) ? (
                          <CheckCircle2 size={24} className="text-green-600" />
                        ) : (
                          <XCircle size={24} className="text-red-600" />
                        )}
                        <span>
                          {checkAnswer(quizItem.id, quizItem.correctAnswer)
                            ? `Correct! ${quizItem.explanation}`
                            : `Incorrect. ${quizItem.explanation}`}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
  
          {Object.keys(selectedAnswers).length === etiquetteData.flatMap(section => section.quiz).length && !showResults && (
            <div className="text-center mt-8">
              <button
                onClick={() => setShowResults(true)}
                className="px-8 py-3 bg-red-500 text-white rounded-lg text-xl font-bold hover:bg-red-600 transition transform hover:scale-105"
              >
                See Your Results
              </button>
            </div>
          )}
  
          {showResults && renderScore()}
  
          <footer className="py-12 text-center relative">
          <div className="relative w-64 h-48 mx-auto">
            {/* Torii Gate */}
            <div className="absolute top-0 left-0 w-full h-6 bg-red-600 rounded-t-lg"></div>
            <div className="absolute top-6 left-6 w-4 h-36 bg-red-700"></div>
            <div className="absolute top-6 right-6 w-4 h-36 bg-red-700"></div>
            <div className="absolute top-14 left-8 w-48 h-4 bg-red-500"></div>
  
            {/* Kitsune Fox */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <img
                src="https://i.ibb.co/mSxc6Qb/fox.png"
                alt="Kitsune Fox"
                className="w-50 h-40"
              />
            </div>
          </div>
          <p className="text-gray-500 mt-6 text-sm">&copy; VT JapanFest 2024, All Rights Reserved.</p>

          {/* FAQ Section */}
          <div className="mt-6">
            <p className="text-black">Have more questions? Visit our FAQ page</p>
            <button
              onClick={() => window.location.href = '/FAQPage'}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              FAQ Page
            </button>
          </div>
        </footer>
        </div>
      </div>
    );
  };
  
  export default EtiquetteQuiz;