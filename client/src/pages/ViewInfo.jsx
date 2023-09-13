import ProjectNavBar from "../components/ProjectNavBar";
import ProjectHeader from "../components/ProjectHeader";
import DisplayProjectInfo from "../components/DisplayProjectInfo";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";

const ViewInfo = () => {
  const { projectId } = useParams();
  const { data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectId: projectId },
  });

  const project = data?.project || {};

  return (
    <div>
      <ProjectNavBar />
      <ProjectHeader />
      <DisplayProjectInfo project={project} />
    </div>
  );
};

export default ViewInfo;
