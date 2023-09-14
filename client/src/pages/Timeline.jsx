import ProjectNavBar from "../components/ProjectNavBar.jsx";
import ViewTimeline from "../components/ViewTimeline.jsx";
import AddTimeline from "../components/AddTimeline.jsx";
import React from "react";

const Timeline = () => {

  return (
    <div>
      <ProjectNavBar />
      <AddTimeline />
      <ViewTimeline />
    </div>
  );
};

export default Timeline;
