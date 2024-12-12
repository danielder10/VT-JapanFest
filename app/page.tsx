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
        backgroundImage: "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://imgcdn.stablediffusionweb.com/2024/11/7/dfcf3303-e7d6-4dec-83f9-3951950fa3f5.jpg')",
        backgroundBlendMode: 'multiply'
      }}
    >
      {/* Fireworks */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 7 }).map((_, i) => (
          <Firework key={i} />
        ))}
      </div>

      <div className="relative bg-white bg-opacity-90 rounded-3xl shadow-2xl border border-gray-100 p-8 sm:p-12 max-w-[95%] sm:max-w-xl w-full mx-4 transform transition-all hover:scale-[1.01] hover:shadow-3xl">
        {/* Decorative Background */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl">
          <div className="hidden sm:block absolute top-8 left-4 animate-swing">
            <Lantern variant="red" />
          </div>
          <div className="absolute bottom-16 left-4 animate-bloom">
            <FlowerCluster />
          </div>
          <div className="hidden sm:block absolute top-12 right-4 animate-swing">
            <Lantern variant="gold" />
          </div>
          <div className="absolute bottom-8 right-4 animate-bloom">
            <FlowerCluster />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-600 tracking-wide mb-2">
            Discover the Magic of
          </h1>
          <h2 className="text-4xl sm:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-pink-600 mb-4">
            Japanese Festivals
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-8 max-w-md mx-auto">
            Immerse yourself in the vibrant traditions, stunning celebrations, and rich cultural heritage of Japan.
          </p>
          <Link href="/HomePage" className="inline-block">
            <button className="px-8 sm:px-10 py-3 text-white font-semibold bg-gradient-to-r from-red-500 to-pink-600 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 hover:-translate-y-1">
              Begin Your Journey
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

// Lantern Component with color variants
const Lantern = ({ variant = 'red' }: { variant?: 'red' | 'gold' }) => {
  const colors = {
    red: 'bg-red-300',
    gold: 'bg-yellow-300'
  };

  return (
    <div className="flex flex-col items-center">
      <div className={`w-5 h-10 sm:w-6 sm:h-12 ${colors[variant]} rounded-md shadow-inner opacity-80`}></div>
      <div className="w-1 h-6 sm:h-8 bg-gray-400 mt-1"></div>
    </div>
  );
};

// Flower Cluster Component
const FlowerCluster = () => (
  <div className="flex space-x-2">
    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full shadow-md"></div>
    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-pink-300 rounded-full shadow-sm"></div>
    <div className="w-4 h-4 sm:w-6 sm:h-6 bg-pink-400 rounded-full shadow-md"></div>
  </div>
);

// Firework Component
const Firework = () => {
  const [randomValues, setRandomValues] = useState<FireworkParticle[]>([]);
  
  useEffect(() => {
    const particles: FireworkParticle[] = Array.from({ length: 40 }).map(() => ({
      size: Math.random() * 10 + 6,
      delay: Math.random() * 3,
      rotation: Math.random() * 360,
      animationDuration: Math.random() * 2 + 1,
    }));
    setRandomValues(particles);
  }, []);

  if (randomValues.length === 0) {
    return null;
  }

  return (
    <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2">
      {randomValues.map((particle, i) => (
        <div
          key={i}
          className="absolute bg-gradient-to-r from-red-300 to-pink-400 rounded-full opacity-75"
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

@keyframes swing {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

@keyframes bloom {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}
`;