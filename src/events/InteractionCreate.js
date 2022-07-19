const {Collection, Intents } = require('discord.js');
const client = require('./../../index.js');
const Discord = require('discord.js')
const c = require("colors");

client.on("interactionCreate", async (interaction) => {
    if (!interaction.guild) return;
    if (interaction.isCommand()) {
        const cmd = client.slashCommands.get(interaction.commandName);
    if (!cmd)
         return;
    const args = [];
       for (let option of interaction.options.data) {
    if (option.type === "SUB_COMMAND") {
    if (option.name) args.push(option.name);
        option.options?.forEach((x) => {
    if (x.value) args.push(x.value);
});
    } else if (option.value) args.push(option.value);
}
      let userdb = await client.userdb.findOne({
            userID: interaction.user.id
        })
         
        if(!userdb) userdb = await new client.userdb({ userID: interaction.user.id }).save();
        
        let banidos = await client.userdb.findOne({
            userID: interaction.user.id
        }) || { blacklist: { banido: true}}
   
        const { banido } = banidos.blacklist;

          if (banido) return interaction.reply({embeds: [new Discord.MessageEmbed()
            .setDescription(`${interaction.user}, você está banido de utilizar meus comandos!`)
        ], ephemeral: true})

     cmd.run(client, interaction, args);
      let content = " "
for(let i = 0;i < 10;i++) {
  if(interaction.options._hoistedOptions[i]) {
  content += `#${i} [ ${interaction.options._hoistedOptions[i].name} ] - ${interaction.options._hoistedOptions[i].value}\n`
       }
     }
                        
let canal_commands = client.channels.cache.get('989838881237135372')
let embed = new Discord.MessageEmbed()

.setTitle(`**LOGS de Comando**`)
.setDescription(`👤 - Author do Comando: **\`${interaction.user.tag}\`**

📃 - Id do usuário: **\`${interaction.user.id}\`**

📚 - Servidor **\`${interaction.guild.name}\`**

➡️ - Id do servidor: ** \`${interaction.guild.id}\`**

💎 - Comando: **\`/${cmd.name}\`**

💸 - Opções: **\`${content}\`**`)
.setColor(`RANDOM`)
        .setFooter(`KraftGames-Bot`, interaction.user.displayAvatarURL({format: "png"}));

                        
 canal_commands.send({ embeds: [embed]})



console.log(c.red(`${interaction.user.tag}`),
           c.yellow(`Utilizou o comando em slash: `),
           c.green(`"/${cmd.name}"`),
            c.cyan(`🍿 - Id do Usuário:`),
            c.magenta(`${interaction.user.id}`),
           c.blue(`--------------------------------------`))
                                      
                
}
    if (interaction.isContextMenu()) {
        await interaction.deferReply({ ephemeral: false });
        const command = client.slashCommands.get(interaction.commandName);
    if (command) command.run(client, interaction);      
    }

});

    
