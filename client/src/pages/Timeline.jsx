// INCLUDES:
//          - ProjectNavBar.jsx
//          - ProjectHeader.jsx
//          - AddTimeLine.jsx
//          - ViewTimeline.jsx
//
//
//
//
import { GET_ALL_PROJECTS } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Timeline = () => {
  const { loading, data } = useQuery(GET_ALL_PROJECTS);
  if (!loading) {
    console.log(data);
  }
  return (
    <div>
      {/* <ProjectNavBar />
      <ProjectHeader />
      <AddTimeline />
      <ViewTimeline /> */}
    </div>
  );
};

export default Timeline;
