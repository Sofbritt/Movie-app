import React from "react";
import './Tvshows.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
// import AllMovies from "../allMovies/AllMovies";
// import tvShows from '../products/tvShows.json';
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios';





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


function TvShows() {


    return (
        <div className="tv-shows">
            <Carousel showDots={false} responsive={responsive} className="slide" >


                <div>
                    <img className="movie-poster" src="https://www.postergully.com/cdn/shop/products/LowRes_1Friends_1024x1024.jpg?v=1678204822" />
                      <h2 className="movie-name" >Friends </h2>
                    <h3 className="movie-year" >1994-2004</h3>
                </div>
                <div>
                    <img className="movie-poster" src="https://m.media-amazon.com/images/M/MV5BNGEyNDRjM2QtY2VlYy00OWRhLWI4N2UtZTM4NDc0MGM0YzBkXkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg" />
                    <h2 className="movie-name" >Sex And The City </h2>
                    <h3 className="movie-year" >1998</h3>
                </div>
                <div>
                    <img className="movie-poster" src="https://m.media-amazon.com/images/M/MV5BNjg1MDQ5MjQ2N15BMl5BanBnXkFtZTYwNjI5NjA3._V1_FMjpg_UX1000_.jpg" />
                    <h2 className="movie-name" >How I Met Your Mother </h2>
                    <h3 className="movie-year" >2005</h3>
                </div>
                <div>
                    <img className="movie-poster" src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p185575_b_v9_ag.jpg" />
                    <h2 className="movie-name" >Gossip Girl </h2>
                    <h3 className="movie-year" >2007</h3>
                </div>
                
               


            </Carousel>



        </div>
    )
}

export default TvShows;