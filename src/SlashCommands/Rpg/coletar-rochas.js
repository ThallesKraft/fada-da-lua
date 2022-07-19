
const Discord = require('discord.js');

module.exports =  {
    name: "coletar-rochas",
    description: "『🌍 - Rpg』Colete rochas",
    type: "CHAT_INPUT",
    
    run: async (client, interaction, args) => {

const userdb = await client.userdb.findOne({
         userID: interaction.user.id
     }) 

      if(!userdb){
         const newuser = new client.userdb({ userID: interaction.user.id })
         await newuser.save();
         
         userdb = await client.userdb.findOne({ userID: interaction.user.id })
     }

      if (userdb.mundostatus === null || userdb.mundostatus === false) return interaction.reply({content: `🚫 | Você ainda não criou um mundo.

> ➡️ Crie um mundo utilizando **\`/iniciar-rpg\`**.`})

      const rochas = userdb.itens.rocha

const rocha = Math.floor(Math.random() * 10) + 30


await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "itens.rocha": rochas + rocha

     }
     })


      interaction.reply({content: `⛰ | Você acabou de coletar **\`${rocha}\`** rochas.`})
      
      
    }
}
