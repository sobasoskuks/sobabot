exports.run = async (client, message, args) => {
const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
.setColor("ffc4c4")
.setTitle(`🥐 • Credit`)
.setDescription(`🍨──── ∙ ~εïз~ ∙ ────🍨`)
.addField("Head Developer",'SobaSoSkuks#2256')
.addField("Developer",'GalaxyANVIP')
.addField("Bot Helper",'TheOverLord, Seadla, SafaGemink, ࿐AxE • BLAYZEᶦᶜᵉ')
message.channel.send(embed)
}
