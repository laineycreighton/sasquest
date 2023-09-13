import React from "react";
import HomeHeader from "../components/HomeHeader";
import ProjectDashboard from "../components/ProjectDashboard";
import NewProject from "../components/NewProject";
import { Navigate } from "react-router-dom";
import Auth from "../utils/auth";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor

const Home = () => {
  return !Auth.loggedIn() ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <HomeHeader />
      <NewProject />
      <ProjectDashboard />
    </div>
  );
};

export default Home;
