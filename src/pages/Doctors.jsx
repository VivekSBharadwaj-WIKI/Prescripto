import React, { useState } from "react";
import LeftFilter from "../components/LeftFilter";
import DoctorsList from "../components/DoctorsList";

const Doctors = () => {
  const [selected, setSelected] = useState("")
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <p className="mb-6 text-gray-600 px-10">
        Browse through the doctors specialist.
      </p>
      <div className="flex flex-col md:flex-row justify-between">
        <div>
          <LeftFilter selected={selected} setSelected={setSelected}/>
        </div>
        <div className="w-full md:w-3/4">
          <DoctorsList selected={selected}/>
        </div>
      </div>
    </div>
  );
};

export default Doctors;
