import React from "react";
import './ResetPass.css';
import { useState } from "react";


function ResetPass() {

    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = e => {
        e.preventDefault();
        if (email === '') {
            setError(true)
        } console.log('Email', email);
    }
    return (
        <div className="reset-pass-div">
            <h2 className="reset-title" >Reset password</h2>
            <span className="reset-span">Enter the email you used to sign up for a TMDB account and we'll send you the steps required to reset your password.

            </span>
            <form onSubmit={handleSubmit} >
                {
                    error ? <div className="required" ><div className="problem-span">
                        Email is required!!!
                        </div>
                        Please enter a valid email address.
                        </div> : ''
                } <br/>
                <label className="label-email" >Email</label> <br />
                <input className="email-inp" type="text" placeholder="what's your email?" name="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                /> <br />
                <button className="Continue-btn">Continue</button>
                <button className="cancel-btn" >Cancel</button>
            </form>
        </div>
    )
}

export default ResetPass;