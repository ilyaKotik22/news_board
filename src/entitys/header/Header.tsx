import React, {useEffect} from "react";
import './Header.css'
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../weidgets/store/App/appSlice.ts";
import type {RootState} from "../../weidgets/store/Store.ts";
import {ChangeStatus} from "../../weidgets/store/popups/popupSlice.ts";
import {CreateRecPopup} from "../../features/createRecPopup/createRecPopup.tsx";
import {onValue, ref} from "firebase/database";
import {db} from "../../../server/fireBase.ts";


export const Header: React.FC= () => {
    const popupCreateSelector = useSelector((state:RootState)=> state.popupSlice['createRecordPopup'].status)
    const dispatch = useDispatch()

    const userSelector = useSelector((state:RootState)=> state.appSlice.user)
    useEffect(() => {
        const userFroLS = localStorage.getItem('user') ||''
        if(userFroLS){
            const messagesRef = ref(db, `messages--users_data/${JSON.parse(userFroLS).id}`);
            onValue(messagesRef, (snapshot) => {
                const data = snapshot.val();
                if (data) {
                    const loadedMessages = Object.values(data);
                    dispatch(getUser({
                        id:loadedMessages[2] as string,
                        login: loadedMessages[4] as string,
                        likes:loadedMessages[3] as object,
                        favorites:loadedMessages[1] as object,
                        password: loadedMessages[5] as string}))
                }
            });
        }

    }, []);
    return (
        <>
            <header className={'header'}>
                <div className="headerSection">
                    <p>logo</p>
                </div>
            <br/>
                <div className="headerSection">
                    <input type="text"/>
                </div>
                <div  className="headerSection">
                    <div onClick={()=> dispatch(ChangeStatus({name:'createRecordPopup'}))} className="">
                        создать статью
                    </div>

                    <div className="">{userSelector.login}</div>
                    <a href="/auth">
                        <div className="profile"></div>
                    </a>
                </div>

            </header>
            {popupCreateSelector && <CreateRecPopup/>}
        </>
    );
};