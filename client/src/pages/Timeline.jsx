import ProjectNavBar from "../components/ProjectNavBar.jsx";
import ViewTimeline from "../components/ViewTimeline.jsx";
import AddTimeline from "../components/AddTimeline.jsx";
import React from "react";
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component

const Timeline = () => {

  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <ProjectNavBar />
      <AddTimeline />
      <ViewTimeline />
    </div>
  );
};

export default Timeline;
