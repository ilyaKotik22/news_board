
import {useEffect, useRef, useState} from "react";

type UseWebSocketOptions = {
    onOpen?: (ev: Event) => void
    onClose?: (ev:CloseEvent) => void
    onError?: (ev:Event) => void
    onMessage?: (ev:MessageEvent) => void
}

export const useWebSocket = (
    url: string,
    options?: UseWebSocketOptions
) => {
    const [isConnected,setIsConnected] = useState(false)
    const wsRef = useRef<WebSocket | null>(null)

    useEffect(() => {
        const ws = new WebSocket(url)

        ws.onopen = (ev) =>{
            setIsConnected(true)
            options?.onOpen?.(ev)
        }

        ws.onclose = (ev) => {
            setIsConnected(false)
            options?.onClose?.(ev)
        }

        ws.onerror = (ev) => {
            options?.onError?.(ev)
        }

        ws.onmessage = (ev) => {
            options?.onMessage?.(ev)
        }

        wsRef.current = ws

        return ()=> {
            ws.close()
        }
    }, [url]);

    const sendMessage = (message: string | object) => {
        if (wsRef.current?.readyState === WebSocket.OPEN){
            const date = typeof message === 'string' ? message : JSON.stringify(message)
            wsRef.current.send(date)
        }
    }
    return {isConnected, sendMessage}
}