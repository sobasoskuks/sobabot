const { MessageEmbed } = require('discord.js')

exports.run = async (client, message, args) => {
  let server = args.join(" ")
  if(!server) return message.reply("Please use valid minecraft server address")
  let embed = new MessageEmbed()
  .setColor('ffc4c4')
  .setTitle(`${server}`)
  .setImage(`http://status.mclive.eu/${server}/${server}/25565/banner.png`)
  .setTimestamp()
  message.channel.send(embed)
}
