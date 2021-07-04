import React from 'react';
import './header.css';
import board from './board_logo.svg'
import Navbar from '../Navbar/Navbar';
import header from './header.jpg'
import '.././fonts/fonts.css'
const Header = () => {
    return (
        <header className="header" id="pos1">
            <div className="header__container">
                <Navbar/>
                <div ></div>
                <img src={header} className="header__background"></img>
                <div className="dimming"></div>
                <div className="header__center">
                    <img className="header__img" src={board}></img>
                    <h2 className="header__title">Мы вас ценим</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;