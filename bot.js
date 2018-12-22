const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});



client.on('message', message => {
    var prefix = "البرفيكس التريدها هنا" // البريفكسIxMaz#1234
    if(message.content.startsWith(prefix +"server")){ // الامر ixMaz#1234
      if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.reply(`**هذه الخاصية للادارة فقط** :negative_squared_cross_mark: `)
    if(!message.channel.guild) return message.reply(' ');
    const millis = new Date().getTime() - message.guild.createdAt.getTime();
    const now = new Date();
    dateFormat(now, 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    const verificationLevels = ['None', 'Low', 'Medium', 'Insane', 'Extreme'];
    const days = millis / 1000 / 60 / 60 / 24;
    let roles = client.guilds.get(message.guild.id).roles.map(r => r.name);
    var embed  = new Discord.RichEmbed()
    .setAuthor(message.guild.name, message.guild.iconURL)
    .addField("**🆔 Server ID:**", message.guild.id,true)
    .addField("**📅 Created On**", message.guild.createdAt.toLocaleString(),true)
    .addField("**👑 Owned by**",`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)
    .addField("**👥 Members**",`[${message.guild.memberCount}]`,true)
    .addField('**💬 Channels **',`**${message.guild.channels.filter(m => m.type === 'text').size}**` + ' text | Voice  '+ `**${message.guild.channels.filter(m => m.type === 'voice').size}** `,true)
    .addField("**🌍 Others **" , message.guild.region,true) 
    .setColor('#000000')
    message.channel.sendEmbed(embed)
     
    }
    });






client.login('BOT_TOKEN');
