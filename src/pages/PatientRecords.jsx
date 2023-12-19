import { useLocation } from "react-router-dom";

const PatientRecords = () => {
    let patientData = useLocation();
    const { patient } = patientData.state;
    return ( 
        <div>
            {patient.name}
        </div>
     );
}
 
export default PatientRecords;