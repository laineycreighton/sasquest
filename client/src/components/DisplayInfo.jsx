//TODO: USE THIS FILE TO DISPLAY THE PROJECT DETAILS

//Include:
//QUERY:
//Project Info by ID
//Repo URL
//Deployed URL
//Description

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";
import { UPDATE_PROJECT } from "../utils/mutations";
// import { useParams } from "react-router-dom";

// DisplayProjectInfo component that takes projectID as a prop
const DisplayInfo = (props) => {
  // get projectID from useParams hook
  // const { id } = useParams();
  console.log(props);
  // useState hook to set project state
  // this will be used to populate the data
  // const [project, setProject] = useState({});
  const [projectFormData, setProjectFormData] = useState({
    repoURL: "",
    deployedURL: "",
    description: "",
  });

  // handleInputChange function to update state when user enters data in input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectFormData({ ...projectFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {};

  // display project info
  return (
    // project info container
    <div className="project-info">
      <div>
        <h2>{props.project.title}</h2>
      </div>
      <form onSubmit={handleFormSubmit}>
        <h4>update Project Form</h4>
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
        </div>
        <button
          type="submit"
          className="project-info-save-btn"
          onClick={handleFormSubmit}
        >
          SAVE
        </button>
      </form>
    </div>
  );
};

export default DisplayInfo;
