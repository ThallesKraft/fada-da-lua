//------------------------------------------------
  const bot = require("./extra/json/bot.json");
const emoji = require("./extra/json/emoji.json");
const imagem = require("./extra/json/imagem.json");
require("./extra/hospedagem.js");
require("./extra/dependencias.js");


//------------------------------------------------

const express = require("express");
const fs = require("fs");
const c = require("colors");
const mongo = require("mongoose");
const discordModals = require('discord-modals');
const { Modal, TextInputComponent, showModal } = require('discord-modals');
    
const Discord = require("discord.js");
const client = new Discord.Client({ intents: 32767 });
const { DiscordTogether } = require('discord-together');


require('events').EventEmitter.defaultMaxListeners = 500;

  
//------------------------------------------------

client.discordTogether = new DiscordTogether(client);




client.login(bot.token); 
discordModals(client);

client.userdb = require("./src/Database/user.js")

client.MongoConnect = () => mongo.connect(process.env.database)



client.avatar = imagem.avatar;
client.emoji = emoji.gartilho;
client.prefixo = bot.prefix;
client.database = bot.database;


//------------------------------------------------

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
module.exports = client;
client.slashCommands = new Discord.Collection();
require("./src/handler")(client);
client.categories = fs.readdirSync(`./src/commands/`);
fs.readdirSync('./src/commands/').forEach(local => {
    const comandos = fs.readdirSync(`./src/commands/${local}`).filter(arquivo => arquivo.endsWith('.js'))
    for(let file of comandos) {
        let puxar= require(`./src/commands/${local}/${file}`)
        if(puxar.name) {
            client.commands.set(puxar.name, puxar)
        } 
        if(puxar.aliases && Array.isArray(puxar.aliases))
        puxar.aliases.forEach(x => client.aliases.set(x, puxar.name))
    } 
});

      process.on('multipleResolves', (type, reason, promise) => {
    console.log(c.red(`🚫 Erro Detectado\n\n` + type, promise, reason))
});
process.on('unhandRejection', (reason, promise) => {
    console.log(c.red(`🚫 Erro Detectado:\n\n` + reason, promise))
});
process.on('uncaughtException', (error, origin) => {
    console.log(c.red(`🚫 Erro Detectado:\n\n` + error, origin))
});
process.on('uncaughtExceptionMonitor', (error, origin) => {
    console.log(c.red(`🚫 Erro Detectado:\n\n` + error, origin))
});




                              
