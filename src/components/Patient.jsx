const Patient = ({ patient }) => {

    return (
        <article key={patient.id}>
            <h2>{patient.name}</h2>
            <h2>{patient.trainerName}</h2>
        </article>
    )
}
export default Patient