exports.run = async (client, message, args) => {
const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
.setColor("ffc4c4")
.setTitle(`🌙 • Usefull link`)
.addField("⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯",'** **                   **[support](https://discord.gg/ahqXTQH) | [invite](https://discord.com/api/oauth2/authorize?client_id=756712829427646604&permissions=8&redirect_uri=https%3A%2F%2Fsobabot.glitch.me&scope=bot) | [Website](https://sobabot.glitch.me/)**')
message.channel.send(embed)
}
