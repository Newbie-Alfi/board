import './footer.css'
import '.././fonts/fonts.css'
import rinh1 from './RINH1.jpg'
import rinh2 from './RINH2.jpg'
import rinh3 from './RINH3.jpg'
import rinh4 from './RINH4.png'
import rinh5 from './RINH5.png'
import React from 'react'
import FooterItem from './Footer__item'
import Anchor from '../Anchor/Anchor'
import SocNet from './SocNet.js'

// let anchObj = React.createRef();


// export let AddingAnchors = () =>{
//     // debugger;
//     // let anchQuantity = document.querySelectorAll('.anchor__source');
//     let anchQuantity = []
//     let anchY = [];
//     let anchList = [];
//     let i;
//     for (i = 0; i < 4; i++){
//         anchQuantity[i] = anchObj.current;
//     }


//     console.log(anchQuantity[0]);
//     for(i = 0; i < anchQuantity.lenght; i++){
//         anchY[i] = anchQuantity[i].getBoundingClientRect().top + window.pageYOffset;

//         anchList[i] = <Anchor Y={anchY[i]} key ={i} ></Anchor>;
//     }
//     return anchList;
// }
// let getRef = (e) =>{
//     console.log(anchObj.current)
// }
let Footer = (props) => {
    return (
        <footer className="anchor__source footer">
            <FooterItem img = {rinh1} title="Приемная комисия"  text_str1="Телефон: " text_str2="Факс: " text_str3="E-mail: " source_str1 = "+7(777)777-77-77" source_str2 = "+7(777)777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"/>
            <FooterItem img = {rinh2} SocNet={<SocNet/>} title="Социальные сети"  text_str1="" text_str2="" text_str3="" source_str1 = "" source_str2 = "" source_str3 = ""/>
            <FooterItem img = {rinh3} title="Медиацентр"  text_str1="Телефон: " text_str2="Факс: " text_str3="E-mail: " source_str1 = "+7 (777) 777-77-77" source_str2 = "+7 (777) 777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"/>
            <FooterItem img = {rinh4} title="Абитуриенту"  text_str1="Телефон: " text_str2="Факс: " text_str3="Карта сайта" source_str1 = "+7 (777) 777-77-77" source_str2 = "+7 (777) 777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"/>
            <FooterItem img = {rinh5} title="Вопросы?"  text_str1="Анкетирование: " text_str2="Обратись: " text_str3="E-mail: " source_str1 = "+7 (777) 777-77-77" source_str2 = "+7 (777) 777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"></FooterItem>
        </footer>
    );
}

export default Footer;