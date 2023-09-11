// BELONGS TO:
//      - Timeline.jsx
//
//
// FUNCTIONALITY:
//      - GET all projects timeline ROUTE
//      - white function to set status for each timeline goal based on date
//
// VISUAL:
//      - renders sections of projects timeline
//                               01. date
//                               02. goal
//                               03. status // NEED TO ADD STATUS!!
//

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { GET_TIMELINE_BY_ID } from "../utils/queries";
import { UPDATE_TIMELINE } from "../utils/mutations";
import { useParams } from "react-router-dom";
import { set } from "mongoose";

const ViewTimeline = ({ date, goal }) => {
    const { id } = useParams();

    const [timeline, setTimeline] = useState({});
    const [timelineFormData, setTimelineFormData] = useState({
        date: "",
        goal: ""
    });
    // state for form validation errors
    const [formErrors, setFormErrors] = useState({});
    // state for form submission status
    const [formSubmitted, setFormSubmitted] = useState(false);
    // useQuery hook to make GraphQL query
    const { loading, data } = useQuery(GET_TIMELINE_BY_ID, {
        variables: { timelineId: id },
    });
    const [updateTimeline] = useMutation(UPDATE_TIMELINE);

    useEffect(() => {
        if (data) {
            setTimeline(data.timeline);
            setTimelineFormData({ date: timeline.date, goal: timeline.goal });
        }
    }, [data]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTimelineFormData({ ...timelineFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();

        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        const errors = {};
        if (!timelineFormData.date) {
            errors.date = "Timeline date required!";
        }
        if (!timelineFormData.goal) {
            errors.goal = "TImeline goal required!";
        }
        setFormErrors(errors);

        if (Object.keys(errors).length === 0) {
            try {
                const { data } = await updateTimeline({
                    variables: {
                        timelineID: id,
                        timeline: { ...timelineFormData },
                    },
                }):
                if (data) {
                    setFormSubmitted(true);
                }
            } catch (err) {
                console.error(err);
            }
        }
    };

    setTimelineFormData({
        date: "",
        goal: ""
    });

    // display timeline info
    return (
        <div className="timeline-list">
            <h2>TIMELINE</h2>
            <form onSubmit={handleFormSubmit}>
                {/* timeline date */}
                <div className="form-group">
                    <label htmlFor="timelineDate">TIMELINE DATE</label>
                    <input type="Date" id="timelineDate" name="timelineDate" placeholder="Enter a timeline due date"
                        value={timelineFormData.timelineDate}
                        onChange={handleInputChange}
                        required
                    />
                    {formErrors.repoURL && (
                        <div className="alert">Timeline date is required!</div>
                    )}
                </div>
                {/* timeline goal */}
                <div className="form-group">
                    <label htmlFor="timelineGoal">TIMELINE GOAL</label>
                    <input type="text" id="timelineGoal" name="timelineGoal" placeholder="Enter a timeline goal"
                        value={timelineFormData.timelineGoal}
                        onChange={handleInputChange}
                        required
                    />
                    {formErrors.repoURL && (
                        <div className="alert">Timeline goal is required!</div>
                    )}
                </div>
                <button type="submit" className="save-btn" onClick={handleFormSubmit}>Save</button>
            </form>
            {formSubmitted && (
                <div className="success-message">Timeline updated!</div>
            )}
        </div>
    );
};

export default ViewTimeline;