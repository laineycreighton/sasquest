import { useQuery } from "@apollo/client";
import TimelineDashboard from "../components/TimelineDashboard";
import { useParams } from "react-router-dom";
import { GET_PROJECT_BY_ID } from "../utils/queries";

const ViewTimeline = () => {
  const { projectId } = useParams();
  const { data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectId: projectId },
  });

  const project = data?.project || {};

  return (
    <div>
        <TimelineDashboard project={project} />
    </div>
  );
};

export default ViewTimeline;
