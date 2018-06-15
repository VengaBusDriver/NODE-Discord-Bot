const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NDU3MTY0NTUzNDI0MzM4OTQ0.DgVIpw.1Au5Q9DCFWFvZYglSDsDWdPetUk');