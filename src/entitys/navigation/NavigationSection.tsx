import React from "react";
import './Navigation.css'
interface Props{
    ClassName?: string
    header: string,
    values: string[]
}

export const NavigationSection: React.FC<Props> = ({header,values}) => {
    return (
        <div className="NavigationSection">
            <div className="Navigation__Header">{header}</div>
            {values.map(el=>(
                <div className={'Navigation__value'}>{el}</div>
            ))}
        </div>
    );
};