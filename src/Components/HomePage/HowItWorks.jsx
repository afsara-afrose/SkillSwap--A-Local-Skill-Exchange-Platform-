import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import "animate.css";

import signup from "../../assets/HowItWorks/Login-pana.png";
import skills from "../../assets/HowItWorks/skills.png";
import education from "../../assets/HowItWorks/Education-pana.png";
import review from "../../assets/HowItWorks/Review.png";

const HowItWorks = () => {
  useEffect(() => {
    Aos.init({ duration: 800, offset: 100 });
  }, []);

  return (
    <section className="py-16 px-5 rounded-3xl  bg-fuchsia-200">
      <h2 className="text-3xl font-bold text-center mb-12 animate__animated animate__swing">
        How It <span className="text-yellow-500">Works</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {/* Step 1 */}
        <div
          data-aos="fade-up"
          className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center hover:shadow-3xl hover:scale-105 transition ease-in-out"
        >
          <img className="w-[255px]" src={signup} alt="" />
          <h3 className="text-xl font-semibold mb-2">Sign Up & Browse</h3>
          <p className="text-gray-600">
            Create an account and explore a variety of skills available on
            SkillSwap.
          </p>
        </div>

        {/* Step 2 */}
        <div
          data-aos="fade-down"
          className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition hover:scale-105 ease-in-out"
        >
          <img src={skills} alt="" />
          <h3 className="text-xl font-semibold mb-2">Choose a Skill</h3>
          <p className="text-gray-600">
            Select the skill you want to learn or offer your own skill to
            exchange.
          </p>
        </div>

        {/* Step 3 */}
        <div
          data-aos="fade-left"
          className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition hover:scale-105 ease-in-out "
        >
          <img src={education} alt="" />
          <h3 className="text-xl font-semibold mb-2">Learn & Exchange</h3>
          <p className="text-gray-600">
            Connect with providers and start learning while sharing your own
            expertise.
          </p>
        </div>

        {/* Step 4 */}
        <div
          data-aos="fade-right"
          className="bg-white p-6 rounded-3xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl hover:scale-105 transition ease-in-out"
        >
          <div className="text-5xl mb-4">
            <img src={review} alt="" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Rate & Review</h3>
          <p className="text-gray-600">
            Give feedback to help others choose the best skills and providers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
