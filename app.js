const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
var ok = '0';
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity('System Shock')
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
 //Wednesday 
 switch (new Date().getDay()) {
    
   case 5:
   msg.react(config.react_emoji);
       
       break;
 }
// Rock Paper Scissors mini-game
// will add support for SQL later
if (msg.content.includes('!RPS')) {
    var randomnumber=Math.floor((Math.random()*3) + 1);
    // console.log(randomnumber)
     switch(randomnumber){
         case 1:
         var RPSDISC = 'ROCK'
         break;
         case 2:
         var RPSDISC = 'PAPER'
         break;
         case 3:
         var RPSDISC = 'SCISSORS'
         break;
     }
    if (msg.content.includes('ROCK')) {
         OK = '1'
        var RPSUSER = 'ROCK'
        if (RPSDISC === RPSUSER) {
            msg.reply('TIE!');
            // log tie
        }
        if (RPSDISC === 'PAPER') {
            msg.reply('I WIN WITH: ' + RPSDISC);
            // log loss
        }
        if (RPSDISC === 'SCISSORS') {
            msg.reply('YOU WIN WITH: ' + RPSUSER);
            // LOG WIN
        }
    }
    if (msg.content.includes('PAPER')) {
         OK = '1'
        var RPSUSER = 'PAPER'
        if (RPSDISC === RPSUSER) {
            msg.reply('TIE!');
            // log tie
        }
        if (RPSDISC === 'SCISSORS') {
            msg.reply('I WIN WITH: ' + RPSDISC);
            // log loss
        }
        if (RPSDISC === 'ROCK') {
            msg.reply('YOU WIN WITH: ' + RPSUSER);
            // LOG WIN
        }
    }
    if (msg.content.includes('SCISSORS')) {
         OK = '1'
        var RPSUSER = 'SCISSORS'
        if (RPSDISC === RPSUSER) {
            msg.reply('TIE!');
            // log tie
        }
        if (RPSDISC === 'ROCK') {
            msg.reply('I WIN WITH: ' + RPSDISC);
            // log loss
        }
        if (RPSDISC === 'PAPER') {
            msg.reply('YOU WIN WITH: ' + RPSUSER);
            // LOG WIN
        }
    }
    if (OK = '0'){
        msg.reply('Sorry i dont undestand please use ROCK, PAPER or SCISSORS after command');
    }
   OK = '0';
  }

 // PONG
    if (msg.content === '!Ping') {
    msg.reply('Pong!');
  }

// play videos based on comments
  if (msg.content.includes('Kill la Kill')) {
    msg.reply('https://www.youtube.com/watch?v=vyGFM5CGnoo');
  }

  // 8BALL
  if (msg.content.includes('!8ball')) {
    var randomnumber=Math.floor((Math.random()*5) + 1);
   // console.log(randomnumber)
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

client.login(config.token);