import React from "react";
import './People.css';
// import PeopleCards from "./PeopleCardProps";
// import people from '../../components/products/people.json';
// import { Link } from "react-router-dom";

function People() {
    return (
        <div>
            <h2 className="people-title" >Popular People</h2>
            <div className="people-cards">


                {/* {
                    people.map((eachActor, i) => <Link  className="to-detail" to={'/detail/' + eachActor.id} >
                    <PeopleCards  {...eachActor} key={i} /></Link>)
                } */}

            </div>


        </div>
    )
}

export default People;