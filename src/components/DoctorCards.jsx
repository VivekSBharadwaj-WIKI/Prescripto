import React from "react";
import { doctors } from "../assets/assets_frontend/assets";

const DoctorCards = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {doctors.slice(0, 10).map((doc) => (
        <div
          key={doc.id}
          className="border rounded-xl p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={doc.image}
            alt={doc.name}
            className="bg-blue-100 w-full h-40 object-contain rounded-md"
          />

          <h2 className="text-lg font-semibold mt-3">{doc.name}</h2>
          <p className="text-gray-500 text-sm">{doc.speciality}</p>

          <p className="text-sm mt-1">{doc.experience}</p>

          <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-600">
            Book Now
          </button>
        </div>
      ))}
    </div>
  );
};

export default DoctorCards;
