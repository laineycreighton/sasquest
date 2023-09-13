import React from "react";
import ProjectNavBar from "../components/ProjectNavBar";
import AddWireframe from "../components/AddWireframe";
import UploadWidget from "../components/UploadWidget";
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component

const Wireframe = () => {
  return (
    // Wrap the entire component with AnimatedCursor
    <AnimatedCursor>
      <div>
        <ProjectNavBar />
        <ProjectHeader />
        {/* <AddWireframe /> */}
        {/* <ViewWireframe /> */}
        <UploadWidget />
      </div>
    </AnimatedCursor>
  );
};

export default Wireframe;
