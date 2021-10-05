import { useState } from 'react'
import selPanel from './selectionPanel.module.css'

export function SelectionPanel (props) {
    let options = ["КТиИБ", "ТД"]

    return (
        <div className={selPanel.wrapper}>
            <h1 className={selPanel.title}>Лидеры проектной деятельности</h1>
            <p className={selPanel.subTitle}>РГЭУ (РИНХ)</p>
            <form className={selPanel.form}>
                <select className={selPanel.select} value={props.value} onChange={(e) => {props.updateCriteria(e.target.value)}}>
                    {
                        options.map(option => <option value={option} key={Date.now() + Math.random()}>{option}</option>)
                    }
                </select>
            </form>
        </div>
    )
}