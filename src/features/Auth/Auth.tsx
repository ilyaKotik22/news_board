import React, {useEffect, useState} from "react";
import './Auth.css'
import {MyButton} from "../../weidgets/ui/MyButton/MyButton.tsx";
import {useWebSocket} from "../../weidgets/hooks/useWebSocket.ts";
import {ref,onValue} from "firebase/database";
import {db} from "../../../server/fireBase.ts";
import {useDispatch} from "react-redux";
import {setUser} from "../../weidgets/store/App/appSlice.ts";
import {nanoid} from "nanoid";

type User = {
    login: string
    password: string
    id: string
    favorites:object
    likes: object
}
export const Auth: React.FC = () => {
    const [login,setLogin] = useState<string>('')
    const [password,setPassword] = useState<string>('')
    const [users, setUsers] = useState<User[]>([])
    const [error,setError] = useState('')
    const dispatch = useDispatch()
    const {isConnected,sendMessage} = useWebSocket('ws://localhost:8080',{
        onMessage:(ev) => {
            console.log(ev)
        }
    })

    useEffect(() => {
        const messagesRef = ref(db, 'messages--users_data');
        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedMessages = Object.values(data) as User[];
                setUsers(loadedMessages)
            }
        });
    }, []);
    function CheckLogin(login:string,password:string):void{
        let repit = 0
        if (login && password){
            setError('')
            localStorage.removeItem('user')

            for (const usersKey in users) {
                if (users[usersKey].login === login && users[usersKey].password === password){
                    repit+=1
                    localStorage.setItem('user', JSON.stringify(users[usersKey]))
                    dispatch(setUser(
                        {
                            login:users[usersKey].login,
                            password:users[usersKey].password,
                            id: users[usersKey].id,
                            likes:  users[usersKey].likes,
                            favorites:  users[usersKey].favorites }))
                }
            }
            if (repit ===0){
                setError('error! отсутстувет такой пользователь')
            }
        }else {
            setError('Заполните все поля')
        }

    }
    const handleSubmit = () => {
        if (login && password){
            setError('')
            if (login.trim() && password.trim()){
                const message = {
                    id: nanoid(),
                    login: login,
                    password: password,
                    space: 'users_data',
                    likes: {ex:0},
                    favorites: {ex:0}
                }
                sendMessage(message)
            } else {
                setError('Заполните все поля')
            }
        }else {
            setError('Заполните все поля')
        }

    }
    return (
        <form onSubmit={handleSubmit} className={'Auth'}>
            <div className={'AuthBody'}>

                <div className="AuthBody-header">Войти</div>
                <h3>{error}</h3>
                <div className="AuthBody-section">
                    <div className="AuthBody-tittle">Логин</div>
                    <input onChange={(ev) => setLogin(ev.target.value)} type="text"/>
                </div>
                <div className="AuthBody-section">
                    <div className="AuthBody-tittle">Пароль</div>
                    <input onChange={(ev) => setPassword(ev.target.value)} type="text"/>
                </div>
                {isConnected ? <div>connected</div> : <div>Disconnected</div>}
                <div className="AuthBody-section buttons">
                    <MyButton type={'button'} onClick={() => CheckLogin(login, password)} text={'войти'}/>
                    <MyButton type={'submit'} text={'Зарегистрироваться'}/>
                </div>
            </div>
        </form>);
};