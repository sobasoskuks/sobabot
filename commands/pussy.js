const Discord = require("discord.js");
const axios = require('axios');
const { MessageEmbed } = require("discord.js");
module.exports.config = { 
    name: "anal",
    aliases: ['anal']
}

module.exports.run = async (client, message, args) =>  {

if(!message.channel.nsfw) return message.channel.send("😾 | This is not NSFW channels!")
 
    let randomNum = Math.floor(Math.random() * 25);
    await axios.get(`https://www.reddit.com/r/anal.json`).then(r => {
        message.channel.send(
            
            new MessageEmbed()
            .setColor('RANDOM')
            .setTitle(r.data.data.children[randomNum].data.title)
            .setAuthor(`Posted by: ${r.data.data.children[randomNum].data.author}`)
            .setImage(r.data.data.children[randomNum].data.url)
            );
    }).catch (console.error());
} 
 
