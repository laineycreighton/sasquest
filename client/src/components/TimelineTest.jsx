import { useEffect, useState } from "react";
import "../assets/css/DisplayInfo.css";

// DisplayProjectInfo component that takes projectID as a prop
const DisplayInfo = (props) => {
    //   console.log('props');
    //   console.log(props);
    //   console.log('project');
    //   console.log(props.project);
    //   console.log('anythingeles');
    //   console.log(props.project.timelines);
    // console.log("new function");
    // console.log(props.project.timelines);
    console.log(props);
    const timelines = props.project.timelines
    console.log(timelines);
    
    return (
        <div className="project-info">
            {timelines.map((timeline) => 
            <div key={timeline._id}>
                <p>{timeline.date}</p>
                <p>{timeline.goal}</p>
                {/* <p>{status}</p> */}
            </div>
            )}

        </div>
    );
};

export default DisplayInfo;
