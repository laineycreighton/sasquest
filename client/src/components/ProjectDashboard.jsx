//-------------------- IMPORT --------------------//
// import { useState } from "react";
import { useMutation } from "@apollo/client";
//----- Queries -----//
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries.js";
import { DELETE_PROJECT } from "../utils/mutations.js";
//----- Icons -----//
import backpack from "../assets/images/backpack.png";
//----- CSS -----//
import "../assets/css/ProjectDashboard.css";
//-------------------- EXPORT --------------------//

//----- No Projects Created Return -----//
const ProjectDashboard = () => {
  const { data } = useQuery(QUERY_USER);

  const user = data?.user || {};
  const [deleteProject, { error: deleteError }] = useMutation(DELETE_PROJECT);
  console.log(user);

  const handleDeleteProject = async (projectId) => {
    event.preventDefault(); // prevent the anchor link from navigating
    try {
      // Call the deleteProject mutation with the project ID
      await deleteProject({
        variables: { projectId },
      });

      // After successful deletion, you can refetch the user data to update the project list
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  if (!user.projects) {
    return (
      <div className="dashboard">
        <div className="projects-container">
          {/* Container Header */}
          <div className="dashboard-header">
            <h3>YOUR ADVENTURES</h3>
          </div>

          {/* Display Projects */}
          <div className="no-projects">
            <p className="uncharted">uncharted territory</p>
            <p className="start">Start your quest above!</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <div className="projects-container">
        <div className="dashboard-header">
          <h3 className="your-adventures">YOUR ADVENTURES</h3>
        </div>

        <div className="display-projects">
          {user.projects?.map((project) => (
            <div className="each-project" key={project._id}>
              <div className="project-content">
                <a href={`/projects/${project._id}/info`} key={project._id}>
                  <div className="project-info">
                    <img
                      src={backpack}
                      alt="backpack"
                      className="backpack-image"
                    />
                    <p className="each-project-title">{project.title}</p>
                  </div>
                </a>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteProject(project._id)}
                >
                  Delete Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  //   <div className="dashboard">
  //     {/* //----- Projects Container -----// */}
  //     <div className="projects-container">
  //       {/*----- Container Header -----*/}
  //       <div className="dashboard-header">
  //         <h3 className="your-adventures">YOUR ADVENTURES</h3>
  //       </div>

  //       {/*----- Display Projects -----*/}
  //       <div className="display-projects">
  //         {/*----- For Each Project -----*/}
  //         {user.projects?.map((project) => (
  //           <div className="each-project" key={project._id}>
  //             <a href={`/projects/${project._id}/info`} key={project._id}>
  //               <button onClick={() => handleDeleteProject(project._id)}>
  //                 Delete Project
  //               </button>
  //               {/*----- Backpack Icon -----*/}
  //               <div className="project-icon">
  //                 <img src={backpack} alt="backpack" />
  //               </div>
  //               {/*----- Project Title -----*/}
  //               <p className="each-project-title">{project.title}</p>
  //             </a>
  //           </div>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // );
};
export default ProjectDashboard;
