import React, {useState} from "react";
import './Auth.css'
import {MyButton} from "../../weidgets/ui/MyButton/MyButton.tsx";


export const Auth: React.FC = () => {
    const [login,setLogin] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    return (
        <div className={'Auth'}>
            <div className={'AuthBody'}>
                <div className="AuthBody-header">Войти</div>
                <div className="AuthBody-section">
                    <div className="AuthBody-tittle">Логин</div>
                    <input onChange={(ev) => setLogin(ev.target.value)} type="text"/>
                </div>
                <div className="AuthBody-section">
                    <div className="AuthBody-tittle">Пароль</div>
                    <input onChange={(ev) => setPassword(ev.target.value)} type="text"/>
                </div>
                <div className="AuthBody-section buttons">
                    <MyButton onClick={() => console.log()} text={'войти'}/>
                    <MyButton onClick={() => console.log()} text={'Зарегистрироваться'}/>
                </div>
            </div>
        </div>);
};