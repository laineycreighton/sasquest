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
            <div>
                <Link to="/home">{sasquatch}</Link>
            </div>
            {/*----- Project Info -----*/}
            <div>
                <Link to="/projects/:projectId/info">{backpack}</Link>
                <p>Info</p>
            </div>
            {/*----- Project Timeline Goals -----*/}
            <div>
                <Link to="/projects/:projectId/timeline">{canteen}</Link>
                <p>Timeline</p>
            </div>
            {/*----- Project Wireframe -----*/}
            <div>
                <Link to="/projects/:projectId/wireframe">{tent}</Link>
                <p>Wireframe</p>
            </div>
            {/*----- Log Out -----*/}
            {/* <div>
                <Logout />
            </div> */}
        </nav>
    );
}