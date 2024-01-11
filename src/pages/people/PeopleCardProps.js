import React from "react";

export default function PeopleCards(props) {
    const { id, name, movie, url } = props
    return (
        <div key={id} className="people-card-div" >

            <img className="people-img" src={url} />
            <h3 className="movie-name" > {name} </h3>
            <h4 className="people-decription" > {movie} </h4>
        </div>
    )
}