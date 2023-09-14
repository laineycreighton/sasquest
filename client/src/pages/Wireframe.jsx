import React from "react";
import ProjectNavBar from "../components/ProjectNavBar";
import ProjectHeader from "../components/ProjectHeader";
import WireframeDashboard from "../components/WireframeDashboard";
import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";
// import ViewWireframe from "../components/ViewWireframe";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor

const Wireframe = () => {
  return !Auth.loggedIn() ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <ProjectNavBar />
      <ProjectHeader />
      <WireframeDashboard />
    </div>
  );
};

export default Wireframe;