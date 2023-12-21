import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getPatientRecords } from "../api/getPatientRecords";
import { FaFileCirclePlus } from "react-icons/fa6";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import PatientCard from "../components/PatientCard";
import NavBar from "../components/NavBar";
import PatientRecordsList from "../components/PatientRecordsList";
import BackgroundImage from "../components/BackgroundImage";

const PatientRecords = () => {
    let patientData = useLocation();
    const { patient } = patientData.state;

    let [patientRecords, setPatientRecords] = useState([])

    useEffect(() => {
        getPatientRecords(patient._id).then(json => {
            setPatientRecords(json)
        })
        }, [])
    return ( 
        <>
            <NavBar />
            <BackgroundImage />
            <PatientCard patient={patient} />
            <div className="flex flex-row justify-center align-middle items-center mb-10">
                <h1 className="font-Zilla text-3xl p-5 relative">Patient Entries
                <RiArrowDownDoubleFill className="absolute top-12 right-24" size="50" />
                </h1>
            <button className="confirm-button">
                <FaFileCirclePlus className="self-center mr-2" size="30"/> 
                New Entry
            </button>
            </div>

            <PatientRecordsList patientrecords={patientRecords} />
            <footer className="w-screen h-[5vh] bg-Selective sticky bottom-0" />

        </>
     );
}
 
export default PatientRecords;