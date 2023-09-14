import ProjectNavBar from "../components/ProjectNavBar.jsx";
import ProjectHeader from "../components/ProjectHeader.jsx";
import AddTimeline from "../components/AddTimeline.jsx";
import React from "react";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor
import { useParams } from "react-router-dom";

const Timeline = () => {
  const { projectId } = useParams();

  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <ProjectNavBar projectId={projectId} />
      {/* <ProjectHeader /> */}
      <AddTimeline />
      {/* <ViewTimeline /> */}
    </div>
  );
};

export default Timeline;
