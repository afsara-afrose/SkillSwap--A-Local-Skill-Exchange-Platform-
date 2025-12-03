import { Link } from "react-router";
import HeroSlider from "../Components/HomePage/HeroSlider";
import PopularSkills from "../Components/HomePage/PopularSkills";
import SkillsCard from "../Components/SkillsCard";
import useSkills from "../hooks/useSkills";
import Loader from "../Components/loader";
import MyContainer from "../Components/MyContainer";
import TopRatedProviders from "../Components/HomePage/TopRatedProviders";
import HowItWorks from "../Components/HomePage/HowItWorks";
import SkillListSection from "../Components/HomePage/SkillListSection";
import { RingLoader } from "react-spinners";
import WhyChoose from "../Components/HomePage/WhyChoose";



const Home = () => {
  const { skills, loading,error } = useSkills();

   if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
         <RingLoader size={50} color="#36d7b7" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-xl font-semibold text-red-500">
          Error loading skills: {error.message}
        </p>
      </div>
    );
  }
 
  return (
    <>
    <MyContainer>
      <HeroSlider></HeroSlider>
        <div className="flex justify-between  item-center mx-auto py-5 items-center mt-20">
        <h1 className="text-3xl font-semibold">Featured <span className='text-yellow-600' >Skills</span></h1>
        
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 rounded-xl bg-indigo-200 p-10">
          {skills.map((skill) => (
            <SkillsCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}

      <div className="mt-20 mb-10 ">
       <TopRatedProviders   />
      </div>
      <div className="mt-20 mb-10 ">
        <SkillListSection skills={skills}></SkillListSection>
        
       
      </div>
      <div className='mb-10'>
        <HowItWorks/>
      </div>

      <div className='mb-10'>
        <WhyChoose></WhyChoose>
      </div>

    </MyContainer>
    </>
  );
};
export default Home;
