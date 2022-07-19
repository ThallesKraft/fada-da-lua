
const Discord = require("discord.js")
const { inspect } = require('util')

const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js')
const Bot = require("discord.js")

module.exports = {
    name: "eval",
    aliases: ["ev", "e"],
    
    
run: async(client, message, args) => {
  
  let owner = ['882913524291088384','423095096897175552', '850134703473426493'] 

  //Se vc estive vendo, nunca coloque client.token pois irá aparecer o token da fada da lua.

  if (!owner.includes(message.author.id)) return message.channel.send("Voce não tem acesso a esse comando.")

    const embed = new Discord.MessageEmbed();
    const command = args.join(" ");
    try {
      const evaled = eval(command);
        message.reply(`\`\`\`js\n${inspect(evaled, {depth: 0})}\`\`\``)
          .catch(err => console.log("erro: " + err.message));

    } catch (error) {
      message.reply(`\`\`\`js\n${error}\`\`\``);
    }

}
} 
