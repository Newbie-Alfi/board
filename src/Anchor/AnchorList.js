import "./anchor.css"
import React, { Component } from 'react';
import Anchor from "./Anchor.js"
import ReactDOM from 'react-dom';
import CountAnchor from '.././StartJS/countAnchor';

let AnchorList = () => {
        return(
        <div className="anchors">
            <Anchor Y = "0"/>
            <Anchor Y = "1500"/>
            <Anchor Y = "5000"/>
        </div>
    );
}
export default AnchorList;

































// let AddingAnchors = () =>{
//     let anchQuantity = document.querySelectorAll('.anchor__source');

//     let anchY = [];
//     let anchList = [];
//     let i;
//     for(i = 0; i < anchQuantity.length; i++){
//         anchY[i] = anchQuantity[i].getBoundingClientRect().top + window.pageYOffset;

//         anchList[i] = <Anchor Y={anchY[i]} key ={i} ></Anchor>;
//     }
//     return anchList;

// }

// let CountAnchor = () =>{
//     let anchQuantity = document.querySelectorAll('.anchor__source');
//     return anchQuantity.length;
// }
