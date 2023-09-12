//-------------------- IMPORT --------------------//

//----- React Link -----//
import { Link } from 'react-router-dom'

//----- Logout Component -----//
// import Logout from '../components/Logout.jsx'

//----- Icons -----//
import sasquatch from '../assets/images/sasquatch.png'
import backpack from '../assets/images/backpack.png'
import canteen from '../assets/images/canteen.png'
import tent from '../assets/images/tent.png'

//----- CSS -----//
import '../assets/css/ProjectNavBar.css'



//-------------------- EXPORT --------------------//

//----- Export the ProjectNavBar -----//
export default function ProjectNavBar() {
    return (
        //----- Nav Bar -----//
        <nav className="nav-bar">
            {/*----- Home -----*/}
            <div className='nav-home'>
                <Link to="/home"><img src={sasquatch} alt='sasquatch'/></Link>
            </div>
            {/*----- Project Info -----*/}
            <div className='nav-info'>
                <Link to="/projects/:projectId/info"><img src={backpack} alt='backpack'></img></Link>
                <p>Info</p>
            </div>
            {/*----- Project Timeline Goals -----*/}
            <div className='nav-timeline'>
                <Link to="/projects/:projectId/timeline"><img src={canteen} alt='canteen'/></Link>
                <p>Timeline</p>
            </div>
            {/*----- Project Wireframe -----*/}
            <div className='nav-wireframe'>
                <Link to="/projects/:projectId/wireframe"><img src={tent} alt='tent' /></Link>
                <p>Wireframe</p>
            </div>
            {/*----- Log Out -----*/}
            {/* <div>
                <Logout />
            </div> */}
        </nav>
    );
}