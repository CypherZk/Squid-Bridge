// require the discord.js module
const Discord = require('discord.js');
// require config.json
const config = require('./config.json');
// bridges <#[channelID]>
const bridgeA = config.channelA;
const bridgeB = config.channelB;
// create a new Discord client
const squid = new Discord.Client();

squid.once('ready', () => {
  console.log('ready');
});

squid.on('message', (message) => {
  if (message.channel.id === bridgeA) {
    if (message.author.tag === squid.user.tag) return;
    const rep = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${message.author.username} say :`)
      .setDescription(message)
      .setTimestamp()
      .setFooter(`${message.author.tag}`, 'https://i.postimg.cc/t4g9sZFL/Screenshot-from-2021-07-10-15-35-04.png');
    squid.channels.cache.get(bridgeB).send(rep);
  } else if (message.channel.id === bridgeB) {
    if (message.author.tag === squid.user.tag) return;
    const rep = new Discord.MessageEmbed()
      .setColor('#0099ff')
      .setTitle(`${message.author.username} say :`)
      .setDescription(message)
      .setTimestamp()
      .setFooter(`${message.author.tag}`, 'https://i.postimg.cc/t4g9sZFL/Screenshot-from-2021-07-10-15-35-04.png');
    squid.channels.cache.get(bridgeA).send(rep);
  }
});

squid.login(config.token);
