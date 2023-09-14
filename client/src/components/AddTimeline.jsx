import "../assets/css/AddTimeline.css";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_TIMELINE } from "../utils/mutations.js";

const AddTimeline = () => {
    const [formState, setFormState] = useState({
        date: '',
        goal: '',
    });
    const [createTimeline, { error }] = useMutation(ADD_TIMELINE);

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await createTimeline({
                variables: { ...formState },
            });

            setFormState({
                date: '',
                goal: ''
            });
        } catch (error) {
            console.error(error);
            console.log("Error: " + error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormState({ ...formState, [name]: value });
    };

    return (
        <div>
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
                            <button type="submit" value="New">
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div >

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

        </div>
    );
};


export default AddTimeline;