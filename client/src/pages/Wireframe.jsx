import React from "react";
import ProjectNavBar from "../components/ProjectNavBar";
import ProjectHeader from "../components/ProjectHeader";
import WireframeDashboard from "../components/WireframeDashboard";
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component

const Wireframe = () => {
  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <ProjectNavBar />
      {/* <ProjectHeader /> */}
      <WireframeDashboard />
    </div>
  );
};

export default Wireframe;