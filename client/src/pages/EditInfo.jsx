import React from "react";
import ProjectNavBar from '../components/ProjectNavBar';
import ProjectHeader from '../components/ProjectHeader';
import UpdateProjectInfo from '../components/UpdateProjectInfo';
import AnimatedCursor from "react-animated-cursor"; // Import the AnimatedCursor component


// Pass users array to the List component as a prop
export default function EditInfo() {

    const { projectId } = useParams();
    const { data } = useQuery(GET_PROJECT_BY_ID, {
      variables: { projectId: projectId },
    });
  
    const project = data?.project || {};
    console.log(data);

    return (
        // Wrap the entire component with AnimatedCursor
        <AnimatedCursor>
                <ProjectNavBar />
                <ProjectHeader />
                <UpdateProjectInfo />
        </AnimatedCursor>
    );
}
