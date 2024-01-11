import React from "react";


export default function ShowsProps(props) {
    const { id, name, url } = props
    return (
      <div className="each-movie" >
          <div key={id} >
            <img className="movie-poster" src={url} />
            <h3 className="movie-name" > {name} </h3>
        </div>
      </div>
    )
}