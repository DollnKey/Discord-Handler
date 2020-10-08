const chalk = require('chalk')

module.exports = async (client) => {
    console.log(`[${chalk.green.bold('Discord')}] Conexão com a API efetuada sem erros!`)
    console.log(`[${chalk.green.bold('Contador')}] Servidores: ${client.guilds.cache.size} | Usuários: ${client.users.cache.size} | Canais: ${client.channels.cache.size} | Emojis: ${client.emojis.cache.size} | Comandos: ${client.commands.size}`)

    const presences = [
        {name: ` Handler desenvolvida por: DollnKey:5605 `}
    ]
    setInterval(() => {
        const selected = presences[Math.floor(Math.random() * presences.length)]
        client.user.setPresence({ activity: selected })
    }, 5000)
}
