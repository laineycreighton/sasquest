import React from "react";
import ProjectNavBar from '../components/ProjectNavBar.jsx';
import AddTimeline from '../components/AddTimeline.jsx';
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component

import { GET_ALL_PROJECTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Timeline = () => {
  const { loading, data } = useQuery(GET_ALL_PROJECTS);
  if (!loading) {
    console.log(data);
  }
  return (
    // Wrap the entire component with AnimatedCursor
    <AnimatedCursor>
      <div>
        <ProjectNavBar />
        {/* <ProjectHeader /> */}
        <AddTimeline />
        {/* <ViewTimeline /> */}
      </div>
    </AnimatedCursor>
  );
};

export default Timeline;
