import { Link } from "react-router";
import HeroSlider from "../Components/HomePage/HeroSlider";
import PopularSkills from "../Components/HomePage/PopularSkills";
import SkillsCard from "../Components/SkillsCard";
import useSkills from "../hooks/useSkills";
import Loader from "../Components/loader";
import MyContainer from "../Components/MyContainer";
import TopRatedProviders from "../Components/HomePage/TopRatedProviders";
import HowItWorks from "../Components/HomePage/HowItWorks";

const Home = () => {
  const { skills, loading } = useSkills();
  const featuredSkills = skills.slice(0, 6);
  console.log(featuredSkills);

  return (
    <>
    <MyContainer>
      <HeroSlider></HeroSlider>
        <div className="flex justify-between py-5 items-center mt-10">
        <h1 className="text-3xl font-semibold">Featured <span className='text-yellow-600' >Skills</span></h1>
        <Link className="btn btn-outline" to="/products">
          See All Skills
        </Link>
      </div>
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredSkills.map((skill) => (
            <SkillsCard key={skill.id} skill={skill} />
          ))}
        </div>
      )}

      <div>
       <TopRatedProviders  />
      </div>
      <div className='mb-10'>
        <HowItWorks/>
      </div>
    </MyContainer>
    </>
  );
};
export default Home;
