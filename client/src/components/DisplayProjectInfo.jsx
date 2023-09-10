// BELONGS TO:
//      - ViewInfo.jsx
//
//
// FUNCTIONALITY:
//      - GET one project info ROUTE
//      - redirect user to edit project info page w/save button
//
//
// VISUAL:
//      - renders project info
//                               01. repo URL
//                               02. deployed URL
//                               03. description
//                               04. save button
//
//
//
//

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";
import { Link, useParams } from "react-router-dom";

// DisplayProjectInfo component that takes projectID as a prop
const DisplayProjectInfo = ({ projectID }) => {
  // get projectID from useParams hook
  const { id } = useParams();

  // useState hook to set project state
  // this will be used to populate the data
  const [project, setProject] = useState({});
  const [projectFormData, setProjectFormData] = useState({
    repoURL: "",
    deployedURL: "",
    description: "",
  });

  // state for form validation errors
  const [formErrors, setFormErrors] = useState({});
  // state for form submission status
  const [formSubmitted, setFormSubmitted] = useState(false);
  // useQuery hook to make GraphQL query
  const { loading, data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectID: id },
  });

  // data population
  // useEffect hook to update state when data is fetched from GraphQL query
  useEffect(() => {
    // if data exists, set project state to data.project
    if (data) {
      setProject(data.project);
    }
  }, [data]);
  // if the data is still loading, return loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // handleInputChange function to update state when user enters data in input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProject({ ...project, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // set formSubmitted state to true
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await addProject({
        variables: { ...projectFormData },
      });
    } catch (err) {
      console.error(err);
    }
  };

  setProjectFormData({
    repoURL: "",
    deployedURL: "",
    description: "",
  });

  // display project info
  return (
    // project info container
    <div className="project-info">
      <h2>DESCRIPTION</h2>
      <form>
        {/* repo URL */}
        <div className="form-group">
          <label htmlFor="repoURL">REPO URL</label>
          <input
            type="text"
            id="repoURL"
            name="repoURL"
            placeholder="Enter repo URL"
            // value and onChange props to set project state
            // when a user enters or modifies data in the input field, it updates the corresponding state
            value={project.repoURL}
            onChange={handleInputChange}
          />
        </div>
        {/* deployed URL */}
        <div className="form-group">
          <label htmlFor="deployedURL">DEPLOYED URL</label>
          <input
            type="text"
            id="deployedURL"
            name="deployedURL"
            placeholder="Enter deployed URL"
            value={project.deployedURL}
            onChange={handleInputChange}
          />
        </div>

        {/* description */}
        <div className="form-group">
          <label htmlFor="description">DESCRIPTION</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            value={project.description}
            onChange={handleInputChange}
          />
        </div>
        <Link to={`/save/${project._id}`}>
          <button type="submit" className="project-info-save-btn">
            SAVE
          </button>
        </Link>
      </form>
    </div>
  );
};

export default DisplayProjectInfo;
