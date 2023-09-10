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
import { useMutation } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";
import { UPDATE_PROJECT } from "../utils/mutations";
import { useParams } from "react-router-dom";

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
  // useMutation hook to make GraphQL mutation
  const [updateProject] = useMutation(UPDATE_PROJECT);

  // data population
  // useEffect hook to update state when data is fetched from GraphQL query
  useEffect(() => {
    // if data exists, set project state to data.project
    if (data) {
      setProject(data.project);
      setProjectFormData({
        repoURL: data.project.repoURL,
        deployedURL: data.project.deployedURL,
        description: data.project.description,
      });
    }
  }, [data]);

  // if the data is still loading, return loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // handleInputChange function to update state when user enters data in input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectFormData({ ...projectFormData, [name]: value });
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
    if (!projectFormData.repoURL) {
      errors.repoURL = "Repo URL is required!";
    }
    if (!projectFormData.deployedURL) {
      errors.deployedURL = "Deployed URL is required!";
    }
    if (!projectFormData.description) {
      errors.description = "Description is required!";
    }
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const { data } = await updateProject({
          variables: {
            projectID: id,
            project: { ...projectFormData },
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
      <form onSubmit={handleFormSubmit}>
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
            value={projectFormData.repoURL}
            onChange={handleInputChange}
            required
          />
          {formErrors.repoURL && (
            <div className="alert">Repo URL is required!</div>
          )}
        </div>
        {/* deployed URL */}
        <div className="form-group">
          <label htmlFor="deployedURL">DEPLOYED URL</label>
          <input
            type="text"
            id="deployedURL"
            name="deployedURL"
            placeholder="Enter deployed URL"
            value={projectFormData.deployedURL}
            onChange={handleInputChange}
            required
          />
          {formErrors.deployedURL && (
            <div className="alert">Deployed URL is required!</div>
          )}
        </div>

        {/* description */}
        <div className="form-group">
          <label htmlFor="description">DESCRIPTION</label>
          <textarea
            id="description"
            name="description"
            placeholder="Enter description"
            value={projectFormData.description}
            onChange={handleInputChange}
            required
          />
          {formErrors.description && (
            <div className="alert">Description is required!</div>
          )}
        </div>
        <button
          type="submit"
          className="project-info-save-btn"
          onClick={handleFormSubmit}
        >
          SAVE
        </button>
      </form>
      {formSubmitted && (
        <div className="success-message">Project info saved!</div>
      )}
    </div>
  );
};

export default DisplayProjectInfo;
