import React from "react";
import ProjectNavBar from "../components/ProjectNavBar";
import ProjectHeader from "../components/ProjectHeader";
import AddWireframe from "../components/AddWireframe";
import UploadWidget from "../components/UploadWidget";
import AnimatedCursor from "react-animated-cursor"; // Import AnimatedCursor

const Wireframe = () => {
  return (
    <div>
      <AnimatedCursor /> {/* Add AnimatedCursor here */}
      <ProjectNavBar />
      <ProjectHeader />
      {/* <AddWireframe /> */}
      {/* <ViewWireframe /> */}
      <UploadWidget />
    </div>
  );
};

export default Wireframe;