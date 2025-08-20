import React, {useState} from "react";
import './createRecPopup.css'
import {createPortal} from "react-dom";
import {MyButton} from "../../weidgets/ui/MyButton/MyButton.tsx";
import {ChangeStatus} from "../../weidgets/store/popups/popupSlice.ts";
import {useDispatch} from "react-redux";
import {nanoid} from "nanoid";
import {useWebSocket} from "../../weidgets/hooks/useWebSocket.ts";

interface Props{
    ClassName?: string
}

export const CreateRecPopup: React.FC<Props> = () => {
    const dispatch = useDispatch()
    const [TypeChange, setTypeChange] = useState('Текст')
    const [header,setHeader] = useState('')
    const [textarea,setTextarea] = useState('')
    const [catalog, setCatalog] = useState('')
    const catalogItems:string[] = ['Политика','Экономика','Технологии','Наука','Общество']
    const typeRec:string[] = ['Текст','Изображение']
    const formData: FormData= new FormData();
    const {isConnected,sendMessage} = useWebSocket('ws://localhost:8080',{
        onMessage:(ev) => {
            console.log(ev)
        }
    })
    console.log(isConnected)
    function createRecord(header:string, value:FormData | string){


        // formData.append('file',value)
        console.log({id:nanoid(),header:header, catalog: catalog, value:value})
        dispatch(ChangeStatus({name:'createRecordPopup'}))
        sendMessage({
            id:nanoid(),
            header:header,
            space: 'topic--'+ catalog,
            value:value,
            likes: 0,
            favorite: 0,
            comments: {
                'prop': ''
            }
        })
    }

    return createPortal(
        <div className={'createRecPopup'}>
            <div onClick={()=> dispatch(ChangeStatus({name:'createRecordPopup'}))} className="createRecPopup__background"></div>
            <div className="createRecPopup__body">
                <div className="createRecPopup__header">Создать пост</div>
                <div className="createRecPopup__type">
                    {typeRec.map(el => {
                        if (el === TypeChange) {
                            return (
                                <div className="control">{el}</div>
                            )
                        } else {
                            return (
                                <div onClick={() => setTypeChange(el)} className="">{el}</div>
                            )
                        }
                    })}

                </div>

                <div className="createRecPopup__name">
                    <div className="">Название Записи</div>
                    <input onChange={(e) => setHeader(e.target.value)} className={'mod'} type="text"/>
                </div>
                <div className="createRecPopup__type">
                    {catalogItems.map(el => {
                        if (el === catalog) {
                            return (
                                <div className="control">{el}</div>
                            )
                        } else {
                            return (
                                <div onClick={() => setCatalog(el)} className="">{el}</div>
                            )
                        }
                    })}

                </div>

                {TypeChange === 'Текст' ?
                    <div className={'createRecPopup__workSpace'}>
                        <div className="">Текст Записи</div>
                        <div className="createRecPopup__name">
                            <textarea onChange={(e) => setTextarea(e.target.value)} className={'mod'} id={'name'}/>
                        </div>
                    </div>
                    :
                    <>
                        <div className="createRecPopup__workSpace">Изображение Записи</div>
                        <input onChange={(e) => {

                            formData.append('file', e.target.files && e.target.files[0] || '');
                        }} type={"file"}/>
                    </>
                }
                <div className="createRecPopup__buttonArea">
                    <MyButton onClick={() => dispatch(ChangeStatus({name: 'createRecordPopup'}))} text={'Отмена'}
                              type={"button"}/>
                    <MyButton onClick={() => {
                        return TypeChange === 'Текст' ? createRecord(header, textarea) : createRecord(header, formData)
                    }} text={'Опубликовать'} type={"button"}/>
                </div>
            </div>
        </div>
        , document.body);
};