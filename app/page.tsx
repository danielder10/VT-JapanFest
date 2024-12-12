"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

// Define an interface for the particle properties
interface FireworkParticle {
  size: number;
  delay: number;
  rotation: number;
  animationDuration: number;
}

export default function Home() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://imgcdn.stablediffusionweb.com/2024/11/7/dfcf3303-e7d6-4dec-83f9-3951950fa3f5.jpg')",
      }}
    >
      {/* Fireworks */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <Firework key={i} />
        ))}
      </div>

      <div className="relative bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 sm:p-10 max-w-[95%] sm:max-w-4xl w-full">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="hidden sm:block absolute top-8 left-4 animate-swing">
            <Lantern />
          </div>
          <div className="absolute bottom-16 left-4 animate-bloom">
            <FlowerCluster />
          </div>
          <div className="hidden sm:block absolute top-12 right-4 animate-swing">
            <Lantern />
          </div>
          <div className="absolute bottom-8 right-4 animate-bloom">
            <FlowerCluster />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Welcome to
          </h1>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Japanese Festivals
          </h2>
          <p className="text-base sm:text-lg text-black mb-6">
            Start your Journey
          </p>
          <Link href="/HomePage">
            <button className="px-6 sm:px-8 py-3 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Lantern Component
const Lantern = () => (
  <div className="flex flex-col items-center">
    <div className="w-5 h-10 sm:w-6 sm:h-12 bg-gray-300 rounded-md shadow-inner"></div>
    <div className="w-1 h-6 sm:h-8 bg-gray-400 mt-1"></div>
  </div>
);

// Flower Cluster Component
const FlowerCluster = () => (
  <div className="flex space-x-2">
    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full"></div>
    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-300 rounded-full"></div>
    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full"></div>
  </div>
);

// Firework Component
const Firework = () => {
  // Explicitly type the state as an array of FireworkParticle
  const [randomValues, setRandomValues] = useState<FireworkParticle[]>([]);
  
  useEffect(() => {
    // Generate random values after the component mounts
    const particles: FireworkParticle[] = Array.from({ length: 30 }).map(() => ({
      size: Math.random() * 8 + 6,
      delay: Math.random() * 3,
      rotation: Math.random() * 360,
      animationDuration: Math.random() * 2 + 1,
    }));
    setRandomValues(particles);
  }, []);

  if (randomValues.length === 0) {
    return null; // Don't render until the random values are set
  }

  return (
    <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2">
      {randomValues.map((particle, i) => (
        <div
          key={i}
          className="absolute bg-yellow-300 rounded-full opacity-75"
          style={{
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            top: "50%",
            left: "50%",
            animation: `firework ${particle.animationDuration}s forwards`,
            animationDelay: `${particle.delay}s`,
            animationTimingFunction: "ease-in-out",
            transform: `rotate(${particle.rotation}deg)`,
          }}
        />
      ))}
    </div>
  );
};

// Add CSS for the firework animation
const fireworkStyles = `
@keyframes firework {
  0% {
    transform: translate(-50%, -50%) scale(0);
    opacity: 1;
  }
  100% {
    transform: translate(-50%, -50%) scale(3);
    opacity: 0;
  }
}
`;