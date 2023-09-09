// BELONGS TO MANY:
//      - EditInfo.jsx
//      - ViewInfo.jsx
//      - Timeline.jsx
//      - Wireframe.jsx
//
//
// FUNCTIONALITY:
//      - ROUTER for:
//                      01. EditInfo.jsx
//                      02. ViewInfo.jsx
//                      03. Timeline.jsx
//                      04. Wireframe.jsx
//                      05. Home.jsx
//                      06. Login.jsx
//
//
// VISUAL:
//      - renders NavBar
//                               01. info
//                               02. timeline
//                               03. wireframe
//                               04. home
//                               05. logout

import { Link } from 'react-router-dom'
import sasquatch from '../assets/images/sasquatch.png'
import backpack from '../assets/images/backpack.png'
import canteen from '../assets/images/canteen.png'
import tent from '../assets/images/tent.png'
import './styles/ProjectNavBar.css'

//Export the ProjectNavBar
export default function ProjectNavBar() {
    return (
        <nav className="nav-bar">
            <div>
                <Link to="/home">{sasquatch}</Link>
            </div>
            <div>
                <Link to="/projects/:projectId/info">{backpack}</Link>
                <p>Info</p>
            </div>
            <div>
                <Link to="/projects/:projectId/timeline">{canteen}</Link>
                <p>Timeline</p>
            </div>
            <div>
                <Link to="/projects/:projectId/wireframe">{tent}</Link>
                <p>Wireframe</p>
            </div>
            <div>
                <button onClick={handleLogout}>Log Out</button>
            </div>
        </nav>
    );
}


//TODO: Add logic for logging out for "handleLogout" function