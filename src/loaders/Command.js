const { Collection } = require('discord.js')
const { readdirSync } = require("fs")

module.exports = (client) => {
  const commandFolder = readdirSync('./src/Commands')
  client.commands = new Collection()

  for (dir of commandFolder) {
    const folderFiles = readdirSync(`./src/Commands/${dir}/`).filter(f => f.endsWith('.js'));

    for (file of folderFiles) {
      const command = require(`../Commands/${dir}/${file}`);
      client.commands.set(command.help.name, command);
    }
  }
}
