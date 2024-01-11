import React from "react";
import './Login.css';
import { useState } from "react";


function Login() {

    const [username, setUsername] = useState('')
    const [pass, setPass] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        if (username === '') {
            setError(true)
        }


        setUsername('')
        console.log('UserName', username);

        if (pass === '') {
            setError(true)


        }
        setPass('')
        console.log('Pass', pass);
    }


    return (
        <div>
            <div className="login">
                <h2 className="login-title" >Login to your account</h2>
                <span className="login-span">
                    In order to use the editing and rating capabilities of TMDB, as well as get personal recommendations you will need to login to your account. If you do not have an account, registering for an account is free and simple. Click here to get started.

                </span>
                <br />
                <span className="login-span">
                    If you signed up but didn't get your verification email, ,<a href="" >click here</a> to have it resent.
                </span></div> <br />
            <form className="form" onSubmit={handleSubmit} >
                {
                    error ? <div className="error-div" ><div className="problem-span">Problemmm</div>
                        <ul className="error-li">
                            <li>We couldn't find your username.</li>
                            <li>You have 9 remaining login attempts.</li>
                        </ul></div> : ''
                }
                <label className="label-inp">User name</label>

                <input className="login-inp" type="text"
                    name="userName"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                /> <br />

                <label className="label-inp">Password</label>

                <br />
                <input className="login-inp" type="password" name="password"
                    value={pass}
                    onChange={e => setPass(e.target.value)}
                />

                <br />
                <button className="login-btn">Login</button>
                <button className="reset-pass-btn" ><a href="/resetPass" className="resetPass-link" >Reset Password</a></button>
            </form>


        </div>
    )
}

export default Login;