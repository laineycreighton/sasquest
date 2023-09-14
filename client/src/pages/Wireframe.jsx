import React from "react";
import ProjectNavBar from "../components/ProjectNavBar";
import ProjectHeader from "../components/ProjectHeader";
import WireframeDashboard from "../components/WireframeDashboard";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor
import { useParams } from "react-router-dom";

const Wireframe = () => {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <ProjectNavBar projectId={projectId} />
      {/* <ProjectHeader /> */}
      {/* <ProjectHeader /> */}
      <WireframeDashboard />
    </div>
  );
};

export default Wireframe;
