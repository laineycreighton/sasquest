import "../assets/css/NewProject.css";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_PROJECT } from "../utils/mutations";
import { QUERY_USER } from "../utils/queries";
// import gql from 'graphql-tag'

const NewProject = () => {
  const [formState, setFormState] = useState({ title: "" });
  const [createProject, { error }] = useMutation(ADD_PROJECT);

  const { data } = useQuery(QUERY_USER);

  const user = data?.user || {};

  console.log(user);

  const handleSubmit = async (event) => {
    event.preventDefault();
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
    <div className="home-placeholder">
      <div className="projects-placeholder">
        <div className="adventures-placeholder">
          <p>your adventures</p>
        </div>
        <div
          className="display-placeholder"
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            paddingLeft: "10%",
            flexDirection: "column",
          }}
        >
          {user.projects?.map((project) => (
            <a href={`/projects/${project._id}/info`} key={project._id}>
              {" "}
              {project.title}
            </a>
          ))}
        </div>
      </div>
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
  );
};

export default NewProject;
