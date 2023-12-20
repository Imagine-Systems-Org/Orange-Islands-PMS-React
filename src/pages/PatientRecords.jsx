import { useLocation } from "react-router-dom";
import PatientCard from "../components/PatientCard";
import NavBar from "../components/NavBar";

const PatientRecords = () => {
    let patientData = useLocation();
    const { patient } = patientData.state;
    return ( 
        <>
            <NavBar />
            <PatientCard patient={patient} />
        </>
     );
}
 
export default PatientRecords;