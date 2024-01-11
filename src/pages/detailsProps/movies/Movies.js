import React from "react";
import { connect } from "react-redux";
import MovieCard from "./MovieCard";


function Movies(props) {



    const { movies } = props;

    let content = '';
    content = movies && movies.length > 0 ? movies.map((movie, index) => <MovieCard movie={movie} key={index}
    />) : null
    return (
        <div className="all-movies"  >
            {
                content ? <div className="movies" >{content}</div> :
                    <span className="search-here" >Search for a movie here</span>
            }

        </div>
    )
}


const mapStateToProps = state => ({
    movies: state.movies.movies
})

export default connect(mapStateToProps)(Movies)







