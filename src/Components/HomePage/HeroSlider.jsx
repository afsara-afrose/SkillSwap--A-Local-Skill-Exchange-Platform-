import { Navigation } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import img1 from "../../assets/HeroSection-Images/photography.jpg";
import img2 from "../../assets/HeroSection-Images/English Learning.jpg";
import img3 from "../../assets/HeroSection-Images/Web Development.jpg";
import img4 from "../../assets/HeroSection-Images/food.jpg";
import img5 from "../../assets/HeroSection-Images/Yoga with sun.jpg";

export default function Slider() {
  return (
    <>
  <div className="flex flex-col-reverse md:flex-col lg:flex-row justify-between items-center gap-5 p-5">

    {/* Left Side Text */}
    <div >
      <h1 className="text-2xl mt-10 md:text-3xl lg:text-4xl font-bold">
        Teach What <span className="text-amber-400">You Know</span> Learn
        what <span className="text-pink-500">You Love.</span>
      </h1>

      <p className="font-medium text-accent mt-4 md:mt-5 text-sm md:text-base">
        SkillSwap is an interesting platform that will help you learn
        skills and exchange your skill.
      </p>
    </div>

    {/* Right Side Slider */}
    <div className="w-full mt-10 lg:w-1/2 mt-5 md:mt-8">
      <Swiper navigation={true} modules={[Navigation]}>
        {[img1, img2, img3, img4, img5].map((img, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[400px] rounded-3xl overflow-hidden bg-black">
        <img
          className="w-full h-full object-contain"
          src={img}
          alt=""
        />
      </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  </div>
</>

  );
}