import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import useSkills from "../../hooks/useSkills";

const TopRatedProviders = () => {
    const {skills}=useSkills()
  // AOS animations list
  const animations = [
    "fade-up",
    "fade-down",
    "fade-left",
    "fade-right",
    "fade-up-right",
    "fade-up-left",
    "fade-down-right",
    "fade-down-left",
  ];

  useEffect(() => {
    Aos.init({ duration: 900, offset: 120 });
  }, []);

  if (!skills || !Array.isArray(skills)) return null;

  return (
    <div className="my-16">
      <h2 className="text-3xl font-bold text-center mb-10">
        ⭐ Top Rated Providers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={skill.skillId}
            data-aos={animations[index % animations.length]} // assign different animation
            className="p-6 shadow-xl rounded-2xl bg-gradient-to-br from-pink-50 to-blue-50
                       hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >
            <h3 className="text-xl font-semibold text-gray-800">
              {skill.skillName}
            </h3>

            <p className="mt-1 text-gray-700">
              <span className="font-semibold">Provider:</span> {skill.providerName}
            </p>

            <p className="mt-2 text-yellow-600 font-bold">⭐ Rating: {skill.rating}</p>

            <p className="text-green-600 font-semibold mt-1">
              Slots Available: {skill.slotsAvailable}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedProviders;
