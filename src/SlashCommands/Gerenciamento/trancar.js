const Discord = require("discord.js")





module.exports =  {
name: "trancar",
description: "『✏ - Gerenciador de chat』Trancar esse canal de texto",
type: "CHAT_INPUT",
     
run: async (client, interaction, args) => {
        if (!interaction.member.permissions.has('MANAGE_CHANNELS')) return  interaction.followUp({content: "\<:pepe_semnet:984885605861326879> | Você não tem permissão de **\`Gerenciar Canais\`** para utilizar esse comando.", ephemeral: true})
        
            
            interaction.reply(`<a:Verificado_Azul:763234343677722636> | Acabei de trancar o canal de texto como você pediu.`).then(msg => { 
            interaction.channel.permissionOverwrites.edit(message.guild.id, { SEND_MESSAGES: false })
            
        })

            
}
}

