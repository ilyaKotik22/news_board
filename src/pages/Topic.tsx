import React from "react";
import {RecordingArea} from "../entitys/recording/RecordingArea.tsx";



export const TopicPage: React.FC = () => {
    return (
        <div style={{display: 'flex',marginTop:80,justifyContent:'space-between'}} className={''}>
            <RecordingArea/>
        </div>);
};