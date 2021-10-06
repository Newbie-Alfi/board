import { useState } from "react";
import { useHistory } from "react-router";
import reg from "./reg.module.css"

export function Registration(){
    let history = useHistory()

    let submitForm = (e, name) => {
        console.log(history);
        history.push("/user")
        e.preventDefault();
    }

    let [name, setName] = useState()
    let [password, setPassword] = useState()

    return(
        <div className={reg.wrapper}>
            
            <form onSubmit={(e) => submitForm(e, name)}>
                <h1>Войдите в аккаунт</h1>
                <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
                <input type="password" name="sub"></input>
                <input type="submit" name="sub"></input>
            </form>
        </div>
    )
}
