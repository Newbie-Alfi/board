let Main_student = (props) => {
    return(
        <div className="main_student" id="anchor-source">
            <img className="d-block w-100 main_student__photo" src={props.photo} alt="First slide"/>
            <div className="main_student__about">
            <h2 className="main_student_name">{props.name}</h2>
            <p className="main_student_main_text">{props.about_main}</p>
            <p className="main_student_second_text">{props.about_second}</p>
        </div>
     </div>
    );
}
export default Main_student;
