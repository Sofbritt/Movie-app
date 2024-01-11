import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
// import { fetchMovie, setLoading } from "../../../redux/actions/SearchActions";
import { useParams } from 'react-router-dom';
import { fetchMovie } from "../../../redux/actions/SearchActions";
import axios from 'axios';
import './Detail.css';




function Detail(props) {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, []);

    const routeParams = useParams();
    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios.get(`http://www.omdbapi.com/?apikey=7e2e1093&i=${routeParams.id}`)
            .then(response => {
                setMovie(response.data);
                console.log(response.data);
            })
    }, []);

    // props.setLoading;




    let movieInfo = (<div>

        <div className="details">
            <div>
                <img src={movie.Poster} className="detail-img" />
            </div>

            <div className="names" >
                <h2> {movie.Title}  </h2> <hr />
                <h4>Movie Genere: {movie.Genre}  </h4> <hr />
                <h4>Movie rated: {movie.Rated} </h4><hr />
                <h4>Movie Director: {movie.Director} </h4><hr />
                <h4>Movie Write: {movie.Writer} </h4><hr />
                <h4>Actors:  {movie.Actors} </h4>  <hr />

                <h5 className="about"> <h4>About:</h4>{movie.Plot} </h5><hr />
            </div>
        </div>
        <a href={'https://www.imdb.com/title' + movie.imdbId} ></a> <br />


        <Link to={'/'} className="back-to-research" >
            Go Back To Research
        </Link>


    </div>)

    // const content = loading ? <Spinner /> : movieInfo
    const content = movieInfo
    return (
        <div>{content}</div>
    )
}


const mapStateToProps = state => ({
    loading: state.movies.loading,
    movies: state.movies.movie
})

export default connect(mapStateToProps, { fetchMovie })(Detail)