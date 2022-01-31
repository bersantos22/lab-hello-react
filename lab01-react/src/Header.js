import React from "react";
import './Header.css'
import image from './images/ironhack-logo-xs.png';
import image2 from './images/menu-top-xs.png'

function Header(){
    return(
        <div class='header-div'>
            <img class='logo' src={image} alt='iron'/>
            <img class='menu' src={image2} alt=""/>
        </div>
    )
};
export default Header;