import './separator.css'

let Separator = (pops) => {
    return (
        <div className ="separator">
            <h1 className="separator__text">{pops.text}</h1>
        </div>
    );
}
export default Separator;