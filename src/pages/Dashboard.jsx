import NavBar from "../components/NavBar";
import useAccount from "../api/useAccount";
import DashboardList from "../components/DashboardList";
import FooterDashboard from "../components/FooterDashboard";
import BackgroundImage from "../components/BackgroundImage";
import { useState, useEffect } from "react";
import { getPatientsByDoctor, getPatientsByNurse } from "../api/getPatientsByEmployee";


const Dashboard = () => {

    return ( 
        <>
        <NavBar />
        <BackgroundImage />
        <DashboardList />
        <FooterDashboard className="sticky bottom-0"/>
        </>
     );
}
 
export default Dashboard;