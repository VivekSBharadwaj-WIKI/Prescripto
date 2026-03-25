import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";

const SortBySpeciality = () => {
  return (
    <div className="max-w-7xl mx-auto mt-10 px-4">
      
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-2xl font-semibold">Find by Speciality</p>
        <p className="text-gray-500 text-sm mt-2">
          Simply browse through our extensive list of trusted doctors, <br />
          schedule your appointment hassle-free.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 w-220 mx-auto">
        {specialityData.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center cursor-pointer hover:scale-105 transition"
          >
            <img src={item.image} className="w-25 mb-2" />
            <p className="text-sm text-gray-700 text-center">
              {item.speciality}
            </p>
          </div>
        ))}
      </div>

    </div>
  );
};

export default SortBySpeciality;