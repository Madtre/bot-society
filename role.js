require('dotenv').config();
const SourceRCONClient = require('source-rcon-client').default,
    client = new SourceRCONClient(process.env.rcon_ip, Number(process.env.rcon_port), process.env.rcon_passwd);

isAdmin = function (member) {
    return member.permissions.any("ADMINISTRATOR") ? true : false;
}

getMember = function (msg) {
    const user = msg.mentions.users.first();

    if (user) {
        const member = msg.guild.member(user);
        if (member) {
            return member;
        }
    }
}

getCitoyen = function (msg) {
    cacheRoles = msg.guild.roles.cache;
    var myRole;
    for (role of cacheRoles) {
        if (role[1].name == process.env.discord) {
            myRole = role[1];
        }
    }
    return myRole;
}

getMcName = function (message) {
    index = message.indexOf(' ');
    if (index != -1) {
        command = message.substring(index + 1, message.length);
        return command;
    }
    return null;
}

checkUserRole = function (member, role) {
    cacheRoles = member.roles.cache;
    found = false;
    for (role of cacheRoles) {
        if (role[1].name == role) {
            found = true;
        }
    }
    return found;
}

commandSend = function (command, msg, type) {
    client.connect().then(() => {
        return client.send(command);
    }).then(response => {
        if (type == "mc")
            msg.channel.send("console $>" + response);
        else if (type == "promote" || type == "demote")
            msg.channel.send("!Perm: " + response);
        return client.disconnect();
    }).then(() => {
    }).catch(error => {
        console.error(error);
    });
}

exports.cmd = function (msg) {
    if (isAdmin(msg.member) == true) {
        command = msg.content.substring(4, msg.content.length);
        result = commandSend(command, msg, "mc");
    }
}

exports.promote = function (msg) {
    message = msg.content.substring(9, msg.content.length);
    if (message == "") {
        msg.delete();
        return false;
    }
    name = getMcName(message);
    member = getMember(msg);
    if (isAdmin(msg.member) == false) {
        console.log("nop");
        msg.delete();
        return false;
    }
    citoyen = getCitoyen(msg);
    if (checkUserRole(member, process.env.discord) == false) {
        member.roles.add(citoyen);
        if (name != null) {
            commandSend("manuadd " + name + " " +process.env.mc_member, msg, "promote");
        }
    }
    msg.delete();
}

exports.demote = function (msg) {
    message = msg.content.substring(8, msg.content.length);
    if (message == "") {
        msg.delete();
        return false;
    }
    name = getMcName(message);
    member = getMember(msg);
    if (isAdmin(msg.member) == false) {
        msg.delete();
        return false;
    }
    citoyen = getCitoyen(msg);
    if (checkUserRole(member, "@everyone") == false) {
        member.roles.remove(citoyen);
        if (name != null) {
            commandSend("mandemote " + name + " " + process.env.mc_new, msg, "demote");
        }
    }
    msg.delete();
}