import React, {useRef} from 'react';
import { useAnchorCreator } from '../../hooks/useAnchorCreator.js'
import board from '../../img/header/board_logo.svg'
import { Navbar } from '../Navbar/Navbar';
import header from '../../img/header/header.jpg'
import './header.css';

export function Header() {
    const anchor = useRef();
    useAnchorCreator(anchor);

    return (
        <header className="header" id="pos1" ref={anchor}>
            <div className="header__container">
                <Navbar/>
                <div ></div>
                <img src={header} className="header__background" alt='restart the site'></img>
                <div className="dimming"></div>
                <div className="header__center">
                    <img className="header__img" src={board} alt='restart the site'></img>
                    <h2 className="header__title">Мы вас ценим</h2>
                </div>
            </div>
        </header>
    );
};