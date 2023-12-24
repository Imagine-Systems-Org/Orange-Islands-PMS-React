import NavBar from "../components/NavBar";
import DashboardList from "../components/DashboardList";
import FooterDashboard from "../components/FooterDashboard";
import BackgroundImage from "../components/BackgroundImage";
import useAccount from "../api/useAccount";


const Dashboard = () => {

    const { account } = useAccount();

    return ( 
        <>
        <NavBar />
        <BackgroundImage />
        <DashboardList account={account}/>
        <FooterDashboard className="sticky bottom-0"/>
        </>
     );
}
 
export default Dashboard;