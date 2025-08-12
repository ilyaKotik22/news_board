import React, {useState} from "react";
import './createRecPopup.css'
import {createPortal} from "react-dom";
import {MyButton} from "../../weidgets/ui/MyButton/MyButton.tsx";

interface Props{
    ClassName?: string
}

export const CreateRecPopup: React.FC<Props> = () => {
    const [TypeChange, setTypeChange] = useState('Текст')
    const typeRec:string[] = ['Текст','Изображение']
    return createPortal(
        <div className={'createRecPopup'}>
            <div className="createRecPopup__body">
                <div className="createRecPopup__header">Создать пост</div>
                <div className="createRecPopup__type">
                    {typeRec.map(el=>{
                        if (el === TypeChange){
                            return (
                                <div className="control">{el}</div>
                            )
                        }else {
                            return (
                                <div onClick={()=> setTypeChange(el)} className="">{el}</div>
                            )
                        }
                    })}

                </div>

                <div className="createRecPopup__name">
                    <div className="">Название Записи</div>
                    <input className={'mod'} type="text"/>
                </div>

                {TypeChange === 'Текст' ?
                    <div className={'createRecPopup__workSpace'}>
                        <div className="">Текст Записи</div>
                        <div className="createRecPopup__name">
                            <textarea className={'mod'} id={'name'}/>
                        </div>
                    </div>
                    :
                    <>
                        <div className="createRecPopup__workSpace">Изображение Записи</div>
                        <input type={"file"}/>
                    </>
                }
                <div className="createRecPopup__buttonArea">
                    <MyButton onClick={()=> console.log('ss')} text={'Отмена'}/>
                    <MyButton onClick={()=> console.log('ss')} text={'Опубликовать'}/>
                </div>
            </div>
        </div>
        , document.body);
};