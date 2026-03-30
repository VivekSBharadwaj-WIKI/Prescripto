import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";

const LeftFilter = ({ selected, setSelected }) => {
  return (
    <div className="w-70">
      
      <div className="flex flex-col gap-3">
        {specialityData.map((item, index) => (
          
          <div
            key={index}
            onClick={() => setSelected(selected === item.speciality ? "" : item.speciality)}
            className={`border px-3 py-1 text-sm cursor-pointer rounded-sm transition
              ${selected === item.speciality 
                ? "bg-blue-500 text-white border-blue-500" 
                : "border-gray-200 text-gray-700 hover:bg-gray-50"
              }
            `}
          >
            {item.speciality}
          </div>

        ))}
      </div>

    </div>
  );
};

export default LeftFilter;