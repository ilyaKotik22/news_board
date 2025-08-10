import React from "react";
import './Navigation.css'
import {NavigationSection} from "./NavigationSection.tsx";


export const Navigation: React.FC = () => {
    return (
        <div className={'Navigation'}>
            <br/><br/><br/>
            <NavigationSection header={'Навигация'} values={['Популярное','Лента']}/>
            <NavigationSection header={'Темы:'} values={['Политика','Экономика','Технологии','Наука','Общество']}/>
            <NavigationSection header={'География:'} values={['Весь мир','Россия','Китай','США']}/>
        </div>);
};