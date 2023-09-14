import ProjectNavBar from "../components/ProjectNavBar.jsx";
import ViewTimeline from "../components/ViewTimeline.jsx";
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
      <AddTimeline projectId={projectId} />
      <ViewTimeline projectId={projectId} />
    </div>
  );
};

export default Timeline;
