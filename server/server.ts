import {WebSocketServer} from "ws";
import {db} from "./fireBase";
import { ref, set,update } from 'firebase/database';
const wss = new WebSocketServer({port:8080})
 type Message ={
    id: string
    header: string
    space: string
    value: string
    likes: number
    favorite: number
    comments: object
}
type Action = {
    id: string
    action: 'update' | 'delete'
    body: object
}
wss.on('connection',(ws)=>{
    console.log('new client connected')

    ws.on('message',async (data) => {
        const message: Message | Action = JSON.parse(data.toString())
        console.log('received:', message)

        if ('action' in message){
            console.log('should be change')
            const recordRef = ref(db, message.id)

            await update(recordRef, message.body)
        }else {
            // Сохраняем в Firebase

            const messagesRef = ref(db, 'messages--' + `${message.space}/${message.id}`);

            await set(messagesRef, message);
        }




    })

    ws.on('close',()=> console.log('Client disconnected'))
})
console.log('WebSocket server running on ws://localhost:8080');
//npx tsx server.ts