import { useQuery } from "@apollo/client";
import { QUERY_TIMELINE } from "../utils/queries.js";
import DateStatus from "./DateStatus.jsx";


const ViewTimeline = ({ timelines }) => {

    // if (!timelines.length) {
    //     return <p>No Timeline Goals Yet</p>;
    //   }

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

            <div className="hard-timeline">
                <div className="hard-date">
                    <p className="hard-date-title">Date</p>
                    <p className="hard-actual-date">09/14/2023</p>
                </div>
                <div className="hard-goal">
                    <p className="hard-goal-title">Goal</p>
                    <p className="hard-actual-goal">Graduate Bootcamp!</p>
                </div>
                <div className="hard-status">
                    <p className="hard-status-title">Status</p>
                    <div className="status-color"></div>
                </div>
            </div>
        </div >
    );
};


export default ViewTimeline;