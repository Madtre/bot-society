exports.newLaw = function (msg, client) {
    name = msg.content.substring(5, msg.content.length);
    msg.guild.channels.create(name, {
        topic: "Channel pour la loi " + name,
        parent: msg.channel.parent,
        positon: 2,
        permissionOverwrites: [
            {
                id: client.user.id,
                deny: ['VIEW_CHANNEL'],
            }
        ],
    }).then(console.log).catch(console.error);
    msg.delete();
}