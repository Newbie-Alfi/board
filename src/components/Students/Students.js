import React, {useRef} from 'react'
import { useAnchorCreator } from '../../hooks/useAnchorCreator.js'
import Student from './Student.js'
import './Students.css'
import students from '../../db/students.json'

export function Students(props){
    const anchor = useRef();
    useAnchorCreator(anchor);

    const getListOfStudents = (array, criterion) => {
        try {
            let result = [];
            let index = 0;
            array.map(item => { 
                if(item.faculty === criterion && index < 16){
                    index++
                    result.push(item)
                }
            });
            return result;
        }
        catch {
            return [];
        }
    }
    return(
        <ul className="anchor__source students-list" id="anchor__source" ref={anchor}>
            {
                getListOfStudents(students, props.criteria).map( student => <Student photo={student.photo} name={student.name} about={student.about} rating={student.rating} group={student.group} key={Date.now() + Math.random()}/>)               
            }
        </ul>
    )
}