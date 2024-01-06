import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from "react-icons/fa";
import Header from '../components/Header';
import Footer from '../components/Footer';
import useAuth from '../api/useAuth';
import useAccount from '../api/useAccount';
import { getUser } from '../api/getUser';

import axios from '../api/axios';
const LOGIN_URL = 'users/login';

const Login = () => {
    const { setAuth } = useAuth();
    const { setAccount } = useAccount();

    const navigate = useNavigate();

    const userRef = useRef();
    const errRef = useRef();

    const [employeeID, setEmployeeID] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [employeeID, password])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(LOGIN_URL,
                JSON.stringify({ employeeID, password }),
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            const accessToken = JSON.stringify(response?.data);
            setAuth({ employeeID, password, accessToken });
            getUser(employeeID).then(json => {
                setAccount(json)
            })
            navigate("/dashboard");
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (
        <>
        <Header />
                <section className='form-section min-h-screen'>
                
                    <p ref={errRef} className={errMsg ? "errmsg font-Zilla text-3xl" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className='heading'>Welcome tO suN CLinic</h1>
                    <form className="grid gap-4 grid-cols-2 grid-rows-3 items-center" onSubmit={handleSubmit}>
                        {/* EMPLOYEEID */}
                        <input
                            className='input-form-login'
                            type="text"
                            id="employeeID"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmployeeID(e.target.value)}
                            value={employeeID}
                            required
                            placeholder="QF850"
                            
                        />
                        <label className='font-MajorMono text-2xl' htmlFor="employeeID">emPloyee ID</label>
                        {/* PASSWORD */}
                        <input
                            className='input-form'
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                            placeholder="password1"
                        />
                        <label className='font-MajorMono text-2xl' htmlFor="password">pAsswOrd</label>
                        {/* LOGIN BUTTON */}
                        <button className='login-button row-start-3 col-start-2 relative group'>Log In 
                        <FaArrowCircleLeft className='login-hover-button' size={50}/></button>
                    </form>
                    <div className="grid gap-4 grid-cols-2 grid-rows-1 items-center">
                        {/* REGISTER BUTTON */}
                        <Link className='row-start-1 col-start-2' to="/register">
                        <button
                            className='login-button relative group'>New User
                            <FaArrowCircleLeft className='login-hover-button' size={50}/>
                        </button>
                        </Link>
                    </div>
                </section>
            <Footer />
        </>
    )
}

export default Login