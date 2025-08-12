import React from "react";
import './Item.css'
import {Recording} from "../../entitys/recording/Recording.tsx";
interface Props{
    ClassName?: string
}

export const Item: React.FC<Props> = () => {
    return (
        <div className={'item'}>
            <Recording id={'das'} body={{url:'cas'}} header={'dassa'}/>

            <div className="comments">
                <div className="comments__header">Комментарии</div>
                <div className="comments__section">
                    <div className="comments__user">
                        <div className="avatar"></div>
                        <div className="">dsawsdas</div>
                    </div>
                    <div className="comments__value">dsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa fqe       feq    fqefqq</div>
                </div>
            </div>
        </div>);
};