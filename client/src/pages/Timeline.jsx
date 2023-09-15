import ProjectNavBar from "../components/ProjectNavBar.jsx";
import AddTimeline from "../components/AddTimeline.jsx";
import React from "react";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";
import TimelineTest from "../components/TimelineTest.jsx"

const Timeline = () => {
  const { projectId } = useParams();
  const { data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectId: projectId },
  });

  const project = data?.project || {};

  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <ProjectNavBar projectId={projectId} />
      <AddTimeline projectId={projectId} />
      <TimelineTest project={project} />
    </div>
  );
};

export default Timeline;
