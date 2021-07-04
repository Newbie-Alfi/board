import "./Navbar.css"
import './bur.css'
import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class BurgerAndMenu extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            condition: false,
            burPos: 'burger',         //bur__fixed
            burCondition: 'burger__line',      //bur__active
            menu:'menu',             //m-active
            menuLinks: 'menu__links',      // mls-active
            menuLink: 'menu__link'    // ml-active id="trigger"
        };
        this.changeConditionalBurger = this.changeConditionalBurger.bind(this);
    }
    changeConditionalBurger(){
        if(this.state.condition == false){
            this.setState({
                condition: true,
                burPos:"burger bur__fixed",
                burCondition:"burger__line bur__active",
                menu:"menu m-active",
                menuLinks:"menu__links mls-active",
                menuLink:"menu__link ml-active"
            })
        }
        else{
            this.setState({
                condition: false,
                burPos: 'burger',         //bur__fixed
                burCondition: 'burger__line',      //bur__active
                menu:'menu',             //m-active
                menuLinks: 'menu__links',      // mls-active
                menuLink: 'menu__link'    // ml-active id="trigger"
            })
        }
    }
    render(){
        let burPos = this.state.burPos;
        let burCondition = this.state.burCondition;
        let menu = this.state.menu;
        let menuLinks = this.state.menuLinks;
        let menuLink = this.state.menuLink;
        
            return(
                <div className="nav__right-elements">
                    <div onClick={this.changeConditionalBurger} className={burPos}>
                        <span className={burCondition}></span>
                    </div>
                    <div className={menu}>
                        <div className={menuLinks}>
                            <a href="#" className={menuLink}>Ученый совет</a>
                            <a href="#" className={menuLink}>Международная деятельность</a>
                            <a href="#" className={menuLink}>Библиотека РГЭУ РИНХ</a>
                            <a href="#" className={menuLink}>Ректорат</a>
                            <a href="#" className={menuLink}>Кадровая работа</a>
                            <a href="#" className={menuLink}>Юридическая клиника</a>
                            <a href="#" className={menuLink}>Институт Магистратуры</a>
                            <a href="#" className={menuLink}>Воспитательная и спортивно массовая работа</a>
                            <a href="#" className={menuLink}>Профсоюзная организация преподавателей</a>
                            <a href="#" className={menuLink}>Филиалы</a>
                            <a href="#" className={menuLink}>Медиацентр</a>
                            <a href="#" className={menuLink}>Колледж РГЭУ (РИНХ)</a>
                            <a href="#" className={menuLink}>Центр развития кальеры и практической подготовки</a>
                            <a href="#" className={menuLink}>Службы университеты</a>
                            <a href="#" className={menuLink}>УМЦ</a>
                            <a href="#" className={menuLink}>РРО ВЭО России</a>
                        </div>
                    </div>
                </div>
        );
    }
}











// import "./Navbar.css"
// import './bur.css'
// import Burger from "./Burger.js";
// import React, { Component } from 'react';

// export default class BurgerAndMenu extends React.Component{
//     constructor(props){
//         super(props)

//         this.state = {
//             condition: false,
//             menu:'menu',             //m-active
//             menuLinks: 'menu__links',      // mls-active
//             menuLink: 'menu__link'    // ml-active id="trigger"
//         };
//         this.changeConditionalBurger = this.changeConditionalBurger.bind(this);
//     }
//     changeConditionalBurger(){
//         if(this.state.condition == false){
//             this.setState({
//                 condition: true,
//                 menu:"menu m-active",
//                 menuLinks:"menu__links mls-active",
//                 menuLink:"menu__link ml-active"
//             })
//         }
//         else{
//             this.setState({
//                 condition: false,
//                 menu:'menu',             //m-active
//                 menuLinks: 'menu__links',      // mls-active
//                 menuLink: 'menu__link'    // ml-active id="trigger"
//             })
//         }
//     }
//     render(){
//         let menu = this.state.menu;
//         let menuLinks = this.state.menuLinks;
//         let menuLink = this.state.menuLink;
//             return(
//                 <div className="nav__right-elements">
//                     <Burger onClick={this.changeConditionalBurger}/>
//                     <div className={menu}>
//                         <div className={menuLinks}>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                             <a href="#" className={menuLink}>Ahahahaha</a>
//                         </div>
//                     </div>
//                 </div>
//         );
//     }
// }

