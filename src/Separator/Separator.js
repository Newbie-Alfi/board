import './separator.module.css'

let separator = {
    'wrapper' : 'separator_wrapper__3zRND',
    'wrapper__text' : 'separator_wrapper__text__3dXCf'
}
let Separator = (pops) => {
    return (
        <div className ={separator.wrapper}>
            <h1 className={separator.wrapper__text}>{pops.text}</h1>
        </div>
        // <div className ="wrapper">
        //     <h1 className="wrapper__text"></h1>
        // </div>
    );
}
export default Separator;