import React from "react";
import './Navigation.css'
interface Props{
    ClassName?: string
    header: string,
    categories: string
    values: string[]
}

export const NavigationSection: React.FC<Props> = ({categories,header,values}) => {
    return (
        <div className="NavigationSection">
            <div className="Navigation__Header">{header}</div>
            {values.map(el=>(
                <a href={'/'+ categories +`/${el}`}>
                    <div className={'Navigation__value'}>{el}</div>
                </a>
            ))}
        </div>
    );
};