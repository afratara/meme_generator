import React from "react";
import "../style.css";
import logo from '../assets/MainLogo.png'

export default function Top(){
    return(
        <>
        <nav className="nav-el">
            <img src={logo} alt="" />
            <h2>meme generator</h2>
            <h4>ReactJS</h4>
        </nav>
   
        </>
    )
}
