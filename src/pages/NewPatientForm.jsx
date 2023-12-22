import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IoArrowUndo } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import axios from '../api/axios';
import NavBar from "../components/NavBar";
import OptionsMapper from "../components/OptionsMapper";
import BackgroundImage from "../components/BackgroundImage";
import { getAllDoctors } from "../api/getAllDoctors";
import { getAllNurses } from "../api/getAllNurses";

const NewPatient = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/search";

    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [category, setCategory] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [assignedDoctor, setAssignedDoctor] = useState('');
    const [assignedNurse, setAssignedNurse] = useState('');
    const [allergies, setAllergies] = useState('');
    const [bed, setBed] = useState('');
    const [trainerName, setTrainerName] = useState('');
    const [trainerPhone, setTrainerPhone] = useState('');
    const [setErrMsg] = useState('');

    const [doctors, setDoctors] = useState([]);
    const [nurses, setNurses] = useState([]);

    const BEDS = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

    useEffect(() => {
        getAllDoctors().then(json => {
            setDoctors(json)
        })
        getAllNurses().then(json => {
            setNurses(json)
        })
        }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`patients/new/doctor/${assignedDoctor}/nurse/${assignedNurse}`,
                JSON.stringify({ name, 
                                species, 
                                category, 
                                dateOfBirth,
                                allergies,
                                bed,
                                trainerName, 
                                trainerPhone }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            
            //clear state and controlled inputs
            navigate(from, {replace: true});
        } catch (err) {
            if (!err?.response) {
                console.log(err);
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
        }
    }
    console.log(assignedDoctor)

    return (
        <>
        <NavBar />
        <BackgroundImage />
                <section className="form-section mt-32">
                   
                    <h1 className="heading">
                        aDding pAtIent...
                    </h1>

                    <form className="flex flex-col w-96" onSubmit={handleSubmit}>
                        <label className="input-label" htmlFor="First Name">
                            Name
                        </label>
                        <input
                            className="input-form w-[50%]"
                            type="name"
                            id="name"
                            onChange={(e) => setName(e.target.value)}
                            value={name}
                            aria-describedby="pwdnote"
                            required

                        />
                        <section className="grid grid-cols-2 grid-row-2 gap-x-4">
                        <label className="input-label row-start-1" htmlFor="profession">
                            Species
                            </label>
                            <input 
                                className="input-form row-start-2"
                                id="species"
                                name="species"
                                value={species}
                                onChange={e => {
                                    setSpecies(e.target.value)
                                }}
                            />
                        <label className="input-label" htmlFor="profession">
                            Category
                            </label>
                            <input 
                                className="input-form"
                                id="text"
                                name="category"
                                value={category}
                                onChange={e => {
                                    setCategory(e.target.value)
                                }}
                            />
                        </section>

                        <label className="input-label" htmlFor="Last Name">
                            Date of Birth
                        </label>
                        <input
                            className="input-form w-[50%]"
                            type="date"
                            id="dateOfBirth"
                            onChange={(e) => setDateOfBirth(e.target.value)}
                            value={dateOfBirth}
                            aria-describedby="pwdnote"

                        />

                        <label className="input-label" htmlFor="Employee ID">
                            Allergies
                        </label>
                        <input
                            className="input-form"
                            type="text"
                            id="allergies"
                            autoComplete="off"
                            onChange={(e) => setAllergies(e.target.value)}
                            value={allergies}
                        />
                        <label className="input-label" htmlFor="doctorselect">
                            Assign Doctor
                        </label>
                        <OptionsMapper setParameter={setAssignedDoctor} id="doctorselect" options={doctors} />
                        <label className="input-label" htmlFor="doctorselect">
                            Assign Nurse
                        </label>
                        <OptionsMapper setParameter={setAssignedNurse} id="doctorselect" options={nurses} />
                        <label className="input-label" htmlFor="bed">
                            Assign Bed
                            </label>
                            <select 
                                className="input-form"
                                id="bed"
                                name="bed"
                                value={bed}
                                onChange={e => {
                                    setBed(e.target.value)
                                }}
                                onBlur={(e) => {
                                    setBed(e.target.value);
                                }}
                                >
                                {/* <option /> adds an empty option at the top */}
                                <option />
                                {BEDS.map(bed => (
                                    <option key={bed}>{bed}</option>
                                ))}
                            </select>
                        
                        <h1 className="input-label text-3xl font-bold my-3">Trainer</h1>
                        <label className="input-label" htmlFor="password">
                            Name
                        </label>
                        <input
                            className="input-form"
                            type="text"
                            id="trainerName"
                            onChange={(e) => setTrainerName(e.target.value)}
                            value={trainerName}
                        />


                        <label className="input-label" htmlFor="confirm_pwd">
                            Phone
                        </label>
                        <input
                            className="input-form"
                            type="text"
                            id="trainerPhone"
                            onChange={(e) => setTrainerPhone(e.target.value)}
                            value={trainerPhone}

                        />

                        <button className="confirm-button">
                        <FaCircleCheck className="self-center mr-2" size="18"/> Save Patient</button>
                        <Link className="self-end my-3" to="/search"><IoArrowUndo size="60" /></Link>
                    </form>
                </section>
                <footer className="w-screen h-[5vh] bg-Selective sticky bottom-0" />
            
        </>
    )
}

export default NewPatient