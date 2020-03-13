const Discord = require('discord.js');
const client = new Discord.Client();
const law = require('./law.js');
const role = require('./role.js');
require('dotenv').config();

client.login(process.env.bot_token);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ruping') {
    msg.reply('!rupong');
  } else if (msg.content.substring(0, 4) == "!loi") {
    law.newLaw(msg, client);
  } else if (msg.content.substring(0, 8) == "!promote") {
    role.promote(msg);
  } else if (msg.content.substring(0, 7) == "!demote") {
    role.demote(msg);
  } else if (msg.content.substring(0, 3) == "!mc") {
    role.cmd(msg);
  } else if (msg.content.substring(0, 6) == "!Perm:") {
    setTimeout(function () {
      msg.delete();
    }, 3000);
  } else if (msg.member.id != client.user.id)
    msg.delete();
});