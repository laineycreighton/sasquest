//-------------------- IMPORT --------------------//
//----- Queries -----//
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries.js";
import { Link, Navigate } from "react-router-dom";
//----- Icons -----//
import backpack from "../assets/images/backpack.png";
//----- CSS -----//
import "../assets/css/ProjectDashboard.css";
//-------------------- EXPORT --------------------//
//----- No Projects Created Return -----//
const ProjectDashboard = ({ projects }) => {
  // if (!projects.length) {
  //   return "noProjects";
  // }

  return (
    //----- Projects Container -----//
    <div className="projects-container">
      {/*----- Container Header -----*/}
      <div className="dashboard-header">
        <h3>YOUR ADVENTURES</h3>
      </div>

      {/*----- Display Projects -----*/}
      <div className="display-projects">
        {/*----- For Each Project -----*/}
        {projects?.map((project) => (
          <div key={project._id}>
            {/*----- Project Title -----*/}
            <h4>{project.title}</h4>
            {/*----- Link to Project Page -----*/}

            <Link to={`/projects/${project._id}/info`}>
              {/*----- Backpack Icon -----*/}
              <img src={backpack} style={{ width: "75px", height: "75px" }} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProjectDashboard;
