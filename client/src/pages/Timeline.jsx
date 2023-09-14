import ProjectNavBar from "../components/ProjectNavBar.jsx";
import ProjectHeader from "../components/ProjectHeader.jsx";
import AddTimeline from "../components/AddTimeline.jsx";
import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";
import React from "react";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor

const Timeline = () => {

  return !Auth.loggedIn() ? (
    <Navigate to="/login" />
  ) : (
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
