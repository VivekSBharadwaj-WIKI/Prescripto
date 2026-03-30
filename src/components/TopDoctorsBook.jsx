import React from "react";
import DoctorCards from "./DoctorCards";
import { Link } from "react-router-dom";

const TopDoctorsBook = () => {
  return (
    <div className="max-w-7xl mx-auto mt-12 px-4">
      <div className="text-center mb-8">
        <p className="text-2xl font-semibold">Top Doctors to Book</p>
        <p className="text-gray-500 text-sm mt-2">
          Simply browse through our extensivve list of trusted doctors.
        </p>
      </div>
      <DoctorCards limit={5} grid="grid-cols-1 sm:grid-cols-5"/>
      <div className="flex justify-center mt-6">
        <Link
          to="/doctors"
          className="px-6 py-2 rounded-full bg-gray-200 hover:bg-gray-300 transition"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default TopDoctorsBook;
