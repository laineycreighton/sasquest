import React from "react";
import HomeHeader from "../components/HomeHeader";
import ProjectDashboard from "../components/ProjectDashboard";
import NewProject from "../components/NewProject";
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component

const Home = () => {
  return (
    // Wrap the entire component with AnimatedCursor
    <AnimatedCursor>
      <div>
        <HomeHeader />
        <NewProject />
        <ProjectDashboard />
      </div>
    </AnimatedCursor>
  );
};

export default Home;
