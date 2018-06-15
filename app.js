const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find('name', 'member-log');
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`Welcome to the server, ${member}`);
  });
  
  
client.on('message', msg => {
  if (msg.content === '!Ping') {
    msg.reply('Pong!');
  }

  if (msg.content.includes('!8ball')) {
    var randomnumber=Math.floor((Math.random()*5) + 1);
    console.log(randomnumber)
    switch(randomnumber){
        case 5:
        msg.reply('YES!');
        break;
        case 1:
        msg.reply('No!');
        break;
        case 2:
        msg.reply('Outlook not so good!');
        break;
        case 3:
        msg.reply('Ask again later!');
        break;
        case 4:
        msg.reply('You may rely on it!');
        break;
      
    }
}
});

client.login('');