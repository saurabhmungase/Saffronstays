
import React from "react";
import { Link } from "react-router-dom";
import NatureSection from "./NatureSection";
import NordicSeaSection from "./NordicSeaSection";
import NewDestinationSection from "./NewDestinationSection";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <img
          src="src/assets/image.png"
          alt="Hero"
          className="absolute w-full h-full object-cover brightness-75"
        />

        {/* Overlay & Search Bar */}
        <div className="relative text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Explore the World with Us</h1>
          <p className="text-lg text-gray-300 max-w-lg mx-auto">Discover breathtaking destinations and unique adventures.</p>
          <div className="mt-6">
            <input
              type="text"
              className="w-80 px-4 py-2 rounded-full border border-gray-300 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search Here..."
            />
          </div>
        </div>
      </section>

      {/* Sections */}
      <NatureSection />
      <NordicSeaSection />
      <NewDestinationSection />

      {/* Newsletter & Adventure Section */}
      <section className="flex flex-col md:flex-row justify-between items-center bg-white py-10 px-6 md:px-16 rounded-2xl shadow-lg max-w-5xl mx-auto my-10">
        {/* Adventure Message */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Leading the way in adventure</h2>
          <p className="text-gray-600 max-w-md">
            Join thousands of travelers exploring the world's most exciting destinations.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="mt-6 md:mt-0">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">Join our Newsletter</h2>
          <div className="flex items-center space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

