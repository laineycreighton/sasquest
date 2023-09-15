import { useQuery } from "@apollo/client";
import { QUERY_TIMELINE } from "../utils/queries.js";
import DateStatus from "./DateStatus.jsx";

import { useMutation } from "@apollo/client";
//----- Queries -----//
import { GET_PROJECT_BY_ID } from "../utils/queries.js";


const ViewTimeline = () => {

    // const { data } = useQuery(GET_PROJECT_BY_ID);

    // const project = data?.project || {};
    // const [deleteProject, { error: deleteError }] = useMutation(DELETE_PROJECT);
    // console.log("project");
    // console.log(props);


    // if (!timelines.length) {
    //     return <p>No Timeline Goals Yet</p>;
    //   }

    return (
        <div>
          
        </div >
    );
};


export default ViewTimeline;

// {timelines && timelines.map((timeline, index) => (
//     <div key={`timeline-${index}`} className="each-timeline">
//         {/*----- Date -----*/}
//         <div className="project-icon">
//             <p>{timeline.date}</p>
//         </div>
//         {/*----- Goal -----*/}
//         <div className="project-icon">
//             <p>{timeline.goal}</p>
//         </div>
//         {/*----- Status -----*/}
//         <div className="project-icon">
//             <DateStatus />
//         </div>
//     </div>
// ))
// }