
const Discord = require('discord.js');

module.exports =  {
    name: "iniciar-rpg",
    description: "『🌍 - Rpg』Crie seu mundo",
    type: "CHAT_INPUT",
    options: [
        {
            name: "mundo",
            type: "STRING",
            description: "Nome do mundo",
            required: true
            
        }
    
    ],
    
    run: async (client, interaction, args) => {



//-------------------------Verificando UID

const mundo = interaction.options.getString("mundo");
      
const userdb = await client.userdb.findOne({
         userID: interaction.user.id
     }) 

      if(!userdb){
         const newuser = new client.userdb({ userID: interaction.user.id })
         await newuser.save();
         
         userdb = await client.userdb.findOne({ userID: interaction.user.id })
     }

const uid = userdb.registro.uid
      
if (userdb.registro.uid === null || userdb.registro.uid === `Nao definido`) return interaction.reply({content: `**🚫 | Você ainda não registrou seu uid em minha database.**

> ➡️ Para registrar utilize **\`/set-uid\`**.`})

      if (userdb.mundostatus === true) return interaction.reply({content: `🚫 | Você não pode criar outro mundo`})
      
await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "mundo": mundo,
        "mundostatus": true
     }
     })

let embed = new Discord.MessageEmbed()
      .setTitle(`**🌍 - Novo Mundo criado!**`)
      .setDescription(`Você criou um novo mundo para iniciar seu rpg.

> ➡️ **Informações:**
   🛡 - Nome do mundo: **\`${mundo}\`**.
   👑 - Dono(a) do mundo: **\`${interaction.user.tag}\`**.`)
      
      interaction.reply({content: `${interaction.user}`, embeds: [embed]})
      
    }
}
