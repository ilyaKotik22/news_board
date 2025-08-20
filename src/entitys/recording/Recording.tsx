import React from "react";
import './Recording.css'
import {Heart,MessageCircle,Star,HeartOff} from "lucide-react";
import {MyButton} from "../../weidgets/ui/MyButton/MyButton.tsx";
import {useLocation, useNavigate, useSearchParams} from "react-router-dom";
import {useWebSocket} from "../../weidgets/hooks/useWebSocket.ts";
import {useSelector} from "react-redux";
import type {RootState} from "../../weidgets/store/Store.ts";


export type RecordingProps = {
    id: string
    header: string
    value: ImageRecording | TextRecording
    favorite: number
    likes: number

}
export type ImageRecording = {
    url: string
}
export type TextRecording ={
    text: string
}
export const Recording: React.FC<RecordingProps> = ({header,value,id,favorite,likes}) => {
    const userSelector = useSelector((state:RootState) => state.appSlice.user)
    console.log(id)
    console.log(id in userSelector.likes)
    if (id in userSelector.likes){
        console.log('should by off')
    }else {
        console.log('should by on')
    }
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    const categoryParam = decodeURIComponent(searchParams.get('param1') || '');
    const loc2 = location.pathname.replace('/', '');
    const {isConnected,sendMessage} = useWebSocket('ws://localhost:8080',{
        onMessage:(ev) => {
            console.log(ev)
        }
    })

    function addValueInRecording(id:string,status:boolean,body:object){
        const userFroLS = localStorage.getItem('user')
        if (userFroLS){
            sendMessage({
                id:`messages--${loc2}--${categoryParam}/${id}`,
                action: 'update',
                body: body
            })

            if (!status){
                if ('likes' in body){
                    const newObj = { [id]: 1 }
                    sendMessage({
                        id:`messages--users_data/${userSelector.id}/likes`,
                        action: 'update',
                        body: (newObj)
                    })
                } else if ('favorite' in body){
                    const newObj = { [id]: 1 }
                    sendMessage({
                        id:`messages--users_data/${userSelector.id}/favorites`,
                        action: 'update',
                        body: (newObj)
                    })
                }
            }else {
                if ('likes' in body){
                    const newObj = { [id]: null }
                    sendMessage({
                        id:`messages--users_data/${userSelector.id}/likes`,
                        action: 'delete',
                        body: (newObj)
                    })
                } else if ('favorite' in body){
                    const newObj = {  [id]: null }
                    sendMessage({
                        id:`messages--users_data/${userSelector.id}/favorites`,
                        action: 'delete',
                        body: (newObj)
                    })
                }
            }
        }

    }
    return (
        <div className={'Recording'}>
            <div className="Recording__header">{header}</div>
            {'url' in value &&
                <div className={'Recording__image'}>
                    {value.url}
                </div>}
            {'text' in value &&
                <div className={'Recording__textArea'}>
                    {value.text}
                </div>}
            {isConnected}
            <div className="Recording__ButtonArea">
                <div className="Recording__1">
                    <MyButton type={'button'} onClick={()=> ((id in userSelector.likes) ? addValueInRecording(id,(id in userSelector.likes), {likes: likes-=1}) : addValueInRecording(id,(id in userSelector.likes), {likes: likes+=1})) } svg={((id in userSelector.likes) ?<HeartOff color="#ffff00" /> : <Heart />)} text={likes.toString()}/>
                    {/*<MyButton type={'button'} onClick={()=> ((id in userSelector.likes) ? addValueInRecording(id,buttonStatus1,setButtonStatus1, {likes: likes+=1}) : addValueInRecording(id,buttonStatus1,setButtonStatus1, {likes: likes-=1})) } svg={(buttonStatus1 ?<Heart />: <HeartOff />)} text={likes.toString()}/>*/}
                    <a onClick={()=> navigate(`/item/${id}?category=${categoryParam}&location=${loc2}`)}><MyButton type={'button'} onClick={()=> console.log('dsa')} svg={<MessageCircle />} text={''}/></a>
                </div>
                <div className="Recording__1">
                    <MyButton type={'button'} onClick={()=>((id in userSelector.favorites) ? addValueInRecording(id,(id in userSelector.favorites), {favorite: favorite-=1}) : addValueInRecording(id,(id in userSelector.favorites), {favorite: favorite+=1})) } svg={((id in userSelector.favorites) ? <Star color="#ffff00" />:<Star />)} text={favorite.toString()}/>
                </div>
            </div>
        </div>);
};