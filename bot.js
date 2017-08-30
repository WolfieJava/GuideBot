// Hello! Welcome to GuideBot, this is a Compelete new File for the Part 5 Episode. We are not implementing the code of Part 1 - 4 as we're only doing Part 5 Commands
// Please join our Discord Chat for help on Joining Part 5 to part 4!

const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require('./config.json');


bot.on('ready', () => {
	console.log(`Ready to Serve ${bot.channels.size} Channels on ${bot.guilds.size} Guilds with ${bot.users.size} Users Connected`)
});

bot.on('message', (msg) => {
	const args = msg.content.split(" ").slice(1);
	// Define Args
	const result = args.join(" ");
	// Define the Result as everything you say except the Command
	const guildChannel = bot.users.get(args[0]);
	// Defines guildChannel as the Channel ID the bot is gonna send the Message to!

	if (msg.content.startsWith(config.prefix + "ping")) {
		msg.reply(`Pong! Took ${Math.round(bot.ping)}ms to Reply.`)
		// Replied to you like, Pong! Took 12ms to Reply.
	} else
	if (msg.content.startsWith(config.prefix + 'setgame')) {
		if (msg.author.id !== config.ownerId) return msg.reply('You must have Owner Privilages! :x:')
	bot.user.setPresence({ game: { name: result, type: 0 } });
	// Sets the Bots Game
	} else
	if (msg.content.startsWith(config.prefix + 'announce')) {
		if (!guildChannel)
			return msg.reply('Please Specify a Channel ID!')
		if (!result)
			return msg.reply('Please add a Message to say!')
	msg.channel.send(`**Message sent to ${guildChannel}**`).then(() => guildChannel.send(result))
	}
});

bot.login(config.token);
