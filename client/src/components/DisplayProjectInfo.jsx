// BELONGS TO:
//      - ViewInfo.jsx
//
//
// FUNCTIONALITY:
//      - GET one project info ROUTE
//      - redirect user to edit project info page w/edit button
//
//
// VISUAL:
//      - renders project info
//                               01. repo URL
//                               02. deployed URL
//                               03. description
//                               04. edit button
//
//
//
//

import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";
import { Link, useParams } from "react-router-dom";
import e from "express";

// DisplayProjectInfo component that takes projectID as a prop
const DisplayProjectInfo = ({ projectID }) => {
  // get projectID from useParams hook
  const { id } = useParams();

  // useState hook to set project state
  // this will be used to populate the data
  const [project, setProject] = useState({});
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
            onChange={(e) =>
              setProject({ ...project, repoURL: e.target.value })
            }
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
            onChange={(e) =>
              setProject({ ...project, deployedURL: e.target.value })
            }
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
            onChange={(e) =>
              setProject({ ...project, description: e.target.value })
            }
          />
        </div>
        <Link to={`/edit/${project._id}`}>
          <button className="project-info__edit-btn">EDIT</button>
        </Link>
      </form>
    </div>
  );
};

export default DisplayProjectInfo;
