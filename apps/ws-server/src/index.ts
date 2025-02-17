import { WebSocketServer } from "ws";
// import { client } from "@repo/db/client";

const server = new WebSocketServer({
  port: 3001,
});

server.on("connection", (ws) => {
  ws.send("HI"); 
});
