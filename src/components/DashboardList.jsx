import DashboardAcc from "./DashboardAcc"

const DashboardList = ({ myPatients }) => {

    const results = myPatients.map(myPatient => <DashboardAcc key={myPatient._id} myPatient={myPatient}/>)

    return (
        <section className="mt-[20vh] flex flex-col items-center min-h-[70vh] w-screen">
            <section className="w-[70vw]">
            <h1 className="ml-6 mb-5 font-MajorMono text-3xl">yOur PaTiEntS</h1>
            </section>
            {results}</section>
    )
}

export default DashboardList