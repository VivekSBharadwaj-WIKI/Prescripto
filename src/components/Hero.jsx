import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Hero = () => {
  return (
    <div className="h-[500px] max-w-7xl mx-auto bg-gradient-to-r from-blue-500 to-blue-600 rounded-3xl px-10 flex flex-col md:flex-row items-center justify-between">
      
      {/* Left Content */}
      <div className="flex flex-col gap-6 max-w-lg">
        
        <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
          Book Appointment <br /> With Trusted Doctors
        </h1>

        {/* Profiles + Text */}
        <div className="flex items-center gap-3">
          <img src={assets.group_profiles} className="w-24" />
          <p className="text-white text-sm opacity-90">
            Simply browse through our extensive list of trusted doctors,
            schedule your appointment hassle-free.
          </p>
        </div>

        {/* Button */}
        <button className="bg-white text-gray-800 px-6 py-3 rounded-full w-fit font-medium flex items-center gap-2 hover:scale-105 transition">
          Book appointment →
        </button>

      </div>

      {/* Right Image */}
      <div className="self-end">
        <img
          src={assets.header_img}
          alt=""
          className="w-[400px] md:w-[600px]"
        />
      </div>
    </div>
  );
};

export default Hero;