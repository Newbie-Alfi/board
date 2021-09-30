import React, {useRef} from 'react'
import { useAnchorCreator } from '../../hooks/useAnchorCreator.js'
import Student from './Student.js'
import './Students.css'
import students from '../../db/students.json'

export function Students(){
    const anchor = useRef();
    useAnchorCreator(anchor);
    return(
        <ul className="anchor__source students-list" id="anchor__source" ref={anchor}>
            {
                students.map( student => <Student photo={student.photo} name={student.name} about={student.about} rating={student.rating} group={student.group} key={Date.now() + Math.random()}/>)
            }
        </ul>
    )
}