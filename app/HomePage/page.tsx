import React from "react";

const Home: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-b from-red-100 to-pink-100 py-10 text-center">
        <h1 className="text-4xl font-bold text-red-600">Welcome</h1>
        <p className="text-gray-700 mt-2">
          Discover festivals and traditions in a beautiful and interactive way.
        </p>
        <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
          Explore More
        </button>
        <div className="flex justify-center space-x-4 mt-6">
          <img src="/lantern1.png" alt="Lantern 1" className="w-10 h-10" />
          <img src="/lantern2.png" alt="Lantern 2" className="w-10 h-10" />
          <img src="/lantern3.png" alt="Lantern 3" className="w-10 h-10" />
        </div>
      </header>

      {/* Explore Section */}
      <section className="py-10 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-800">Explore Festivals</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="bg-red-100 p-6 rounded-full shadow-lg">🎆</div>
          <div className="bg-blue-100 p-6 rounded-full shadow-lg">🎋</div>
          <div className="bg-pink-100 p-6 rounded-full shadow-lg">🌸</div>
        </div>
      </section>

      {/* Cards Section */}
      <section className="py-10 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <p className="text-gray-600">
              Discover the history of Hanami and the beauty of cherry blossoms.
            </p>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Learn More
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <p className="text-gray-600">
              Explore the magic of Japanese lantern festivals.
            </p>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Discover
            </button>
          </div>
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <p className="text-gray-600">
              Find out about the rich traditions of Japanese New Year.
            </p>
            <button className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600">
              Read More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-10 text-center">
        <img
          src="/torii.png"
          alt="Torii Gate"
          className="w-24 mx-auto"
        />
      </footer>
    </div>
  );
};

export default Home;
