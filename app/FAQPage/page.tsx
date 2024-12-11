"use client";

import React from "react";
import Link from "next/link";

const FAQPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12 relative overflow-hidden">
      {/* Background image and animations */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{
          backgroundImage: "url(https://i.pinimg.com/736x/e9/97/3c/e9973c91819865862b787e4ec4bf33a8.jpg)",
        }}
      ></div>

      {/* Fireworks animation */}
      <div className="absolute top-0 left-0 w-full h-full z-10">
        <div className="fireworks-animation"></div>
        <div className="fireworks-animation second"></div>
        <div className="fireworks-animation third"></div>
      </div>

      {/* "HomePage" button */}
      <div className="absolute top-4 left-4 z-20">
        <Link href="/HomePage">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300">
            Back
          </button>
        </Link>
      </div>

      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 z-20 relative">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {/* FAQ Item 1 */}
          <div>
            <h2 className="text-xl font-semibold text-black">
              What are the best places to visit in Japan?
            </h2>
            <p className="mt-2 text-black">
              Japan offers a rich blend of ancient traditions and modern marvels. Some must-visit places include:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-black">Tokyo - A bustling metropolis with shopping, dining, and entertainment.</li>
              <li className="text-black">Kyoto - Famous for its historic temples, gardens, and traditional tea houses.</li>
              <li className="text-black">Osaka - Known for its modern architecture, nightlife, and street food.</li>
              <li className="text-black">Hokkaido - A stunning destination for nature lovers and winter sports enthusiasts.</li>
              <li className="text-black">Okinawa - Offers beautiful beaches, culture, and a unique island vibe.</li>
            </ul>
          </div>

          {/* FAQ Item 2 */}
          <div>
            <h2 className="text-xl font-semibold text-black">
              How do I get around Japan?
            </h2>
            <p className="mt-2 text-black">
              Japan's transportation system is known for being punctual, efficient, and easy to navigate. The best ways to get around include:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-black">Trains - Japan’s Shinkansen (bullet trains) connect major cities at high speeds. Local trains and metro systems are also widely used within cities.</li>
              <li className="text-black">Buses - Buses are available in both cities and rural areas, though they may require a bit more planning compared to trains.</li>
              <li className="text-black">Subways - Convenient for exploring Tokyo, Osaka, and other large cities. Most stations have English signs to assist travelers.</li>
              <li className="text-black">Taxi - Taxis are available but can be more expensive. Many taxis offer services in English.</li>
            </ul>
            <p>
              Consider purchasing a Japan Rail Pass for unlimited travel on JR trains if you plan to travel extensively.
            </p>
          </div>

          {/* FAQ Item 3 */}
          <div>
            <h2 className="text-xl font-semibold text-black">
              What is Japanese culture like?
            </h2>
            <p className="mt-2 text-black">
              Japanese culture is deeply rooted in respect, tradition, and harmony. Some key cultural aspects include:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-black">Politeness - Social etiquette, such as bowing, using honorifics in speech, and removing shoes indoors, is highly valued.</li>
              <li className="text-black">Food - Japanese cuisine is famous for its sushi, ramen, tempura, and diverse regional specialties. Dining etiquette is also important, such as not sticking chopsticks upright into rice.</li>
              <li className="text-black">Arts - Japan has a rich tradition of arts, including tea ceremonies, calligraphy, flower arranging (ikebana), and performing arts like kabuki and Noh.</li>
              <li className="text-black">Festivals - Japan hosts a variety of festivals (matsuri) celebrating everything from cherry blossoms (hanami) to traditional folk dances.</li>
            </ul>
          </div>

          {/* FAQ Item 4 */}
          <div>
            <h2 className="text-xl font-semibold text-black">
              When is the best time to visit Japan?
            </h2>
            <p className="mt-2 text-black">
              The best time to visit Japan depends on the type of experience you seek:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-black">Spring (March to May) - Famous for cherry blossom viewing (hanami) and mild weather.</li>
              <li className="text-black">Summer (June to August) - Warm weather and vibrant festivals, though also the rainy season (June) and high humidity.</li>
              <li className="text-black">Autumn (September to November) - Known for stunning fall foliage and pleasant temperatures.</li>
              <li className="text-black">Winter (December to February) - Ideal for snow sports, especially in regions like Hokkaido and the Japanese Alps.</li>
            </ul>
          </div>

          {/* FAQ Item 5 */}
          <div>
            <h2 className="text-xl font-semibold text-black">
              Are there any unique experiences I should try in Japan?
            </h2>
            <p className="mt-2 text-black">
              Japan offers many unique experiences:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-black">Onsen (Hot Springs) - Relax in natural hot springs, which are popular throughout Japan, especially in areas like Hakone and Beppu.</li>
              <li className="text-black">Karaoke - Singing with friends or strangers is a fun and popular activity in Japan.</li>
              <li className="text-black">Sumo Wrestling - Watching a live sumo match is an iconic Japanese experience.</li>
              <li className="text-black">Robot Restaurants and Cafes - Explore futuristic dining experiences, such as robot-themed restaurants in Tokyo.</li>
              <li className="text-black">Temples and Shrines - Visit historic sites like Kyoto's Kinkaku-ji (Golden Pavilion) or Tokyo's Senso-ji Temple.</li>
            </ul>
          </div>

          {/* FAQ Item 6 */}
          <div>
            <h2 className="text-xl font-semibold text-black">
              Is Japan expensive to visit?
            </h2>
            <p className="mt-2 text-black">
              Japan can be as affordable or expensive as you make it. Here's a general breakdown:
            </p>
            <ul className="list-disc pl-5">
              <li className="text-black">Accommodation - Budget hostels and capsule hotels are affordable, but luxury hotels and ryokan (traditional inns) can be pricey.</li>
              <li className="text-black">Food - Street food and casual dining options like ramen shops or conveyor belt sushi are budget-friendly. Fine dining, however, can be quite expensive.</li>
              <li className="text-black">Transportation - The Japan Rail Pass offers great value for extensive travel, but public transportation and taxis can add up.</li>
              <li className="text-black">Attractions - Entrance fees for temples and museums are usually low, but theme parks and special events can be costly.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cherry Blossom Animation */}
      <div className="cherry-blossom-animation left-0"></div>
      <div className="cherry-blossom-animation right-0"></div>

      {/* Inline CSS for animations */}
      <style jsx>{`
        /* Fireworks animation */
        @keyframes fireworks {
          0% {
            transform: translate(0, 0) scale(0);
            opacity: 0;
          }
          50% {
            transform: translate(50px, -50px) scale(1.5);
            opacity: 1;
          }
          100% {
            transform: translate(100px, -100px) scale(0);
            opacity: 0;
          }
        }

        .fireworks-animation {
          position: absolute;
          top: 20%;
          left: 50%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, #ff6347, transparent);
          border-radius: 50%;
          animation: fireworks 3s infinite ease-in-out;
        }

        .fireworks-animation.second {
          animation-delay: 1s;
          top: 30%;
          left: 30%;
        }

        .fireworks-animation.third {
          animation-delay: 2s;
          top: 50%;
          left: 70%;
        }

        /* Cherry Blossom animation */
        @keyframes cherryBlossoms {
          0% {
            top: 0;
            opacity: 0;
          }
          50% {
            top: 50%;
            opacity: 1;
          }
          100% {
            top: 100%;
            opacity: 0;
          }
        }

        .cherry-blossom-animation {
          position: absolute;
          top: 0;
          width: 20%;
          height: 100%;
          pointer-events: none;
          z-index: 10;
        }

        .left-0 {
          left: 0;
        }

        .right-0 {
          right: 0;
        }

        .cherry-blossom-animation::before {
          content: "🌸";
          position: absolute;
          top: -10%;
          left: 50%;
          font-size: 2rem;
          animation: cherryBlossoms 8s infinite ease-in-out;
          transform: translateX(-50%);
        }

        .cherry-blossom-animation::after {
          content: "🌸";
          position: absolute;
          top: 20%;
          left: 60%;
          font-size: 2rem;
          animation: cherryBlossoms 8s infinite ease-in-out;
          transform: translateX(-50%);
        }

        /* Responsive text and other styles */
        @media (max-width: 768px) {
          .text-3xl {
            font-size: 2xl;
          }

          .text-xl {
            font-size: lg;
          }
        }
      `}</style>

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
      </footer>
    </div>
  );
};

export default FAQPage;
