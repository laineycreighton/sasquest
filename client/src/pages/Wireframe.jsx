import React from "react";
import ProjectNavBar from "../components/ProjectNavBar";
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
      <WireframeDashboard />
    </div>
  );
};

export default Wireframe;
