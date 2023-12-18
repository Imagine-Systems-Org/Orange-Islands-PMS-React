import Patient from "./Patient"

const PatientList = ({ searchResults }) => {

    const results = searchResults.map(patient => <Patient key={patient.id} patient={patient}/>)

    const content = results?.length ? results : <article><p>No Matching Patients</p></article>

    return (
        <section>{content}</section>
    )
}
export default PatientList