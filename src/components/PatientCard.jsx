import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDoctor } from "../api/getDoctor";
import { getNurse } from "../api/getNurse";
import DoctorNurseBed from "./DoctorNurseBed";
import { IoArrowUndo } from "react-icons/io5";

const PatientCard = ({ patient }) => {
    let patientDOB = patient.dateOfBirth.slice(0, 10)

    let [myDoctor, setMyDoctor] = useState([]);
    let [myNurse, setMyNurse] = useState([])

    useEffect(() => {
        getDoctor(patient.assignedDoctor).then(json => {
            setMyDoctor(json)
        })
        getNurse(patient.assignedNurse).then(json => {
            setMyNurse(json)
        })
        }, [])

    return ( 
        <section className="w-screen h-auto flex items-center justify-center mt-32">
            <Link className="self-start my-3" to="/search"><IoArrowUndo size="80" /></Link>
            <div className="grid gap-4 grid-cols-2 grid-rows-5 bg-Iris text-gray-100 m-5 p-5 pb-10 rounded-xl font-Zilla items-center align-middle justify-center">
                <div className="flex flex-row col-span-2 row-span-2 w-auto m-auto text-7xl justify-center align-middle items-center">
                <h1>{patient.name}</h1>
                </div>
                <div className="border-gray-300 border-b-2 p-1 row-start-3 col-start-1">
                <h2>Category</h2>
                <h1 className="text-2xl">{patient.category}</h1>
                </div>
                <div className="border-gray-300 border-b-2 p-1 row-start-3 col-start-2">
                <h2 >Species</h2>
                <h1 className="text-2xl">{patient.species}</h1>
                </div>
                <div className="border-gray-300 border-b-2 p-1 row-start-4 col-start-1">
                <h2>Allergies</h2>
                <h1 className="text-2xl">{patient.allergies}</h1>
                </div>
                <div className="border-gray-300 border-b-2 p-1 row-start-4 col-start-2">
                <h2>DOB</h2>
                <h1 className="text-2xl">{patientDOB}</h1>
                </div>
                <div className="border-gray-300 border-b-2 p-1 row-start-5 col-start-1">
                <h2>Trainer</h2>
                <h1 className="text-2xl">{patient.trainerName}</h1>
                </div>
                <div className="border-gray-300 border-b-2 p-1 row-start-5 col-start-2">
                <h2>Contact</h2>
                <h1 className="text-2xl">{patient.trainerPhone}</h1>
                </div>
            </div>
            <DoctorNurseBed doctor={myDoctor} nurse={myNurse} bed={patient.bed} />
        </section>
     );
}
 
export default PatientCard;