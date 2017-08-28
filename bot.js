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
    const args = message.content.split(" ").slice(1);
    // Define Args!
    const user = message.mentions.users.first() || bot.users.get(args[0]);
    // Defines User as the first one to mention or use ID System!
    const reason = args.slice(1).join(" ");
    // Defines Reason as the 2nd Part to say and it doesn't join the ID Or Mentioned User
    const member = message.guild.member(user);
    // Defines member as the guild Member and User
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
    } else
    // Make another Statment
    if (message.content.startsWith(config.prefix + 'kick')) {
        if (!message.member.hasPermission('KICK_MEMBERS'))
            return message.reply('You must have the Permission Kick Members!')
            // If the User doesn't have the Permission Kick Members, return the statement.
        if (!user)
            return message.reply('Please Mention a User or Use a ID!');
            // If there is no Mentioned User or an ID Specified, return the Statement.
        if (!reason)
            return message.reply('Please Specify a Reason!');
            // If there is no Supplied Reason, return the Statement.
        var embed = new Discord.RichEmbed()
        // Let's use Embed :D
            .setColor('RANDOM')
            .setTitle(':no_entry_sign: Kicked a User!')
            .setThumbnail(user.avatarURL)
            .addField('Kicked User', user.username, true)
            .addField('Kicked UserID', user.id, true)
            .addField('Reason', reason, true)
            .addField('Responsible Moderator', message.author, true)
            .setFooter('User Got Kicked. Bye!')
            .setTimestamp()
        message.channel.send({embed})
        member.kick();
        // Kicks the Member.
    } else
    // Make another Statement
        if (message.content.startsWith(config.prefix + 'ban')) {
        if (!message.member.hasPermission('BAN_MEMBERS'))
            return message.reply('You must have the Permission Ban Members!')
            // If the User doesn't have the Permission Ban Members, return the statement.
        if (!user)
            return message.reply('Please Mention a User or Use a ID!');
            // If there is no Mentioned User or an ID Specified, return the Statement.
        if (!reason)
            return message.reply('Please Specify a Reason!');
            // If there is no Supplied Reason, return the Statement.
        var e = new Discord.RichEmbed()
        // Let's use Embed :D
            .setColor('RANDOM')
            .setTitle(':no_entry_sign: Banned a User!')
            .setThumbnail(user.avatarURL)
            .addField('Banned User', user.username, true)
            .addField('Banned UserID', user.id, true)
            .addField('Reason', reason, true)
            .addField('Responsible Moderator', message.author, true)
            .setFooter('User Got Banned. Bye!')
            .setTimestamp()
        message.channel.send({embed: e})
        member.ban();
    } else
    // Make Another Statement
    if (message.content.startsWith(config.prefix + 'purge')) {
        var result = args.join(' ');
        // Defines the Result as the amount of Messages
            if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply('You Dont Have Enough Permissions!');
            // If the User doesn't have the Permission Manage Messages, return the Statement.
            if (!result)
                return message.reply('Please add a Amount Of Messages to Delete!');
            // If no amount of Messages is defined, return the Statement.
            limit: 99
            // Max limit is 99, you can't make it 100 - Any Number.
            let messagecount = parseInt(result);
            // Defines messagecount as Result
            message.channel.fetchMessages({
            // Fetches the Amount of Messages to delete.
            limit: messagecount + 1
            // We added + 1 for the bot to include to delete the Command Name you Used
        }).then(messages => message.channel.bulkDelete(messages));
                // Deletes the amount of Messages you Deleted
        var purgeEmbed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle(':ok_hand: Cleaned The Chat!')
            .setDescription(`Cleared __**${result}**__ Messages at __*${message.guild.name}*__`)
            .addField('> Cleared By', `- **${message.author.tag}**`, true)
            .setFooter('Message Auto-Delete in 5 Seconds!')
            .setTimestamp()
        message.channel.send({embed: purgeEmbed}).then(m => m.delete(5000))
        // Sends the Embed and Auto Deletes the Message
    }
});


// Logs in
bot.login(config.token)
