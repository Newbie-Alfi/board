import "./Navbar.css"
import './bur.css'
import React, { Component } from 'react';

export default class Burger extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            condition: false,
            burPos: 'burger',         //bur__fixed
            burCondition: 'burger__line',      //bur__active
        };
        this.changeConditionalBurger1 = this.changeConditionalBurger1.bind(this);
    }
    changeConditionalBurger1(){
        if(this.state.condition == false){
            this.setState({
                condition: true,
                burPos:"burger bur__fixed",
                burCondition:"burger__line bur__active",
            })
        }
        else{
            this.setState({
                condition: false,
                burPos: 'burger',         //bur__fixed
                burCondition: 'burger__line',      //bur__active
            })
        }
    }
    render(){
        let burPos = this.state.burPos;
        let burCondition = this.state.burCondition;
            return(
                <div onClick={this.changeConditionalBurger1} className={burPos}>
                    <span className={burCondition}></span>
                </div>
        );
    }
}
