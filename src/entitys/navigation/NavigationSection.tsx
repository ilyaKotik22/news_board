import React from "react";
import './Navigation.css'
import {useNavigate} from "react-router-dom";
interface Props{
    ClassName?: string
    header: string,
    categories: string
    values: string[]
}

export const NavigationSection: React.FC<Props> = ({categories,header,values}) => {
    const navigate = useNavigate();
    return (
        <div className="NavigationSection">
            <div className="Navigation__Header">{header}</div>
            {values.map(el=>(
                <a onClick={()=> navigate(`/${categories}?param1=${el}`)}>
                    <div className={'Navigation__value'}>{el}</div>
                </a>
            ))}
        </div>
    );
};