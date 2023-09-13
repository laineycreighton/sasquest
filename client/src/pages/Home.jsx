import React from "react";
import HomeHeader from "../components/HomeHeader";
import ProjectDashboard from "../components/ProjectDashboard";
import NewProject from "../components/NewProject";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor

const Home = () => {
  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <HomeHeader />
      <NewProject />
      <ProjectDashboard />
    </div>
  );
};

export default Home;
