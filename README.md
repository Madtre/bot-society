# bot-society

Bot-Society is a Discord Bot in nodeJs for the minecraft server Mine-Society.

It use it to promote player on Discord and Minecraft with a simple command, create new channel for each low proposition and let the Administrator send console command in a discord channel.

## Installation

For install and use it, you will need npm and node.
You will also need a personnal Discord Bot token and make Rcon work on your minecraft server.
The installer will ask you for : the discord bot token, your server address, your rcon port and your rcon password, the name of your member's role on discord and the name of your everyone role on minecraft and the name of your member's role on minecraft.

    $ git clone https://github.com/Tudgwal/bot-society.git
    $ npm install

## Usage

To run it, add your discord bot on your discord server.
You will need a specific channel for the bot.
Please, don't give read right to the bot for the other channel. 

The minecraft permission are working with GroupManager

## Command:

### The law Command:

    $ !loi name of your law

### The permission command: 

for giving the role:

    $ !promote @discord-name Minecraft-name

(please, be sure to write the discord name, not the nickname)

for removing the role:

    $ !demote @discord-name Minecraft-name

you can also only give the discord name if you don't want to promote the user on minecraft.

### The Minecraft command:

put the command withou the '/' before.

    $ !mc whatever you want

exmaple:

    $ !mc help

