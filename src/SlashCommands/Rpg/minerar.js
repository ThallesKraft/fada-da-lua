

const Discord = require('discord.js');

module.exports =  {
    name: "minerar",
    description: "『🌍 - Rpg』Minere minerios",
    type: "CHAT_INPUT",
  options: [
        {
            name: "minerio",
            type: "STRING",
            description: "Qual minerio voce quer ir em busca?",
            required: true,
            choices: [
            {
              name: "Carvao",
              value: "Carvao",
            },{
            name: "Cobre",
            value: "Cobre",
            },{
              name: "Ferro",
              value: "Ferro",
            },{
              name: "Ouro",
              value: "Ouro",
            }
              
              
            ]
        }
  ],
    
    run: async (client, interaction, args) => {

const minerio = interaction.options.getString("minerio");
      
  
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

if(Date.now() < userdb.comando.mineração){
      const calc = userdb.comando.mineração - Date.now()
      
         return interaction.reply({content: `<:b_tempo:987816604710625320> | Ainda falta ${ms(calc).hours}h ${ms(calc).minutes}m ${ms(calc).seconds}s para minerar novamente.`,  ephemeral: true})
     }  


if (minerio === 'Carvao') {

if (userdb.picaretas.pedra === null) return interaction.reply({content: `🚫 | **Você não tem uma picareta.**`, ephemeral: true})

if (userdb.itens.tocha < "100") return interaction.reply({content: `🚫 | **Você precisa ter pelo menos 100 tochas para ir minerar.`, ephemeral: true})

  let carvao = Math.floor(Math.random() * 10) + 70
  
let pedraone = Math.floor(Math.random() * 10) + 100

  let tochaone = Math.floor(Math.random() * 10) + 50
  
  await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "blocos.minerios.carvao": userdb.blocos.minerios.carvao + carvao,
    "itens.tocha": userdb.itens.tocha - tochaone,
    "blocos.pedras": userdb.blocos.pedras + pedraone,
    "comando.mineração": Date.now() + 300000

     }
     })

let carvaoembed = new Discord.MessageEmbed()
  .setTitle(`**Você foi minerar com o objetivo de achar carvão**`)
  .setDescription(`> ➡️ Resultado da mineração:
    Carvão achado: **\`${carvao}\`**
    Pedras mineradas: **\`${pedraone}\`**
    Tochas gastadas: **\`${tochaone}\`**`)
              
  interaction.reply({content: `⛏ | ${interaction.user}`, embeds: [carvaoembed]})
}
      //-----------------------C O B R E 
      if (minerio === 'Cobre') {
        if (userdb.picaretas.pedra === null || userdb.picaretas.pedra === false) return interaction.reply({content: `❌ | Você não tem uma picareta de pedra.`, ephemeral: true})

        if (userdb.itens.tocha < "200") return interaction.reply({content: `🚫 | **Você precisa ter pelo menos 200 tochas para ir minerar.**`, ephemeral: true})

  let carvao = Math.floor(Math.random() * 10) + 120
  
let pedraone = Math.floor(Math.random() * 100) + 210

  let tochaone = Math.floor(Math.random() * 60) + 189

        let cobre = Math.floor(Math.random() * 20) + 30

if (userdb.conquistas.cobre === null || userdb.conquistas.cobre === false) {
  
await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "blocos.minerios.carvao": userdb.blocos.minerios.carvao + carvao,
    "itens.tocha": userdb.itens.tocha - tochaone ,
    "blocos.pedras": userdb.blocos.pedras + pedraone ,
    "blocos.minerios.cobre": userdb.blocos.minerios.cobre + cobre,
    "conquistas.cobre": true,
  "conquistas.pontuação": userdb.conquistas.pontuação + 15
     }
     })

  

let cobreembed = new Discord.MessageEmbed()
  .setTitle(`**Você foi minerar com o objetivo de achar cobre**`)
  .setDescription(`> ➡️ Resultado da mineração:
    Cobre achado: **\`${cobre}\`**
    Carvão achado: **\`${carvao}\`**
    Pedras mineradas: **\`${pedraone}\`**
    Tochas gastadas: **\`${tochaone}\`**

> **__Você desbloqueou uma nova conquista!**

> ➡️ **Eba! Achei cobre!**`)
  .setColor(`BLUE`)
  
interaction.reply({content: `⛏ | ${interaction.user}`, embeds: [cobreembed]})
  
}
        await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "blocos.minerios.carvao": userdb.blocos.minerios.carvao + carvao,
    "itens.tocha": userdb.itens.tocha - tochaone ,
    "blocos.pedras": userdb.blocos.pedras + pedraone ,
    "blocos.minerios.cobre": userdb.blocos.minerios.cobre + cobre,
    "comando.mineração": Date.now() + 300000
     }
     })

let cobreembed2 = new Discord.MessageEmbed()
  .setTitle(`**Você foi minerar com o objetivo de achar cobre**`)
  .setDescription(`> ➡️ Resultado da mineração:
    Cobre achado: **\`${cobre}\`**
    Carvão achado: **\`${carvao}\`**
    Pedras mineradas: **\`${pedraone}\`**
    Tochas gastadas: **\`${tochaone}\`**`)
  .setColor(`BLUE`)
        
        interaction.reply({content: `⛏ | ${interaction.user}`, embeds: [cobreembed2]})
        
      }
