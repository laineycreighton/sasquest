import { useEffect, useState } from "react";
import "../assets/css/DisplayInfo.css";

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

  const [projects, setProjects] = useState(() => {
    // Initialize the projects state with data from local storage
    const savedProjects = localStorage.getItem("savedProjects");
    return savedProjects ? JSON.parse(savedProjects) : [];
  });
  const [editIndex, setEditIndex] = useState(null);
  // handleInputChange function to update state when user enters data in input field
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProjectFormData({ ...projectFormData, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (editIndex !== null) {
      // If editIndex is not null, it means we are editing an existing project
      const updatedProjects = [...projects];
      updatedProjects[editIndex] = { ...projectFormData };
      setProjects(updatedProjects);
      setEditIndex(null); // Reset editIndex
    } else {
      // Otherwise, we are saving a new project
      setProjects([...projects, { ...projectFormData }]);
    }
    // Clear the form data
    setProjectFormData({
      repoURL: "",
      deployedURL: "",
      description: "",
    });
  };

  const handleEditClick = (index) => {
    // Set the editIndex to the index of the project we want to edit
    setEditIndex(index);
    // Populate the form data with the project's values
    setProjectFormData({ ...projects[index] });
  };

  const handleDeleteClick = (index) => {
    // Remove the project at the specified index
    const updatedProjects = [...projects];
    updatedProjects.splice(index, 1);
    setProjects(updatedProjects);
  };

  // Use useEffect to save projects to local storage whenever the projects state changes
  useEffect(() => {
    localStorage.setItem("savedProjects", JSON.stringify(projects));
  }, [projects]);
  // display project info
  return (
    <div className="project-info">
      <div className="project-name-container">
        <p className="project-name">{props.project.title}</p>
      </div>
      <form className="update-info-form" onSubmit={handleFormSubmit}>
        <div className="repo-url">
          <label htmlFor="repoURL">REPO URL</label>
          <input
            type="text"
            id="repoURL"
            name="repoURL"
            placeholder="Enter repo URL"
            value={projectFormData.repoURL}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="deployed-url">
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
        <div className="description">
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
        <div className="info-button-container">
          <button type="submit">
            {editIndex !== null ? "UPDATE" : "SAVE"}
          </button>
        </div>
      </form>
      <div className="saved-projects">
        {projects.map((project, index) => (
          <div key={index} className="project">
            <p>REPO URL: {project.repoURL}</p>
            <p>DEPLOYED URL: {project.deployedURL}</p>
            <p>DESCRIPTION: {project.description}</p>
            <button onClick={() => handleEditClick(index)}>EDIT</button>
            <button onClick={() => handleDeleteClick(index)}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayInfo;
