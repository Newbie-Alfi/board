import "./Navbar.css"
import './bur.css'
import React, { useState } from 'react';

export function Burger(){

    let [currentClass, setCurrentClass] = useState(false);

    return(
        <div onClick={() => setCurrentClass(!currentClass)} className={ currentClass === false ? 'burger' : "burger bur__fixed"}>
            <span className={currentClass === false ? 'burger__line' : "burger__line bur__active"}></span>
        </div>
    );
}
