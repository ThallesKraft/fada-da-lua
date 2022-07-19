const discord = require('discord.js')
module.exports =  {
    name: "webhook-embed",
    description: "『🤖 - Criação』Criar um Webhook em embed!",
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
            name: "descrição",
            type: "STRING",
            description: "the description of embed", 
            required: true       
        },
        {
            name: "titulo",
            type: "STRING",
            description: "the title of this embed",
            required: false
            
        },
        {
            name: "cor",
            type: "STRING",
            description: "use a hex code",
            required: false
        },
        {
            name: "imagem",
            type: "STRING",
            description: "put the url of some image",
            required: false
        }],

  run: async (client, interaction, args) => {

     if (!interaction.member.permissions.has("MANAGE_GUILD")) {
            interaction.reply({ content: `<:pepe_semnet:984885605861326879> | Você não tem permissão de **\`Gerenciar_servidor\`** para utilizar esse comando.`, ephemeral: true })

        } else {
            
            let mensagem = interaction.options.getString("mensagem");

                let nome = interaction.options.getString("nome");
            
            let avatar = interaction.options.getString("avatar");
            

let titulo = interaction.options.getString("titulo");
        if (titulo == null) titulo = '';
        let descrição = interaction.options.getString("descrição");
        let cor = interaction.options.getString("cor");
        if (cor == null) cor = 'RANDOM';
        let img = interaction.options.getString("imagem");
        if (img == null) img = '';

        let embed = new discord.MessageEmbed()
        .setTitle(`${titulo}`)
        .setDescription(`${descrição}`)
        .setColor(`${cor}`)
        .setImage(`${img}`)

            try {
            interaction.channel.createWebhook(nome, {
                    avatar: avatar,

                }).then(web => {
                    web.send({embeds: [embed]})
                    .then(()=> {web.delete() })
                })

interaction.reply({content: `Criei a webhook e enviei a message com sucesso!`, ephemeral: true})
              
            } catch (e) { console.log(e); message.reply(`Eu estou sem a permissão de criar webhooks.`) } 
        
        }
    }
} 
