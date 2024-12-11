"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const etiquetteData = [
  {
    title: "The Proper Way to Bow and Greet Someone",
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

  return (
    <div
        className="min-h-screen bg-no-repeat bg-cover bg-center p-8"
        style={{
            backgroundImage: "url('https://miro.medium.com/v2/resize:fit:1024/1*mVbGqdv8S3lrhg5ioZ5nxQ.png')",
        }}
     >
      <div className="flex justify-between mb-6">
        <button
            onClick={() => router.push("/HomePage")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
            ← Back to Home
        </button>
        <button
            onClick={() => router.push("/EtiquettePage")}
            className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
            Not Confident, Go Back to Studying
        </button>
        </div>
      <h1 className="text-5xl font-extrabold text-center text-pink-500 mb-6 drop-shadow-md">
        Japanese Cultural Etiquette Quiz
      </h1>
      <p className="text-center text-gray-700 text-lg mb-12">
        Let's test your knowledge of what you learned on the etiquette page.
      </p>

      {etiquetteData.map((etiquette, index) => (
        <div
          key={index}
          className="mb-10 bg-white p-8 rounded-xl shadow-lg border-t-4 border-red-500 transition-transform hover:scale-105 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {etiquette.title}
          </h2>

          <div className="space-y-6">
            {etiquette.quiz.map((quizItem) => (
              <div key={quizItem.id} className="p-4 rounded-md bg-gray-50">
                <p className="text-lg font-medium text-gray-700 mb-4">
                  {quizItem.question}
                </p>
                {quizItem.options.map((option) => (
                  <div
                    key={option}
                    className="flex items-center mb-3 space-x-3 hover:bg-gray-100 p-2 rounded-md transition"
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
                  <p
                    className={`mt-4 p-3 rounded-lg font-medium flex items-center space-x-2 ${
                      checkAnswer(quizItem.id, quizItem.correctAnswer)
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    <span>
                      {checkAnswer(quizItem.id, quizItem.correctAnswer) ? "✔️" : "❌"}
                    </span>
                    <span>
                      {checkAnswer(quizItem.id, quizItem.correctAnswer)
                        ? `Correct! ${quizItem.explanation}`
                        : `Incorrect. ${quizItem.explanation}`}
                    </span>
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EtiquetteQuiz;
