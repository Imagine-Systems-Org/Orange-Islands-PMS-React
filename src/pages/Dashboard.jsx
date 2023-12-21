import NavBar from "../components/NavBar";
import useAccount from "../api/useAccount";
import DashboardList from "../components/DashboardList";
import FooterDashboard from "../components/FooterDashboard";
import BackgroundImage from "../components/BackgroundImage";
import { useState, useEffect } from "react";
import { getPatientsByDoctor, getPatientsByNurse } from "../api/getPatientsByEmployee";


const Dashboard = () => {
    const { account } = useAccount();
    let [ myPatients, setMyPatients ] = useState([])

    useEffect(() => {
        switch (account.profession) {
            case "Doctor":
                getPatientsByDoctor(account._id).then(json => {
                    setMyPatients(json)
                })
            case "Nurse":
                getPatientsByNurse(account._id).then(json => {
                    setMyPatients(json)
                })
        }
        }, [])



    console.log(myPatients)
    return ( 
        <>
        <NavBar />
        <BackgroundImage />
        <DashboardList myPatients={myPatients} />
        <FooterDashboard className="sticky bottom-0"/>
        </>
     );
}
 
export default Dashboard;