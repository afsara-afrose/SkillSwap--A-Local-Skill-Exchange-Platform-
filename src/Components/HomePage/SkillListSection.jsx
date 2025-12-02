import React from "react";
import { Link } from "react-router";
import { SlStar } from "react-icons/sl";

const SkillListSection = ({ skills }) => {
  const sortedSkills = [...skills].sort((a, b) => b.rating - a.rating);

  return (
    <div className="space-y-6 bg-blue-100 rounded-2xl">
      <h1 className="text-3xl text-center p-10 font-bold text-pink-500">
        SKILL <span className="text-black">DETAILS</span>
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 md:p-10">
        {sortedSkills.map((skill) => (
          <div
            key={skill.skillId}
            className="flex flex-col md:flex-row gap-4 items-center bg-white shadow-lg rounded-xl overflow-hidden border p-4 hover:scale-105 transition"
          >
            <div className="w-full md:w-4/5 flex flex-col md:flex-row items-center md:items-start gap-4">
              <img
                src={skill.image}
                alt={skill.skillName}
                className="w-full sm:w-48 h-48 object-cover rounded-lg"
              />

              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl font-bold text-gray-900">
                  {skill.skillName}
                </h2>

                <div className="flex items-center justify-center md:justify-start mt-2 gap-2">
                  <div className="flex">
                    {Array.from({ length: 5 }, (_, i) => (
                      <SlStar
                        key={i}
                        size={20}
                        color={i < Math.round(skill.rating) ? "yellow" : "gray"}
                      />
                    ))}
                  </div>
                  <span className="text-gray-700 font-semibold">
                    {skill.rating}
                  </span>
                </div>

                <p className="text-gray-600 mt-2">{skill.category}</p>
                <p className="text-green-600 font-bold mt-1">${skill.price}</p>
              </div>
            </div>

            <div className="w-full md:w-1/5 flex justify-center md:justify-end mt-4 md:mt-0">
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
    </div>
  );
};

export default SkillListSection;
