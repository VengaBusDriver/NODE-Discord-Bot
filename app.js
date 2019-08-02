const Discord = require('discord.js');

const client = new Discord.Client();

const config = require('./config.json');

let request = require('request');





const yelp = require('yelp-fusion');



const clienty = yelp.client(config.yelptoken);











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



// Weather

if (msg.content.toUpperCase().includes('!WEATHER')) {

    

    let apiKey = config.weathtoken;

    let state = msg.content.substring(9,11);

    //console.log(state);

    let city = msg.content.slice(11);

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&${state}&units=imperial&appid=${apiKey}`



    request(url, function (err, response, body) {

        if(err){

          console.log('error:', error);

        } else {

            let weather = JSON.parse(body)

          console.log(weather);

          let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;

         //msg.reply(message);

        }

      });

    }

// YELP Food Request

    if (msg.content.toUpperCase().includes('!YELP')) {

        let state = msg.content.substring(6);

    //console.log(state);

    let city = msg.content.slice(9);

        clienty.search({

            location: state ,
limit:'50',
Radius:'7000',

            
            categories: 'restaurants, All'

          }).then(response => {

            if (response.jsonBody.total > '50') {

                var randomnumbey=Math.floor((Math.random()*50));

              } else {

            var randomnumbey=Math.floor((Math.random()*response.jsonBody.total));

            }

           // console.log(randomnumbey)

            msg.reply('Try out: '+ response.jsonBody.businesses[randomnumbey].name + ' URL: '+ response.jsonBody.businesses[randomnumbey].url);

          }).catch(e => {

            console.log(e);

          });  

       

        }

         //YELP BAR REQUEST

         if (msg.content.toUpperCase().includes('!BAR')) {

            let state = msg.content.substring(5);

        //console.log(state);

        let city = msg.content.slice(8);

            clienty.search({

                location: state ,

                limit:'50',
Radius:'7000',
                categories:'bars, All'

               

              }).then(response => {

                  if (response.jsonBody.total >= '50') {

                    var randomnumbey=Math.floor((Math.random()*50));

                  } else {

                var randomnumbey=Math.floor((Math.random()*response.jsonBody.total));

                }

             //  console.log(randomnumbey)

             // console.log(response.jsonBody.total)

                msg.reply('Try out: '+ response.jsonBody.businesses[randomnumbey].name+ ' URL: '+ response.jsonBody.businesses[randomnumbey].url);

              }).catch(e => {

                console.log(e);

              });  

           

            }

        //YELP BAR REQUEST

        if (msg.content.toUpperCase().includes('!CBAR')) {

            let state = msg.content.substring(6);

       // console.log(state);

        let city = msg.content.slice(9);

            clienty.search({

                location: state ,

                limit:'50',
Radius:'7000',

                categories:'bars, All',

                price:'1'

              }).then(response => {

                if (response.jsonBody.total >= '50') {

                    var randomnumbey=Math.floor((Math.random()*50));

                  } else {

                var randomnumbey=Math.floor((Math.random()*response.jsonBody.total));

                }

               // console.log(randomnumbey)

                msg.reply('Try out: '+ response.jsonBody.businesses[randomnumbey].name+ ' URL: '+ response.jsonBody.businesses[randomnumbey].url);

              }).catch(e => {

                console.log(e);

              });  

           

            }

//Blizzard





// Help Funtion

if (msg.content === '!HELP') {

//msg.reply('Welcome to Discord bot ``` Use !RPS "ROCK/PAPER/SCISSORS" to play```');

}



// Rock Paper Scissors mini-game

// will add support for SQL later

if (msg.content.toUpperCase().includes('!RPS')) {

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

    if (msg.content.toUpperCase().includes('ROCK')) {

        

        var RPSUSER = 'ROCK'

        if (RPSDISC === RPSUSER) {

            msg.reply('TIE!');

            // log tie

        } else

        if (RPSDISC === 'PAPER') {

            msg.reply('I WIN WITH: ' + RPSDISC);

            // log loss

        } else

        if (RPSDISC === 'SCISSORS') {

            msg.reply('YOU WIN WITH: ' + RPSUSER);

            // LOG WIN

        } 

    } else

    if (msg.content.toUpperCase().includes('PAPER')) {

         

        var RPSUSER = 'PAPER'

        if (RPSDISC === RPSUSER) {

            msg.reply('TIE!');

            // log tie

        } else

        if (RPSDISC === 'SCISSORS') {

            msg.reply('I WIN WITH: ' + RPSDISC);

            // log loss

        } else

        if (RPSDISC === 'ROCK') {

            msg.reply('YOU WIN WITH: ' + RPSUSER);

            // LOG WIN

        }

    } else

    if (msg.content.toUpperCase().includes('SCISSORS')) {

        

        var RPSUSER = 'SCISSORS'

        if (RPSDISC === RPSUSER) {

            msg.reply('TIE!');

            // log tie

        } else

        if (RPSDISC === 'ROCK') {

            msg.reply('I WIN WITH: ' + RPSDISC);

            // log loss

        } else

        if (RPSDISC === 'PAPER') {

            msg.reply('YOU WIN WITH: ' + RPSUSER);

            // LOG WIN

        } 

    } else {

        msg.reply('Im sorry, i dont understand: Please use "ROCK", "PAPER" or "SCISSORS" after the command!')

    }

    

  

  }



 // PONG

    if (msg.content === '!Ping') {

    msg.reply('Pong!');

  }







  // 8BALL

  if (msg.content.toUpperCase().includes('!8ball')) {

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



// play videos based on comments

if (msg.content.toUpperCase().includes('Kill la Kill')) {

    msg.reply('https://www.youtube.com/watch?v=vyGFM5CGnoo');

  }



});



client.login(config.token);
