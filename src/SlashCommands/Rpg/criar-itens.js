

const Discord = require('discord.js');

module.exports =  {
    name: "criar-itens",
    description: "『🌍 - Rpg』Crie itens extras",
    type: "CHAT_INPUT",
  options: [
        {
            name: "iten",
            type: "STRING",
            description: "Qual item voce quer criar?",
            required: true,
            choices: [
            {
              name: "Graveto",
              value: "Graveto"
            },{
              name: "Tocha",
              value: "Tocha",
            }
              
              
            ]
        }
  ],
    
    run: async (client, interaction, args) => {

const item = interaction.options.getString("iten");
      
  
const userdb = await client.userdb.findOne({
         userID: interaction.user.id
     }) 

      if(!userdb){
         const newuser = new client.userdb({ userID: interaction.user.id })
         await newuser.save();
         
         userdb = await client.userdb.findOne({ userID: interaction.user.id })
     }


      
      if (userdb.mundostatus === null || userdb.mundostatus === false) return interaction.reply({content: `🚫 | Você ainda não criou um mundo.

> ➡️ Crie um mundo utilizando **\`/iniciar-rpg\`**.`, ephemeral: true})


if (item === 'Graveto') {
  if (userdb.blocos.madeira < 10) return interaction.reply({content: `🚫 | **Você não tem pelo menos 10 blocos de madeira.**`, ephemeral: true})

  await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         
         "blocos.madeira": userdb.blocos.madeira - 10,
         "itens.graveto": userdb.itens.graveto + 20
     }
     })

  interaction.reply({content: `🕹 | Você criou 20 gravetos.`})
}
      
if (item === 'Tocha') {

if (userdb.blocos.folha < 50) return interaction.reply({content: `🚫 | **Você não tem mais de 50 folhas.**`, ephemeral: true})

  if (userdb.blocos.graveto < 50) return interaction.reply({content: `🚫 | **Você não tem mais de 50 gravetos.**`, ephemeral: true})
let tochauten = Math.floor(Math.random() * 10) + 51;
 let madeira = tochauten;
  let folha = tochauten;
  await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "itens.tocha": userdb.itens.tocha + tochauten,
         "blocos.graveto": userdb.blocos.graveto - madeira,
         "blocos.folhas": userdb.blocos.folhas - folha
     }
     })
  interaction.reply({content: `✏ | **Você criou \`${tochauten}\` tochas.**`})
}
      
      /*
await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "blocos.madeira": madeiras + madeira

     }
     })
*/

      
      
      
    }
}
