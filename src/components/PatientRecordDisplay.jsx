const PatientRecordDisplay = ({ patientrecord }) => {
    let entryDate = patientrecord.entryDate.slice(0, 10)
    console.log(patientrecord);
    return ( 
        <section className="hover-item w-screen h-auto flex items-center justify-center my-8 font-Zilla">
            <div className="w-[95vw] shadow-xl shadow-Barn bg-Amaranth border-Selective border-4 grid grid-cols-4 grid-rows-2 relative h-[350px] rounded-xl p-5">
            <h1 className="absolute left-5 text-3xl text-gray-200">Date: {entryDate}</h1>
            <div className="patient-entry-inner col-start-1 col-end-1 row-start-1 row-end-1 col-span-1 row-span-1">Treatment: {patientrecord.treatment}</div>
            <div className="patient-entry-inner col-start-1 col-end-1 row-start-2 row-end-2 col-span-1 row-span-1">Condition: {patientrecord.condition}</div>
            <div className="patient-entry-inner col-start-2 col-end-2 row-start-1 row-end-3 row-span-2">
                Nurses Notes: {patientrecord.nursesNotes}</div>
            <div className="patient-entry-inner col-start-3 col-end-3 row-start-1 row-end-3 col-span-1 row-span-2">Annotations: {patientrecord.annotations}</div>
            <div className="patient-entry-inner col-start-4 col-end-4 row-start-1 row-end-1 col-span-1 row-span-1">Days Stayed: {patientrecord.daysStayed}</div>
            <div className="patient-entry-inner col-start-4 col-end-4 row-start-2 row-end-2 col-span-1 row-span-1">Prescriptions: {patientrecord.prescriptions}</div>
            
            </div>
        </section>
     );
}
 
export default PatientRecordDisplay;