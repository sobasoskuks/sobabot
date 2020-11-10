exports.run = async (client, message, args) => {
const { MessageEmbed } = require("discord.js")
const embed = new MessageEmbed()
  .setDescription(`**:ping_pong: Pong! ${client.ws.ping}ms**`)
.setColor("ffc4c4")
message.channel.send(embed)
}
