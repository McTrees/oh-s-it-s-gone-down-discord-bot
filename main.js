const Discord = require('discord.js');
const client = new Discord.Client();

const token = require('./token').token; //load token from token.json
const utils = require('./utils'); //load utils
const msg_handler = require('./msg_handler') //load message handeler function

client.on('ready', () => {
  utils.successMessage(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  msg_handler(msg, client);
});

client.login(token);
