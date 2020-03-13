var fs = require('fs');
const {prompt} = require('inquirer');

writeData = function(env) {
    fs.writeFile('.env', env, function (err) {
        if (err) throw err;
    });
}

const questions = [
  { name: 'token', message: 'What is your Discord Bot Token ? ' },
  { name: 'address', message: 'What is your rcon server address ? '},
  { name: 'port', message: 'What is your rcon server port ? '},
  { name: 'password', message: 'What is your rcon server password ? '},
  { name: 'discord', message: 'What is your Discord member\'s role ? '},
  { name: 'mcnew', message: 'What is your Minecraft new player\'s role ? '},
  { name: 'mcmember', message: 'What is your Minecraft member role ? '},
];

prompt(questions).then(answers => {
    env = 'bot_token=' + answers.token + '\n'
    + 'rcon_ip=' + answers.address + '\n'
    + 'rcon_port=' + answers.port + '\n'
    + 'rcon_passwd=' + answers.password + '\n'
    + 'discord=' + answers.discord + '\n'
    + 'mc_new=' + answers.mcnew + '\n'
    + 'mc_member=' + answers.mcmember;
    writeData(env);
});