"use client";

import React, { useState } from "react";
import Link from "next/link";

const summerFestivals = [
  {
    name: "Gion Matsuri",
    location: "Kyoto",
    date: "July 1 - July 31",
    description:
      "One of the most famous festivals in Japan, featuring grand processions of elaborately decorated floats.",
    image: "https://kyoto.travel/en/see-and-do/ivdp3s0000000380-img/dc1abq000000061t.png",
    link: "https://en.wikipedia.org/wiki/Gion_Matsuri",
  },
  {
    name: "Awa Odori",
    location: "Tokushima",
    date: "August 11 - August 15",
    description:
      "A traditional dance festival where locals and tourists dance together in the streets with lively music and colorful costumes.",
    image: "https://res.cloudinary.com/dd3f27ar3/f_auto,q_auto,c_fit/gjpqvak6ag3bbnki5xzw",
    link: "https://en.wikipedia.org/wiki/Awa_Dance_Festival",
  },
  {
    name: "Tanabata Matsuri",
    location: "Sendai",
    date: "August 6 - August 8",
    description:
      "A star festival based on the legend of Orihime and Hikoboshi, where beautiful paper decorations fill the streets.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXGOvZ0_3BDtCMU_H0k6kV8W15OWDxUBfENA&s",
    link: "https://en.wikipedia.org/wiki/Tanabata",
  },
  {
    name: "Obon Festival",
    location: "Nationwide",
    date: "Mid-August",
    description:
      "A Buddhist holiday to honor the spirits of ancestors, often featuring traditional Bon Odori dances and ceremonies.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgZ3zBF7zUKDxZQbA2hK_NuRnB0WVhOFd6Lg&s",
    link: "https://en.wikipedia.org/wiki/Obon",
  },
  {
    name: "Nebuta Matsuri",
    location: "Aomori",
    date: "August 2 - August 7",
    description:
      "Famous for its stunning illuminated floats, this festival includes traditional music and lively processions.",
    image: "https://images.squarespace-cdn.com/content/v1/5cb09473755be259f904d128/1725933194542-OXVVZ8WMZGRSO5BB01VH/King+Mulu+Nebuta+COVER.jpg?format=2500w",
    link: "https://en.wikipedia.org/wiki/Aomori_Nebuta_Matsuri",
  },
  {
    name: "Tenjin Matsuri",
    location: "Osaka",
    date: "July 24 - July 25",
    description:
      "A grand festival honoring Sugawara Michizane with a magnificent parade, music, and a fireworks display.",
    image: "https://www.wamazing.com/media/wp-content/uploads/sites/7/2023/06/tenjinfestival_eyecatch-853x569.jpg.webp",
    link: "https://en.wikipedia.org/wiki/Tenjin_Matsuri",
  },
  {
    name: "Sumida River Fireworks Festival",
    location: "Tokyo",
    date: "Late July",
    description:
      "One of Japan's most famous fireworks festivals, with thousands of spectators gathering along the Sumida River.",
    image: "https://i.ytimg.com/vi/M6wAfe5QdaY/maxresdefault.jpg",
    link: "https://en.wikipedia.org/wiki/Sumidagawa_Fireworks_Festival",
  },
];

const Summer: React.FC = () => {
  const [selectedFestival, setSelectedFestival] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-yellow-100 p-8">
      {/* Back Button */}
      <Link
        href="/HomePage"
        className="absolute top-4 left-4 px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg shadow hover:bg-yellow-600 transition-colors"
      >
        ← Back
      </Link>

      <h1 className="text-4xl font-bold text-yellow-700 text-center mb-8">
        Summer Festivals and Events in Japan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {summerFestivals.map((festival, index) => (
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
                className="inline-block mt-4 px-4 py-2 bg-yellow-500 text-white font-bold rounded-lg shadow hover:bg-yellow-600 transition-colors"
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

export default Summer;
