module.exports = async (client, guild) => {
    const guildDB = await client.database.GuildSchema.findOne({ '_id': guild.id})
    if (guildDB) {
        await client.database.GuildSchema.deleteOne({ '_id': guild.id })
    }
}
