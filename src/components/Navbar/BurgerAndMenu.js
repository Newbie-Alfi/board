import React, { useState } from 'react';
import "./Navbar.css"
import './bur.css'

export function BurgerAndMenu(){
    let [currentClassList, setCurrentClassList] = useState(false)

    let sources = ['Ученый совет', 'Международная деятельность', 'Библиотека РГЭУ РИНХ', 'Ректорат', 'Кадровая работа', 'Юридическая клиника',
        'Институт Магистратуры', 'Воспитательная и спортивно массовая работа', 'Профсоюзная организация преподавателей', 'Филиалы', 'Медиацентр', 'Колледж РГЭУ (РИНХ)',
        'Центр развития кальеры и практической подготовки', 'Службы университеты', 'УМЦ', 'РРО ВЭО России']

    return(
        <div className="nav__right-elements">
            <div onClick={() => setCurrentClassList(!currentClassList)} className={currentClassList === false ? 'burger' : 'burger bur__fixed'}>
                <span className={currentClassList === false ? 'burger__line' : 'burger__line bur__active'}></span>
            </div>
            <div className={currentClassList === false ? 'menu' : 'menu m-active'}>
                <div className={currentClassList === false ? 'menu__links' : 'menu__links mls-active'}>
                    {
                        sources.map( source => <a className = {currentClassList === false ? 'menu__link' : 'menu__link ml-active'} href={''} key={source + sources.indexOf(source)}>{source}</a>)
                    }
                </div>
            </div>
        </div>
    );
}