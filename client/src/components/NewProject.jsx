import "../assets/css/NewProject.css";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "../utils/mutations.js";
import { QUERY_USER } from "../utils/queries.js";
import ProjectDashboard from "./ProjectDashboard";
// import gql from 'graphql-tag'
import Auth from "../utils/auth";

const NewProject = () => {
  const [formState, setFormState] = useState({ title: "" });
  const [createProject, { error }] = useMutation(ADD_PROJECT);

  const { data } = useQuery(QUERY_USER);

  const user = data?.user || {};

  console.log(data);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const token = Auth.loggedIn() ? Auth.getToken() : null;

    if (!token) {
      return false;
    }

    console.log(formState);

    const { data } = await createProject({
      variables: { title: formState.title },
    });

    setFormState({ title: "" });
    // window.location.reload();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({ ...formState, [name]: value });
  };

  return (
    <>
      <div className="new-project-container">
        <div className="new-project">
          <form onSubmit={handleSubmit}>
            <label htmlFor="title">Project Name:</label>
            <input
              type="text"
              onChange={handleChange}
              name="title"
              value={formState.title}
            />
            <button type="submit">Create</button>
          </form>
        </div>
      </div>
      <ProjectDashboard projects={user.projects} />
    </>
  );
};

export default NewProject;
