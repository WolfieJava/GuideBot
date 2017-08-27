const Discord = require('discord.js');
const bot = new Discord.Client();
// All things with Client or client will not work! Must be bot.

bot.on('ready', () => {
    console.log(`Logged in as ${bot.user.username}`)
    // If name is client.user.username, it will throw an error as client is not defined
});

bot.on('message', (message) => {
    if (message.content === "ping") {
        message.reply('Pong!');
    }
});
// If you message ping, the bot will reply Pong!


// Logs in
bot.login(Your Bot Token!);
// Eg. bot.login('MFDNFEFEFEJFR534T34ITN43TP34304.323295')
