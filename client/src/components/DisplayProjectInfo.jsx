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

const DisplayProjectInfo = ({ projectID }) => {
  const { id } = useParams();
  const [project, setProject] = useState({});

  const { loading, data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectID: id },
  });

  //
  useEffect(() => {
    if (data) {
      setProject(data.project);
    }
  }, [data]);

  if (loading) {
    return <div>Loading...</div>;
  }

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
