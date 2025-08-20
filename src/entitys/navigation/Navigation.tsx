import React from "react";
import './Navigation.css'
import {NavigationSection} from "./NavigationSection.tsx";

export const Navigation: React.FC = () => {
    return (
        <div className={'Navigation'}>
            <br/><br/><br/>
            <NavigationSection categories={'main'} header={'Навигация'} values={['Популярное','Лента']}/>
            <NavigationSection categories={'topic'} header={'Темы:'} values={['Политика','Экономика','Технологии','Наука','Общество']}/>
        </div>);
};