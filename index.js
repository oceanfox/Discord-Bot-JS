const { Client } = require("discord.js");
//const {prefix,token} = require('./config.json');
const bot = new Client();
var logoutOfDiscord = false;

var token = process.env.DISCORD_TOKEN;
//bot.destroy(token);


bot.on('message',(message) => {
    if(message.content.startsWith('...')){
     if (message.content == ('...quit')){
         message.channel.send("Goodbye");
         logoutOfDiscord= true;         
     } 
    }
 });

if (logoutOfDiscord == true){
    bot.destroy();
}

bot.login(process.env.DISCORD_TOKEN);
