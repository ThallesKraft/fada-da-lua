const Discord = require("discord.js");
const client = require("./../../index.js");
const c = require("colors");
const { joinVoiceChannel } = require("@discordjs/voice");
const { MessageEmbed, version, CommandInteraction } = require("discord.js");

client.once("ready", () => {

console.log(c.blue(`--------------------------------------`))
console.log(c.magenta(`${client.user.tag} foi iniciada em `),
            c.random(`${client.guilds.cache.size}`),
            c.magenta(`sevidores!`))
  console.log(c.blue(`--------------------------------------`))
console.log(c.cyan(`Gerenciando ${client.users.cache.size} usuários
`))
 console.log(c.blue(`--------------------------------------`))
let channel = client.channels.cache.get("982818003919966228");

    joinVoiceChannel({
        channelId: channel.id,
        guildId: channel.guild.id,
        adapterCreator: channel.guild.voiceAdapterCreator,
    })
let versão = channel.name;
    console.log(c.green("✅ - Entrei no canal de vóz [" + channel.name + "] com sucesso."))
  
console.log(c.blue(`--------------------------------------`))

  

client.MongoConnect()
            console.log(c.gray(`🤖 - database conectada!`))
  console.log(c.blue(`--------------------------------------`))
})
           
