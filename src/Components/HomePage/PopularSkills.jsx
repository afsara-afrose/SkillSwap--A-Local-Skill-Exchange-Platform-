import React from "react";
import { SlStar } from "react-icons/sl";
import { useNavigate } from "react-router";

const PopularSkills = ({ skill }) => {
  console.log(skill);
  const navigate = useNavigate();

  const handleViewDetails = (skillId) => {
    navigate(`/skills/${skillId}`);
  };

  return (
    <div className="p-10 bg-gray-50">
      <h1 className="font-bold text-2xl text-center">
        {" "}
        <span className="text-amber-400">Popular</span> Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skill?.map((skill) => (
          <div
            key={skill?.skillId}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 w-full bg-gray-200">
              <img
                src={skill?.image}
                alt={skill?.skillName}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold">{skill?.skillName}</h3>
              <p className="text-yellow-500 mt-1"><SlStar color="yellow" /> {skill?.rating}</p>
              <p className="text-gray-700 mt-1 font-semibold">
                ${skill?.price}
              </p>
              <button
                onClick={() => handleViewDetails(skill?.skillId)}
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200"
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSkills;
