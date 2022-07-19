const Discord = require("discord.js");
const client = require("./../../index.js");
const c = require("colors");
const { MessageEmbed, version, CommandInteraction } = require("discord.js");

client.once("ready", () => {


  let channel = client.channels.cache.get("982818003919966228");
let versão = channel.name;
  let node = process.version;
      let dsc = version;
    let activities = [
        `👤 - ${versão}`,
        `🌍 - Mini World`,
      `👌 - Uid: 89167905`,
      `🏓 - ${client.ws.ping}ms`,
      `🛡 - Node: ${node}, Discord.js: v${dsc}`,
      `⛏ - Versão RPG: 1.0.0`,
      `🔁 - Movendo cmds de dscjs v13 para v14`
    ];
    i = 0;
  setInterval( () => client.user.setActivity(`${activities[i++ % activities.length]}`, {
     type: "STREAMING", url: "https://twitch.tv/jazzghosttv"
                                                
      }), 10000); 
  client.user
      .setStatus("normal.")
console.log(c.yellow(`🤖 - Status online!`))
  console.log(c.blue(`--------------------------------------`))

})
