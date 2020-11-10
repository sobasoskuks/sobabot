const ms = require('ms');
const randomPuppy = require('random-puppy');
const Discord = require('discord.js');
const talkedRecently = new Set();

   exports.run = async (client, message, args) =>{ 
        if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 Second Before Getting Typing This Again");
    } else {
        const subReddits = ["dankmemes", "meme", "memes"]
        const random = subReddits[Math.floor(Math.random() * subReddits.length)]
  
        const img = await randomPuppy(random);
  
        const memeEmbed = new Discord.MessageEmbed()
//________________________________________________________________//
        .setColor("RANDOM")
        .setImage(img)
        .setFooter(`Request By ${message.author.username}`)
        .setURL(`https://reddit.com/r/${random}`)
  
        message.channel.send(memeEmbed);
      talkedRecently.add(message.author.id);
        setTimeout(() => {
          
          talkedRecently.delete(message.author.id);
        }, 5000); //1000 = 1 detik
    }
    }
