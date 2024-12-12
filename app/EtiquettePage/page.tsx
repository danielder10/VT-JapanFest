"use client";

import React from "react";
import Link from "next/link";

const etiquetteData = [
  {
    title: "The Proper Way to Bow and Greet Someone",
    description:
      "In Japan, bowing is an important sign of respect. The deeper the bow, the more respect is shown. A simple nod or shallow bow is appropriate for casual situations, while a deep bow is used in formal situations. In business settings, a deeper bow may be expected when meeting someone for the first time. It's important to remember that bowing is both a sign of respect and an integral part of communication in Japan.",
    image: "https://qph.cf2.quoracdn.net/main-qimg-0c19cd1844cc3dfdeb4951c5072161eb-pjlq",
  },
  {
    title: "Dining Do's and Don'ts—Using Chopsticks Respectfully",
    description:
      "Chopsticks are used in many Japanese meals, but there are some important rules. Never stick chopsticks upright in a bowl of rice, as this resembles a funeral ritual. Don't pass food directly from one set of chopsticks to another, as this resembles a funeral custom. It's also considered impolite to tap chopsticks on the side of the bowl or point with them. When not using chopsticks, place them neatly on a chopstick rest rather than leaving them on the table or plate.",
    image: "https://www.japanlivingguide.com/media/mlbfxrhx/hashi2b.jpeg?width=800&height=336",
  },
  {
    title: "Never Wear Shoes Inside a Japanese Home",
    description:
      "In Japan, it's customary to remove shoes before entering someone's home, certain temples, and even some restaurants. Wearing shoes inside is seen as disrespectful and unclean. Additionally, when visiting certain public places, such as temples or traditional inns, you may be provided with indoor slippers. Be sure to wear them in designated areas but remove them when stepping onto tatami mats or in private spaces.",
    image: "https://scienceinfo.net/data-images/images/why-do-japanese-korean-always-take-off-their-shoes-before-entering-the-door-picture-3-A37wK5nqa.jpg",
  },
  {
    title: "Navigating Public Transportation with Politeness",
    description:
      "When riding trains or buses, it's important to remain quiet and respectful. Speaking on the phone or making loud noises is frowned upon. Additionally, give your seat to elderly or disabled passengers, as well as to pregnant women and people with young children. When traveling during rush hour, it's important to remain patient and mindful of others' space. Avoid making eye contact with strangers, as it's often considered intrusive.",
    image: "https://www.japan-zone.com/new/pix/japan-rush-hour-commute.jpg",
  },
];

const EtiquettePage: React.FC = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center text-gray-800"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542931287-023b922fa89b?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}
    >
      {/* Back Button */}
      <Link
        href="/HomePage"
        className="absolute top-4 left-4 px-4 py-2 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition-colors"
      >
        ← Back
      </Link>

      <div className="container mx-auto p-8 bg-white bg-opacity-90 rounded-lg shadow-lg">
        <h1 className="text-4xl font-serif text-center text-red-700 mb-8">
          Japanese Cultural Etiquette
        </h1>

        {/* General Etiquette Section */}
        <section className="mb-8">
          <h2 className="text-3xl font-serif text-black mb-4">
            General Etiquette
          </h2>
          <p className="text-lg text-black mb-4">
            Japanese culture is known for its strong emphasis on respect and politeness. 
            The following etiquettes will guide you in behaving respectfully in various situations.
          </p>
        </section>

        {/* City-specific Etiquette Sections */}
        {[
          {
            name: "Kyoto",
            description: 
              "Kyoto, being a city rich in tradition, requires visitors to adhere to more formal etiquette. " +
              "When visiting temples and shrines, always be mindful of your attire and behavior. " +
              "It's customary to bow slightly before entering sacred spaces, and visitors should avoid taking photos in restricted areas. " +
              "Kyoto is also home to the tea ceremony, so if invited to participate, remember that the process is highly ritualistic and involves quiet contemplation and respect for the host."
          },
          {
            name: "Tokyo",
            description: 
              "In Tokyo, modernity meets tradition, and etiquette reflects this blend. " +
              "Public spaces are expected to be kept orderly and quiet, especially on public transport. " +
              "While the pace of life may be faster, politeness remains key in all interactions. " +
              "When entering shops, it's customary to bow your head slightly when greeting the staff. " +
              "Tipping is not common in Japan, so don't feel the need to leave extra money at restaurants or hotels."
          },
          {
            name: "Osaka",
            description: 
              "Known for its more casual atmosphere, Osaka is a city that balances tradition with a laid-back vibe. " +
              "While respect is still important, you might find people more open to casual interactions and humor. " +
              "However, it's important to always be polite when addressing elders or during formal occasions. " +
              "In restaurants, it's common to say 'itadakimasu' (I humbly receive) before starting your meal, " +
              "and 'gochisousama deshita' (thank you for the meal) after finishing."
          },
          {
            name: "Nagoya",
            description: 
              "Nagoya, a city with a mix of historical landmarks and modern attractions, is known for its warm hospitality. " +
              "When visiting Nagoya Castle or Atsuta Shrine, remember to dress modestly and maintain a quiet demeanor. " +
              "Dining etiquette is also important in Nagoya, especially when trying the local specialty, hitsumabushi (grilled eel). " +
              "Follow the traditional method of eating by starting with the eel as-is, then adding condiments, and finally mixing with broth."
          },
          {
            name: "Fukuoka",
            description: 
              "Fukuoka, famous for its street food and festivals, offers a relaxed yet respectful environment. " +
              "When enjoying yatai (food stalls), wait patiently in line and dispose of your trash properly. " +
              "During festivals like the Hakata Gion Yamakasa, spectators should follow local customs, " +
              "such as refraining from obstructing participants and showing enthusiasm respectfully. " +
              "Politeness and appreciation for the local culture will ensure a warm welcome."
          }
        ].map((city, index) => (
          <section key={index} className="mb-8">
            <h2 className="text-3xl font-serif text-black mb-4">
              {city.name} Etiquette
            </h2>
            <p className="text-lg text-black mb-4">
              {city.description}
            </p>
          </section>
        ))}

        {/* Display Etiquette Data */}
        {etiquetteData.map((etiquette, index) => (
          <div 
            key={index} 
            className="mb-8 bg-white p-6 rounded-lg shadow-lg border-t-4 border-red-500"
          >
            <h2 className="text-3xl font-serif text-black mb-4">
              {etiquette.title}
            </h2>
            <img 
              src={etiquette.image} 
              alt={etiquette.title} 
              className="w-full h-64 object-cover mb-4 rounded-lg" 
            />
            <p className="text-lg text-black mb-4">
              {etiquette.description}
            </p>
          </div>
        ))}

        <div className="flex justify-between mt-8">
          {/* Quiz Button */}
          <Link
            href="/EtiquetteQuiz"
            className="px-4 py-2 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition-colors"
          >
            Feel Ready? Go Take A Quiz
          </Link>

          {/* Planner Button */}
          <Link
            href="/Planner"
            className="px-4 py-2 bg-pink-500 text-white font-bold rounded-lg shadow hover:bg-pink-600 transition-colors"
          >
            Planning to go? Plan Your Itinerary
          </Link>
        </div>
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

        <p className="text-gray-500 mt-6 text-sm">
          &copy; VT JapanFest 2024, All Rights Reserved.
        </p>

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

export default EtiquettePage;