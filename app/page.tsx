"use client";

import React from "react";
import Link from "next/link";

// Main Home Component
export default function Home() {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('https://imgcdn.stablediffusionweb.com/2024/11/7/dfcf3303-e7d6-4dec-83f9-3951950fa3f5.jpg')" }}
    >
      <div className="relative bg-white bg-opacity-90 rounded-2xl shadow-lg p-6 sm:p-10 max-w-[95%] sm:max-w-4xl w-full">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          <div className="hidden sm:block absolute top-8 left-4">
            <Lantern />
          </div>
          <div className="absolute bottom-16 left-4">
            <FlowerCluster />
          </div>
          <div className="hidden sm:block absolute top-12 right-4">
            <Lantern />
          </div>
          <div className="absolute bottom-8 right-4">
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
          <p className="text-base sm:text-lg text-gray-700 mb-6">
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
