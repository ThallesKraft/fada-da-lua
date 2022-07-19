
const Discord = require('discord.js');

module.exports =  {
    name: "mundo-info",
    description: "『🌍 - Rpg』Veja sobre seu mundo ou dos membros",
    type: "CHAT_INPUT",
    options: [
        {
            name: "user",
            type: "USER",
            description: "usuario que vc quer ver sobre o mundo",
            required: false
            
        }
    
    ],
    
    run: async (client, interaction, args) => {

      const user = interaction.options.getUser("user") || interaction.user

      const userdb = await client.userdb.findOne({
         userID: user.id
     }) 

      if(!userdb){
         const newuser = new client.userdb({ userID: user.id })
         await newuser.save();
         
         userdb = await client.userdb.findOne({ userID: user.id })
     }


      if (userdb.mundostatus === null || userdb.mundostatus === false) return interaction.reply({content: `🚫 | ${user.tag} ainda não criou um mundo.`})
      
let picaretapedra = userdb.picaretas.pedraa

      if (picaretapedra === true) picaretapedra = 'Picareta obtida'
      if (picaretapedra === false || picaretapedra === null) picaretapedra = 'Não obtida'


let picaretacobre = userdb.picaretas.cobre
      if (picaretacobre === true) picaretacobre = 'Picareta obtida'
      if (picaretacobre === false || picaretacobre === null) picaretacobre = 'Não obtida'

let picaretaferro = userdb.picaretas.ferro
      if (picaretaferro === true) picaretaferro = 'Picareta obtida'
      if (picaretaferro === false || picaretaferro === null) picaretaferro = 'Não obtida'
      
let embed = new Discord.MessageEmbed()
      .setTitle(`**🌍 - ${userdb.mundo}**`)
      .setDescription(`Essas são todas aa informações do mundo de **\`${user.tag}\`**

> **➡️ Blocos Minerados:**
Madeira: **\`${userdb.blocos.madeira}\`**
Folhas: **\`${userdb.blocos.folhas}\`**
Pedras: **\`${userdb.blocos.pedras}\`**

> **➡️ Minerios obtidos:**
Carvão: **\`${userdb.blocos.minerios.carvao}\`**
Cobre: **\`${userdb.blocos.minerios.cobre}\`**
Ferro: **\`${userdb.blocos.minerios.ferro}\`**
Ouro: **\`${userdb.blocos.minerios.ouro}\`**

> ➡️ **Itens Obtidos**
Gravetos: **\`${userdb.itens.graveto}\`**
Tochas: **\`${userdb.itens.tocha}\`**

> ➡️ **Picaretas Obtidas:**

Picareta de pedra: **\`${picaretapedra}\`**

Picareta de cobre: **\`${picaretacobre}\`**
   Durabilidade: **\`${userdb.picaretas.cobredurab}\`**

Picareta de ferro: **\`${picaretaferro}\`**
   Durabilidade: **\`${userdb.picaretas.ferrodurab}\`**`)
      .setColor(`GREEN`)
          
interaction.reply({content: `${interaction.user}`, embeds: [embed]})
      
      }
    }
