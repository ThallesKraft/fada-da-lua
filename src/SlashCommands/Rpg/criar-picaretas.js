/*
options: [
        {
            name: "opcao",
            type: "STRING",
            description: "Qual evento voce quer ver sobre",
            required: true,
            choices: [
            {
              name: "Derrotado-por-jogador",
              value: "Derrotado-por-jogador",
            
            },{
*/

const Discord = require('discord.js');

module.exports =  {
    name: "criar-picareta",
    description: "『🌍 - Rpg』Crie picaretas",
    type: "CHAT_INPUT",
  options: [
        {
            name: "picareta",
            type: "STRING",
            description: "Qual picareta voce quer criar?",
            required: true,
            choices: [
            {
              name: "Picareta-de-pedra",
              value: "Picareta-de-pedra",
            },{
              name: "Picareta-de-cobre",
              value: "Picareta-de-cobre",
            },{
              name: "Picareta-de-ferro",
              value: "Picareta-de-ferro",
            }
              
              
            ]
        }
  ],
    
    run: async (client, interaction, args) => {

const picareta = interaction.options.getString("picareta");
      
  
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

if (picareta === 'Picareta-de-pedra') {

if (userdb.itens.rocha < "3") return interaction.reply({content: `🚫 | **Você não tem mais de 3 rochas.**`})
  if (userdb.itens.graveto < "2") return interaction.reply({content: `🚫 | **Você não tem pelo menos 2 gravetos.**`})


  await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "picaretas.pedraa": true,
    
         "itens.rocha": userdb.itens.rocha - 3,
         "itens.graveto": userdb.blocos.madeira - 2
     }
     })
  interaction.reply({content: `⛏ | **Você criou uma picareta de pedra.**`})
}
//---------------------------------C O B R E
      if (picareta === "Picareta-de-cobre") {
        if (userdb.blocos.minerios.cobre < "3") return interaction.reply({content: `🚫 | **Você não tem mais de 3 cobres.**`})
          if (userdb.itens.graveto < "2") return interaction.reply({content: `🚫 | **Você não tem pelo menos 2 gravetos.**`})

        await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "picaretas.cobre": true,
      "picaretas.cobredurab": userdb.picaretas.cobredurab + 200,
         "itens.graveto": userdb.itens.graveto - 2,
         "blocos.minerios.cobre": userdb.blocos.minerios.cobre - 3
     }
     })

  
  interaction.reply({content: `⛏ | Você criou uma picareta de cobre.`})
        
      }
//--------------------------------------------
if (picareta === "Picareta-de-ferro") {

if (userdb.blocos.minerios.ferro < "3") return interaction.reply({content: `🚫 | **Você não tem mais de 3 ferros.**`})
  if (userdb.itens.graveto < "2") return interaction.reply({content: `🚫 | **Você não tem pelo menos 2 gravetos.**`})

  if (userdb.conquistas.picaretaferro === null || userdb.conquistas.picaretaferro === false) {
await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "picaretas.ferro": true,
      "picaretas.ferrodurab": userdb.picaretas.ferrodurab + 400,
         "itens.graveto": userdb.itens.graveto - 2,
         "blocos.minerios.ferro": userdb.blocos.minerios.ferro - 3,
  "conquistas.picaretaferro": true,
  "conquistas.pontuação": userdb.conquistas.pontuação + 30
     }
     })
    

    
    
    interaction.reply({content: `⛏ | Você criou uma picareta de ferro!`})
    
client.users.cache.get(`${interaction.user.id}`).send({content: `${interaction.user}`, embeds: [new Discord.MessageEmbed().setTitle(`**🌐 - Conquista Desbloqueada!**`).setDescription(`Você acabou de desbloquear uma nova conquista. 
> ➡️ "**Ta na hora de buscar minérios valiosos!**"`).setColor(`GREEN`)]})
    
  }

    await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "picaretas.ferro": true,
      "picaretas.ferrodurab": userdb.picaretas.ferrodurab + 400,
         "itens.graveto": userdb.itens.graveto - 2,
         "blocos.minerios.ferro": userdb.blocos.minerio.ferro - 3
     }
     })

  
  interaction.reply({content: `⛏ | Você criou uma picareta de ferro.`})
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
