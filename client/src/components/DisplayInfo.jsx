import { useEffect, useState } from "react";
import '../assets/css/DisplayInfo.css';

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

  const handleFormSubmit = async (event) => { };

  // display project info
  return (
    // project info container
    <div className="project-info">
      <div className="project-name-container">
        <p className="project-name">{props.project.title}</p>
      </div>
      <form className="update-info-form" onSubmit={handleFormSubmit}>
        {/* repo URL */}
        <div className="repo-url">
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

        {/* description */}
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
        <div className='info-button-container'>
          <button
            type="submit"
            onClick={handleFormSubmit}
          >
            SAVE
          </button>
        </div>
      </form>
    </div>
  );
};

export default DisplayInfo;
