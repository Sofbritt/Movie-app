import React from "react";
import DropdownMenuItem from "./dropdownMenuItem/DropdownIMenuItem";
import './Dropdown.css';


const Dropdown = (props) => {


    const menuItem = props.menuItem ? props.menuItem.map((menu) =>
        <DropdownMenuItem title={menu} />
    ) : [];

    return (
        <div>
            <div className="dropdownMenu">
                <div className="movie-genres">
                    <span className="each-menu">{props.title}  </span>
                </div>

            </div>
            <div className="menue-inDropdown">
                {menuItem} <hr/>

            </div>
        </div>
    )






}



export default Dropdown;

