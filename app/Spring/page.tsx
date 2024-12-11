"use client";

import React from "react";
import Link from "next/link";

const springFestivals = [
  {
    name: "Hanami (Cherry Blossom Viewing)",
    location: "Nationwide",
    date: "Late March - Early May",
    description:
      "The tradition of viewing cherry blossoms, or hanami, is one of the most popular springtime activities in Japan, where people gather in parks to admire the delicate flowers.",
    image: "https://www.japan-guide.com/g18/2011_how_05.jpg",
    link: "https://www.nps.gov/subjects/cherryblossom/hanami.htm#:~:text=Hanami%20season%20in%20March%20and,mi%20is%20“to%20look”.",
  },
  {
    name: "Takayama Spring Festival",
    location: "Takayama",
    date: "April 14 - April 15",
    description:
      "A traditional festival featuring beautiful floats parading through the streets of Takayama, showcasing traditional Japanese culture and artistry.",
    image: "https://www.hida.jp/_res/projects/hida_jp/_page_/004/000/208/112_01.jpg",
    link: "https://www.japan-guide.com/e/e5909.html",
  },
  {
    name: "Kanda Matsuri",
    location: "Tokyo",
    date: "Mid-May (odd-numbered years)",
    description:
      "One of Tokyo’s biggest and most famous festivals, celebrating the Kanda Shrine with elaborate processions and traditional performances.",
    image: "https://www.japan-guide.com/g18/3073_04.jpg",
    link: "https://en.wikipedia.org/wiki/Kanda_Matsuri",
  },
  {
    name: "Sapporo Lilac Festival",
    location: "Sapporo",
    date: "Late May",
    description:
      "A spring festival celebrating the blooming of lilacs in Sapporo’s Maruyama Park, featuring music, local food, and outdoor activities.",
    image: "https://production-trippino-cms.s3.ap-northeast-1.amazonaws.com/S_43966593_0_d47f08d1ff.jpg",
    link: "https://hokkaidoguide.com/lilac-spring-festival/",
  },
  {
    name: "Himeji Castle Spring Night Illumination",
    location: "Himeji",
    date: "Late March - Early April",
    description:
      "A breathtaking event where Himeji Castle is illuminated against the backdrop of cherry blossoms, creating a magical atmosphere.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh8Q7F8C2Qzgub3lpjBPBYzwooS17MaR-Fzw&s",
    link: "https://visit-himeji.com/en/events/himeji-castle-nighttime-cherry-blossoms/",
  },
  {
    name: "Nara Yamato Spring Festival",
    location: "Nara",
    date: "April",
    description:
      "A festival in Nara celebrating the arrival of spring with cultural performances, traditional food, and a vibrant atmosphere around Nara Park.",
    image: "https://static.wixstatic.com/media/fd7195_ec57080320a14474a117e9ea7004939e~mv2.jpg/v1/fill/w_980,h_644,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/fd7195_ec57080320a14474a117e9ea7004939e~mv2.jpg",
    link: "https://www.visitnara.jp/venues/E02022/",
  },
  {
    name: "Kyoto Spring Festival",
    location: "Kyoto",
    date: "April",
    description:
      "A festival celebrating Kyoto's culture and traditions, with flower arrangements, performances, and processions that showcase the city's rich heritage.",
    image: "https://www.travelcaffeine.com/wp-content/uploads/2020/03/hirano-shrine-cherry-blossom-hanami-sakura-season-kyoto-japan-torii-gate-sunburst.jpg",
    link: "https://www.umetravel.com/japan-cherry-blossoms/kyoto-sakura-season-viewing-guide.html?srsltid=AfmBOorDs6hqV8gaHP0ZPm205nAP890-nADBNETdNiQysePJ8F5PaePl",
  },
  {
    name: "Kamakura Matsuri",
    location: "Kamakura",
    date: "April 10 - April 15",
    description:
      "A vibrant festival in Kamakura featuring parades, traditional performances, and the chance to explore the historical sites of this ancient city.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIeFDA18kRAwZvhKCB9YQNTVnbbIUgBKMuPg&s",
    link: "https://www.japan.travel/en/spot/1587/",
  },
];

const Spring: React.FC = () => {
  return (
    <div className="min-h-screen bg-pink-200 p-8">
      {/* Back Button */}
      <Link
        href="/HomePage"
        className="absolute top-4 left-4 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition-colors"
      >
        ← Back
      </Link>

      <h1 className="text-4xl font-bold text-pink-700 text-center mb-8">
        Spring Festivals and Events in Japan
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {springFestivals.map((festival, index) => (
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
                className="inline-block mt-4 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition-colors"
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

export default Spring;
