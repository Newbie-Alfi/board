import "./Navbar.css"
import './bur.css'
import React from 'react';
import { BurgerAndMenu } from "./BurgerAndMenu.js";
import '.././fonts/fonts.css'

export function Navbar(){
        return(
        <nav className="anchor__source nav">
            <ul className="nav__list" id="menu">
                <a className="nav__source" href="">О РИНХе</a>
                <a className="nav__source" href="">Личный кабинет</a>
                <a className="nav__source" href="">Главная</a>
            </ul>
            <BurgerAndMenu/>
        </nav>
    );
}