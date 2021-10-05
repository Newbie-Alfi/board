import "./Navbar.css"
import './bur.css'
import React from 'react';
import { BurgerAndMenu } from "./BurgerAndMenu.js";
import { NavLink } from "react-router-dom";

export function Navbar(){
        return(
        <nav className="anchor__source nav">
            <ul className="nav__list" id="menu">
                {/* <NavLink className="nav__source" to="">О РИНХе</NavLink> */}
                <NavLink className="nav__source" to="/registration">Личный кабинет</NavLink>
                <NavLink className="nav__source" to="/board">Главная</NavLink>
            </ul>
            <BurgerAndMenu/>
        </nav>
    );
}