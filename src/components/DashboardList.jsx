import DashboardAcc from "./DashboardAcc"

const DashboardList = ({ myPatients }) => {

    const results = myPatients.map(myPatient => <DashboardAcc key={myPatient._id} myPatient={myPatient}/>)

    // const content = results?.length ? results : <article><p>No Matching Patients</p></article>

    return (
        <section className="mt-40 flex flex-col items-center min-h-[64vh] w-screen">{results}</section>
    )
}

export default DashboardList