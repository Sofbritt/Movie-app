import React from "react";
import './SignUp.css';
import { useState } from "react";


function SignUp() {


    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)

    const [confirmPass, setConfirmPass] = useState('')


    const handleSubmit = (e) => {
        e.preventDefault();
        if (userName.length === 0) {
            setError(true)
        }

        else {
            console.log('User Name-', userName);
        }


        if (password !== confirmPass) {
            setError(true)
            console.log('password is not confirmed!');
        } else {
            console.log('Pass-', password);
            console.log('confirmed pass-', confirmPass);

        }





        if (email.length === 0) {
            setError(true)
        
        }


        else {
            console.log('E-mail-', email);
        }



    }



    return (
        <div className="sign-benefits">
            <div className="Benefits" >
                <div className="Benefits-title" >  Benefits of being a member</div>
                <h4 className="Benefits-h4"> Find something to watch on your subscribed streaming services</h4>
                <h4 className="Benefits-h4" > Log the movies and TV shows you have watched</h4>
                <h4 className="Benefits-h4" > Keep track of your favourite movies and TV shows and get recommendations from them</h4>
                <h4 className="Benefits-h4" > Build and maintain a personal watchlist</h4>
            </div>
            <div>

                <h2 className="sign-title" >Sign Up  for an account</h2>
                <span>Signing up for an account is free and easy. Fill out the form below to get started. JavaScript is required to to continue.

                </span>
                <div className="form">
                    <form onSubmit={handleSubmit} >


                        <label className="label-inp">UserName</label><br />
                        {
                            error ? <div>
                                <label className="error-label" >write your Name</label>
                            </div> :
                                ''
                        }

                        <input name="userName" className="sign-inp" type=" text"
                            value={userName}
                            onChange={e => setUserName(e.target.value)}

                        />


                        <br />
                        <label className="label-inp"> Password (4 characters minimun)</label><br />
                        {error ?
                            <div>
                                <label className="error-label" >write a Pass</label>
                            </div> :
                            ''
                        }
                        <input name="password" className="sign-inp" type="password"

                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />


                        <br />

                        <label className="label-inp">Password Confirm</label>
                        <br />

                        <input name="confirm-password" className="sign-inp" type="password"
                            value={confirmPass}
                            onChange={e => setConfirmPass(e.target.value)}
                        />

                        <br />


                        <label className="label-inp" >E-mail</label><br />
                        {
                            error ?
                                <div>
                                    <label className="error-label" >write an Email</label>
                                </div> :
                                ''
                        }
                        <input name="email" className="sign-inp" type="text"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />


                        <br />
                        <button className="sing-up-btn">Sign Up</button>
                        <button className="cancel-btn">Cancel</button>
                    </form>

                    <span>By clicking the "Sign up" button below, I certify that I have read and agree to the TMDB terms of use and privacy policy.</span>

                </div>
            </div>

        </div>
    )
}


export default SignUp;