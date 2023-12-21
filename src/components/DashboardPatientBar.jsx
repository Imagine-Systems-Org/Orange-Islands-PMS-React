import { useEffect, useState } from "react"
import { getPatientsByDoctor, getPatientsByNurse } from "../api/getPatientsByEmployee"

const PatientBar = ({ employee }) => {

    return ( 
        <div>
            {employee.firstName}
        </div>
     );
}
 
export default PatientBar;