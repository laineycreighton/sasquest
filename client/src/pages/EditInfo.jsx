// components
<ProjectNavBar />;
// PUT route EditProject form (singular)

// INCLUDES:
//          - ProjectNavBar.jsx
//          - ProjectHeader.jsx
//          - UpdateProjectInfo.jsx
//
//
//
//
//
import ProjectNavBar from '../components/ProjectNavBar';
import ProjectHeader from '../components/ProjectHeader';
import UpdateProjectInfo from '../components/UpdateProjectInfo';

// Pass users array to the List component as a prop
export default function EditInfo() {
    return (
        <div>
            <div>
                <ProjectNavBar />
            </div>
            <div>
                <ProjectHeader />
            </div>
            <div>
                <UpdateProjectInfo />
            </div>
        </div>
    );
}