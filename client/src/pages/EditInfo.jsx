import React from "react";
import ProjectNavBar from '../components/ProjectNavBar';
// import ProjectHeader from '../components/ProjectHeader';
import UpdateProjectInfo from '../components/UpdateProjectInfo';
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component

// Pass users array to the List component as a prop
export default function EditInfo() {
    return (
        // Wrap the entire component with AnimatedCursor
        <AnimatedCursor>
            <div>
                <ProjectNavBar />
            </div>
            <div>
                <ProjectHeader />
            </div>
            <div>
                <UpdateProjectInfo />
            </div>
        </AnimatedCursor>
    );
}
