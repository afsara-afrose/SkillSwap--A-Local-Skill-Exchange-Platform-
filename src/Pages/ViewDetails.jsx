import React from "react";
import { useParams, Link } from "react-router";
import useSkills from "../hooks/useSkills";
import MyContainer from "../Components/MyContainer";


const ViewDetails = () => {
  const { skillId } = useParams();
  const { skills } = useSkills();

  const skill = skills.find((p) => String(p.skillId) === skillId);

  if (!skill) {
    return (
      <div className="h-[300px] flex justify-center items-center">
        <p className="text-xl font-semibold text-gray-500">
          Loading skill details...
        </p>
      </div>
    );
  }

  return (
    <MyContainer>

      <h1 className='text-center text-3xl font-bold mt-10'>Skill <span className='text-pink-700'> Details</span> </h1>
      <div className="w-full flex justify-center py-10 px-3 md:px-0">
        <div className="w-full max-w-3xl bg-pink-100 shadow-2xl rounded-2xl overflow-hidden border">

        {/* Image Section */}
        <div className="w-full h-[220px] sm:h-[260px] md:h-[300px]">
          <img
            src={skill.image}
            alt={skill.skillName}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* Title */}
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              {skill.skillName}
            </h1>
            <p className="text-gray-600 mt-1 text-base sm:text-lg">
              Category: {skill.category}
            </p>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              About This Skill
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              {skill.description}
            </p>
          </div>

          {/* Provider Info */}
          <div className="bg-gray-50 p-4 sm:p-5 rounded-xl border">
            <h3 className="text-lg font-semibold mb-2">Provider Information</h3>

            <p className="text-gray-700 text-sm sm:text-base">
              <span className="font-semibold">Name:</span> {skill.providerName}
            </p>
            <p className="text-gray-700 text-sm sm:text-base">
              <span className="font-semibold">Email:</span> {skill.providerEmail}
            </p>
          </div>

          {/* Price, Rating, Slots */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">

            <div className="bg-blue-50 p-4 border rounded-xl">
              <p className="text-gray-500 text-sm">Price</p>
              <h3 className="text-xl font-bold text-blue-700">
                ${skill.price}
              </h3>
            </div>

            <div className="bg-yellow-50 p-4 border rounded-xl">
              <p className="text-gray-500 text-sm">Rating</p>
              <h3 className="text-xl font-bold text-yellow-600">
                {skill.rating}
              </h3>
            </div>

            <div className="bg-green-50 p-4 border rounded-xl">
              <p className="text-gray-500 text-sm">Slots</p>
              <h3 className="text-xl font-bold text-green-700">
                {skill.slotsAvailable}
              </h3>
            </div>


          </div>
          {/* Book Button */}
                    <div className="pt-6">
                      <Link
                        to={`/book-session/${skill.skillId}`}
                        className="inline-block px-8 py-3 text-center transition w-full card-btn"
                      >
                        Book Session
                      </Link>
                    </div>

        </div>
      </div>

      </div>
      
    </MyContainer>
  );
};

export default ViewDetails;
