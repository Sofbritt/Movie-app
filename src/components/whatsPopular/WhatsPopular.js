import React from "react";
import './WhatsPopular.css';
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
// import AllMovies from "../allMovies/AllMovies";
// import popularMovies from '../products/popularMovies.json';
import { Link } from "react-router-dom";
import Movies from "../../pages/detailsProps/movies/Movies";



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


function WhatsPopular() {

    return (
        <div>
            <hr />
            <div className="components-div" >
                <span className="components-title" >What's Popular</span>
            </div>

            <div className="whats-popular">
                <Carousel showDots={false} responsive={responsive} className="slide" >


                    <div>
                        <img className="movie-poster" src="https://upload.wikimedia.org/wikipedia/ru/thumb/1/1c/%D0%97%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%8C%D1%82%D0%B5%D1%81%D1%8C%2C_%D0%94%D0%B6%D0%BE_%D0%91%D0%BB%D1%8D%D0%BA.jpg/640px-%D0%97%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D1%8C%D1%82%D0%B5%D1%81%D1%8C%2C_%D0%94%D0%B6%D0%BE_%D0%91%D0%BB%D1%8D%D0%BA.jpg" />
                        <h2 className="movie-name" >Meet Joe Black </h2>
                        <h3 className="movie-year" >1998</h3>
                    </div>

                    <div>
                        <img className="movie-poster" src="https://m.media-amazon.com/images/M/MV5BMTg2MjkwMTM0NF5BMl5BanBnXkFtZTcwMzc4NDg2NQ@@._V1_FMjpg_UX1000_.jpg" />
                        <h2>Crazy Stupid Love </h2>
                        <h3 className="movie-year" >2011</h3>
                    </div>
                    <div>
                        <img className="movie-poster" src="https://m.media-amazon.com/images/M/MV5BNzc3Mzg1OGYtZjc3My00Y2NhLTgyOWUtYjRhMmI4OTkwNDg4XkEyXkFqcGdeQXVyMTU3NDU4MDg2._V1_QL75_UX380_CR0,4,380,562_.jpg" />
                        <h2>The Notebook </h2>
                        <h3 className="movie-year" >2004</h3>
                    </div>
                    <div>
                        <img className="movie-poster" src="https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQXUpVhfnjzY01pU1p4ta9hEhQ3gGsCooCyJ3M890P9UwzPG_yJW2EzvdnYta43RX8u" />
                        <h2>Titanic </h2>
                        <h3 className="movie-year" >1997</h3>
                    </div>
                    <div>
                        <img className="movie-poster" src="https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p20974_v_v13_ax.jpg" />
                        <h2> The Truman Show </h2>
                        <h3 className="movie-year" >1998</h3>
                    </div>

                    <div>
                        <img className="movie-poster" src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/6c8cd1dc-22d9-4f50-b815-891c7fba6b74/600x900" />
                        <h2 className="movie-name" > Click  </h2>
                        <h3 className="movie-year" >2006</h3>
                    </div>

                </Carousel>


            </div>
        </div>
    )
}

export default WhatsPopular;