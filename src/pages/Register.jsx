import { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { IoArrowUndo } from "react-icons/io5";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaCircleCheck } from "react-icons/fa6";
import axios from '../api/axios';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{4,24}$/;
const REGISTER_URL = 'users/register';

const Register = () => {
    const userRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

    const [profession, setProfession] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [employeeID, setEmployeeID] = useState('');
    const [validName, setValidName] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(employeeID));
    }, [employeeID])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [employeeID, password, matchPwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        const v1 = USER_REGEX.test(employeeID);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ profession, 
                                firstName, 
                                lastName, 
                                employeeID, 
                                password, 
                                email, 
                                phone }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            // TODO: remove console.logs before deployment
            console.log(JSON.stringify(response?.data));
            //console.log(JSON.stringify(response))
            //clear state and controlled inputs
            navigate(from, { replace: true });
        } catch (err) {
            if (!err?.response) {
                console.log(err);
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        }
    }

    return (
        <>
                <section className="form-section">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                   
                    <h1 className="heading">
                        creAte a nEw User
                    </h1>

                    <form className="flex flex-col w-96" onSubmit={handleSubmit}>
                        <label className="input-label" htmlFor="profession">
                            Profession
                            </label>
                            <select 
                                className="input-form"
                                id="profession"
                                name="profession"
                                value={profession}
                                onChange={e => {
                                    setProfession(e.target.value)
                                }}
                                onBlur={(e) => {
                                    setProfession(e.target.value);
                                }}
                                >
                                {/* <option /> adds an empty option at the top */}
                                <option />
                                <option>Nurse</option>
                                <option>Doctor</option>
                                <option>Pharmacist</option>
                            </select>

                        <div>
                        <label className="input-label" htmlFor="First Name">
                            First Name:
                        </label>
                        <input
                            className="input-form"
                            type="firstName"
                            id="firstName"
                            onChange={(e) => setFirstName(e.target.value)}
                            value={firstName}
                            aria-describedby="pwdnote"

                        />
                        <label className="input-label" htmlFor="Last Name">
                            Last Name:
                        </label>
                        <input
                            className="input-form"
                            type="lastName"
                            id="lastName"
                            onChange={(e) => setLastName(e.target.value)}
                            value={lastName}
                            aria-describedby="pwdnote"

                        />
                        </div>
                        <label className="input-label" htmlFor="Employee ID">
                            Employee ID:
                            <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validName || !employeeID ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="input-form"
                            type="text"
                            id="employeeID"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmployeeID(e.target.value)}
                            value={employeeID}
                            required
                            aria-invalid={validName ? "false" : "true"}
                            aria-describedby="uidnote"
                        />


                        <label className="input-label" htmlFor="password">
                            Password:
                            <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="input-form"
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            aria-invalid={validPwd ? "false" : "true"}
                            aria-describedby="pwdnote"
                        />


                        <label className="input-label" htmlFor="confirm_pwd">
                            Confirm Password:
                            <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
                        </label>
                        <input
                            className="input-form"
                            type="password"
                            id="confirm_pwd"
                            onChange={(e) => setMatchPwd(e.target.value)}
                            value={matchPwd}
                            required
                            aria-invalid={validMatch ? "false" : "true"}
                            aria-describedby="confirmnote"

                        />
                        <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match the first password input field.
                        </p>

                        <label className="input-label" htmlFor="Email">
                            Email:
                        </label>
                        <input
                            className="input-form"
                            type="email"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            required
                            aria-describedby="pwdnote"

                        />

                        <label className="input-label" htmlFor="Phone">
                            Phone:
                        </label>
                        <input
                            className="input-form"
                            type="phone"
                            id="phone"
                            onChange={(e) => setPhone(e.target.value)}
                            value={phone}
                            required
                            aria-describedby="pwdnote"

                        />

                        <button className="confirm-button" 
                                disabled={!validName || !validPwd || !validMatch ? true : false}>
                        <FaCircleCheck className="self-center mr-2" size="18"/> Create Account</button>
                        <Link className="self-end my-3" to="/login"><IoArrowUndo size="60" /></Link>
                    </form>
                </section>
            
        </>
    )
}

export default Register