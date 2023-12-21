import Patient from "./Patient"

const PatientList = ({ searchResults }) => {

    const results = searchResults.map(patient => <Patient key={patient._id} patient={patient}/>)

    return (
        <>
        <section>{results}</section>
        <section className="patientarticle text-3xl flex flex-row items-center justify-center">
            End of Results...
        </section>
        </>
    )
}
export default PatientList