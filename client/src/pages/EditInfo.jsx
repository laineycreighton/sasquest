import ProjectNavBar from "../components/ProjectNavBar";
// import ProjectHeader from '../components/ProjectHeader';
import UpdateProjectInfo from "../components/UpdateProjectInfo";
import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";

// Pass users array to the List component as a prop
export default function EditInfo() {
  return !Auth.loggedIn() ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <div>
        <ProjectNavBar />
      </div>
      <div>
        <ProjectHeader />
      </div>
      <div>
        <UpdateProjectInfo />
      </div>
    </div>
  );
}
