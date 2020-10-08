const { connect, model } = require('mongoose')
const { readdirSync } = require('fs')
const chalk = require('chalk');
const config = require('../../config')

module.exports = client => {
    const options = { useNewUrlParser: true, useUnifiedTopology: true }

    client.database = connect(config.database, options, e => {
        console.log(e
            ? `[${chalk.red.bold('MongoDB')}] Um erro ocorreu ao se conectar à base de dados!` 
            : `[${chalk.green.bold('MongoDB')}] Conexão com a base de dados efetuada sem erros!`
        )
    });

    for (m of readdirSync('./src/models').map(s => s.split('.js')[0])) {
        client.database[m] = model(m, require(`../models/${m}`))
    }
}
