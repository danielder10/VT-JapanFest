"use client";

import React, { useState } from "react";
import Link from "next/link";

const winterFestivals = [
  {
    name: "Sapporo Snow Festival",
    location: "Sapporo, Hokkaido",
    date: "Early February",
    description:
      "A world-famous festival featuring stunning snow and ice sculptures, attracting millions of visitors annually.",
    image: "https://radseason.com/wp-content/uploads/2017/12/Sapporo-Snow-Festival.jpg",
    link: "https://www.snowfes.com/en/",
  },
  {
    name: "Otaru Snow Light Path Festival",
    location: "Otaru, Hokkaido",
    date: "Mid-February",
    description:
      "A romantic festival where the city is illuminated with snow lanterns and lights, creating a magical atmosphere.",
    image: "https://www.japan-guide.com/blog/scott/g/scott_120205_otaru_02.jpg",
    link: "https://www.sapporo.travel/en/event/event-list/otaru-snow-light-path/",
  },
  {
    name: "Zao Snow Monsters",
    location: "Yamagata",
    date: "December - March",
    description:
      "Unique natural phenomena where snow and frost form monstrous shapes on trees, accompanied by night illuminations.",
    image: "https://www.japan-guide.com/g20/7927_02.jpg",
    link: "https://www.japan.travel/en/spot/418/",
  },
  {
    name: "Nozawa Onsen Fire Festival",
    location: "Nozawa Onsen, Nagano",
    date: "January 15",
    description:
      "A thrilling festival featuring a massive bonfire and traditional ceremonies to pray for a good harvest and health.",
    image: "https://www.nozawaholidays.com/wp-content/uploads/2017/01/The-Nozwa-Fire-Festival-650x433.jpg",
    link: "https://www.japan.travel/en/spot/2218/",
  },
  {
    name: "Yokote Kamakura Festival",
    location: "Akita",
    date: "Mid-February",
    description:
      "Experience traditional igloos called 'kamakura' lit from within, offering a cozy and serene winter setting.",
    image: "https://a3.cdn.japantravel.com/photo/32136-191053/1440x960!/akita-yokote-kamakura-festival-191053.jpg",
    link: "https://www.japan-guide.com/e/e3690.html",
  },
  {
    name: "Lake Shikotsu Ice Festival",
    location: "Chitose, Hokkaido",
    date: "Late January - Mid February",
    description:
      "A vibrant display of ice sculptures lit with colorful lights, set against the beautiful backdrop of Lake Shikotsu.",
    image: "https://a2.cdn.japantravel.com/photo/66203-221419/1440x960!/hokkaido-lake-shikotsu-ice-festival-221419.jpg",
    link: "https://www.sapporo.travel/en/event/event-list/lake-shikotsu-ice-festival/",
  },
];

const Winter: React.FC = () => {
  const [selectedFestival, setSelectedFestival] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-blue-100 p-8">
      {/* Back Button */}
      <Link
        href="/HomePage"
        className="absolute top-4 left-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition-colors"
      >
        ← Back
      </Link>

      <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
        Winter Festivals and Events in Japan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {winterFestivals.map((festival, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={festival.image}
              alt={festival.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold text-gray-800">{festival.name}</h3>
              <p className="text-sm text-gray-500">{festival.location}</p>
              <p className="text-sm text-gray-500">{festival.date}</p>
              <p className="text-black mt-2">{festival.description}</p>
              <Link
                href={festival.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow hover:bg-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
      {/* Footer */}
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
  );
};

export default Winter;
