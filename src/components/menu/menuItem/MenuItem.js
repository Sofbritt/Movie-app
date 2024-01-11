import React from "react";
import './MenuItem.css';
import { useState } from "react";
import Dropdown from "../../dropdown/Dropdown";



function MenuItem(props) {
    const [isDropdownVisible, setDropdownVisible] = useState(false)


    const handleMouseEnter = () => {
        setDropdownVisible(true)
    }
    const handleMouseOver = () => {
        setDropdownVisible(false)
    }


    return (
        <div className="menu" onMouseEnter={handleMouseEnter} onClick={handleMouseOver}  >

            <span className="menu-span">
                {props.name}


            </span>
            {isDropdownVisible && <Dropdown menuItems={props.menuItems} title={props.title} img={props.img} />}
        </div>
    )
}

export default MenuItem;