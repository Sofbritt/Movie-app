import React from "react";
import './Footer.css';


function Footer() {
    return (
        <div className="footer">
      
          <div>
                <img className="footer-logo" src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" /> <br/>
                <button className="join-community">  <a href="/sign" className="join-btn" >Join The Community</a></button>
              
            </div>
            <div className="footer-link" >
                <span>THE BASICS</span> <br/>
                <a className="links" href="" >About TMDB</a><br/>
                <a className="links" href="" >Contact Us</a><br/>
                <a className="links" href="" >Support Forums</a>
                <a className="links" href="" >API</a>
            </div>
            <div className="footer-link" >
                <span>GET INVOLVED</span><br/>
                <a className="links" href="" >About TMDB</a><br/>
                <a className="links" href="" >Contact Us</a><br/>
                <a className="links" href="" >Support Forums</a>
                <a className="links" href="" >API</a>
            </div>
            <div className="footer-link" >
                <span>COMMUNITY</span><br/>
                <a className="links"  href="" >About TMDB</a><br/>
                <a className="links" href="" >Contact Us</a><br/>
                <a className="links" href="" >Support Forums</a>
                <a className="links" href="" >API</a>
            </div>
            <div className="footer-link" >
                <span>LEGAL</span><br/>
                <a className="links" href="" >About TMDB</a><br/>
                <a className="links" href="" >Contact Us</a><br/>
                <a className="links" href="" >Support Forums</a>
                <a className="links" href="" >API</a>
            </div>
        

        </div>
    )
}

export default Footer;