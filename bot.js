const Discord = require('discord.js');
const client = new Discord.Client();
 
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
 
client.on('message', message => {
   let emoji = client.guilds.get("472485229571997716").emojis.find(r => r.name === "5_"); //كود تعريف المتغير emoji
 
    if(message.content === 'sendemoji'){ //تحقق اذا الرساله هي sebdemji
   message.channel.send(`${emoji}`)//يرسل المتغير emoji 
    }  // xomar933 نهاية قوس التحقق
}); // x نهاية قوس الايفنت 
client.login(process.env.BOT_TOKEN);
