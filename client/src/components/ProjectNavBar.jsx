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
import './styles/ProjectNavBar.css'

//Export the ProjectNavBar
export default function ProjectNavBar() {
    return (
        <nav className="nav-bar">
            <div>
                <Link to="/projects/:projectId/info">Info</Link>
            </div>
            <div>
                <Link to="/projects/:projectId/timeline">Timeline</Link>
            </div>
            <div>
                <Link to="/projects/:projectId/wireframe">Wireframe</Link>
            </div>
            <div>
                <Link to="/">Logout</Link>
            </div>
        </nav>
    );
}


//TODO: Add logic for logging out