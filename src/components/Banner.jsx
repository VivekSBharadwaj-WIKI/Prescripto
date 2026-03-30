import React from "react";
import { assets } from "../assets/assets_frontend/assets";

const Banner = () => {
  return (
    <div className="bg-blue-500 w-5/6 mx-auto rounded-3xl h-[400px] flex items-center justify-evenly px-10 my-30">
      <div className="flex flex-col justify-center gap-6 text-white max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight">
          Book Appointment With <br /> 100+ Trusted Doctors
        </h1>
        <button className="bg-white text-gray-700 rounded-full px-6 py-3 w-fit hover:scale-105 transition">
          Create Account
        </button>
      </div>
      <div className="h-full flex items-end">
        <img
          src={assets.appointment_img}
          alt=""
          className="h-15/14 object-contain"
        />
      </div>
    </div>
  );
};

export default Banner;
