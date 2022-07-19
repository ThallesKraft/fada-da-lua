
const Discord = require('discord.js');

module.exports =  {
    name: "set-uid",
    description: "『🌍  』Set seu nome e uid",
    type: "CHAT_INPUT",
    options: [
        {
            name: "uid",
            type: "NUMBER",
            description: "Seu uid no mini world",
            required: true,
            
        },{
          name: "nome",
          type: "STRING",
          description: "Seu nome no mini world",
          required: true,

        }
    
    ],
    
    run: async (client, interaction, args) => {

let uid = interaction.options.getNumber('uid')
let nome = interaction.options.getString('nome')

let userdb = await client.userdb.findOne({
         userID: interaction.user.id
     })
      
     if(!userdb){
         const newuser = new client.userdb({ userID: interaction.user.id })
         await newuser.save();
         
         userdb = await client.userdb.findOne({ userID: interaction.user.id })
     }
      
    
     await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "registro.nome": nome,
         "registro.uid": uid
     }
     })

      
let embed = new Discord.MessageEmbed()
      .setTitle(`**🔁 - Setando Perfil**`)
      .setDescription(`>>> Seu perfil foi setado com sucesso.
Uid setado: **\`${uid}\`**
Nome setado: **\`${nome}\`**`)
  .setColor(`BLUE`)

                              
interaction.reply({content: `${interaction.user}`, embeds: [embed]})

                              
    }
}
