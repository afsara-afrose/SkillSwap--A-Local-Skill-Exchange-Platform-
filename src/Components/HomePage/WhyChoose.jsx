import React from "react";
import { FaHeart, FaShieldAlt, FaGlobe, FaClock } from "react-icons/fa";

const WhyChoose = () => {
  return (
    <section className="py-16 bg-gray-300 rounded-2xl">
      <div className="max-w-6xl mx-auto px-4">
       
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Why Choose <span className="text-yellow-500">Skillswap?</span>
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Join thousands of people who've discovered a better way to learn and
          teach multiple skills.
        </p>

        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Card #1 */}
          <div className="p-6 bg-white rounded-xl shadow-md text-center hover:scale-105 ">
            <div className="text-indigo-500 text-4xl mb-4 flex justify-center">
              <FaHeart />
            </div>
            <h3 className="font-semibold text-lg mb-2">Community Driven</h3>
            <p className="text-gray-600 text-sm">
              Connect with passionate learners and teachers who genuinely care
              about sharing knowledge and building relationships.
            </p>
          </div>

          {/* Card #2 */}
          <div className="p-6 bg-white rounded-xl shadow-md text-center hover:scale-105">
            <div className="text-orange-500 text-4xl mb-4 flex justify-center">
              <FaShieldAlt />
            </div>
            <h3 className="font-semibold text-lg mb-2">Safe & Verified</h3>
            <p className="text-gray-600 text-sm">
              All users are verified through our comprehensive screening
              process. Your safety and security are our top priorities.
            </p>
          </div>

          {/* Card #3 */}
          <div className="p-6 bg-white rounded-xl shadow-md text-center hover:scale-105">
            <div className="text-sky-500 text-4xl mb-4 flex justify-center">
              <FaGlobe />
            </div>
            <h3 className="font-semibold text-lg mb-2">Learn Anywhere</h3>
            <p className="text-gray-600 text-sm">
              Choose between virtual sessions or in-person meetups. Learn from
              experts worldwide or in your local community.
            </p>
          </div>

          {/* Card #4 */}
          <div className="p-6 bg-white rounded-xl shadow-md text-center hover:scale-105">
            <div className="text-pink-500 text-4xl mb-4 flex justify-center">
              <FaClock />
            </div>
            <h3 className="font-semibold text-lg mb-2">Flexible Scheduling</h3>
            <p className="text-gray-600 text-sm">
              Set your own schedule and learn at your own pace. Our platform
              adapts to your lifestyle and availability.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
