import './separator.css'
import React from 'react';

export default React.memo(function Separator(props){
    console.log(props.text)
    return (
        <div className ="separator">
            <h1 className="separator__text">{props.text}</h1>
        </div>
    );
})