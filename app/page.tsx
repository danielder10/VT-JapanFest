"use client";

import React from "react";
import Link from "next/link";

// Main Home Component
export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-200 via-white to-gray-100">
      <div className="relative bg-white rounded-2xl shadow-lg p-10 max-w-4xl w-[90%]">
        {/* Decorative Background */}
        <div className="absolute inset-0">
          {/* Top Left Lantern */}
          <div className="absolute top-8 left-4">
            <Lantern />
          </div>
          {/* Bottom Left Flower Cluster */}
          <div className="absolute bottom-20 left-8">
            <FlowerCluster />
          </div>
          {/* Top Right Lantern */}
          <div className="absolute top-12 right-4">
            <Lantern />
          </div>
          {/* Bottom Right Flower Cluster */}
          <div className="absolute bottom-10 right-8">
            <FlowerCluster />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Welcome to
          </h1>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Japanese Festivals
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 mb-6">
            Start your Journey
          </p>
          <Link href="/HomePage">
          <button className="px-8 py-3 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-transform transform hover:scale-105">
            Start Your Journey
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
    <div className="w-6 h-12 bg-gray-300 rounded-md shadow-inner"></div>
    <div className="w-1 h-8 bg-gray-400 mt-1"></div>
  </div>
);

// Flower Cluster Component
const FlowerCluster = () => (
  <div className="flex space-x-2">
    <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
    <div className="w-4 h-4 bg-pink-300 rounded-full"></div>
    <div className="w-6 h-6 bg-pink-400 rounded-full"></div>
  </div>
);
