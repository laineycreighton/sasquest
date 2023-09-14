import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { GET_TIMELINE_BY_ID } from "../utils/queries";
import { UPDATE_TIMELINE } from "../utils/mutations";
import { useParams } from "react-router-dom";

const ViewTimeline = () => {
  const { id } = useParams();
  const [timeline, setTimeline] = useState({});
  const [timelineFormData, setTimelineFormData] = useState({
    date: "",
    goal: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { loading, data } = useQuery(GET_TIMELINE_BY_ID, {
    variables: { timelineId: id },
  });
  const [updateTimeline] = useMutation(UPDATE_TIMELINE);

  useEffect(() => {
    if (data) {
      setTimeline(data.timeline);
      setTimelineFormData({
        date: data.timeline.date,
        goal: data.timeline.goal,
      });
    }
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTimelineFormData({ ...timelineFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      return;
    }

    const errors = {};
    if (!timelineFormData.date) {
      errors.date = "Timeline date is required!";
    }
    if (!timelineFormData.goal) {
      errors.goal = "Timeline goal is required!";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const { data } = await updateTimeline({
          variables: {
            timelineID: id,
            timeline: { ...timelineFormData },
          },
        });
        if (data) {
          setFormSubmitted(true);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="timeline-list">
      <h2>TIMELINE</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="timelineDate">TIMELINE DATE</label>
          <input
            type="date"
            id="timelineDate"
            name="date"
            placeholder="Enter a timeline due date"
            value={timelineFormData.date}
            onChange={handleInputChange}
            required
          />
          {formErrors.date && <div className="alert">{formErrors.date}</div>}
        </div>
        <div className="form-group">
          <label htmlFor="timelineGoal">TIMELINE GOAL</label>
          <input
            type="text"
            id="timelineGoal"
            name="goal"
            placeholder="Enter a timeline goal"
            value={timelineFormData.goal}
            onChange={handleInputChange}
            required
          />
          {formErrors.goal && <div className="alert">{formErrors.goal}</div>}
        </div>
        <button type="submit" className="save-btn">
          Save
        </button>
      </form>
      {formSubmitted && (
        <div className="success-message">Timeline updated!</div>
      )}
    </div>
  );
};

export default ViewTimeline;
