import reg from "./reg.module.css"

export function Registration(){

    return(
        <div className={reg.wrapper}>
            <div className={reg.formWrapper}>
                <form onSubmit={(e) => {console.log(e); e.preventDefault()}}>
                    <input></input>
                    <input type="submit"></input>
                </form>
            </div>
        </div>
    )
}