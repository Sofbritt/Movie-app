import React from "react";
import './Navbar.css';
import { BsFillPlusCircleFill, BsSearch } from "react-icons/bs";
import { RiEnglishInput } from "react-icons/ri";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
import MenuItem from "../menu/menuItem/MenuItem";
import SearchForm from "./searchForm/SearchForm";



function Navbar() {
    


    /// search-list
    // let list = ['Friends', 'The Notebook', 'Step Up', 'Mission Impossible', 'Scream']
    // let [filter, setFilter] = useState(movies)


    /// click-for search-list
    // const handleSearch = (event) => {
    //     if (event.target.value === '') {
    //         setFilter(movies)
    //         return;
    //     }

    //     const filteredValues = movies.filter((movie) => {
    //         return movies.toLowerCase().search(event.target.value.toLowerCase()) >= 0

    //     })
    //     setFilter(filteredValues)
    // }
    /////




    const [show, setShow] = useState(false)

    const [open, setOpen] = useState(false)

    const [openLang, setLang] = useState(false)


    return (
        <div>
            <div className="navbar" >
                <div className="left-nav" >
                    <a href="/" > <img className="logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" /></a>
                    <div className="menuItems" >

                        <div className="each-meniItem">   <a className="links" href="/movieContainer" ><MenuItem name='Moviess' title={['Popular', 'Now Playing', 'Upcoming']} /></a></div>
                        <div className="each-meniItem"> <a className="links" href="/shows" ><MenuItem name='TV Shows' title={["Popular Shows"]} /></a></div>
                    </div>
                </div>

                <div className="rigth-nav"  >


                    <h3 onClick={() => setOpen(true)} > <BsFillPlusCircleFill /> </h3>

                    {open === true ?

                        <div className="question" >
                            Can't find a movie or a TV show? <br />
                            Login to create it.
                            <AiOutlineClose onClick={() => setOpen(false)} />
                        </div> :
                        ''
                    }
                    <h3 className="en-icon" onClick={() => setLang(true)} >  <RiEnglishInput /></h3>

                    {openLang === true ?
                        <div className="choose-lang" >
                            <h2>Language Preferences</h2>
                            <label>Default Language</label> <br />
                            <select className="select-lang"  >
                                <option>English(en-US)</option>
                                <option>Danish(en-US)</option>
                                <option>Dutch</option>
                                <option>English(en-US)</option>
                                <option>English(en-US)</option>
                                <option>English(en-US)</option>
                            </select> <br />
                            <label>Fallback Language </label> <br />
                            <select className="select-lang">
                                <option>None(Don't Fallback)</option>
                                <option>Navajo(Don't Fallback)</option>
                                <option>Ndebele(Don't Fallback)</option>
                                <option>None(Don't Fallback)</option>
                            </select> <br />
                            <a href="https://www.themoviedb.org/" > <button className="road-page-btn" >Road Page</button> </a><br />

                            <AiOutlineClose className="close-icon" onClick={() => setLang(false)} />
                        </div>
                        :
                        ''
                    }

                    <a className="login-link" href="/login" > <h3>Login</h3></a>
                    <a className="sign-link" href="sign" > <h3>Join TMDB</h3></a>
                     
                   
                </div>
            </div>


            <div className="second-search-div">
                <div className="welcome-span">
                    <h1>Welcome.</h1>
                    <h2>Millions of movies, TV shows and people to discover. Explore now.</h2>
                </div>
              
                <SearchForm />
                       

            </div>
        </div>
    )
}


// const mapStateToProps = state => ({
//     loading: state.movies.loading
// })

export default Navbar;