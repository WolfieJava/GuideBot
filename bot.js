const Discord = require('discord.js');
const bot = new Discord.Client();
// All things with Client or client will not work! Must be bot.
const prefix = "!";
// Defines the prefix

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.username}`)
    // If name is client.user.username, it will throw an error as client is not defined
});

bot.on('message', (message) => {
    if (message.content.startsWith(prefix + 'ping')) {
        message.reply('Pong!');
    } else
    // Make another Statement
    if (message.content.startsWith(prefix + 'feed')) {
        message.reply(`C'mon give me Some FOOD! :shallow_pan_of_food:`)
    }
});
// Now you need to use the Prefix


// Logs in
bot.login('Your Bot Token')
