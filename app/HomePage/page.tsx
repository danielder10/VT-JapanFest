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

        {/* Lanterns */}
        <div className="flex justify-center space-x-8 mt-6">
          <div className="relative w-16 h-24 bg-red-300 rounded-md shadow-md">
            <div className="absolute top-0 w-6 h-6 bg-red-500 rounded-full left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute bottom-0 w-4 h-4 bg-red-500 rounded-full left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-2 h-8 bg-red-500 top-1/4 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="relative w-16 h-24 bg-blue-300 rounded-md shadow-md">
            <div className="absolute top-0 w-6 h-6 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute bottom-0 w-4 h-4 bg-blue-500 rounded-full left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-2 h-8 bg-blue-500 top-1/4 left-1/2 transform -translate-x-1/2"></div>
          </div>
          <div className="relative w-16 h-24 bg-pink-300 rounded-md shadow-md">
            <div className="absolute top-0 w-6 h-6 bg-pink-500 rounded-full left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute bottom-0 w-4 h-4 bg-pink-500 rounded-full left-1/2 transform -translate-x-1/2"></div>
            <div className="absolute w-2 h-8 bg-pink-500 top-1/4 left-1/2 transform -translate-x-1/2"></div>
          </div>
        </div>
      </header>

      {/* Explore Section */}
      <section className="py-10 bg-white text-center">
        <h2 className="text-2xl font-bold text-gray-800">Explore Festivals</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <div className="w-20 h-20 bg-red-200 rounded-full flex items-center justify-center shadow-lg text-red-500 text-3xl">
            🎆
          </div>
          <div className="w-20 h-20 bg-blue-200 rounded-full flex items-center justify-center shadow-lg text-blue-500 text-3xl">
            🎋
          </div>
          <div className="w-20 h-20 bg-pink-200 rounded-full flex items-center justify-center shadow-lg text-pink-500 text-3xl">
            🌸
          </div>
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
        {/* Torii Gate */}
        <div className="relative w-40 h-20 mx-auto">
          <div className="absolute top-0 left-0 w-full h-4 bg-red-600"></div>
          <div className="absolute top-4 left-2 w-2 h-16 bg-red-600"></div>
          <div className="absolute top-4 right-2 w-2 h-16 bg-red-600"></div>
          <div className="absolute top-8 left-6 w-28 h-2 bg-red-500"></div>
          <div className="absolute bottom-0 left-2 w-8 h-2 bg-red-500"></div>
          <div className="absolute bottom-0 right-2 w-8 h-2 bg-red-500"></div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
