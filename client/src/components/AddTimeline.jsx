import "../assets/css/AddTimeline.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TIMELINE } from "../utils/mutations";

const AddTimeline = ({ projectId }) => {
    const [formState, setFormState] = useState({
        projectId: projectId,
        date: '',
        goal: '',
    });
    const [createTimeline, { error }] = useMutation(ADD_TIMELINE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // console.log("button is clicked");
        console.log(formState);

        try {
            const { data } = await createTimeline({
                variables: { ...formState }
            });
            console.log(data);
            // setFormState({
            //     date: '',
            //     goal: ''
            // });
        } catch (error) {
            // console.error(error);
            console.log("Error: " + error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({ ...formState, [name]: value });
    };

    return (
        <div className="timeline-dashboard">
            <div className="timeline-container">
                <div className="timeline-header">
                    <p>TIMELINE</p>
                </div>
                <form className="timeline-form" onSubmit={handleFormSubmit}>
                    <div className="timeline-date">
                        <label htmlFor="timelineDate">Date</label>
                        <input type="Date" name="date" onChange={handleChange} />
                    </div>
                    <div className="timeline-goal">
                        <label htmlFor="timelineGoal">Goal</label>
                        <input type="text" name="goal" onChange={handleChange} />
                    </div>
                    <div className="timeline-button">
                        <button type="submit" onClick={handleFormSubmit}>
                            Add
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


export default AddTimeline;