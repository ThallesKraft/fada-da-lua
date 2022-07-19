
const Discord = require('discord.js');

module.exports =  {
    name: "buscar-uid",
    description: "『🌍 - MiniWorld』Procure o uid de algum usuario",
    type: "CHAT_INPUT",
    options: [
        {
            name: "usuario",
            type: "USER",
            description: "Mencione o usuario que voce quer ver o uid",
            required: true,
            
        }
    
    ],
    
    run: async (client, interaction, args) => {

let user = interaction.options.getUser('usuario')

     const userdb = await client.userdb.findOne({
         userID: user.id
     }) || { registro: { nome: 'O usuário não definiu seu nome', uid: 'O usuário não definiu seu uid'}}

let nome = userdb.registro.nome;
let uid = userdb.registro.uid;

              if (nome == null) nome = 'O usuário não setou o nome.';
              if (uid == null) uid = 'O usuário não setou seu uid';

      let embed = new Discord.MessageEmbed()
      .setTitle(`**🛡 - ${user.tag}**`)
      .setDescription(`>>> Uid do usuário: **\`${uid}\`**
Nome do usuário: **\`${nome}\`**`)
      .setColor(`RANDOM`)


      interaction.reply({content: `${interaction.user}`, embeds: [embed]})
    }
}
