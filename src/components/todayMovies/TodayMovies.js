import React from "react";
import './TodayMovies.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TvShows from "../tvshows/TvShows";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Movies from "../../pages/detailsProps/movies/Movies";
import axios from 'axios';
import MovieCard from "../../pages/detailsProps/movies/MovieCard";



export const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 1100 },
        items: 4,
        slidesToSlide: 2,
    },
    desktop: {
        breakpoint: { max: 1100, min: 800 },
        items: 3,
    },
    tablet: {
        breakpoint: { max: 800, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

function TodayMovies(props) {

    const { movies } = props;

    const [shows, setShows] = useState(false)

    // const [todayMovies, setTodayMovies] = useState([])

    // useEffect(() => {

    //     axios.get('http://www.omdbapi.com/?i=tt3896198&apikey=7e2e1093&s=')

    //         .then(response => {
    //             setTodayMovies(response.data)
    //             console.log(todayMovies)
    //         })
    // }, []);

    return (
        <div>

           <div className="components-div">
           <span className="components-title" onClick={() => setShows(false)} > Today's Movies </span> <br />  <br/> <hr />
            <span className="components-title" onClick={() => setShows(true)}   >Tv shows</span>
           </div>

            {
                shows === true ?
                    <TvShows />
                    :
                    <div >
                      
                        <Movies />




                    </div>

            }

        </div>
    )
}

export default TodayMovies;