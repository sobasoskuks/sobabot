const Discord = require("discord.js");
const client = new Discord.Client({fetchAllMembers:true})
//UPTIME ROBOT (WEB)
const { get } = require("snekfetch");
const http = require("http");
const express = require("express");
const app = express();
const bot = client 
const { inspect } = require("util")
//

app.get("/", (request, response) => {
  console.log("Chek you bot");
  response.sendStatus(200);
})
app.listen(process.env.PORT);
setInterval(() => {

http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.on("ready", async () => {
  console.log(`${client.user.tag} is online!`);
   const status = [
    `https://bit.ly/sobabot`,
    `${client.users.cache.size} Users`, //gunanya untuk count user
    `${client.guilds.cache.size} Guilds`, //gunanya untuk count server yang dimasuki oleh bot
    `//help`
    ]
  setInterval(() => {
    client.user.setActivity(status[Math.floor(Math.random() * status.length)], {type : "STREAMING"}) //watching bisa kalian ganti sama playing dan semacamnya
  }, 5000)
});
client.on("message", message => { 

  //command handler :V kwwo
const prefix = "//"
if(!message.content.startsWith(prefix)) return;
let msg = message.content.toLowerCase();
let args = message.content.slice(prefix.length).trim().split(" ");
let cmd = args.shift().toLowerCase();
let command = cmd;
  
try {
    const commandsFile = require(`./commands/${cmd}.js`);
    commandsFile.run(client, message, args);
  } catch (e) {
    return message.reply("Command Not Found")
  }
  
})

client.login(process.env.BOT_TOKEN);
