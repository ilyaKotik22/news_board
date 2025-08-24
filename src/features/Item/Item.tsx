import React, { useState} from "react";
import './Item.css'

import {useLocation} from "react-router-dom";
import {useGetFromFirebase} from "../../weidgets/hooks/useGetFromFirebase.ts";
import {MyButton} from "../../weidgets/ui/MyButton/MyButton.tsx";
import {useSelector} from "react-redux";
import type {RootState} from "../../weidgets/store/Store.ts";
import {nanoid} from "nanoid";
import {CommentInput} from "../../weidgets/ui/input/MyInput.tsx";
import {useWebSocket} from "../../weidgets/hooks/useWebSocket.ts";

interface Props{
    ClassName?: string
}
type Item = {
    [key: string]: {
        user: string
        comment:string
    }
}
export const Item: React.FC<Props> = () => {
    const location = useLocation()
    const id = location.pathname.split('/')[location.pathname.split('/').length-1]
    const recordings = useGetFromFirebase('category','topic', id) || []
    const userSelector = useSelector((state:RootState)=> state.appSlice.user.login)
    const [comment,setComment] = useState('')
    const commentsArea: { user: string; comment: string; }[] = []
    const {isConnected,sendMessage} = useWebSocket('ws://localhost:8080',{
        onMessage:(ev) => {
            console.log(ev)
        }
    })
    const addComment = ()=>{
        const newId = nanoid()
        const body = {[newId]: {
                id:newId,
                user: userSelector,
                comment: comment,
            }}
        sendMessage({
            id:`messages--${recordings[5]}/${id}/comments`,
            action: 'update',
            body: body
        })
    }
    if (recordings[0]){
        Object.keys(recordings[0]).forEach(key => {
            const comment = recordings[0] as unknown as Item;
            const item = comment[key]
            commentsArea.push({user:item.user,comment:item.comment})
        });

        return (
            <div className={'item'}>
                {isConnected}
                <div className="comments">
                    <h1>{recordings[2] as unknown as string}</h1>
                    <br/>
                    <div>{recordings[6] as unknown as string}</div>
                </div>
                <div className="comments">
                    <div className="comments__addArea">Добавить коменнтарий</div>
                    <CommentInput value={comment} onChange={setComment}/>
                    <MyButton onClick={()=> addComment()} type={'button'} text={'Добавить'}/>
                </div>
                <div className="comments">
                <div className="comments__header">Комментарии</div>
                    {commentsArea.map((el)=>{
                        if (el.user){
                            return (
                                <div key={nanoid()} className="comments__section">
                                    <div className="comments__user">
                                        <div className="avatar"></div>
                                        <div className="">{el.user}</div>
                                    </div>
                                    <div className="comments__value">{el.comment}</div>
                                </div>
                            )
                        }

                    })}
                </div>
            </div>);
    }

};