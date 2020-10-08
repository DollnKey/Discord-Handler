const { readdirSync } = require('fs');
const { Client } = require('discord.js');
const client = new Client({ fetchAllMembers: true });
const config = require('./config.js')

readdirSync('./src/loaders').forEach(l => require(`./src/loaders/${l}`)(client))

client.login(config.token)
