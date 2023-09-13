import ProjectNavBar from "../components/ProjectNavBar.jsx";
import ProjectHeader from "../components/ProjectHeader.jsx";
import AddTimeline from "../components/AddTimeline.jsx";
// import ViewTimeline from '../components/ViewTimeline.jsx';

import { GET_ALL_PROJECTS } from "../utils/queries";
import { useQuery } from "@apollo/client";
import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";

const Timeline = () => {
  const { loading, data } = useQuery(GET_ALL_PROJECTS);
  if (!loading) {
    console.log(data);
  }
  return !Auth.loggedIn() ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <ProjectNavBar />
      {/* <ProjectHeader /> */}
      <AddTimeline />
      {/* <ViewTimeline /> */}
    </div>
  );
};

export default Timeline;
