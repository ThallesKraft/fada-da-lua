const Discord = require("discord.js")


module.exports =  {
name: "destrancar",
description: "『✏ - Gerenciador de chat』Destrancar esse canal de texto",
type: "CHAT_INPUT",
     
run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return  interaction.followUp({content: "\<:pepe_semnet:984885605861326879> | Você não tem permissão de **\`Gerenciar Canais\` para utilizar esse comando.", ephemeral: true})
 
            
            interaction.reply(`😍 | Acabei de destrancar esse chat!`).then(msg => { 
            interaction.channel.permissionOverwrites.edit(interaction.guild.id, { SEND_MESSAGES: true })
        })

            
        }        
}
