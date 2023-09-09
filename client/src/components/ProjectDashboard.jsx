//-------------------- IMPORT --------------------//

//----- React Link -----//
import { Link } from 'react-router-dom';

//----- Icons -----//
import backpack from '../assets/images/backpack.png'



//-------------------- EXPORT --------------------//

//----- No Projects Created Div -----//
const noProjects = `        
<div className='projects-container'>
{/* Container Header */}
<div className='dashboard-header'>
    <h3>YOUR ADVENTURES</h3>
</div>

{/* Display Projects */}
<div className='display-projects'>
    {/* For Each Project */}
    <div className='no-projects'>
    <p>This is uncharted territory.</p>
    <p>Start your quest below!</p>
    </div
</div>
</div>`

//----- No Projects Created Return -----//
const ProjectDashboard = ({ projects, title }) => {
    if (!projects.length) {
        return {noProjects};
    }

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
                {projects &&
                    projects.map((project) => (
                        <div key={project._id}>

                            {/*----- Backpack Icon -----*/}
                            <div>{backpack}</div>
                            {/*----- Project Title -----*/}
                            <h4>{project.title}</h4>
                            {/*----- Link to Project Page -----*/}
                            <Link to={`/projects/${project._id}/info`}>
                            </Link>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ProjectDashboard;