import React from "react";
import ProjectNavBar from '../components/ProjectNavBar.jsx';
import AddTimeline from '../components/AddTimeline.jsx';
import { GET_ALL_PROJECTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor

const Timeline = () => {
  const { loading, data } = useQuery(GET_ALL_PROJECTS);
  if (!loading) {
    console.log(data);
  }
  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <ProjectNavBar />
      {/* <ProjectHeader /> */}
      <AddTimeline />
      {/* <ViewTimeline /> */}
    </div>
  );
};

export default Timeline;
