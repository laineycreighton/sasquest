// INCLUDES:
//          - ProjectNavBar.jsx
//          - ProjectHeader.jsx
//          - AddWireframe.jsx
//          - ViewWireframe.jsx
//
//
//
import ProjectNavBar from "../components/ProjectNavBar";
import ProjectHeader from "../components/ProjectHeader";
import AddWireframe from "../components/AddWireframe";
import UploadWidget from "../components/UploadWidget";
import Auth from "../utils/auth";
import { Navigate } from "react-router-dom";
// import ViewWireframe from "../components/ViewWireframe";

const Wireframe = () => {
  return !Auth.loggedIn() ? (
    <Navigate to="/login" />
  ) : (
    <div>
      <ProjectNavBar />
      <ProjectHeader />
      {/* <AddWireframe /> */}
      {/* <ViewWireframe /> */}
      <UploadWidget />
    </div>
  );
};

export default Wireframe;
