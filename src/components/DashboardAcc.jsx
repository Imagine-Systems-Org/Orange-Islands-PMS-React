import { RiArrowDownDoubleFill } from "react-icons/ri";

const DashboardAcc = ({ myPatient }) => {
    console.log(myPatient)
    return ( 
        <article className="dashboard-article hover-item">
            <RiArrowDownDoubleFill className="col-span-1" size="50"/>
            <h1 className="col-span-2">Patient: {myPatient.name}</h1>
            <h1 className="col-span-2">Species: {myPatient.species}</h1>
            <h1 className="col-span-1">Bed: {myPatient.bed}</h1>
        </article>
     );
}
 
export default DashboardAcc;