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
    <div className="project-info">
      <div className="project-info-repo">
        <h3>REPO URL</h3>
        <p>{project.repoURL}</p>
      </div>
      <div className="project-info-deployed">
        <h3>DEPLOYED URL</h3>
        <p>{project.deployedURL}</p>
      </div>
      <div className="project-info-description">
        <h3>DESCRIPTION</h3>
        <p>{project.description}</p>
      </div>
      <Link to={`/edit/${project._id}`}>
        <button className="project-info__edit-btn">EDIT</button>
      </Link>
    </div>
  );
};

export default DisplayProjectInfo;
