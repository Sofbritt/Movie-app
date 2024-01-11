import React from "react";
import { Link } from 'react-router-dom';
import { useState } from "react";
import axios from 'axios';

function MovieCard(props) {

    const { movie } = props;
    const api = 'http://www.omdbapi.com/?i=tt3896198&apikey=7e2e1093&s='

  
    const [selectedId, setSelectedId] = useState(null)
    const [movieDetails, setMovieDetails] = useState({})


    ///get res from API//
    const getDetails = (e, id) => {
        e.preventDefault();
        setSelectedId(id);
        axios.get(api + `${id}`)
            .then((response) => {
                if (response) {
                    setMovieDetails(response.data)

                }
            })
    }


    return (

        <div className="image-container d-flex justify-content-start m-3" >
            <img className="movie-poster" src={movie.Poster} alt="movie-poster" />
            <h3 className="movie-name" > {movie.Title} </h3>
            <h3 className="movie-year" > {movie.Year} {movie.Genre} </h3>

            
                <button onClick={e => getDetails(e, movieDetails)} >
                    <Link className='detail-link' to={'/detail/' + movie.imdbID} >
                        details</Link>
                </button>
        </div>


    )
}

export default MovieCard;
