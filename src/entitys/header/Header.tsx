import React from "react";
import './Header.css'



export const Header: React.FC= () => {
    return (
        <>
            <header className={'header'}>
                <div className="headerSection">
                    <p>logo</p>
                </div>
                <div className="headerSection">
                    <input type="text"/>
                </div>
                <div className="headerSection">
                    создать статью
                    <a href="/auth">
                        <div className="profile"></div>
                    </a>
                </div>

            </header>

        </>
    );
};