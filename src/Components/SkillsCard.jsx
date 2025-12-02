import React from "react";
import MyContainer from "./MyContainer";
import { Link } from "react-router";
import { SlStar } from "react-icons/sl";

const SkillsCard = ({ skill }) => {
  console.log(skill);
  return (
    <div className="rounded-xl shadow-lg p-4 bg-base-100 hover:scale-105 transition ease-in-out">
      <img
        src={skill.image}
        alt={skill.skillName}
        className="w-full h-48 object-cover rounded-lg"
      />

      <h2 className="text-xl font-semibold mt-3">{skill.skillName}</h2>

      <div className="flex items-center gap-1">
        <SlStar color="yellow" size={20} />
        <span className="font-semibold text-gray-700">{skill.rating}</span>
      </div>

      <Link
        to={`/viewDetails/${skill.skillId}`}
        className="block w-full mt-3 px-4 py-2 text-center card-btn hover:bg-blue-700 transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default SkillsCard;
