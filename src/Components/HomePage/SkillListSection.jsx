import React from "react";
import { Link } from "react-router";
import { SlStar } from "react-icons/sl";

const SkillListSection = ({ skills }) => {
  // Sort skills by rating descending
  const sortedSkills = [...skills].sort((a, b) => b.rating - a.rating);

  return (
    <div className="space-y-6 ">
        <h1 className='text-3xl text-center font-bold text-pink-500'>SKILL DETAILS</h1>
      {sortedSkills.map((skill) => (
        <div
          key={skill.skillId}
          className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl overflow-hidden border p-4 hover:scale-105 transition"
        >
         
          <div className="w-full md:w-4/5 flex flex-col md:flex-row items-center md:items-start gap-4">
            <img
              src={skill.image}
              alt={skill.skillName}
              className="w-full md:w-48 h-48 object-cover rounded-lg"
            />

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900">
                {skill.skillName}
              </h2>

              <div className="flex items-center mt-2 gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <SlStar
                      key={i}
                      size={20}
                      color={i < Math.round(skill.rating) ? "yellow" : "gray"}
                    />
                  ))}
                </div>
                <span className="text-gray-700 font-semibold">{skill.rating}</span>
              </div>

              <p className="text-gray-600 mt-2">{skill.category}</p>
              <p className="text-green-600 font-bold mt-1">${skill.price}</p>
            </div>
          </div>

          
          <div className="w-full md:w-1/5 mt-4 md:mt-0 flex justify-center md:justify-end">
            <Link
              to={`/skillDetail/${skill.skillId}`}
              className="block px-6 py-3 text-center card-btn hover:bg-yellow-700 transition w-full md:w-auto"
            >
              Skill Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillListSection;
