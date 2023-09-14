import { useQuery } from "@apollo/client";
import TimelineDashboard from "../components/TimelineDashboard";
import { QUERY_TIMELINE } from "../utils/queries";
import { useParams } from "react-router-dom";

const ViewTimeline = () => {
  const { projectId } = useParams();
  console.log(projectId);
  const { loading, data } = useQuery(QUERY_TIMELINE);
  const timelines = data?.timeline || [];

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <TimelineDashboard timelines={timelines} />
      )}
    </div>
  );
};

export default ViewTimeline;
