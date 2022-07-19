
const Discord = require('discord.js');

module.exports =  {
    name: "coletar-madeira",
    description: "『🌍 - Rpg』Colete suas madeiras iniciais",
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

      const madeiras = userdb.blocos.madeira

const madeira = Math.floor(Math.random() * 10) + 30
      
const folha = Math.floor(Math.random() * 10) + 40

await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "blocos.madeira": madeiras + madeira,
         "blocos.folhas": userdb.blocos.folhas + folha
     }
     })


      interaction.reply({content: `🌲 | Você acabou de coletar **\`${madeira}\`** blocos de madeira e **\`${folha}\`** folhas.`})
      
      
    }
}
