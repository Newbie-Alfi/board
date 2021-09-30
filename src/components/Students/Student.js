import './Students.css'

let Student = (props) => {
    return(
            <a className="student">
                <img src={props.photo} alt="" className="student__img"/>
                <div className="student__name">{props.name}</div>
                <div className="student__about">{props.about}</div>
                <div className="student__dimming"></div>
                {/* <div className="student__raiting">{props.rating}</div> */}
                <div className="student__group">{props.group}</div>
            </a>
    );
}
export default Student;