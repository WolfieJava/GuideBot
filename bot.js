const Discord = require('discord.js');
const bot = new Discord.Client();
// All things with Client or client will not work! Must be bot.
const config = require('./config.json');
// Defines the config file and let us use it here!

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.username}`)
    // If name is client.user.username, it will throw an error as client is not defined
});

bot.on('message', (message) => {
    if (message.content.startsWith(config.prefix + 'ping')) {
        message.reply('Pong!');
    } else
    // Make another Statement
    if (message.content.startsWith(config.prefix + 'feed')) {
        message.reply(`C'mon give me Some FOOD! :shallow_pan_of_food:`)
    } else
    // Make another Statement
    if (message.content.startsWith(config.prefix + 'shutdown')) {
        if (message.author.id !== config.ownerID)
        // Defines your ID on the Config File
            return message.reply('You must be the Owner! :x:');
            // If your ID does not match with my ID, it will return the Statement Above
        message.channel.send('Shutting Down...').then(() => bot.destroy().then(() => process.exit()));
    }
});
// Now you need to use the Prefix


// Logs in
bot.login(config.token)
