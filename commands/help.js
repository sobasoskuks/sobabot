exports.run = async (client, message, args) => {
const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
.setAuthor("Command List", message.author.displayAvatarURL({dynamic: true}))
.setColor("ffc4c4")
.addField("🥭 | Utility", `\`ping, help, link, botinfo, credit, icon\``)
.addField("🍊 | Main", `\`covid, meme, math, avatar, memeindo, reddit\``)
.addField("🥐 | Minecraft", `\`mcskin, server\``)
.addField("🍑 | NSFW",`\`boobs, pussy\``)
.setFooter("Bot 0.1 beta version")
message.channel.send(embed)
}
