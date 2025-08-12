import React, {type JSX} from "react";
import './MyButton.css'

interface Props{
    text?: string
    onClick: ()=> void
    svg?: JSX.Element
}

export const MyButton: React.FC<Props> = (Props) => {
    return (
        <button onClick={Props.onClick} className={'MyButton'}>

            <span className="'ss">{Props.svg}</span>
            <span>{Props.text}</span>


        </button>);
};