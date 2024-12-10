"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link"; // Import Link for navigation in Next.js

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
    { season: "Summer", color: "bg-yellow-100", bar: "bg-yellow-400", link: "/Summer" },
    { season: "Winter", color: "bg-blue-100", bar: "bg-blue-400", link: "/Winter" },
    { season: "Spring", color: "bg-pink-100", bar: "bg-pink-400", link: "/Spring" },
    { season: "Fall", color: "bg-orange-100", bar: "bg-orange-400", link: "/Fall" },
  ];

  return (
    <div className="relative bg-white min-h-screen overflow-hidden">
      {/* Header */}
      <header
        className="relative bg-cover bg-center py-16 text-center"
        style={{ backgroundImage: "url('https://i.pinimg.com/736x/87/c3/31/87c3316d91b5104f0144cd434ed1e977.jpg')" }}
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
      <div className="py-12 px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Seasonal Cards */}
        <div className="md:col-span-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <h2 className="text-3xl font-bold text-gray-700 mb-4 mx-auto md:col-span-3">
            Explore Festivals All around Japan!
        </h2>
          {seasonalCards.map((card, index) => (
            <div
              key={index}
              className={`${card.color} shadow-md rounded-lg p-4 text-center hover:shadow-xl transition-shadow duration-300`}
            >
              <h3 className="text-xl font-bold text-gray-700 mb-4">{card.season}</h3>
              <Link
                href={card.link}
                className={`py-2 px-4 rounded-full text-white font-semibold hover:opacity-90 transition duration-200 ease-in-out ${card.bar}`}
                >
                Explore
              </Link>
            </div>
          ))}
        </div> 
        {/* Quiz Section*/}
        <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4 max-w-2xl mx-auto">
            Feeling Knowledgeable? Take a Quiz!
        </h2>
        <div className="text-gray-500 max-w-2xl mx-auto">
            <p className="mb-6">
            Immerse yourself in the rich traditions and vibrant spirit of Japan! This website is your gateway to understanding the nuances of Japanese cultural etiquette, from the art of bowing to dining customs, and everything in between.
            </p>
            <p className="mb-6">
            Discover the magic of Japan’s seasonal events and festivals, where ancient traditions meet modern celebrations. Whether it's the breathtaking beauty of cherry blossoms in spring, the lively lantern festivals of summer, or the serene temple illuminations of winter, there’s always something unique to experience.
            </p>
            <p>
            Join us as we explore the heart of Japan’s cultural heritage and learn how to navigate its traditions with respect and ease. Start your journey today!
            </p>
        </div>
        </div>
        {/* Ettiquete Section*/}
        <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4 max-w-2xl mx-auto">
            Not sure what to do? Learn about etiquette!
        </h2>
        <div className="text-gray-500 max-w-2xl mx-auto">
            <p className="mb-6">
            Immerse yourself in the rich traditions and vibrant spirit of Japan! This website is your gateway to understanding the nuances of Japanese cultural etiquette, from the art of bowing to dining customs, and everything in between.
            </p>
            <p className="mb-6">
            Discover the magic of Japan’s seasonal events and festivals, where ancient traditions meet modern celebrations. Whether it's the breathtaking beauty of cherry blossoms in spring, the lively lantern festivals of summer, or the serene temple illuminations of winter, there’s always something unique to experience.
            </p>
            <p>
            Join us as we explore the heart of Japan’s cultural heritage and learn how to navigate its traditions with respect and ease. Start your journey today!
            </p>
        </div>
        </div>
        {/* Map Section*/}
        <div className="md:col-span-1 bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-gray-700 mb-4 max-w-2xl mx-auto">
            Feeling Knowledgeable? Take a Quiz!
        </h2>
        <div className="text-gray-500 max-w-2xl mx-auto">
            <p className="mb-6">
            Immerse yourself in the rich traditions and vibrant spirit of Japan! This website is your gateway to understanding the nuances of Japanese cultural etiquette, from the art of bowing to dining customs, and everything in between.
            </p>
            <p className="mb-6">
            Discover the magic of Japan’s seasonal events and festivals, where ancient traditions meet modern celebrations. Whether it's the breathtaking beauty of cherry blossoms in spring, the lively lantern festivals of summer, or the serene temple illuminations of winter, there’s always something unique to experience.
            </p>
            <p>
            Join us as we explore the heart of Japan’s cultural heritage and learn how to navigate its traditions with respect and ease. Start your journey today!
            </p>
        </div>
        </div>
        </div>
      {/* Footer with Torii Gate */}
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
              src="https://thumbs.dreamstime.com/b/kumiho-nine-tailed-fox-playing-tails-white-isolated-background-vector-illustration-cartoon-style-concept-cute-198862162.jpg"
              alt="Kitsune Fox"
              className="w-30 h-20"
            />
          </div>
        </div>
        <p className="text-gray-500 mt-6 text-sm">&copy; 2024 Festivals Interactive. All Rights Reserved.</p>
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
