import HomeHeader from '../components/HomeHeader';
import ProjectDashboard from '../components/ProjectDashboard';
import NewProject from '../components/NewProject';

const Home = () => {
    return (
        <div>
            <HomeHeader/>
            <NewProject />
            <ProjectDashboard />
        </div>
    )
}

export default Home