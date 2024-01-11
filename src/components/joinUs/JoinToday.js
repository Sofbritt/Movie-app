import React from "react";
import './JoinToday.css';


function JoinToday() {
    return (
        <div className="join-today">
            <div>
                <h1 className="join-us-title">Join Today</h1>
                <p className="join-p">Get access to maintain your own custom personal lists, track what you've seen and search and filter for what to watch next—regardless if it's in theatres, on TV or available on popular streaming services like Netflix, Amazon Prime Video, Max Amazon Channel, Disney Plus, and Apple TV Plus.

                </p>
                <button className="sign-to-join"><a href="/sign" className="to-sign-btn" >Sign Up</a></button>
            </div>
            <div className="second-p" >
                <ul>
                    <li>
                        Enjoy TMDB ad free </li>
                    <li>Maintain a personal watchlist</li>
                    <li>Filter by your subscribed streaming services and find something to watch</li>
                    <li>Log the movies and TV shows you've seen</li>
                    <li>Build custom lists</li>
                    <li>Contribute to and improve our database</li>
                </ul>
            </div>
        </div>
    )
}

export default JoinToday;