//-----------------------------------F E R R O
      if (minerio === 'Ferro') {
        if (userdb.picaretas.cobre === null || userdb.picaretas.cobre === false) return interaction.reply({content: `🚫 | **Você não tem uma picareta de cobre.**`, ephemeral: true})

if (userdb.itens.tocha < "300") return interaction.reply({content: `🚫 | **Você precisa ter pelo menos 300 tochas para ir minerar.**`, ephemeral: true})

        if (userdb.picaretas.cobredurab < 10) return interaction.reply({content: `❌ | Sua picareta está quebrada.`, ephemeral: true})
    

  let carvao = Math.floor(Math.random() * 10) + 120
  
let pedraone = Math.floor(Math.random() * 100) + 210

  let tochaone = Math.floor(Math.random() * 60) + 189

        let ferro = Math.floor(Math.random() * 10) + 30

if (userdb.conquistas.ferro === null || userdb.conquistas.ferro === false) {
  //ephemeral: false
  await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "blocos.minerios.carvao": userdb.blocos.minerios.carvao + carvao,
    "itens.tocha": userdb.itens.tocha - tochaone ,
    "blocos.pedras": userdb.blocos.pedras + pedraone ,
    "blocos.minerios.ferro": userdb.blocos.minerios.ferro + ferro,
    "conquistas.ferro": true,
      "conquistas.pontuação": userdb.conquistas.pontuação + 30,
    "comando.mineração": Date.now() + 300000

     }
     })
  let embed1 = new Discord.MessageEmbed()
  .setTitle(`**Você foi minerar com o objetivo de achar ferro.**`)

.setDescription(`> ➡️ Resultado da mineração:
    Ferro achado: **\`${ferro}\`**
    Carvão achado: **\`${carvao}\`**
    Pedras mineradas: **\`${pedraone}\`**
    Tochas gastadas: **\`${tochaone}\`**`)
  .setColor(`BLUE`)

  interaction.reply({content: `⛏ | ${interaction.user}`, embeds: [embed1]})

client.users.cache.get(`${interaction.user.id}`).send({content: `${interaction.user}`, embeds: [new Discord.MessageEmbed().setTitle(`**🌐 - Conquista Desbloqueada!**`).setDescription(`Você acabou de desbloquear uma nova conquista.

> ➡️ "**Eba! Achei meu primeiro ferro!**"`).setColor(`GREEN`)]})

  //**Você desbloqueou uma nova conquista!**

//> ➡️ **Eba! Achei meu primeiro ferro!**
}
          
  await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "blocos.minerios.carvao": userdb.blocos.minerios.carvao + carvao,
    "itens.tocha": userdb.itens.tocha - tochaone ,
    "blocos.pedras": userdb.blocos.pedras + pedraone ,
    "blocos.minerios.ferro": userdb.blocos.minerios.ferro + ferro,
    "picaretas.ferrodurab": userdb.picaretas.ferrodurab - 10,
    "comando.mineração": Date.now() + 300000

     }
     })
        let embedferro = new Discord.MessageEmbed()
          .setTitle(`**Você foi minerar com o objetivo de achar ferro**`)
        .setDescription(`> ➡️ Resultado da mineração:
    Ferro achado: **\`${ferro}\`**
    Carvão achado: **\`${carvao}\`**
    Pedras mineradas: **\`${pedraone}\`**
    Tochas gastadas: **\`${tochaone}\`**`)
        .setColor(`BLUE`)

        
  interaction.reply({content: `⛏ | ${interaction.user}`, embeds: [embedferro]})
      }
      
      //--------------------------O U R O
      if (minerio === 'Ouro') {
        if (userdb.itens.tocha < "400") return interaction.reply({content: `🚫 | **Você precisa ter pelo menos 400 tochas para ir minerar.**`, ephemeral: true})

        if (userdb.picaretas.ferro === false || userdb.picaretas.ferro === null) return interaction.reply({content: `❌ | Você não tem uma picareta de ferro.`, ephemeral: true})

  let carvao = Math.floor(Math.random() * 10) + 220
  
let pedraone = Math.floor(Math.random() * 100) + 310

  let tochaone = Math.floor(Math.random() * 60) + 289

        let ferro = Math.floor(Math.random() * 10) + 40

        let ouro = Math.floor(Math.random() * 10) + 20

let cobreouro = Math.floor(Math.random() * 20) + 50
        
await client.userdb.updateOne({
         userID: interaction.user.id
     }, { $set: {
         "blocos.minerios.carvao": userdb.blocos.minerios.carvao + carvao,
    "itens.tocha": userdb.itens.tocha - tochaone ,
    "blocos.pedras": userdb.blocos.pedras + pedraone ,
    "blocos.minerios.ferro": userdb.blocos.minerios.ferro + ferro,
    "picaretas.ferrodurab": userdb.picaretas.ferrodurab - 30,
  "blocos.minerios.ouro": userdb.blocos.minerios.ouro + ouro,
  "blocos.minerios.cobre": userdb.blocos.minerios.cobre + cobreouro,
    "comando.mineração": Date.now() + 300000
     }
        })
        let ouroembed = new Discord.MessageEmbed()
         .setTitle(`**Você foi em busca de ouro.**`)
        .setDescription(`> ➡️ Resultado da mineração:
    Ouro achado: **\`${ouro}\`**
    Cobre achado: **\`${cobreouro}\`**
    Carvão achado: **\`${carvao}\`**
    Ferro achado: **\`${ferro}\`**
    Pedras mineradas: **\`${pedraone}\`**
    Tochas gastadas: **\`${tochaone}\`**`)
        .setColor(`YELLOW`)

        interaction.reply({content: `⛏ | ${interaction.user}`, embeds: [ouroembed]})
      }
 
      
    }
}

function ms(ms) {
  const seconds = ~~(ms/1000)
  const minutes = ~~(seconds/60)
  const hours = ~~(minutes/60)
  const days = ~~(hours/24)

  return { days, hours: hours%24, minutes: minutes%60, seconds: seconds%60 }
}
