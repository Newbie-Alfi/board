import './footer.css'
import { MyContext } from '../../App'
import footerImg1 from '../../img/footerIMG/footerImg1.jpg'
import footerImg2 from '../../img/footerIMG/footerImg2.jpg'
import footerImg3 from '../../img/footerIMG/footerImg3.jpg'
import footerImg4 from '../../img/footerIMG/footerImg4.png'
import footerImg5 from '../../img/footerIMG/footerImg5.png'
import React, { useEffect, useRef, useContext } from 'react'
import { FooterItem } from './FooterItem'
import SocNet from './SocNet.js'

export function Footer(){
    const anchor = useRef();
    const value = useContext(MyContext);
    useEffect(()=> {
        value.updateAnchors(anchor);
    }, [])
    
    
    return (
        <footer className="anchor__source footer" ref = {anchor}>
            <FooterItem img = {footerImg1} title="Приемная комисия"  text_str1="Телефон: " text_str2="Факс: " text_str3="E-mail: " source_str1 = "+7(777)777-77-77" source_str2 = "+7(777)777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"/>
            <FooterItem img = {footerImg2} SocNet={<SocNet/>} title="Социальные сети"  text_str1="" text_str2="" text_str3="" source_str1 = "" source_str2 = "" source_str3 = ""/>
            <FooterItem img = {footerImg3} title="Медиацентр"  text_str1="Телефон: " text_str2="Факс: " text_str3="E-mail: " source_str1 = "+7 (777) 777-77-77" source_str2 = "+7 (777) 777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"/>
            <FooterItem img = {footerImg4} title="Абитуриенту"  text_str1="Телефон: " text_str2="Факс: " text_str3="Карта сайта" source_str1 = "+7 (777) 777-77-77" source_str2 = "+7 (777) 777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"/>
            <FooterItem img = {footerImg5} title="Вопросы?"  text_str1="Анкетирование: " text_str2="Обратись: " text_str3="E-mail: " source_str1 = "+7 (777) 777-77-77" source_str2 = "+7 (777) 777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"></FooterItem>
        </footer>
    );
}