import ProjectNavBar from '../components/ProjectNavBar';
// import ProjectHeader from '../components/ProjectHeader';
import UpdateInfo from '../components/UpdateInfo';
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";

// Pass users array to the List component as a prop
export default function EditInfo() {

    const { projectId } = useParams();
    const { data } = useQuery(GET_PROJECT_BY_ID, {
      variables: { projectId: projectId },
    });
  
    const project = data?.project || {};
    console.log(data);

    return (
        <div>
            <ProjectNavBar />
            <ProjectHeader />
            <UpdateInfo project={project} />
        </div>
    );
}