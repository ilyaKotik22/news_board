import React from "react";
import {Recording} from "./Recording.tsx";


import './RecordingArea.css'
export const RecordingArea: React.FC = () => {
    return (
        <div className={'RecordingArea'}>
            <Recording id={'sad'} header={'sd'} body={{url: 'dsaw'}} />
            <Recording id={'ww'} header={'sd'} body={{text: 'dsaw'}} />
            <Recording id={'wfww'} header={'sd'} body={{url: 'dsaw'}} />
            <Recording id={'wbdfrwew'} header={'sd'} body={{url: 'dsaw'}} />
        </div>);
};