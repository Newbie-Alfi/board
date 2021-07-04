import React from "react";
import "./anchor.css"
import AnchorList from "./AnchorList";
// import React, { Component } from 'react';

function ScrollToAnchor(e){
    
    const anch = e.target; //Берем элемент к которому мы обратились через OnClick

    const anchorY = anch.getAttribute('data-goto'); //Безжалостно отбираем данные из аттрибута нашего элемента 
    window.scrollTo({
        top:  anchorY,
        behavior: "smooth"
    });
    e.preventDefault();
}


const Anchor = (props) => {
        return(
        <a onClick={ScrollToAnchor} className="anchor"data-goto={props.Y}></a>
    );
}

export default Anchor;