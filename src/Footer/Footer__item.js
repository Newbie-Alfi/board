import './footer.css'
import '.././fonts/fonts.css'

let ShowMePicture = (e) =>{
        let currentElement = e.target;
        let text = currentElement.parentNode.querySelector('.footer__text-wrapper');
        let picture = currentElement.parentNode.querySelector('.footer__bg-photo');
        picture.style.transform = 'scale('+ 1.2 +')';
        text.style.opacity = 0;
        text.style.transition = "opacity .3s";
}

let ShowMeText = (e) =>{
    let currentElement = e.target;
    let text = currentElement.parentNode.querySelector('.footer__text-wrapper');
    let picture = currentElement.parentNode.querySelector('.footer__bg-photo');
    picture.style.transform = 'scale('+ 1 +')';
    text.style.opacity = 1;
}

let FooterItem = (props) =>{
    return (
        <div className="footer__item">
            <div className="footer__text-wrapper">
                <h3 className="footer__title">{props.title}</h3>
                <div>{props.SocNet}</div>
                <p className="footer__text">{props.text_str1}<a name="footer" href={props.source_str1}>{props.source_str1}</a></p>
                <p className="footer__text">{props.text_str2}<a href={props.source_str2}>{props.source_str2}</a></p>
                <p className="footer__text">{props.text_str3}<a href={props.source_str3}>{props.source_str3}</a></p>
            </div>
            <div onMouseOver={ShowMePicture} onMouseLeave={ShowMeText} className="dimming-footer"></div>
            <img src={props.img} className="footer__bg-photo"/>
        </div>
    );
}

export default FooterItem;