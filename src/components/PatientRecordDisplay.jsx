const PatientRecordDisplay = ({ patientrecord }) => {
    return ( 
        <section className="w-screen h-auto flex items-center justify-center">
            {patientrecord.treatment}
        </section>
     );
}
 
export default PatientRecordDisplay;