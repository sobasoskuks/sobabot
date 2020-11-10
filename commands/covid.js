const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports = {
    name: "covid",
    description: "covid 19 casses",

    async run (client, message, args){

        let countries = args.join(" ");


        const noArgs = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription('**wrong argument, usage:**\n \`covid global\`\n \`covid { country }\`')
        .setTimestamp()
        .setFooter(`Request ${message.author.username}`)

        if(!args[0]) return message.channel.send(noArgs);

        if(args[0] === "global"){
            fetch(`https://covid19.mathdro.id/api`)
            .then(response => response.json())
            .then(data => {  
              
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()
                
                const embed = new Discord.MessageEmbed()
                .setTitle(`Global Stats of Covid 19`)
                .setColor("ffc4c4")
                .addField('Confirmed Total', confirmed)
                .addField('Recovered Total', recovered)
                .addField('Deaths total', deaths)
                .setTimestamp()
                .setFooter(`Request ${message.author.username}`)
                
                message.channel.send(embed)
            })
        } else {
            fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
            .then(response => response.json())
            .then(data => {
                let confirmed = data.confirmed.value.toLocaleString()
                let recovered = data.recovered.value.toLocaleString()
                let deaths = data.deaths.value.toLocaleString()

                const embed = new Discord.MessageEmbed()
                .setTitle(`Covid 19 Stats from **${countries}**`)
                .setColor("ffc4c4")
                .addField('Confirmed Total', confirmed)
                .addField('Recovered Total', recovered)
                .addField('Death Total', deaths)
                .setTimestamp()
                .setFooter(`Request ${message.author.username}`)

                message.channel.send(embed)
            }).catch(e => {
                return message.channel.send(`Theres no country named ${countries}`)
            })
        }
    }
}
