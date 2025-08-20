import {useLocation, useSearchParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {RecordingProps} from "../../entitys/recording/Recording.tsx";
import {onValue, ref} from "firebase/database";
import {db} from "../../../server/fireBase.ts";

export function useGetFromFirebase(...valueValue: string[]){
    const location = useLocation();
    const [searchParams] = useSearchParams();
    const [recordings, setRecordings] = useState<RecordingProps[]>();

    const categoryParam = decodeURIComponent(searchParams.get(valueValue[0]) || 'kk');
    const loc2 = (valueValue[1] ? valueValue[1] : location.pathname.replace('/', ''))
    console.log(`messages--${loc2}--${categoryParam}`)
    useEffect(() => {
        if (!categoryParam) return;
        const messagesRef = ref(db,valueValue[2] ? `messages--${loc2}--${categoryParam}/${valueValue[2]}` : `messages--${loc2}--${categoryParam}` ) || [];

        onValue(messagesRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const loadedMessages = Object.values(data) as RecordingProps[];
                setRecordings(loadedMessages)

            }else {
                setRecordings([])
            }
        });
    }, [categoryParam,loc2]);
    return recordings
}