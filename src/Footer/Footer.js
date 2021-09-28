import './footer.css'
import '.././fonts/fonts.css'
import { MyContext } from '../App'
import rinh1 from './RINH1.jpg'
import rinh2 from './RINH2.jpg'
import rinh3 from './RINH3.jpg'
import rinh4 from './RINH4.png'
import rinh5 from './RINH5.png'
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
            <FooterItem img = {rinh1} title="Приемная комисия"  text_str1="Телефон: " text_str2="Факс: " text_str3="E-mail: " source_str1 = "+7(777)777-77-77" source_str2 = "+7(777)777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"/>
            <FooterItem img = {rinh2} SocNet={<SocNet/>} title="Социальные сети"  text_str1="" text_str2="" text_str3="" source_str1 = "" source_str2 = "" source_str3 = ""/>
            <FooterItem img = {rinh3} title="Медиацентр"  text_str1="Телефон: " text_str2="Факс: " text_str3="E-mail: " source_str1 = "+7 (777) 777-77-77" source_str2 = "+7 (777) 777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"/>
            <FooterItem img = {rinh4} title="Абитуриенту"  text_str1="Телефон: " text_str2="Факс: " text_str3="Карта сайта" source_str1 = "+7 (777) 777-77-77" source_str2 = "+7 (777) 777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"/>
            <FooterItem img = {rinh5} title="Вопросы?"  text_str1="Анкетирование: " text_str2="Обратись: " text_str3="E-mail: " source_str1 = "+7 (777) 777-77-77" source_str2 = "+7 (777) 777-77-77" source_str3 = "Oversleep-1-Lesson@gg.ru"></FooterItem>
        </footer>
    );
}