import { WebSocketServer } from "ws";
import {client} from "@repo/db/client"

const server = new WebSocketServer({
    port:3001
})

server.on("connection",(socket)=>{
    client.user.create({
        data : {
            id: Math.floor(Math.random() * 1000), 
            email : Math.random().toString(),
            name : Math.random().toString()
        }
    })
})