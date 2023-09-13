import HomeHeader from "../components/HomeHeader";
import ProjectDashboard from "../components/ProjectDashboard";
import NewProject from "../components/NewProject";
import ProjectNavBar from "../components/ProjectNavBar";

const Home = () => {
  return (
    <div>
      <ProjectNavBar />
      <HomeHeader />
      {/* <ProjectDashboard /> */}
      <NewProject />
    </div>
  );
};

export default Home;
