import { SEARCH_MOVIE, FETCH_MOVIE, FETCH_MOVIES, LOADING } from "./types";
import axios from 'axios';




export const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
    console.log(text,'textt');
}


export const fetchMovies = text => dispatch => {
    console.log('text',text);
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=7e2e1093&s=${text}`)
        .then(response => {
            console.log(response.data,);
            dispatch({
                type: FETCH_MOVIES,
                payload: response.data.Search

            })
         
        })


        .catch(err => console.log(err))
}




export const fetchMovie = id => dispatch => {
    axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=7e2e1093&i=${id}`)
        .then(response =>
            dispatch({
                type: FETCH_MOVIE,
                payload: response.data
            })
             
        )
}


export const setLoading = () => {
    return {
        type: LOADING
    }
}