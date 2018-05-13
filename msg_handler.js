const utils = require('./utils'); //load utils
const config = require('./config'); //load utils

module.exports = function(msg, client) {
  //msg.content = msg.content.replaceAll("_", "")
  if (msg.author == client.user) {return}; //ignore own messages
  if (msg.guild === null){msg.reply("currently you cannot send commands in a DM");return};//prevent DMs

  if (msg.content[0] == config.bot_prefix){ //if bot commands
    msg.content = msg.content.substring(1); //remove bot prefix

    if (msg.content[0] = "e"){ //enrole comand

    }

    if (msg.content[0] = "e"){ //list comand

    }

    if (msg.content[0] = "s"){ //status comand

    }

    if (msg.content[0] = "t"){ //test comand

    }

    if (msg.content[0] = "h"){ //help comand

    }

    else {
      msg.reply("Sorry, that is not a valid comand. run ```!help``` for more info.");
    }

  }
}
