const express = require("express");
const c = require("colors");


const app = express(); 
app.get("/", (request, response) => { 
  const ping = new Date(); 
  ping.setHours(ping.getHours() - 3); 
console.log(c.blue(`${ping.getUTCHours()}:${ping.getUTCMinutes()}:${ping.getUTCSeconds()} => Website ping recebido.`)); 
  response.sendStatus(200); 
});
app.listen(process.env.PORT);
