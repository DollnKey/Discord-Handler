module.exports = async (client, message) => {
	if (message.author.bot || message.channel.type === 'dm') return;
	
	const guild = await client.database.GuildSchema.findOne({ '_id': message.guild.id})
	const user = await client.database.UserSchema.findOne({ 'guild': message.guild.id, 'user': message.author.id })
	if (!user) {
        await client.database.UserSchema.create({ 'guild': message.guild.id, 'user': message.author.id })
	} if (!guild) {
        await client.database.GuildSchema.create({ '_id': message.guild.id })
	}
	
	if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)) {}
		
	const args = message.content.slice(guild.prefix.length).trim().split(/ +/);
	const cmd = args.shift().toLowerCase();

	const command = client.commands.find(c => c.help.name.toLowerCase() === cmd || (c.help.aliases && c.help.aliases.includes(cmd)))
	if (command) command.run({ client, message, args })
}
