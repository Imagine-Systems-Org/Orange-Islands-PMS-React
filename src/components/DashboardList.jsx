import DashboardAcc from "./DashboardAcc"
import useAccount from "../api/useAccount";
import { useState, useEffect } from "react";
import { getPatientsByDoctor, getPatientsByNurse } from "../api/getPatientsByEmployee";

const DashboardList = ({ }) => {
    const { account } = useAccount();
    let [ myPatients, setMyPatients ] = useState([])

    useEffect(() => {
        switch (account.profession) {
            case "Doctor":
                getPatientsByDoctor(account._id).then(json => {
                    setMyPatients(json)
                })
            case "Nurse":
                getPatientsByNurse(account._id).then(json => {
                    setMyPatients(json)
                })
        }
        }, [])
        console.log(myPatients);

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