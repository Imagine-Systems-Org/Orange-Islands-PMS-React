import PatientRecordDisplay from "./PatientRecordDisplay";


const PatientRecordsList = ({ patientrecords }) => {

    const results = patientrecords.map(patientrecord => <PatientRecordDisplay key={patientrecord._id} patientrecord={patientrecord}/>)
    return ( 
        <section>
            {results}
        </section>
     );
}
 
export default PatientRecordsList;