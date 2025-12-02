import React from "react";
import MyContainer from "./MyContainer";
import { Link } from "react-router";

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

        <div className="flex justify-between items-center mt-2">
          <p className="text-yellow-500 font-semibold"> {skill.rating}</p>
          <p className="text-green-600 font-bold">${skill.price}</p>
        </div>

        <Link to={`/viewDetails/${skill.skillId}`} className=" w-full mt-3 p-2  card-btn">
          View Details
        </Link>
      </div>
    
  );
};

export default SkillsCard;
