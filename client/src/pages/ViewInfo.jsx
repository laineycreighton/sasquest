import React from "react";
import ProjectNavBar from "../components/ProjectNavBar";
import DisplayProjectInfo from "../components/DisplayProjectInfo";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component

const ViewInfo = () => {
  const { projectId } = useParams();
  const { data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectId: projectId },
  });

  const project = data?.project || {};
  console.log(data);

  return (
    // Wrap the entire component with AnimatedCursor
    <AnimatedCursor>
      <div>
        <ProjectNavBar />
        {/* <ProjectHeader /> */}
        <DisplayProjectInfo project={project} />
      </div>
    </AnimatedCursor>
  );
};

export default ViewInfo;
