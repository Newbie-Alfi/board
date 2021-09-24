import React from "react";
import "./anchor.css"

export let Anchor = (props) => { 
    let ScrollToAnchor = () => {
        window.scrollTo({
            top:  props.Y,
            behavior: "smooth"
        });
    }
    
    return <div onClick={ScrollToAnchor} className="anchor"></div>
}