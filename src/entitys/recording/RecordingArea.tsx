import React from "react";
import {type ImageRecording, Recording, type TextRecording} from "./Recording.tsx";


import './RecordingArea.css'

import {useGetFromFirebase} from "../../weidgets/hooks/useGetFromFirebase.ts";

export const RecordingArea: React.FC = () => {
    const recordings = useGetFromFirebase('param1')


    const normalizeRecordingValue = (value: unknown): ImageRecording | TextRecording => {
        if (typeof value === 'string') return {text: value};
        if (typeof value === 'object' && value !== null) {
            if ('url' in value) return {url: (value as ImageRecording).url};
            if ('text' in value) return {text: (value as TextRecording).text};
        }
        return {text: ''}; // fallback
    };
    return (
        <div className={'RecordingArea'}>
            {recordings?.map((el)=>{
                return(
                    <Recording
                        id={el.id}
                        header={el.header}
                        value={normalizeRecordingValue(el.value)}
                        favorite={el.favorite}
                        likes={el.likes}
                         />
                )
            })}

        </div>
    );
};