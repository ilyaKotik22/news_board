import {WebSocketServer} from "ws";
import {db} from "./fireBase";
import { ref, set, push } from 'firebase/database';
const wss = new WebSocketServer({port:8080})

type Message ={
    user:string
    content: string
    timestamp: Date,
    space: string

}
wss.on('connection',(ws)=>{
    console.log('new client connected')

    ws.on('message',async (data) => {
        const message: Message = JSON.parse(data.toString())
        console.log('received:', message)


        // Сохраняем в Firebase
        const messagesRef = ref(db, 'messages--' + `${message.space}`);
        const newMessageRef = push(messagesRef);
        await set(newMessageRef, message);



    })

    ws.on('close',()=> console.log('Client disconnected'))
})
console.log('WebSocket server running on ws://localhost:8080');