import { useQuery } from "@apollo/client";
import { QUERY_TIMELINE } from "../utils/queries.js";
import DateStatus from "./DateStatus.jsx";


const ViewTimeline = ({ timelines }) => {

    if (!timelines.length) {
        return <p>No Timeline Goals Yet</p>;
      }

    return (
        <div>
            {timelines && timelines.map((timeline, index) => (
                <div key={`timeline-${index}`} className="each-timeline">
                    {/*----- Date -----*/}
                    <div className="project-icon">
                        <p>{timeline.date}</p>
                    </div>
                    {/*----- Goal -----*/}
                    <div className="project-icon">
                        <p>{timeline.goal}</p>
                    </div>
                    {/*----- Status -----*/}
                    <div className="project-icon">
                        <DateStatus />
                    </div>
                </div>
            ))
            }
        </div >
    );
};


export default ViewTimeline;