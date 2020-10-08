const { MessageEmbed} = require('discord.js');

module.exports = {
    help: {
        name: "",
        aliases: [""],
        description: "",
        category: "",
        usage: ""
    },
    run: async ({ client, message, args }) => {
        
        var guildDB = await client.database.GuildSchema.findOne({ '_id': message.guild.id })
        var userDB = await client.database.UserSchema.findOne({ 'guild': message.guild.id, 'user': message.author.id })
        var cor = guildDB.cor || "#36393e";

    }
}
