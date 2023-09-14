//TODO: USE THIS FILE TO DISPLAY THE PROJECT DETAILS

import { useMutation } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PROJECT_BY_ID } from "../utils/queries";
import { Link, useParams } from "react-router-dom";

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
