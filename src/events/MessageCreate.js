const Discord = require("discord.js");
const client = require("./../../index.js");
const { colors } = require("colors");

//Event
client.on("messageCreate", async (message) => {
  let prefix = client.prefixo;
  if (message.author.bot) return;
  if (message.channel.type == '') return;     
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase()
  if(cmd.length === 0) return;
  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
  if(!command) return message.reply(`Infelismente os meus comandos em prefixo foram finalizados. Use a versão SlashCommands [comandos com /] para se divertir comigo! Use **\`/ajuda\`** para saber meus comandos.`);
  command.run(client, message, args)
  
});
