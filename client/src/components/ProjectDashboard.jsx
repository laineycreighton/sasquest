//-------------------- IMPORT --------------------//

//----- Queries -----//
import { useQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries.js";

//----- Icons -----//
import backpack from '../assets/images/backpack.png'

//----- CSS -----//
import '../assets/css/ProjectDashboard.css'



//-------------------- EXPORT --------------------//

//----- No Projects Created Return -----//
const ProjectDashboard = () => {

    const { data } = useQuery(QUERY_USER);

    const user = data?.user || {};

    console.log(user);


    if (!user.projects) {
        return (
            <div className="dashboard">
                <div className='projects-container'>
                    {/* Container Header */}
                    <div className='dashboard-header'>
                        <h3>YOUR ADVENTURES</h3>
                    </div>

                    {/* Display Projects */}
                    <div className='no-projects'>
                        <p className="uncharted">uncharted territory</p>
                        <p className="start">Start your quest above!</p>
                    </div>
                </div>
            </div>
        );
    };

    return (
        //----- Projects Container -----//
        <div className='projects-container'>
            {/*----- Container Header -----*/}
            <div className='dashboard-header'>
                <h3>YOUR ADVENTURES</h3>
            </div>

            {/*----- Display Projects -----*/}
            <div className='display-projects'>
                {/*----- For Each Project -----*/}
                {user.projects?.map((project) => (
                    <div className='each-project'>
                        <a href={`/projects/${project._id}/info`} key={project._id}>
                            {/*----- Backpack Icon -----*/}
                            <div>
                                <img src={backpack} alt='backpack' />
                            </div>
                            {/*----- Project Title -----*/}
                            <h4>{project.title}</h4>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectDashboard;


{/* <div className="display-placeholder">
    {user.projects?.map((project) => (
        <a href={`/projects/${project._id}/info`} key={project._id}>
            {" "}
            {project.title}
        </a>
    ))}
</div>  */}