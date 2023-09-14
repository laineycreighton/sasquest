import ProjectNavBar from "../components/ProjectNavBar";
import ProjectHeader from "../components/ProjectHeader";
import DisplayInfo from "../components/DisplayInfo";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor

const ViewInfo = () => {
  const { projectId } = useParams();
  const { data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectId: projectId },
  });

  const project = data?.project || {};
  // console.log(selected);

  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <ProjectNavBar projectId={projectId} />
      {/* <ProjectHeader /> */}
      <DisplayInfo project={project} />
    </div>
  );
};

export default ViewInfo;
