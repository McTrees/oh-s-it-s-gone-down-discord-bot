const utils = require('./utils'); //load utils
const config = require('./config'); //load utils

module.exports = function(msg, client) {
  //msg.content = msg.content.replaceAll("_", "")
  if (msg.author == client.user) {return}; //ignore own messages
  if (msg.guild === null){msg.reply("currently you cannot send commands in a DM");return};//prevent DMs

  if (msg.content[0] == config.bot_prefix){ //if bot command
    
  }
}
