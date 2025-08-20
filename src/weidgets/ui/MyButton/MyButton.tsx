import React, {type JSX} from "react";
import './MyButton.css'

interface Props{
    text?: string
    type:  "submit" | "reset" | "button"
    onClick?: ()=> void
    svg?: JSX.Element
}

export const MyButton: React.FC<Props> = (Props) => {
    return (
        <button type={Props.type} onClick={Props.onClick} className={'MyButton'}>

            <span className="'ss">{Props.svg}</span>
            <span>{Props.text}</span>


        </button>);
};