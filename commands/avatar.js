const { MessageEmbed } = require('discord.js')
const prefix = "//"
exports.run = async (client, message, args) => {
if(message.content.startsWith(`${prefix}avatar`)) {
    
            
  if(message.mentions.users.size){
            let member=message.mentions.users.first()
        if(member){ 
            let avatar = member.displayAvatarURL({size: 4096, dynamic: true});
            let embed = new MessageEmbed()
            .setImage(avatar)
            .setTitle(member.username)
            message.channel.send(embed)
            
        }
        else{
            message.channel.send("Sorry none found with that name")

        }
        }else{  
            let avatar = message.author.displayAvatarURL({size: 4096, dynamic: true})
            let embed = new MessageEmbed()
            .setImage(avatar)
            .setTitle(message.author.username)
            message.channel.send(embed)
        } 
} 
}
