import HomeHeader from "../components/HomeHeader";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor
import NewProject from "../components/NewProject";


const Home = () => {
  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <HomeHeader />
      <NewProject />
    </div>
  );
};

export default Home;
