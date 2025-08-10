import React from "react";
import './MyButton.css'

interface Props{
    text?: string
    onClick: ()=> void
    svg?: string
}

export const MyButton: React.FC<Props> = ({ text,onClick,svg }) => {
    return (
        <button onClick={onClick} className={'MyButton'}>
            {svg}
            {text}

        </button>);
};