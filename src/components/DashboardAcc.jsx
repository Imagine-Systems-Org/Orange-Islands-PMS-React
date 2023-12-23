import { RiArrowDownDoubleFill } from "react-icons/ri";

const DashboardAcc = ({ thePatient }) => {
    return ( 
        <article className="dashboard-article hover-item">
            <RiArrowDownDoubleFill className="col-span-1" size="50"/>
            <h1 className="col-span-2">Patient: {thePatient.name}</h1>
            <h1 className="col-span-2">Species: {thePatient.species}</h1>
            <h1 className="col-span-1">Bed: {thePatient.bed}</h1>
        </article>
     );
}
 
export default DashboardAcc;