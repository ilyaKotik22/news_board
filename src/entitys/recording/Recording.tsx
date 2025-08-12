import React from "react";
import './Recording.css'
import {Heart,MessageCircle,Star} from "lucide-react";
import {MyButton} from "../../weidgets/ui/MyButton/MyButton.tsx";

type RecordingProps = {
    id: string
    header: string
    body: ImageRecording | TextRecording

}
type ImageRecording = {
    url: string
}
type TextRecording ={
    text: string
}
export const Recording: React.FC<RecordingProps> = ({header,body,id}) => {

    return (
        <div className={'Recording'}>
            <div className="Recording__header">{header}</div>
            {'url' in body &&
                <div className={'Recording__image'}>
                    {body.url}
                </div>}
            {'text' in body &&
                <div className={'Recording__textArea'}>
                    {body.text}
                </div>}

            <div className="Recording__ButtonArea">
                <div className="Recording__1">
                    <MyButton onClick={()=> console.log('dsa')} svg={<Heart />} text={'1'}/>
                    <a href={'/item/' + id}><MyButton onClick={()=> console.log('dsa')} svg={<MessageCircle />} text={'1'}/></a>
                </div>
                <div className="Recording__1">
                    <MyButton onClick={()=> console.log('dsa')} svg={<Star />} text={'1'}/>
                </div>
            </div>
        </div>);
};