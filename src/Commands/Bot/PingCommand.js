const { MessageEmbed} = require('discord.js');

module.exports = {
    help: {
        name: "ping",
        aliases: ["latencia", 'pin'],
        description: "Mostrar a latência do Bot.",  //Não é obrigatório colocar!
        category: "Bot",  //Não é obrigatório colocar!
        usage: "ping" //Não é obrigatório colocar!
    },
    run: async ({ client, message, args }) => {
        
        var guildDB = await client.database.GuildSchema.findOne({ '_id': message.guild.id })
        var userDB = await client.database.UserSchema.findOne({ 'guild': message.guild.id, 'user': message.author.id })
        var cor = guildDB.cor || "#36393e";

        return message.channel.send(client.ws.ping);

    }
}
