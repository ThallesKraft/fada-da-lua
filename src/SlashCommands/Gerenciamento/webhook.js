const discord = require('discord.js')
module.exports =  {
    name: "webhook",
    description: "『🤖 - Criação』Criar um Webhook!",
    type: "CHAT_INPUT",
    options: [
      {
        name: "nome",
            type: "STRING",
            description: "nome da webhook", 
            required: true       
        },
        {
            name: "avatar",
            type: "STRING",
            description: "Avatar do webhook", 
            required: true       
        },
        {
            name: "mensagem",
            type: "STRING",
            description: "Mensagem que a webhook vai falar.",
            required: true
            
        }],

  run: async (client, interaction, args) => {

     if (!interaction.member.permissions.has("MANAGE_GUILD")) {
            interaction.reply({ content: `<:pepe_semnet:984885605861326879> | Você não tem permissão de **\`Gerenciar_Servidor\`** para utilizar esse comando.`, ephemeral: true })

        } else {
            
            let mensagem = interaction.options.getString("mensagem");

                let nome = interaction.options.getString("nome");
            
            let avatar = interaction.options.getString("avatar");
            
            try {
            interaction.channel.createWebhook(nome, {
                    avatar: avatar,

                }).then(web => {
                    web.send(mensagem)
                    .then(()=> {web.delete() })
                })

interaction.reply({content: `Criei a webhook e enviei a message com sucesso!`, ephemeral: true})
              
            } catch (e) { console.log(e); message.reply(`Eu estou sem a permissão de criar webhooks.`) } 
        
        }
    }
} 
