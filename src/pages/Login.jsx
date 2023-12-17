import { useRef, useState, useEffect } from 'react';
import { Link, useNavigate, useLocation, Navigate } from 'react-router-dom';
import { FaArrowCircleLeft } from "react-icons/fa";
import useAuth from '../api/useAuth';

import axios from '../api/axios';
const LOGIN_URL = 'users/login';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/dashboard";

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
            //console.log(JSON.stringify(response));
            // const accessToken = response?.data?.accessToken;
            setAuth({ employeeID, password, accessToken });
            setEmployeeID('');
            setPassword('');
            navigate(from, { replace: true });
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
                <section className='form-section h-screen'>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1 className='heading'>Welcome tO suN CLinic</h1>
                    <form className="grid gap-4 grid-cols-2 grid-rows-3 items-center" onSubmit={handleSubmit}>
                        <input
                            className='input-form-login'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setEmployeeID(e.target.value)}
                            value={employeeID}
                            required
                        />
                        <label className='font-MajorMono text-2xl' htmlFor="username">emPloyee ID</label>

                        <input
                            className='input-form'
                            type="password"
                            id="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            required
                        />
                        <label className='font-MajorMono text-2xl' htmlFor="password">pAsswOrd</label>
                        <button className='login-button row-start-3 col-start-2 relative group'>Log In 
                        <FaArrowCircleLeft className='absolute right-0 bottom-0 group-hover:rotate-180 transition-all duration-300' size={50}/></button>



                    </form>
                    <div className="grid gap-4 grid-cols-2 grid-rows-1 items-center">
                    <Link className='row-start-1 col-start-2' to="/register">
                    <button
                        className='login-button relative group'>New User
                        <FaArrowCircleLeft className='absolute right-0 bottom-0 group-hover:rotate-180 transition-all duration-300' size={50}/>
                    </button>
                    </Link>
                    </div>
                </section>
                </>
    )
}

export default Login