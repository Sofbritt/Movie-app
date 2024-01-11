import React,{useState} from "react";
import { connect } from "react-redux";
import { searchMovie, fetchMovies, setLoading } from "../../../redux/actions/SearchActions";
import './SearchForm.css';

function SearchForm(props) {
    const [text,setText]=useState('');

    const onChange = e => {
        setText(e.target.value);
    }

    const onSubmit = e => {
        e.preventDefault();

        props.fetchMovies(text);
        console.log('aaaa', props);

        //  this.props.setLoading();
    }


    return (
        <div >
            <form id="searchForm" onSubmit={onSubmit} >
                <input className="search-inp" type="text" placeholder="Search movie or a TV Show..."

                    onChange={onChange}
                />
                <br />
                <button type="submit" className="search-btn" >Search</button>
            </form>
        </div>
    )
}


const mapStateToProps = state => ({
    // text: state.movies
    text: state.movies.text
})

export default connect(mapStateToProps, { searchMovie, fetchMovies, setLoading })(SearchForm)




// import React, { Component } from "react";
// import './SearchForm.css';
// import { setLoading, searchMovie, fetchMovies } from '../../../redux/actions/SearchActions';
// import { connect } from 'react-redux';

// export class SearchForm extends Component {

//     onChange = e => {
//         this.props.searchMovie(e.target.value);
//     }


//     onSubmit = e => {
//         e.preventDefault();
//         this.props.fetchMovies(this.props.text)
//         // this.props.setLoading;
//     }
//     render() {
//         return (
//             <div className="form">
//                 <form id="searchForm" onSubmit={this.onSubmit} >
//                     <input className="search-inp" type="text"
//                         name="sesrchForm"
//                         placeholder="search for a movie..."

//                         onChange={this.onChange}
//                     /> <br />
//                     <button className="search-btn" type="submit" >Search</button>
//                 </form>
//             </div>
//         )
//     }

// }

// const mapStatesToProps = state => ({
//     // text: state.movies.text
//     text: state.movies
// })


// export default connect(mapStatesToProps, { searchMovie, fetchMovies, setLoading })(SearchForm);