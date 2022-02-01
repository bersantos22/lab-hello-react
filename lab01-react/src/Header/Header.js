import React from "react";
import './Header.css'
import image from '../images/ironhack-logo-xs.png';
import image2 from '../images/menu-top.svg'

function Header(){
    return(
        <header class='header'>
            <img class='logo' src={image} alt='iron'/>
            <img class='menu' src={image2} alt="menu"/>
        </header>
    )
};
export default Header;