import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import 'animate.css';



const HowItWorks = () => {
  useEffect(() => {
    Aos.init({ duration: 800, offset: 100 });
  }, []);

  return (
    <section className="py-16 px-5 rounded-3xl  bg-fuchsia-200">
     
    </section>
  );
};

export default HowItWorks;
