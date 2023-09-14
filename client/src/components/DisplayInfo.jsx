//TODO: USE THIS FILE TO DISPLAY THE PROJECT DETAILS

import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";
import { Link, useParams } from "react-router-dom";
// DisplayProjectInfo component that takes projectID as a prop
// When we click on a project, we want to display the project information
// We will use the projectID to query the database for the project information
// We will not have a form. The purpose of this is to access the project information
// We are gonna access the deployed url, the title of the project, and the description, and the repo url
// We will also have a button to edit the project information that links to UpdateInfo.jsx

const DisplayProjectInfo = ({ projectID }) => {
  const { loading, error, data } = useQuery(GET_PROJECT_BY_ID, {
    variables: { projectId: projectID },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const project = data.project; // Assuming the query result contains a 'project' object

  return (
    <div>
      <h1>{project.title}</h1>
      <p>DEPLOYED URL: {project.deployedURL}</p>
      <p>DESCRIPTION: {project.description}</p>
      <p>REPOSITORY URL: {project.repoURL}</p>
      <button>
      <Link to={`/projects/${projectID}/edit`}>EDIT</Link>
      </button>
    </div>
  );
};

export default DisplayProjectInfo;
