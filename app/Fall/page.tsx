"use client";

import React from "react";
import Link from "next/link";

const fallFestivals = [
  {
    name: "Kiku Matsuri (Chrysanthemum Festival)",
    location: "Tokyo",
    date: "October - November",
    description:
      "A beautiful festival dedicated to the chrysanthemum flower, showcasing stunning flower arrangements and exhibitions throughout Tokyo.",
    image: "https://fukushima.travel/img/spots/photos/thumbnail/aa4cf4659fa4726e42f7693321706e183f9a30dc-900x600.jpg",
    link: "https://en.japantravel.com/ibaraki/kasama-chrysanthemum-festival/17254",
  },
  {
    name: "Jidai Matsuri (Festival of the Ages)",
    location: "Kyoto",
    date: "October 22",
    description:
      "A historical parade in Kyoto that features participants dressed in traditional costumes from different periods of Japanese history.",
    image: "https://www.japan-guide.com/g18/3960_top.jpg",
    link: "https://www.japan-guide.com/e/e3960.html",
  },
  {
    name: "Nagasaki Kunchi Festival",
    location: "Nagasaki",
    date: "October 7 - October 9",
    description:
      "A lively festival with colorful parades, traditional dancing, and performances celebrating the cultural heritage of Nagasaki.",
    image: "https://res.cloudinary.com/jnto/image/upload/w_750,h_503,fl_lossy,f_auto/v1654063828/nagasaki/M_01075_002",
    link: "https://nagasaki-kunchi.com/english",
  },
  {
    name: "Aki Matsuri (Autumn Festival)",
    location: "Various Locations",
    date: "September - November",
    description:
      "An autumn festival held across Japan, celebrating the harvest season with food stalls, traditional performances, and local festivities.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdtiWiQS_8fVEsoKEFK9UtkNy3fBWGO9e8Yg&s",
    link: "https://www.discoverkyoto.com/event-calendar/november/aki-matsuri-tanukidanisan-fudoin/",
  },
  {
    name: "Hōjō-ki (Autumn Equinox Festival)",
    location: "Kamakura",
    date: "September 23",
    description:
      "A spiritual festival in Kamakura celebrating the autumn equinox with ceremonies and cultural events honoring the changing season.",
    image: "https://www.fukuoka-now.com/wp-content/uploads/2019/08/fn_hojoya-showcase_2022_cl-001.jpeg",
    link: "https://en.matsuyama-sightseeing.com/event/3-2/",
  },
  {
    name: "Oniyo-Sai (Oniyo Festival)",
    location: "Kyoto",
    date: "October 22",
    description:
      "A vibrant festival at the Fushimi Inari Shrine where participants perform a series of traditional rituals to rid evil spirits and welcome good fortune.",
    image: "https://www.crossroadfukuoka.jp/storage/tourism_attractions/12881/responsive_images/Jsmn06Ry8jDZHdkLYl16URBjmJJ1R7tnKBR0tmSx__800_630.jpg",
    link: "https://en.japantravel.com/fukuoka/oniyo-fire-festival/70438",
  },
];

const Fall: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-200 p-8">
      {/* Back Button */}
      <Link
        href="/HomePage"
        className="absolute top-4 left-4 px-4 py-2 bg-orange-500 text-white font-bold rounded-lg shadow hover:bg-orange-600 transition-colors"
      >
        ← Back
      </Link>

      <h1 className="text-4xl font-bold text-orange-700 text-center mb-8">
        Fall Festivals and Events in Japan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {fallFestivals.map((festival, index) => (
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
                className="inline-block mt-4 px-4 py-2 bg-orange-500 text-white font-bold rounded-lg shadow hover:bg-orange-600 transition-colors"
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

export default Fall;
