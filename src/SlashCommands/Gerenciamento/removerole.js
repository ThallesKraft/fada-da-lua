
const Discord = require("discord.js")


module.exports =  {
name: "removerole",
description: "『🔧 - Gerenciador se Usuario』Remover um cargo a alguém",
type: "CHAT_INPUT",
options: [
       {
        name: "user",
        type: "USER",
        description: "seleciona o membro que deseja remover o cargo.",
        required: true
        
        },
   
    {
        name: "cargo",
        type: "ROLE",
        description: "seleciona o cargo que deseja remover",
        required: true
        
        },
       

],
     


run: async (client, interaction, args) => {

    let member = interaction.options.getUser("user");
    if (!interaction.member.permissions.has('MANAGE_ROLES')) return  interaction.followUp({content: "\<:pepe_semnet:984885605861326879> | Você não tem permissão de **\`Gerenciar Cargos\`** para utilizar esse comando.", ephemeral: true})

    let role = interaction.options.getRole("cargo");

     let embed = new Discord.MessageEmbed()
     
     .setTitle("<:px_c:916008825990045706> | Gerenciamento de Cargos")
     .addField(`👤 Usuario Mencionado`, `${member}`)
     .addField(`👉 Cargo removido`, `${role}`)
     .setFooter("", client.user.avatarURL())
     .setColor("RANDOM")

     await interaction.guild.members.cache.get(member.id).roles.remove(role);
   
     interaction.reply({content: `${interaction.user}`, embeds: [embed], ephemeral: true})


}}
