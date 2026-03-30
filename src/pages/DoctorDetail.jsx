import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";
import DoctorCards from "../components/DoctorCards";

const DoctorDetail = () => {
  const { id } = useParams();
  const doctor = doctors.find((doc) => doc._id === id);

  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedTime, setSelectedTime] = useState("");

  if (!doctor) {
    return <p className="text-center mt-10">Doctor not found</p>;
  }

  const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
  const times = ["8:00 am", "8:30 am", "9:00 am", "9:30 am", "10:00 am"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row gap-8">

        {/* Image */}
        <div className="bg-blue-500 rounded-xl">
          <img src={doctor.image} className="w-full h-full object-contain" />
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4 border py-5 px-8 rounded-xl w-full">
          
          <h1 className="text-2xl font-bold">{doctor.name}</h1>

          <p className="text-gray-500">
            {doctor.degree} - {doctor.speciality}
            <span className="border px-2 py-1 rounded-full text-xs ml-4">
              {doctor.experience}
            </span>
          </p>

          {/* Availability */}
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full ${doctor.available ? "bg-green-500" : "bg-red-500"}`}></span>
            <p>{doctor.available ? "Available" : "Not Available"}</p>
          </div>

          {/* About */}
          <div>
            <p className="font-semibold">About</p>
            <p className="text-gray-600 text-sm mt-1">{doctor.about}</p>
          </div>

          <p className="font-semibold">Appointment fee: ${doctor.fees}</p>

        </div>
      </div>

      {/* BOOKING SECTION */}
      <div className="mt-10 ml-65">

        <p className="font-semibold mb-4">Booking slots</p>

        {/* Days */}
        <div className="flex gap-3 mb-4 flex-wrap">
          {days.map((day, index) => (
            <div
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`w-14 h-22 rounded-full border border-gray-400 cursor-pointer text-center flex items-center justify-center
                ${selectedDay === index 
                  ? "bg-blue-500 text-white" 
                  : "text-gray-600"}
              `}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Time slots */}
        <div className="flex gap-3 flex-wrap">
          {times.map((time, index) => (
            <div
              key={index}
              onClick={() => setSelectedTime(time)}
              className={`w-22 h-12 rounded-full border border-gray-400 cursor-pointer text-center flex items-center justify-center
                ${selectedTime === time 
                  ? "bg-blue-500 text-white" 
                  : "text-gray-600"}
              `}
            >
              {time}
            </div>
          ))}
        </div>

        {/* Button */}
        <button className="mt-6 bg-blue-500 text-white text-2xl px-10 py-3 rounded-full hover:bg-blue-600 transition">
          Book Appointment
        </button>

      </div>

      <DoctorCards limit={5} grid="grid-cols-1 sm:grid-cols-5 mt-30"/>

    </div>
  );
};

export default DoctorDetail;