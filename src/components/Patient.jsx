const Patient = ({ patient }) => {
    return (
        <article>
            <h2>{patient.name}</h2>
            <h2>{patient.trainerName}</h2>
        </article>
    )
}
export default Patient