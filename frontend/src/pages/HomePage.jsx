import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Carousel from "../Components/Carousel";

import { Moon, Sun } from "lucide-react"; // Icons for dark mode

const FeatureCard = ({ to, bgColorLight, bgColorDark, imgSrc, title, description, darkMode }) => (
  <Link
    to={to}
    className={`flex flex-col bg-[#F8FAFC] items-center p-6 rounded-lg shadow-md   hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out
      ${darkMode ? bgColorDark : bgColorLight} w-full sm:w-4/5 md:w-full`}
  >
    <div className="w-full h-48 bg-gray-300 rounded-lg overflow-hidden">
      <img src={imgSrc} alt={title} className="w-full h-full object-cover" />
    </div>
    <div className="text-center mt-4">
      <h2 className={`text-xl font-semibold ${darkMode ? "text-white" : "text-gray-900"}`}>{title}</h2>
      <p className={`${darkMode ? "text-gray-400" : "text-gray-700"}`}>{description}</p>
    </div>
  </Link>
);

export default function HomePage() {
  if(!localStorage.getItem("currentUser")){
    console.log("no");
  }
  else {
    console.log(localStorage.getItem("currentUser")); 
  }
  
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });
  const [contentVisible, setContentVisible] = useState(false);

  // Ensure content remains visible even after dark mode toggle
  useEffect(() => {
    setTimeout(() => setContentVisible(true), 100); // Delay for smooth appearance
  }, []);

  // Apply dark mode styles
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      {/* Dark Mode Toggle Button (Fixed Bottom Left) */}
      <div className="fixed bottom-6 left-6 z-50">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md hover:scale-110 transition"
        >
          {darkMode ? <Sun size={24} className="text-yellow-400" /> : <Moon size={24} className="text-gray-700" />}
        </button>
      </div>
      
      <Carousel />
      <div
        id="homepage-content"
        className={`p-6 transition-opacity duration-700 ${contentVisible ? "opacity-100" : "opacity-0"} ${
          darkMode ? "bg-gray-950 text-gray-300" : "bg-my-forest"
        }`}
      >
        <div className="grid grid-cols-1 background: linear-gradient(to bottom, #0f172a, #1e293b, #334155) sm:grid-cols-2 lg:grid-cols-3 gap-10  px-4 sm:px-8">
          <FeatureCard
            to="/events"
            // bgColorLight="bg-blue-100 hover:bg-blue-200"
            // bgColorDark="bg-blue-800 hover:bg-blue-700"
            imgSrc="/path-to-your-image.jpg"
            title="🎉 Events & Festivals"
            description="Check out upcoming and past events in our society."
            darkMode={darkMode}
          />
          <FeatureCard
            to="/shops"
            // bgColorLight="bg-green-100 hover:bg-green-200"
            // bgColorDark="bg-green-800 hover:bg-green-700"
            imgSrc="/path-to-your-shop-image.jpg"
            title="🛍️ Shops & Services"
            description="See which shops are open today."
            darkMode={darkMode}
          />
          <FeatureCard
            to="/rent-flats"
            // bgColorLight="bg-yellow-100 hover:bg-yellow-200"
            // bgColorDark="bg-yellow-800 hover:bg-yellow-700"
            imgSrc="/path-to-your-flats-image.jpg"
            title="🏠 Rent Flats"
            description="Find available apartments for rent."
            darkMode={darkMode}
          />
          <FeatureCard
            to="/buy-and-sell"
            // bgColorLight="bg-purple-100 hover:bg-purple-200"
            // bgColorDark="bg-purple-800 hover:bg-purple-700"
            imgSrc="/path-to-your-new-section-image.jpg"
            title="📌 Buy And Sell Items"
            description="Buy and Sell anything you want."
            darkMode={darkMode}
          />
          <FeatureCard
            to="/lost-and-found"
            // bgColorLight="bg-rose-200 hover:bg-rose-300"
            // bgColorDark="bg-rose-800 hover:bg-rose-700"
            imgSrc="/path-to-your-new-section-image.jpg"
            title="🔍 Lost And Found"
            description="Find your lost items here."
            darkMode={darkMode}
          />
          <FeatureCard
            to="/volunteer"
            imgSrc="/path-to-volunteer-image.jpg"
            title="🤝 Volunteer With Us"
            description="Join our community efforts and make a difference."
            darkMode={darkMode}
          />
           
        </div>
      </div>
    </>
  );
}
