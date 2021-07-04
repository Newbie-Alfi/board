import "./Navbar.css"
import './bur.css'
import React, { Component } from 'react';
import BurgerAndMenu from "./BurgerAndMenu.js";

// import {Link} from 'react-router-dom';
import '.././fonts/fonts.css'
class Navbar extends React.Component{

    render(){
            return(
            <nav className="anchor__source nav">
                <ul className="nav__list" id="menu">
                    <a className="nav__source" name="navbar" href="">О РИНХе</a>
                    <a className="nav__source" href="">Личный кабинет</a>
                    <a className="nav__source" href="">Главная</a>
                </ul>
                <BurgerAndMenu/>
            </nav>
        );
    }
}

export default Navbar;