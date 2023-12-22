import { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import { IoArrowUndo } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import useAccount from "../api/useAccount";
import axios from '../api/axios';
import NavBar from "../components/NavBar";
import BackgroundImage from "../components/BackgroundImage";

const NewPatientEntry = () => {

    const { account } = useAccount();
    const navigate = useNavigate();
    const location = useLocation();
    let { patient } = location.state;
    const from = location.state?.from?.pathname || `search/${patient._id}`;

    const [entryDate, setEntryDate] = useState('');
    const [treatment, setTreatment] = useState('');
    const [condition, setCondition] = useState('');
    const [nursesNotes, setNursesNotes] = useState('');
    const [annotations, setAnnotations] = useState('');
    const [daysStayed, setDaysStayed] = useState('');
    const [prescriptions, setPrescriptions] = useState('');
    const [setErrMsg] = useState('');

    const handleBack = async (e) => {
        e.preventDefault();
        navigate(-1);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`patientrecords/${patient._id}`,
                JSON.stringify({ entryDate, 
                                treatment, 
                                condition, 
                                nursesNotes, 
                                daysStayed, 
                                prescriptions }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            
            navigate(-1);
        } catch (err) {
            if (!err?.response) {
                console.log(err);
                setErrMsg('No Server Response');
            } else {
                console.log(err);
            }
        }
    }

    return (
        <>
        <NavBar />
        <BackgroundImage />
                <section className="form-section mt-32">
                   
                    <h1 className="heading">
                        nEw pAtiEnt eNtry fOr 
                    </h1>
                    <h1 className="heading mt-0 text-5xl font-Zilla">{patient.name}</h1>

                    <form className="flex flex-col w-96" onSubmit={handleSubmit}>
                        <label className="input-label" htmlFor="entryDate">
                            Date
                        </label>
                        <input
                            className="input-form w-[50%]"
                            type="date"
                            id="entryDate"
                            onChange={(e) => setEntryDate(e.target.value)}
                            value={entryDate}
                            aria-describedby="entryDate"
                            required

                        />
                        <label className="input-label" htmlFor="Treatment">
                            Treatment
                        </label>
                        <textarea
                            className="input-form min-h-[15vh]"
                            type="text"
                            id="treatment"
                            onChange={(e) => setTreatment(e.target.value)}
                            value={treatment}
                            aria-describedby="treatment"

                        />
                        <label className="input-label" htmlFor="condition">
                            Condition
                            </label>
                            <select 
                                className="input-form"
                                id="condition"
                                name="condition"
                                value={condition}
                                onChange={e => {
                                    setCondition(e.target.value)
                                }}
                                onBlur={(e) => {
                                    setCondition(e.target.value);
                                }}
                                >
                                {/* <option /> adds an empty option at the top */}
                                <option />
                                <option>Undetermined</option>
                                <option>Good</option>
                                <option>Fair</option>
                                <option>Serious</option>
                                <option>Critical</option>
                        </select>
                        <label className="input-label" htmlFor="daysStayed">
                            Days Stayed
                        </label>
                        <input
                            className="input-form w-[50%]"
                            type="number"
                            inputmode="numeric"
                            id="daysStayed"
                            onChange={(e) => setDaysStayed(e.target.value)}
                            value={daysStayed}
                            aria-describedby="treatment"

                        />
                            {account.profession === "Nurse" &&
                            <>
                            <label className="input-label row-start-1" htmlFor="nursesNotes">
                                Nurse's Notes
                                </label>
                                <textarea 
                                    className="input-form min-h-[15vh]"
                                    type="text"
                                    id="nursesNotes"
                                    name="nursesNotes"
                                    value={nursesNotes}
                                    onChange={e => {
                                        setNursesNotes(e.target.value)
                                    }}
                                /> </>}
                                {account.profession === "Doctor" &&
                                <>
                            <label className="input-label" htmlFor="annotations">
                                Annotations
                                </label>
                                <textarea 
                                    className="input-form min-h-[15vh]"
                                    type="text"
                                    id="annotations"
                                    name="annotations"
                                    value={annotations}
                                    onChange={e => {
                                        setAnnotations(e.target.value)
                                    }}
                                /> </>}

                        <label className="input-label" htmlFor="prescriptions">
                            Prescriptions
                        </label>
                        <textarea
                            className="input-form min-h-[15vh]"
                            type="text"
                            id="prescriptions"
                            onChange={(e) => setPrescriptions(e.target.value)}
                            value={prescriptions}
                        />

                        <button className="confirm-button">
                        <FaCircleCheck className="self-center mr-2" size="18"/> Complete Entry</button>
                        <button 
                        onClick={handleBack}
                        className="self-end my-3" ><IoArrowUndo size="60" /></button>
                    </form>
                </section>
                <footer className="w-screen h-[5vh] bg-Selective sticky bottom-0" />
            
        </>
    )
}

export default NewPatientEntry