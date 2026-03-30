import React from "react";
import { doctors } from "../assets/assets_frontend/assets";

const DoctorCards = ({
  limit,
  grid = "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4",
  selected,
}) => {

  let filteredDoctors = doctors;

  if (selected) {
    filteredDoctors = doctors.filter(
      (doc) => doc.speciality === selected
    );
  }

  const displayedDoctors = filteredDoctors.slice(
    0,
    limit || filteredDoctors.length
  );

  return (
    <div className={`grid ${grid} gap-6`}>
      {displayedDoctors.map((doc) => (
        <div
          key={doc._id}
          className="border border-gray-300 rounded-xl p-4 shadow hover:shadow-lg transition"
        >
          <img
            src={doc.image}
            className="w-full h-60 object-cover rounded-md bg-blue-100"
          />

          <h2 className="text-lg font-semibold mt-3">{doc.name}</h2>
          <p className="text-gray-500 text-sm">{doc.speciality}</p>
        </div>
      ))}
    </div>
  );
};

export default DoctorCards;