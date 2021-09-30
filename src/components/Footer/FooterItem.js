import './footer__item.css'
import { useState } from 'react';

export function FooterItem(props){
    let [currentClass, setCurrentClass] = useState(false);
    return (
        <div className="footer__item" onMouseOver={() => setCurrentClass(true)} onMouseLeave={() => setCurrentClass(false)}>
            <div className={currentClass === false ? "footer__text-wrapper show" : "footer__text-wrapper hide"}>
                <h3 className="footer__title">{props.title}</h3>
                <div>{props.SocNet}</div>
                <p className="footer__text">{props.text_str1}<a name="footer" href={props.source_str1}>{props.source_str1}</a></p>
                <p className="footer__text">{props.text_str2}<a href={props.source_str2}>{props.source_str2}</a></p>
                <p className="footer__text">{props.text_str3}<a href={props.source_str3}>{props.source_str3}</a></p>
            </div>
            <div className="dimming-footer" style={currentClass === false ? {} : {opacity : 0.3}}></div>
            <img className="footer__bg-photo" style = {currentClass === false ? {} : {transform: "scale(1.2)"}} src={props.img} alt="sorry, restart the site"/>
        </div>
    );
}