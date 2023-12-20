import { useState } from "react";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { IoArrowUndo } from "react-icons/io5";
import { FaCircleCheck } from "react-icons/fa6";
import Footer from "../components/Footer";
import axios from '../api/axios';
import NavBar from "../components/NavBar";

const NEWPATIENT_URL = 'patients/new';

const NewPatient = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/search";

    const [name, setName] = useState('');
    const [species, setSpecies] = useState('');
    const [category, setCategory] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [allergies, setAllergies] = useState('');
    const [trainerName, setTrainerName] = useState('');
    const [trainerPhone, setTrainerPhone] = useState('');
    const [setErrMsg] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(NEWPATIENT_URL,
                JSON.stringify({ name, 
                                species, 
                                category, 
                                dateOfBirth, 
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

    return (
        <>
        <NavBar />
                <section className="form-section mt-40">
                   
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
                <Footer />
            
        </>
    )
}

export default NewPatient