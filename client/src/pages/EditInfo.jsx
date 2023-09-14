import React from "react";
import ProjectNavBar from '../components/ProjectNavBar';
import ProjectHeader from '../components/ProjectHeader';
import UpdateInfo from '../components/UpdateInfo';
import AnimatedCursor from "react-animated-cursor";
import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";

// Pass users array to the List component as a prop
export default function EditInfo() {

  const { projectId } = useParams();
  const { data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectId: projectId },
  });

  const project = data?.project || {};
  console.log(data);

  return !Auth.loggedIn() ? (
    <Navigate to="/login" />
  ) : (
    // Wrap the entire component with AnimatedCursor
    <div>
      <AnimatedCursor />
      <ProjectNavBar />
      <ProjectHeader />
      <UpdateInfo />
    </div>
  );
}
