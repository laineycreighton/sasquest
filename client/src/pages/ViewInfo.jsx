import ProjectNavBar from "../components/ProjectNavBar";
import ProjectHeader from "../components/ProjectHeader";
import DisplayProjectInfo from "../components/DisplayProjectInfo";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";
import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";

const ViewInfo = () => {
  const { projectId } = useParams();
  const { data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectId: projectId },
  });

  const project = data?.project || {};
  console.log(data);

  return !Auth.loggedIn() ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <ProjectNavBar />
      {/* <ProjectHeader /> */}
      <DisplayProjectInfo project={project} />
    </div>
  );
};

export default ViewInfo;
