"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

const Home: React.FC = () => {
  const [randomValues, setRandomValues] = useState<
    { left: string; duration: string; delay: string }[]
  >([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const values = Array.from({ length: 10 }).map(() => ({
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 2 + 3}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setRandomValues(values);
  }, []);

  if (!isMounted) {
    return null;
  }

  const seasonalCards = [
    { season: "Summer", image: "url('https://www.shoreexcursions.asia/wp-content/uploads/2018/08/Summer-in-Japan.jpg')", bar: "bg-yellow-400", link: "/Summer" },
    { season: "Winter", image: "url('https://resources.matcha-jp.com/resize/720x2000/2023/10/11-148280.webp", bar: "bg-blue-400", link: "/Winter" },
    { season: "Spring", image: "url('https://japanspecialist.com/documents/d/japanspecialist/1_spring_in_japan_body", bar: "bg-pink-400", link: "/Spring" },
    { season: "Fall", image: "url('https://resources.matcha-jp.com/resize/720x2000/2019/08/05-83019.webp')", bar: "bg-orange-400", link: "/Fall" },
  ];

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Header */}
      <header
        className="relative bg-cover bg-center py-16 text-center"
        style={{
          backgroundImage: "url('https://i.pinimg.com/736x/87/c3/31/87c3316d91b5104f0144cd434ed1e977.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>

        <div className="relative">
          <h1 className="text-6xl font-bold text-white drop-shadow-lg">Welcome</h1>
          <p className="text-gray-200 mt-4 text-xl drop-shadow-lg">
            Discover festivals and traditions in a colorful and interactive way.
          </p>
        </div>

        {/* Falling Sakura Petals */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          {randomValues.map((value, i) => (
            <div
              key={i}
              className="absolute w-5 h-8 bg-pink-300 petal-shape animate-fall"
              style={{
                left: value.left,
                animationDuration: value.duration,
                animationDelay: value.delay,
              }}
            />
          ))}
        </div>
      </header>

      {/* Main Content Section */}
      <div className="py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Seasonal Cards */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-4 gap-4">
          <h2 className="text-3xl font-bold text-black mb-4 mx-auto md:col-span-4">
            Explore Festivals All around Japan!
          </h2>
          {seasonalCards.map((card, index) => (
          <div
            key={index}
            className="shadow-md rounded-lg flex flex-col justify-center items-center w-80 h-60 mx-auto text-center hover:shadow-xl transition-shadow duration-300"
            style={{
              backgroundImage: card.image,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h3 className="text-xl font-bold text-black mb-4 bg-white bg-opacity-75 px-2 py-1 rounded">
              {card.season}
            </h3>
            <Link
              href={card.link}
              className={`py-2 px-4 rounded-full text-white font-semibold hover:opacity-90 transition duration-200 ease-in-out ${card.bar}`}
            >
              Explore
            </Link>
          </div>
        ))}
        </div>
        </div>
        <div className="py-12 px-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Quiz Section */}
        <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-black mb-4 max-w-2xl mx-auto">
            Feeling Knowledgeable? Take a Quiz!
          </h2>
          <div className="text-gray-500 max-w-2xl mx-auto">
            <p className="mb-6">
              How much do you know about Japan's fascinating culture and breathtaking travel destinations? Test your knowledge and discover something new!
            </p>
            <p className="mb-6 font-bold">
              ✨ Sample Questions You Might Encounter:
            </p>
            <ul className="mb-6 list-disc pl-6">
              <li>What is the traditional Japanese art of folding paper called?</li>
              <li>Can you name the iconic mountain often seen in Japanese art?</li>
              <li>Which Japanese city is known for its historic geisha districts?</li>
              <li>What’s the name of the high-speed trains connecting major cities in Japan?</li>
            </ul>
            <p className="mb-6 font-bold">
              🎌 Challenge yourself to learn:
            </p>
            <p className="mb-6">
              Explore everything from traditional customs and festivals to modern travel tips and hidden gems. Whether you're a seasoned Japan enthusiast or just starting to explore, this quiz has something for everyone.
            </p>
            <p className="mb-6">Take the quiz now and see how well you know Japan! 🌸</p>
            {/* Button to EtiquetteQuiz */}
            <div className="text-center">
              <a
                href="/EtiquetteQuiz"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                📝 Take the Quiz 📝 
              </a>
            </div>
          </div>
        </div>
        {/* Etiquette Section */}
        <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-8">
          <h2 className="text-3xl font-bold text-black mb-4 max-w-2xl mx-auto">
            Not sure what to do? Learn about etiquette!
          </h2>
          <div className="text-gray-500 max-w-2xl mx-auto">
            <p className="mb-6">
              Traveling to Japan or just curious about Japanese customs? Mastering Japanese etiquette is key to making a great impression and enjoying the culture to its fullest!
            </p>
            <p className="mb-6 font-bold">
            💡 What You’ll Learn:
            </p>
            <ul className="mb-6 list-disc pl-6">
              <li>The proper way to bow and greet someone in Japan.</li>
              <li>Dining do’s and don’ts—how to use chopsticks respectfully.</li>
              <li>Why you should never wear shoes inside a Japanese home.</li>
              <li>Tips for navigating public transportation with politeness.</li>
            </ul>
            <p className="mb-6 font-bold">
            ❓❓ Why Etiquette Matters:
            </p>
            <p className="mb-6">
              Japanese culture values respect and harmony, and understanding these practices shows appreciation for the traditions. Whether you're visiting shrines, enjoying tea ceremonies, or exploring vibrant cities, knowing what to do helps you fit right in!
            </p>
            <p className="mb-6">
              Start learning now and travel with confidence! 🌸
            </p>
            {/* Button to EtiquettePage */}
            <div className="text-center">
              <a
                href="/EtiquettePage"
                className="bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
              >
                🧠 Learn Etiquette 🧠
              </a>
            </div>
          </div>
        </div>
      {/* Map Section */}
      <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-black mb-4 max-w-2xl mx-auto">
          Explore the Cultural Map of Japan; View The Possibilities!
        </h2>
        <div className="text-gray-500 max-w-2xl mx-auto">
          <p className="mb-6">
            Ready to embark on a journey through Japan's rich culture and history? Dive into the traditions, landmarks, and vibrant lifestyles that make each region unique!
          </p>
          <p className="mb-6 font-bold">
          🌎🇯🇵 Discover Highlights Across Japan:
          </p>
          <ul className="mb-6 list-disc pl-6">
            <li>Wander through the ancient temples of Kyoto.</li>
            <li>Experience the bustling energy of Tokyo's modern districts.</li>
            <li>Marvel at Hokkaido’s natural wonders and snowy landscapes.</li>
            <li>Dive into the tropical beauty of Okinawa’s islands.</li>
            <li>Learn about traditional crafts in Kanazawa and Takayama.</li>
          </ul>
          <p className="mb-6 font-bold">💎 Uncover Hidden Gems:</p>
          <p className="mb-6">
            From serene tea gardens to vibrant festivals, Japan’s cultural map is full of surprises waiting to be explored. Gain insights into regional cuisine, historic sites, and timeless customs as you plan your journey.
          </p>
          <p className="mb-6">Start exploring now and let Japan’s cultural map guide your adventure! 🌸</p>
          {/* Button to Map Page */}
          <div className="text-center">
            <a
              href="/Map"
              className="bg-purple-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300"
            >
              🗺️ Explore the Map 🗺️
            </a>
          </div>
        </div>
      </div>
      </div>
      {/* Footer */}
      <footer className="bg-white py-12 text-center relative">
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

      {/* CSS for Sakura Petals and Animations */}
      <style jsx>{`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }

        .animate-fall {
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        .petal-shape {
          width: 8px;
          height: 16px;
          background-color: #f4a8c6;
          border-radius: 50% 50% 0 0;
          transform: rotate(45deg);
        }
      `}</style>
    </div>
  );
};

export default Home;
