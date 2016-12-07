const Discord = require('discord.js');
const cordyan = new Discord.Client();
const fs = require('fs');
const yt = require('ytdl-core')
var Cleverbot = require('cleverbot-node');
var request = require('superagent');
var cleverbot = new Cleverbot();
// var profileData = require("./profiles.json");
// var logs = require("./AwesomeBot/data/logs.json");
// let announce = require('./announceans.json');
// var custom = require("./customcoms.json")
// try {
// 	var urban = require("urban");
// } catch (e){
// 	console.log("couldn't load urban plugin!\n"+e.stack);
// }
const Command = require("./urbancmd.js");
const urban = require("urban");
const afk = require('./afk.json');
let adminRole = "Bot Commander"

  cordyan.on('ready', () => {
      
  cordyan.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage("Hello! I am a Bot that was created by Airi#5929 for Multi-Purpose! And also, Thanks for choosing me to be a bot in your server!\nI am currently in beta and may be a little bit buggy.\nIf you do find any bugs please report them here https://discord.gg/NUM5xHp.\nAnd also my prefix is &.").then(m => m.delete(5500));
  });      
      
cordyan.guilds.get("252129271089201163").channels.get("252265558312091648").sendMessage('', {embed:
{color:0xba77d2, title: '**READY!**', description: `Bot Online and Ready! On ${cordyan.guilds.size} Servers! | ${Discord.version}`}});//(`Bot Online and Ready! On ${cordyan.guilds.size} Servers!`);  
  console.log('Bot Online and Ready! On ' + cordyan.guilds.size + ' Servers!');
  
  cordyan.user.setStatus('online');
  cordyan.user.setGame("in Development", "https://twitch.tv/arkwonderwars");
  cordyan.user.setAvatar('https://images.discordapp.net/.eJwlzEsKwyAQANC7eACH8RM125xEjJhA4ogzXZTSu7eQ7Vu8j3rNS63qEBm8AuwnF5q7ZqGZW9WNqF01j5N1oRuySC7HXbswGO9MDCnEgLigdQ4fijFZb5ZkrUcP2397565Hb-r7AwZ-Iqw.pqPrvy4P0VwIflhTdM3N8BDwqiU?width=300&height=300')
});


const prefix = "&";
var x;
cordyan.on('message', message => {
// var message = message.content.toUpperCase();    
var user = `${message.author}`;    
//var prefix = prefixes[message.guild.id].prefix || '$';
// //PING
if (message.content === prefix + 'ping') {
message.delete()
   startTime = Date.now();
   message.channel.sendMessage("Pinging...").then((message) => {
     endTime = Date.now();
       message.edit("Pong **=>** *" + Math.round(endTime - startTime) + "* ms");
     });
   }




  
// var joinmessage = "member.user.sendMessage(`Welcome to ${member.guild.name}, **${member.user.username}**`);";
    
    
//     if (message.content.startsWith(prefix + "joinmessage")) {
//         message.channel.sendMessage(joinmessage);
//     }
//     if (message.content.startsWith(prefix + "set joinmessage")) {
//         var updatedmessage = message.content.replace(prefix + "set joinmessage", '');
//         joinmessage = message.content.replace(prefix + "set joinmessage", '');
//         message.channel.sendMessage("Join message is now" + updatedmessage);
//     }
    
    
 if (message.content.toLowerCase().startsWith('<@250238987933974529> whats your prefix')) {  
     message.channel.sendMessage("My prefix is &")
 }
    


// if (message.content === prefix + 'afk') {
// afk[message.author.id] = {
//      name: message.author.username,
//      status: suffix
// }
// fs.writeFile('afk.json', JSON.stringify(afk, null, 4), 'utf8', function(err) {
// if (err) return;
// const username = message.mentions.users.first();
// if (message.isMentioned(username).id === afk[user.id]) {
//     message.channel.sendMessage('That user is afk!') 
//   }
// });

	

// if (message.content.startsWith(prefix + 'give')) {
// if (!message.guild || !message.member) return;
//     message.delete()
//     var guild = message.channel.guild;
//     if (guild) {
// 	var member = guild.member(message.author);
// 	var suffix = message.content.split(' ').slice(1)
//     var user = message.mentions.users.first();
//     var member = message.guild.member(user);
//         let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))
//         if (message.author.id !== "255815122616844288")
//         if (message.author.id !== "240945786635026433")
//         return message.channel.sendMessage(":no_entry: You don't have the Bot Commander Role :no_entry:");
//     if (!user)
//         return message.channel.sendMessage('Please include a user :rage:.');
// 		        if (member.roles.exists('name', suffix[0])) {
// 		            return;
// 		        }
// 		        else {
// 		        	member.addRole(guild.roles.find(role => role.name == suffix[0]))
// 		        message.channel.sendMessage(`The role has been given to **${user.username}**`); //Same here
// 		        }
// 		    }
// 		    else {
// 		    }	
// 	    }


// if (message.content.startsWith(prefix + 'urban')) {
//          var targetWord = suffix == "" ? urban.random() : urban(suffix);
//           targetWord.first(function(json) {
//               if (json) {
//                 var message = "Urban Dictionary: **" +json.word + "**\n\n" + json.definition;
//                 if (json.example) {
//                     message = message + "\n\n__Example__:\n" + json.example;
//                 }
//                 message.channel.sendMessage( message);
//               } else {
//                 message.channel.sendMessage( "No matches found");
//               }
//           });
//       }


	    
   if (message.content.startsWith(prefix + 'remove')) {
    //   message.delete()
       if (!message.guild || !message.member) return; 
        if(message.author.id !== "255815122616844288") {
        let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))    
            return message.reply("Insufficient permissions.");
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Mention a user.");
        }
        let roleTR = message.content.split(" ").splice(2, 4).join(" ");
        let memberRemove = message.guild.member(message.mentions.users.first());
        if(!memberRemove) {
            return message.reply("Invalid user.");
        }
        let removeRole = message.guild.roles.find('name', roleTR);
        memberRemove.removeRole(removeRole);
        // message.delete();
        message.channel.sendMessage("The role " + roleTR + " was removed from " + memberRemove);
        console.log(roleTR + " was removed from " + memberRemove);
    }
    
    	    
   if (message.content.startsWith(prefix + 'give')) {
    //   message.delete()
       if (!message.guild || !message.member) return; 
        if(message.author.id !== "255815122616844288") {
        let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))    
            return message.reply("Insufficient permissions.");
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Mention a user.");
        }
        let roleTR = message.content.split(" ").splice(2, 4).join(" ");
        let memberAdd = message.guild.member(message.mentions.users.first());
        if(!memberAdd) {
            return message.reply("Invalid user.");
        }
        let addRole = message.guild.roles.find('name', roleTR);
        memberAdd.addRole(addRole);
        // message.delete();
        message.channel.sendMessage("The role " + roleTR + " was added to " + memberAdd);
        console.log(roleTR + " was added to " + memberAdd);
    }
    
     if (message.content.startsWith(prefix + 'unmute')) {
       message.delete()
       if (!message.guild || !message.member) return; 
        if(message.author.id !== "255815122616844288") {
        let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))    
            return message.reply("Insufficient permissions.");
        }
        if(message.mentions.users.size === 0) {
            return message.reply("Mention a user.");
        }
        let memberRemove = message.guild.member(message.mentions.users.first());
        if(!memberRemove) {
            return message.reply("Invalid user.");
        }
        let removeRole = message.guild.roles.find('name', 'Muted');
        memberRemove.removeRole(removeRole);
        message.delete();
        console.log("User unmuted");
    }
	    
    if (message.content === prefix + "logservers") {
        if (message.author.id !== "255815122616844288")
        return message.channel.sendMessage("YOU ARE NOT STAFF :face_palm:")
        cordyan.channels.get('250000388298637313').sendMessage(cordyan.guilds.array().map(g => g.name + "[" + g.id + "]").join(", "))
        message.channel.sendMessage("LOGGING SERVERS")
        }
        

	if (message.content.startsWith(prefix + 'mentionyes')) {
	  if (!message.guild || !message.member) return;  
    var guild = message.channel.guild;
    if (guild) {
	var member = guild.member(message.author);
    var user = message.mentions.users.first();
    var reason = message.content.split(' ').slice(2).join(' ');
        if (message.author.id !== "255815122616844288")
        if (message.author.id !== "240945786635026433")
		        if (member.roles.exists("name", "Mentions")) {
		            return;
		        }
		        else {
		        	member.addRole(guild.roles.find(role => role.name == "Mentions" ).id);
		        	message.channel.sendMessage(`${message.author.username} has signed up for mentions!`); //Same here
		        }
		    }
		    else {
		    }	
	    }
	    
// 	    	if (message.content.startsWith(prefix + 'accept')) {
// 	  if (!message.guild || !message.member) return;  
// 	  message.delete()
//     var guild = message.channel.guild;
//     if (guild) {
// 	var member = guild.member(message.author);
//     var user = message.mentions.users.first();
//         if (message.author.id !== "255815122616844288")
//         if (message.author.id !== "240945786635026433")
// 		        if (member.roles.exists("name", "Members" || "Accepted Terms")) {
// 		            return;
// 		        }
// 		        else {
// 		        	member.addRole(guild.roles.find(role => role.name == "Members" || "Accepted Terms" ).id);
// 		        	message.author.sendMessage(`${message.author.username} Thanks for accepting the terms!`); //Same here
// 		        	message.delete()
// 		        }
// 		    }
// 		    else {
// 		    }	
// 	    }
	    
	    
 if (message.content.startsWith(prefix + 'noinvite')) {
            var xx = message.split(" ");
            if (xx[1] === 'ON') {
                message.reply(':no_bell: No invites will be allowed :no_bell:');
                x = true;
            } else if (xx[1] === 'MID') {
                message.reply('Spam mode medium lvl');
                x = 'mid';
            } else if (xx[1] === 'OFF') {
            	message.reply('OK INVITES ALLOWED WHAT EVER :wink:');
                x = false;
            }
        }
    if (message.content.includes('discord.gg/')) {
        // message.reply(':no_entry: Please don\'t advertise :no_entry:');
        if (x) {
            message.delete(100)
                .then(message => console.log(`Deleted message from ${message.author}`))
                .catch(console.error);
            message.channel.bulkDelete(1);
        }
    }
    if (message.content.includes('http://discord.gg/') && x == true) {
        // message.reply(':no_entry: Please don\'t advertise :no_entry:');
        message.delete(100)
            .then(message => console.log(`Deleted message from ${message.author}`))
            .catch(console.error);
        message.channel.bulkDelete(1);
    }
    if (message.content.includes('https://discord.gg/') && x == 'mid') {
        // message.reply(':no_entry: Please don\'t advertise :no_entry:');
    }
    if (message.content.includes('www.discord.gg/') && x == 'mid') {
        // message.reply(':no_entry: Please don\'t advertise :no_entry:');
    }

	    
	    
	    
	    
if (message.content.startsWith(prefix + 'mute')) {
    message.delete()
if (!message.guild || !message.member) return;
    var guild = message.channel.guild;
    if (guild) {
	var member = guild.member(message.author);
	var suffix = message.content.split(' ').slice(1)
    var user = message.mentions.users.first();
    var member = message.guild.member(user);
    var reason = message.content.split(' ').slice(2).join(' ');
        let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))
        if (message.author.id !== "255815122616844288")
        if (message.author.id !== "240945786635026433")
        return message.channel.sendMessage(":no_entry: You don't have the Bot Commander Role :no_entry:");
    if (!user)
        return message.channel.sendMessage('Please include a user :rage:.');
		        if (member.roles.exists('name', 'Muted')) {
		            return;
		        }
		        else {
		        	member.addRole(guild.roles.find(role => role.name == 'Muted'))
		        }
		    }
		    else {
		    }	
	    }
	    
//   cordyan.on('guildCreate', () => {
//   console.log("I joined a new guild!")      
//   message.channel.sendMessage(`Hello, my name is Cordyan, and I am a discord bot that is currently in beta!`);
// })
	    
	    

  //CLEVERBOT
  if (message.content.startsWith('<@250238987933974529>')) {
    if (!message.guild || !message.member) return;  
  try {
	var cleverMessage = message.content.split(' ').splice(1).join(' ');
	Cleverbot.prepare(function () {
	cleverbot.write(cleverMessage, function (response) {
	message.channel.sendMessage(response.message);
	});
	});
  } catch (err) {
  console.log(err)
  }
	}
            
	if (message.content.startsWith(prefix + "stab")) {
	  if (!message.guild || !message.member) return;  
 var ou = message.mentions.users.first();   
var user = message.mentions.users.first();
var member = message.guild.member(user);
if (!user)
message.channel.sendMessage(`**${message.author.username}** has stabbed **${ou.username}**  to death. :knife: :scream:`);
message.channel.sendMessage(`**${user.username}** was stabbed to death by **${message.author.username}** :knife: :scream:`);
  }
  
  	if (message.content.startsWith(prefix + "shoot")) {
  	  if (!message.guild || !message.member) return;  
 var ou = message.mentions.users.first();   
var user = message.mentions.users.first();
var member = message.guild.member(user);
if (!user)
message.channel.sendMessage(`**${message.author.username}** has stabbed **${ou.username}**  to death. :knife: :scream:`);
message.channel.sendMessage(`**${user.username}** was shot to death by **${message.author.username}** 🔫 :scream:`);
  }
  
    	if (message.content.startsWith(prefix + "revive")) {
    	if (!message.guild || !message.member) return;    
 var ou = message.mentions.users.first();   
var user = message.mentions.users.first();
var member = message.guild.member(user);
if (!user)
message.channel.sendMessage(`**${message.author.username}** has stabbed **${ou.username}**  to death. :knife: :scream:`);
message.channel.sendMessage(`**${user.username}** was revived by **${message.author.username}** 😷`);
  }

//LOVECALC
    if (message.content.startsWith(prefix + "match")) {
    if (!message.guild || !message.member) return;    
        var ou = message.mentions.users.first();
        var rolle = Math.floor((Math.random() * 100) + 1);
			if (isNaN(rolle)) {
				logmessage(Date.now(), 'WARN', message.channel.server.id, message.channel.id, message.author.username + ' provided nonsensical love parameter');
				message.channel.sendMessage(' Wut.');
			} else {
				message.channel.sendMessage(`**${message.author.username}** & **${ou.username}** || Match: ${parseInt(rolle)}%`);
			}
    }
  
  



if(message.content.startsWith(prefix + "ev")) {
if (message.author.id !== "255815122616844288")
if (message.author.id !== "240945786635026433")
return message.reply("This can only be used by the bot owner.")
if (!message.guild || !message.member) return;
var evalcode = message.content.split(" ").splice(1).join(" ");
		try {
			var evaled = eval(evalcode);
			if (typeof evaled !== "string")
				evaled = require("util").inspect(evaled);
			message.channel.sendMessage("Output:\n```x1\n" + clean(evaled) + "```");
		}
		catch (err) {
			message.channel.sendMessage("Error: " + clean(err));
		}

		function clean(text) {
			if (typeof(text) === "string") {
				return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
			}
			else {
				return text;
			}
		}
    }



// if(message.content.startsWith(prefix + "eval")) {
//     var code = message.content.split(" ").slice(1).join(" ");

//     try {
//         var evaled = eval(code);
//         if (typeof evaled !== 'string')
//           evaled = require('util').inspect(evaled);
//         message.channel.sendMessage("```xl\n" + 
//         clean(evaled) +
//         "\n```"
//         );        
//     }
//     catch(err) {
//         message.channel.sendMessage("`ERROR` ```xl\n" +
//         clean(err) +
//         "\n```");
//     }
//   }
//   function clean(text) {
//   if (typeof(text) === "string") {
//     return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
//   }
//   else {
//       return text;
//   }
// }
 
 
// if (message.content === prefix + 'eval') {
//  let input = params.join(' ');

//     try {
//       let output = eval(input.replace(/\r?\n|\r/g, ' '));

//       if(typeof output != 'string') {
//         output = require('util').inspect(output, { depth: 1 });
//       }

//       output = output.replace(cordyan.token, '[token redacted]').replace(cordyan.user.email, '[email redacted]');

//       //message.edit(`***\`Input\`*** \`\`\`js\n${input}\n\`\`\`\n***\`Output\`*** \`\`\`js\n${output}\n\`\`\``).catch(console.error); OLD
//       message.edit(`${message.content}\n\`\`\`js\n${output}\n\`\`\``).catch(console.error);

//     } catch (error) {
//       //message.edit(`***\`Input\`*** \`\`\`js\n${input}\n\`\`\`\n***\`Error\`*** \`\`\`js\n${error}\n\`\`\``).catch(console.error); OLD
//       message.edit(`${message.content}\n\`\`\`js\n${error}\n\`\`\``).catch(console.error);
//     }
//   }
  


  
    if (message.content.startsWith(prefix + 'reset')) {
        if (message.author.id !== "255815122616844288")
        if (message.author.id !== "240945786635026433")
        return message.channel.sendMessage("**Only the bot owner can do this!**")
        message.channel.sendMessage(`***Restart in progress...***`).then(function(t) {
            process.exit(1);
        });
    }

    // if (message.content.startsWith(prefix + 'setannounce')) {
    //     let index = 1;
    //     let args = message.content.toUpperCase.split(' ')[index];
    //     if (args = 'OFF') {
    //         let index = announce.indexOf('GUILD:' + message.guild.id);
    //         if (index > -1) {
    //             announceans.splice(index, 1);
    //             fs.writeFileSync('announceans.json', JSON.stringify(blacklist));
    //         } else {
    //             message.channel.sendMessage('announcements not on')
    //         }
    //     }
    //     if (args = 'ON') {
    //         announceans.push('GUILD:' + message.guid.id);
    //         fs.writeFileSync('announceans.json', JSON.stringify(announceans));
    //         message.channel.sendMessage('Successfully switched the announcements to ``on``');
    //     }
    // }
    
    
    //     if (message.content.startsWith(prefix + 'setannounce')) {
    //     let index = 1;
    //     let args = message.content.split(' ')[index];
    //     if (args = 'off') {
    //         let index = customans.indexOf('GUILD:' + message.guild.id);
    //         if (index > -1) {
    //             customans.splice(index, 1);
    //             fs.writeFileSync('customans.json', JSON.stringify(customans));
    //         } else {
    //             message.channel.createMessage('announcements not on')
    //         }
    //     }
    //     if (args = 'on') {
    //         customans.push('GUILD:' + message.guid.id);
    //         fs.writeFileSync('customans.json', JSON.stringify(customans));
    //         message.channel.createMessage('Successfully switched the announcements to ``on``');
    //     }
    // }


if (message.content.startsWith(prefix + "announce")) {
if (!message.guild || !message.member) return;    
var suffix = message.content.split(' ').slice(1).join(' ');
        let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))
        if (message.author.id !== "255815122616844288")
        if (message.author.id !== "240945786635026433")
        return message.channel.sendMessage(":no_entry: You don't have the Bot Commander Role :no_entry:");
if (!suffix) {
message.channel.sendMessage('Give me something to announce');
}
 message.guild.channels.find('name', 'updates').sendMessage(suffix);
}




// PURGE
// if (message.content === prefix + 'purge') {
// if (!message.guild || !message.member) return;    
// const params = message.content.split(' ').slice(1);
// let messagecount = parseInt(params[0]);
// message.channel.fetchMessages({
// limit: messagecount
// })
// .then(messages => message.channel.bulkDelete(messages));
// message.delete();
// console.log('Purge executed by: ' + message.author.username + ' on ' + message.guild.name);
// }



//PURGE
// if (message.content === prefix + 'prune') {
// if (!message.guild || !message.member) return;    
// const params = message.content.split(' ').slice(1);
// let messagecount = parseInt(params[0]);
// message.channel.fetchMessages({
// limit: messagecount
// })
// .then(messages => message.channel.bulkDelete(messages));
// message.delete();
// console.log('Purge executed by: ' + message.author.username + ' on ' + message.guild.name);
// }


//SEND USER PERMS
 if (message.content === prefix + "myperms") {
    if (!message.guild || !message.member) return;
   message.channel.sendMessage("**SENDING LIST OF PERMISSIONS!**")
      message.author.sendMessage('Your permissions are:\n' +
        JSON.stringify(message.channel.permissionsFor(message.author).serialize(), null, 4));
}

//CREATE ROLE
if (message.content.startsWith(prefix + "makerole")) {
if (!message.guild || !message.member) return;
let role = message.member.guild.roles.find('name', 'Bot Commander');
if (message.member.roles.exists('name', 'Bot Commander')) {
var toname = message.content.split(" ").slice(1).join(" ");
message.guild.createRole({name: toname}).then(role => {
message.channel.sendMessage(`Made role: **${role.name}**`);
}).catch(console.log);
}
}

    if (message.content.toLowerCase().startsWith(prefix + "delrole")) {
        let admRole = message.guild.roles.find("name", adminRole);
        if(!message.member.roles.has(admRole.id)) {
            return message.reply("Insufficient permissions.");
        }
        let roleName = message.content.split(" ").splice(1, 5).join(" ");
        let role = message.member.guild.roles.find('name', roleName);
        if(!roleName) {
            return message.reply("Specify a role name.");
        }
        role.delete();
        message.delete();
        message.channel.sendMessage(roleName + " was deleted by " + message.member);
    }

	
	
    if (message.content.toLowerCase().startsWith('&clean')) {
        let Role = message.guild.roles.find("name", "Bot Commander");
        let amount = message.content.split(" ").splice(1, 2).join(" ");
        if(!message.member.roles.has(Role.id)) {
            return message.reply("Insufficient permissions.");
        }
        if(amount < 1) {
            return message.reply("The amount of messages to remove is 1-100.");
        }
        if(amount > 100) {
            return message.reply("Choose a number between 1-100.");
        }
        message.channel.bulkDelete(amount);
        message.delete()
        message.channel.sendMessage("Purged: " + amount + " Messages");
        console.log("Chat was cleared by " + message.member + " Amount: " + amount);
    }
    
    //:wastebasket: 
    

    if (message.content.toLowerCase().startsWith('&purge')) {
        let admRole = message.guild.roles.find("name", adminRole);
        let amount = message.content.split(" ").splice(1, 2).join(" ");
        if(!message.member.roles.has(admRole.id)) {
        return message.channel.sendMessage("Insufficient permissions.");
        }
        if(amount < 1) {
            return message.reply("The amount of messages to remove is 1-100.");
        }
        if(amount >100) {
            return message.reply("Choose a number between 1-100.");
        }
        message.channel.bulkDelete(amount);
        message.delete()
        message.channel.sendMessage("Purged: " + amount + " Messages").then(m => m.delete(2500));
        console.log("Chat was cleared by " + message.member + " Amount: " + amount);
    }
    
    if (message.content.toLowerCase().startsWith('&prune')) {
        let amount = message.content.split(" ").splice(1, 2).join(" ");
        let admRole = message.guild.roles.find("name", adminRole);
        if(!message.member.roles.has(admRole.id)) {
            return message.reply("Insufficient permissions.");
        }
        if(amount < 1) {
            return message.reply("The amount of messages to remove is 1-100.");
        }
        if(amount > 100) {
            return message.reply("Choose a number between 1-100.");
        }
        message.channel.bulkDelete(amount);
        message.delete()
        message.channel.sendMessage("Purged: " + amount + " Messages");
        console.log("Chat was cleared by " + message.member + " Amount: " + amount);
    }

//YOUTUBE
if (message.content.startsWith(prefix + "yt")) {
if (!message.guild || !message.member) return;    
var opts = {
  maxResults: 1,
 key: 'AIzaSyDtLJezFAIk6FR36SxG-QbN2vdjs9MXujc'
};
    var args = message.content.split(' ').slice(1).join(' ');
    const search = require('youtube-search');
    search(args, opts, function(err, results) {
  if(err) return console.log(err);
 message.channel.sendMessage(results[0].link)
  console.dir(results);
});
    }






//cordyan.Plugins.get(commandname).run(cordyan,message,env)
//reload(commandname)
//load(commandname)
//unload(commandname)


// //EXIT SERVER
// if (message.content.startsWith(prefix + "exit")) {
//   if (!message.guild || !message.member) return;
//   let role = message.member.guild.roles.find('name', 'Bot Commander');
//   if (message.member.roles.exists('name', 'Bot Commander')) {
// message.guild.leave()
//  .then(g => console.log(`Left the guild ${g}`))
//  .catch(console.error);
// }
// };


 //STATS
 if (message.content === prefix + "serverinfo") {
    if (!message.guild || !message.member) return;
   message.channel.sendMessage([
      '```diff' +
      `\n+ Guild Owner: => ${message.guild.owner}` +
      `\n- Region: => ${message.channel.guild.region}` +
      `\n+ Guild ID: => ${message.guild.id}` +
      `\n- Members: => ${message.guild.members.size}` +
      `\n+ Joined At: => ${message.guild.joinedAt}` +
    //   `\n- Topic: => ${message.channel.topic}` +
      `\n- Guild Image: => ${message.guild.iconURL}` +
      '```'
    ])
   }
    
    //   let m = '';
    //   m += `Topic: ${message.channel.topic}\n`;
    //   m += `Guild Owner ${message.guild.owner}\n`;
    //   m += `Region ${message.channel.guild.region}\n`;
    //   m += `Guild Image ${message.guild.iconURL}\n`;
    //   m += `Guild ID ${message.guild.id}\n`;
    //   m += `Members: **${message.guild.members.size}**\n`;
    //   m += `Joined At ${message.guild.joinedAt}\n`;
    //   message.channel.sendMessage(m)
    // }

   if (message.content === prefix + "userinfo") {
   if (!message.guild || !message.member) return;  
   message.channel.sendMessage([
      '```diff' +
      `\n+ Username: => ${message.author.username}` +
      `\n- ID: => ${message.author.id}` +
      `\n+ Discriminator: => ${message.author.discriminator}` +
      `\n- Joined On: => ${message.author.createdAt}` +
      `\n+ Status: => ${message.author.presence.status}` +
      `\n- Roles: => ${message.member.roles.filter(r => {return r.name != '@everyone'}).map(r => r.name).join(', ')}` +
    //   `\n+ Avatar: => ${message.author.avatarURL}` +
      '```'
    ])
   }
   
   
    //   let user = '';
    //   user += `Username: => ${message.author.username}\n`;
    //   user += `ID: => ${message.author.id}\n`;
    //   user += `Discriminator: => ${message.author.discriminator}\n`;
    //   user += `Avatar: => ${message.author.avatarURL}\n`;
    //   user += `Joined On: => ${message.author.createdAt}\n`;
    //   user += `Status: => ${message.author.presence.status}\n`;
    // //   user += `Game: => ${message.author.presence}\n`;
    //   user += `Is a bot: => ${message.author.bot}\n`;
    // //   user += `**Verified** ${message.author.verified}\n`;
    // //  user += `Roles: => ${message.member.roles.map(r => " " + r.name).join('\n')}`;
    //   message.channel.sendMessage(user)
    // }



  //STATS
 if (message.content === prefix + "stats") {
     if (!message.guild || !message.member) return;
//         message.channel.sendMessage("", {embed: {
//   color: 0xff000,
//   author: {
//     name: message.author.username,
//     icon_url: message.author.avatarURL
//   },
//   title: '',
//   url: '',
//   description: '',
//   fields: [
//     {
//       name: 'Servers',
//       value: `**${cordyan.guilds.size}**`
//     },
//     {
//       name: 'Users',
//       value: `**${cordyan.users.size}**`
//     },
//     {
//       name: 'Memory',
//       value: `**${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}** **MB**`
//     }
//   ],
//   timestamp: new Date(),
//   footer: {
//     icon_url: cordyan.user.avatarURL,
//     text: 'Cordyan'
//   }
// }});
    //   `\n+ Username: => ${message.author.username}` +
//       `\n- ID: => ${message.author.id}` +
//       `\n+ Discriminator: => ${message.author.discriminator}` +
//       `\n- Joined On: => ${message.author.createdAt}` +
//       `\n+ Status: => ${message.author.presence.status}` +
//       `\n- Roles: => ${message.member.roles.filter(r => {return r.name != '@everyone'}).map(r => r.name).join(', ')}` +
//       `\n+ Avatar: => ${message.author.avatarURL}`
//     ])
//   }
     
     
      let m = '';
      m += `**STATS**\n`;

      m += `Servers: **${cordyan.guilds.size}**\n`;
      m += `Users: **${cordyan.users.size}** \n`;
      m += `Memory: **${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}** **MB**  \n`;
      message.channel.sendMessage(m)
    }



//8BALL
if (message.content.startsWith(prefix + "8ball")) {
if (!message.guild || !message.member) return;    
var ball = [':8ball: **8ball** **response => Yes**', ':8ball: **8ball response => No**', ':8ball: **8ball response => It is decidedly so**', ':8ball: **8ball response => Ask again later**', ':8ball: **8ball response => It is certain**', ':8ball: **8ball response => Without a doubt**', ':8ball: **8ball response => Cannot predict now.**',   ':8ball: **8ball response => Most likely**', ':8ball: **8ball response => You may rely on it**', ':8ball: **8ball response => My sources say no**', ':8ball: **8ball response => Points to a sign saying yes**'];
message.channel.sendMessage(ball[~~(Math.random() * ball.length)])
}


//HEADS OR TAILS
if (message.content.startsWith(prefix + "flipcoin")) {
if (!message.guild || !message.member) return;    
var ball = [`${message.author} Heads`, `${message.author} Tails`, ];
message.channel.sendMessage(ball[~~(Math.random() * ball.length)])
}


//RELOAD
//{ load: [Function: load], unload: [Function: unload] }

// cordyan.reload = function(command)
// cordyan.plugins.get(commandname).run(cordyan,message,env)

// return new Promise((resolve, reject) => {
// try {
// delete require.catch[require.resolve(`./cord.js${command}`)];
// let cmd = require(`./cord.js${command}`);
// cordan.commands.delete(command);
// cordyan.aliases.forEach((cmd, alias) => {
// if (cmd === command) cordyan.aliases.delete(alias);
// });


//UPTIME
if (message.content === prefix + "uptime") {
if (!message.guild || !message.member) return;    
var date = new Date(cordyan.uptime);
            var strDate = '**';
            strDate += 'Current Uptime\n';
            strDate += date.getUTCDate() - 1 + ' days, ';
            strDate += date.getUTCHours() + ' hours, ';
            strDate += date.getUTCMinutes() + ' minutes, ';
            strDate += date.getUTCSeconds() + ' seconds**';
message.channel.sendMessage(strDate)
}


// if (message.content.startsWith(prefix + "topic")) {
// var suffix = message.content.split(' ').slice(1)	
// message.channel.setTopic(suffix[0]);
// message.channel.sendMessage('Topic created');
// }




// //SAY
// if (message.content.startsWith(prefix + 'say')) {
// if (!message.guild || !message.member) return;    
// message.delete()
// var say = message.content.split(' ').slice(1).join(' ');
// let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))
// if (message.author.id !== "255815122616844288")
// if (message.author.id !== "240945786635026433")
// return message.channel.sendMessage(":no_entry: You don't have the Bot Commander Role :no_entry:");
// if (!say) {
// message.channel.sendMessage('Give me something to say');
// }
// message.channel.sendMessage(say);
// }




//HELP
 if (message.content === prefix + 'commands') {
if (!message.guild || !message.member) return;      
   message.author.sendMessage([`Hello, **${message.author.username}** here are my commands!\n\n` +
   '__**Commands**__' +
   '\n&**invite** to get the invite link for the bot.' +
   '\n&**get:** used to steal anothers avatar!' +
//   '\n&**say** repeats what you said.' +
   "\n&**support** to get the link to Cordyan's hub." +
   '\n&**uptime** shows how long the bot has been running' +
   '\n&**8ball** the magical ball' +
   '\n&**myperms** shows your permissions that you have.' +
   '\n&**serverinfo** gets the server info.' +
   '\n&**userinfo** gets your info.' +
   '\n&**purge** clear anywhere to 1-100 messages.' +
   '\n&**stats** shows the bot stats' +
   '\n&**yt** used to search youtube.\n' +
   '\n__**Moderation Commands**__ (Requires **Bot Commander**) Also `mod-log` is required!' +
   '\n&**kick** used to kick people <reason required>.' +
   '\n&**ban** used to ban people <reason required>.' +
   '\n&**mute** used to mute people <reason required> <muted role required>.' +
   '\n&**unmute** used to unmute people <reason required> <muted role required>.' +
   '\n&**makerole** used to make roles.' +
   '\n&**delrole** used to delete roles.' +
   '\n&**deletechannel** used to delete channels.' +
   '\n&**give** used to give roles. &give <user> <role>.' +
   '\n&**remove** used to remove roles. &give <user> <role>.' +
   '\n&**warn** used to warn people <reason required>.'
   ]);

   message.channel.sendMessage(`**${message.author.username}!** **|** **Check them DM'S :mailbox_with_mail:**`)
}

//   if (message.content.includes('&commands')) {
//   message.guild.channels.find('252129271089201163').sendMessage(`${message.author.username} Commands are not allowed here!`);
//   message.delete()
// }

 if (message.content === prefix + 'help') {
if (!message.guild || !message.member) return;      
message.reply('Hi, I was created by Airi#5929\nI am a Multi-Purpose Discord Bot Which is under development!\nYou can do `&commands` to get a DM for a list of commands!');
}

//  if (message.content === '<@250238987933974529>') {
// if (!message.guild || !message.member) return;      
//   message.author.sendMessage([`Hello, **${message.author.username}** here are my commands!\n\n` +
//   '__**Commands**__' +
//   '\n&**invite** to get the invite link for the bot.' +
//   '\n&**get:** used to steal anothers avatar!' +
//   '\n&**say** repeats what you said.' +
//   "\n&**support** to get the link to Cordyan's hub." +
//   '\n&**uptime** shows how long the bot has been running' +
//   '\n&**8ball** the magical ball' +
//   '\n&**myperms** shows your permissions that you have.' +
//   '\n&**serverinfo** gets the server info.' +
//   '\n&**purge** clears about 50 messages.' +
//   '\n&**stats** shows the bot stats' +
//   '\n&**clever** have a conversation with the bot!' +
//   '\n&**yt** used to search youtube.\n' +
//   '\n__**Moderation Commands**__ (Requires **Bot Commander**) Also `mod-log` is required!' +
//   '\n&**kick** used to kick people <reason required>.' +
//   '\n&**ban** used to ban people <reason required>.' +
//   '\n&**mute** used to mute people <reason required>.' +
//   '\n&**unmute** used to unmute people <reason required>.' +
//   '\n&**makerole** used to make roles.' +
//   '\n&**deletechannel** used to delete channels.' +
//   '\n&**nickname** used to change the bots name.' +
//   '\n&**give** used to give roles. ^give <role> <user>.' +
//   '\n&**warn** used to warn people <reason required>.'
//   ]);

//   message.channel.sendMessage(`**${message.author.username}!** **|** **Check them DM'S :mailbox_with_mail:**`);
// }


//HELPAVATAR
//  if (message.content === prefix + 'define get') {
//   message.channel.sendMessage(`***${message.author}!*** ***Check DMs!***`);
//   message.author.sendMessage('**Command Name:** GET\n**Command Description:** This command can steal others avatar. How to use: +get @mentionuser');
// }







//DEVELOPER
 if (message.content === prefix + 'staff') {
    if (!message.guild || !message.member) return;
  // let role = message.member.guild.roles.find('name', 'Dev');
  // if (message.member.roles.exists('name', 'Dev')) {
//   message.channel.sendMessage([`Hello, **${message.author.username}** here is the staff list!\n\n` +
   '__**Staff**__' +
   '\n**Developers:** Airi.' +
   '\n**Owners:** Hugo and NeonCord.' +
   '\n**Contributors:** Nuno!'
 //  } else {
//message.channel.sendMessage(`Sorry, but you don't have the Dev role ***${message.author}!***`);
}

//INVITE
 if (message.content === prefix + 'invite') {
   // message.channel.sendMessage('http://tinyurl.com/hcxmkwk')
//   message.channel.sendMessage('**You can only get the invite link from Airi, as of I am only in beta.**') 
  message.channel.sendMessage('**http://bit.ly/cord-beta**') 
}

//SUPPORT
 if (message.content === prefix + 'support') {
        message.channel.sendMessage('You can join my discord server here: https://discord.gg/NUM5xHp')
}



//SUPPORT
 if (message.content === '(╯°□°）╯︵ ┻━┻') {
message.channel.sendMessage(":sob: NOT MY TABLE!")
}

// if (message.content === prefix + 'clear') {
// if (!message.guild || !message.member) return;    
// const params = message.content.split(' ').slice(1);
// let messagecount = parseInt(params[0]);
// message.channel.fetchMessages({
// limit: 99
// })
// .then(messages => message.channel.bulkDelete(messages));
// message.delete();
// message.channel.sendMessage("Cleared `99` messages!")
// message.delete();
// (messages => message.channel.bulkDelete(messages));
// console.log('Purge executed by: ' + message.author.username + ' on ' + message.guild.name);
// }



//KICK
if (message.content.startsWith(prefix + 'kick')) {
if (!message.guild || !message.member) return;    
    var user = message.mentions.users.first();
    var member = message.guild.member(user);
    var reason = message.content.split(' ').slice(2).join(' ');
        let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))
        if (message.author.id !== "255815122616844288")
        if (message.author.id !== "240945786635026433")
        return message.channel.sendMessage(":no_entry: You don't have the Bot Commander Role :no_entry:");
    if (!user)
        return message.channel.sendMessage('Please include a user to kick.');
    if (!reason)
        return message.channel.sendMessage('Please include a reason.');
    member.kick().then(() => {
        message.channel.sendMessage(`:ballot_box_with_check: OK, ${user.username} has been kicked.`)
        user.sendMessage(`You have been __**kicked**__ from **${message.guild.name}** by: **${message.author.username}** for **${reason}**`)
        message.guild.channels.find('name', 'mod-log').sendMessage("", {embed: {
 color: 0xff0000,
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL // eslint-disable-line camelcase
      },
//   title: 'ACTION',
  url: '',
  description: `**Action:** Kick\n**User:** ${user.username}\n**Reason:** ${reason}\n`,
//   fields: [
//     {
//       name: 'USER',
//       value: `**${user.username}**`
//     },
//     {
//       name: '**REASON**',
//       value: `\n**${reason}**\n`
      
      
      
//     },
//   ],
timestamp: new Date(),
    footer: {
  }
}});([
            `**KICK**\n` +
            `**User** => ${user.username}\n` +
            `**Moderator** => ${message.author.username}\n` +
            `**Channel** => ${message.channel.name}\n` +
            `**Reason** => ${reason}\n`
        ])
    });
}


//MUTE
if (message.content.startsWith(prefix + 'mute')) {
if (!message.guild || !message.member) return;    
    var user = message.mentions.users.first();
    var member = message.guild.member(user);
    var reason = message.content.split(' ').slice(2).join(' ');
        let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))
        if (message.author.id !== "255815122616844288")
        if (message.author.id !== "240945786635026433")
        return message.channel.sendMessage(":no_entry: You don't have the Bot Commander Role :no_entry:");
    if (!user)
        return message.channel.sendMessage('Please include a user to mute.');
    if (!reason)
        return message.channel.sendMessage('Please include a reason.');
        message.channel.overwritePermissions(user, {
            SEND_MESSAGES: false
        }).then(() => {
        message.channel.sendMessage(`:ballot_box_with_check: OK, ${user.username} has been muted.`)
        user.sendMessage(`You have been __**muted**__ from **${message.guild.name}** by: **${message.author.username}** for **${reason}**`)
        message.guild.channels.find('name', 'mod-log').sendMessage("", {embed: {
 color: 0xffff00,
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL // eslint-disable-line camelcase
      },
//   title: 'ACTION',
  url: '',
  description: `**Action:** Mute\n**User:** ${user.username}\n**Reason:** ${reason}\n`,
//   fields: [
//     {
//       name: 'USER',
//       value: `**${user.username}**`
//     },
//     {
//       name: '**REASON**',
//       value: `\n**${reason}**\n`
      
      
      
//     },
//   ],
timestamp: new Date(),
    footer: {
  }
}});([
            `**MUTE**\n` +
            `**User** => ${user.username}\n` +
            `**Moderator** => ${message.author.username}\n` +
            `**Channel** => ${message.channel.name}\n` +
            `**Reason** => ${reason}\n`
        ])
    });
}

//UNMUTE
if (message.content.startsWith(prefix + 'unmute')) {
if (!message.guild || !message.member) return;    
    var user = message.mentions.users.first();
    var member = message.guild.member(user);
    var reason = message.content.split(' ').slice(2).join(' ');
        let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))
        if (message.author.id !== "255815122616844288")
        if (message.author.id !== "240945786635026433")
        return message.channel.sendMessage(":no_entry: You don't have the Bot Commander Role :no_entry:");
    if (!user)
        return message.channel.sendMessage('Please include a user to unmute.');
    if (!reason)
        return message.channel.sendMessage('Please include a reason.');
        message.channel.overwritePermissions(user, {
            SEND_MESSAGES: true
        }).then(() => {
        message.channel.sendMessage(`:ballot_box_with_check: OK, ${user.username} has been unmuted.`)
        user.sendMessage(`You have been __**unmuted**__ from **${message.guild.name}** by: **${message.author.username}** for **${reason}**`)
        message.guild.channels.find('name', 'mod-log').sendMessage("", {embed: {
 color: 0x21ff00,
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL // eslint-disable-line camelcase
      },
//   title: 'ACTION',
  url: '',
  description: `**Action:** Unmute\n**User:** ${user.username}\n**Reason:** ${reason}\n`,
//   fields: [
//     {
//       name: 'USER',
//       value: `**${user.username}**`
//     },
//     {
//       name: '**REASON**',
//       value: `\n**${reason}**\n`
      
      
      
//     },
//   ],
timestamp: new Date(),
    footer: {
  }
}});([
            `**UNMUTE**\n` +
            `**User** => ${user.username}\n` +
            `**Moderator** => ${message.author.username}\n` +
            `**Channel** => ${message.channel.name}\n` +
            `**Reason** => ${reason}\n`
        ])
    });
}


if (message.content.startsWith(prefix + 'ban')) {
if (!message.guild || !message.member) return;    
    var user = message.mentions.users.first();
    var member = message.guild.member(user);
    var reason = message.content.split(' ').slice(2).join(' ');
        let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))
        if (message.author.id !== "255815122616844288")
        if (message.author.id !== "240945786635026433")
        return message.channel.sendMessage(":no_entry: You don't have the Bot Commander Role :no_entry:");
    if (!user)
        return message.channel.sendMessage('Please include a user to ban.');
    if (!reason)
        return message.channel.sendMessage('Please include a reason.');
    member.ban().then(() => {
        message.channel.sendMessage(`:ballot_box_with_check: OK,️ ${user.username} has been banned.`)
        user.sendMessage(`You have been __**banned**__ from **${message.guild.name}** by: **${message.author.username}** for **${reason}**`)
        message.guild.channels.find('name', 'mod-log').sendMessage("", {embed: {
 color: 0xff0000,
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL // eslint-disable-line camelcase
      },
//   title: 'ACTION',
  url: '',
  description: `**Action:** Ban\n**User:** ${user.username}\n**Reason:** ${reason}\n`,
//   fields: [
//     {
//       name: 'USER',
//       value: `**${user.username}**`
//     },
//     {
//       name: '**REASON**',
//       value: `\n**${reason}**\n`
      
      
      
//     },
//   ],
timestamp: new Date(),
    footer: {
  }
}});([
            `**BAN**\n` +
            `**User** => ${user.username}\n` +
            `**Moderator** => ${message.author.username}\n` +
            `**Channel** => ${message.channel.name}\n` +
            `**Reason** => ${reason}\n`
        ])
    });
}

if (message.content.startsWith(prefix + 'warn')) {
if (!message.guild || !message.member) return;    
   var user = message.mentions.users.first();
    var member = message.guild.member(user);
    var reason = message.content.split(' ').slice(2).join(' ');
    let role = message.member.guild.roles.find('name', 'Bot Commander'); if (!message.member.roles.exists('name', 'Bot Commander'))
        if (message.author.id !== "255815122616844288")
        if (message.author.id !== "240945786635026433")
        return message.channel.sendMessage(":no_entry: You don't have the Bot Commander Role :no_entry:");
    if (!user)
        return message.channel.sendMessage('Please include a user to warn.');
    if (!reason)
        return message.channel.sendMessage('Please include a reason.');
         message.channel.sendMessage(`:ballot_box_with_check: OK, ${user.username} has been warned!`)
        user.sendMessage(`You have been __**warned**__ in **${message.guild.name}** by: **${message.author.username}** for **${reason}**`)
        message.guild.channels.find('name', 'mod-log').sendMessage("", {embed: {
 color: 0xffff00,
      author: {
        name: message.author.username,
        icon_url: message.author.avatarURL // eslint-disable-line camelcase
      },
  title: ``,
  url: '',
  description: `**Action:** Warning\n**User:** ${user.username}\n**Reason:** ${reason}\n`,
  fields: [
    // {
    //   name: 'USER',
    //   value: `**${user.username}**`
    // },
    // {
    //   name: '**REASON**',
    //   value: `\n**${reason}**\n`
      
      
      
    // },
  ],
  timestamp: new Date(),
    footer: {
  }
}});([
            `**WARNING**\n` +
            `**User** => ${user.username}\n` +
            `**Moderator** => ${message.author.username}\n` +
            `**Channel** => ${message.channel.name}\n` +
            `**Reason** => ${reason}\n` +
            `**Time** => ${message.createdAt}`
        ])
    }


//Delete A Channel
if (message.content.startsWith(prefix + "deletechannel")) {
if (!message.guild || !message.member) return;     
  var suffix = message.content.split(' ').slice(1)
  var reqrank = message.member.roles.exists('name', 'Bot Commander');
  if (message.member.roles.exists('name', 'Bot Commander')) {
  const channel = message.guild.channels.find('name', suffix[0]);
  if (!message.guild.channels.exists('name', suffix[0]))
  return message.reply('That channel does not exist!');
  channel.delete().then(() => {
   message.channel.sendMessage(`Successfully deleted **${suffix}**!`)
 });
if(channel.length < 1) {
return message.channel.sendMessage("Do **-deletechannel** <channel> to delete a channel!")
} else
    message.channel.sendMessage('')
  }
}

    if (message.content.startsWith(prefix + "sendall")) {
		var announcement = message.content;
		var guilds = cordyan.guilds.array();
		
		if (message.author.id === "255815122616844288") {
            		for (i = 0; i < guilds.length; i++) {
				if(guilds[i].id != "252129271089201163") {
					guilds[i].defaultChannel.sendMessage('**This is an important announcement from the developer of ' + cordyan.user.username + 
					'.** \n:loud_sound: *"' + announcement + '"*\n**-' + message.author.username + '**');
				}
			}
        	}
	}
	
	
// 	if (message.content.startsWith(prefix + "inv")) {
// 	if (message.author.id === "255815122616844288") {
// 			const serverToInvite = message.content;
// 			message.channel.sendMessage("Alright I am sending you an invite to " + serverToInvite + "!");
// 			try {
// 				var server = cordyan.guilds.find('name', serverToInvite);
// 				var chan = cordyan.channels.find('id', server.id);
// 				chan.createInvite({
// 						temporary: false,
// 						maxAge: 60,
// 						maxUses: 1,
// 					})
// 					.then(i => {
// 						message.author.sendMessage("https://discord.gg/" + i.code);
// 					});
// 			}
// 			catch(err) {
// 				console.log(err);
// 			}
//         }
// 	}


if (message.content.startsWith(prefix + "set")) {
if (!message.guild || !message.member) return;     
var suffix = message.content.split(' ').slice(1)
var reqrank = message.member.roles.exists('name', 'Bot Commander');
if (message.member.roles.exists('name', 'Bot Commander'))
// return message.channel.sendMessage(":warning: You don't have valid permissions! :warning:")
 message.channel.sendMessage("")
return message.channel.sendMessage(":no_entry_sign: Settings not found :no_entry_sign:")
// } else
// message.channel.sendMessage("")
}



//WHATS USERS AVATAR?
   if (message.content === prefix + 'avi') {
if (!message.guild || !message.member) return;       
    // send the user's avatar URL
    message.reply(message.author.avatarURL);
     message.mentions.users.first();
     message.channel.sendMessage("success")
  }
  
  
if (message.content.startsWith(prefix + "meme")) {
var links = ([
           "http://azelf.net/mfw/sweetmemes.jpg",
           "http://i3.kym-cdn.com/photos/images/facebook/000/101/623/are-u-a-WIZARD0.jpg",
		   "http://funnymemes.co/memes/Life_is_Like_a_Box_of_Chocolates_Funny_Meme.jpg",
		   "https://s-media-cache-ak0.pinimg.com/236x/23/10/b7/2310b7ad88353c6c1d65daeee3edcb34.jpg",
		  "https://s-media-cache-ak0.pinimg.com/736x/6a/f6/fb/6af6fb6b67a56d57ad95ac6848354bec.jpg",
		   "https://s-media-cache-ak0.pinimg.com/736x/01/0b/68/010b68214bf1eeb91060732aa58bed1e.jpg",
		  "https://s-media-cache-ak0.pinimg.com/736x/b6/b3/59/b6b35977aebd2ec893d5fe739ad83d04.jpg",
		   "http://cdn2.list25.com/wp-content/uploads/2013/10/deaf1.jpg",
		  "https://s-media-cache-ak0.pinimg.com/736x/85/d0/b8/85d0b8e8adce58168df0b4c313e644bc.jpg",
		  "http://sitepullzone.iamalwayswithyou.netdna-cdn.com/wp-content/uploads/2016/04/funny-memes.jpg",
		  "https://s-media-cache-ak0.pinimg.com/236x/16/ed/16/16ed164f84a3ccf15964a493ccd81f38.jpg",
		  "https://s-media-cache-ak0.pinimg.com/originals/bf/42/89/bf42891f9d24d7c2d650872e0d043596.jpg",
		  "https://s-media-cache-ak0.pinimg.com/originals/24/8d/1b/248d1bca27f636dc5df16c88ab4b8467.jpg",
		  "https://s-media-cache-ak0.pinimg.com/originals/76/77/97/767797a034dccc99de5e1eaab7aaa137.jpg",
		  "http://jokideo.com/wp-content/uploads/2013/09/Funny-meme-I-dont-have-exs.jpg",
		  "https://s-media-cache-ak0.pinimg.com/736x/5e/32/a1/5e32a19383f3509141f6021608213411.jpg",
		  "https://s-media-cache-ak0.pinimg.com/736x/e6/35/b9/e635b9528bac7f6b1fca12b78671f695.jpg"
])   
var item = links[~~(Math.random() * links.length)];
message.channel.sendFile(item)
}   


if (message.content.startsWith(prefix + "portal")) {
var links = ([
        //   "https://images.discordapp.net/.eJwNzEEOhCAMAMC_8ACqLabgbwgSJBEhtHsy_n29zmEe85uX2c2pOmQHOKqkPg8r2mcs2Zbey5XjqGJTbxBVYzpbvlUAt9X7FZkCBUZEt3xE5LaAnsJCzI4RavsaseMu5v0D4qQiSA.cNdvMGfMu7E6rOnSoNjhjZvsPl8.jpg",
          "https://s-media-cache-ak0.pinimg.com/736x/5e/32/a1/5e32a19383f3509141f6021608213411.jpg",
		   "https://s-media-cache-ak0.pinimg.com/originals/ff/e8/a6/ffe8a6f1b6914d980b5de567e09656b5.jpg",
		   "http://funnyand.com/wp-content/uploads/2015/01/What-is-this-300x300.jpg",
		  "https://s-media-cache-ak0.pinimg.com/736x/3f/dc/bc/3fdcbcd8c991a46d34cbbd4536b9a528.jpg",
		   "http://cdn2-www.cattime.com/assets/uploads/gallery/25-funny-cat-memes/007-FUNNY-CAT-MEME.jpg"
		  //"https://s-media-cache-ak0.pinimg.com/736x/b6/b3/59/b6b35977aebd2ec893d5fe739ad83d04.jpg",
		  // "http://cdn2.list25.com/wp-content/uploads/2013/10/deaf1.jpg",
		  //"https://s-media-cache-ak0.pinimg.com/736x/85/d0/b8/85d0b8e8adce58168df0b4c313e644bc.jpg",
		  //"http://sitepullzone.iamalwayswithyou.netdna-cdn.com/wp-content/uploads/2016/04/funny-memes.jpg",
		  //"https://s-media-cache-ak0.pinimg.com/236x/16/ed/16/16ed164f84a3ccf15964a493ccd81f38.jpg",
		  //"https://s-media-cache-ak0.pinimg.com/originals/bf/42/89/bf42891f9d24d7c2d650872e0d043596.jpg",
		  //"https://s-media-cache-ak0.pinimg.com/originals/24/8d/1b/248d1bca27f636dc5df16c88ab4b8467.jpg",
		  //"https://s-media-cache-ak0.pinimg.com/originals/76/77/97/767797a034dccc99de5e1eaab7aaa137.jpg",
		  //"http://jokideo.com/wp-content/uploads/2013/09/Funny-meme-I-dont-have-exs.jpg",
		  //"https://s-media-cache-ak0.pinimg.com/736x/5e/32/a1/5e32a19383f3509141f6021608213411.jpg",
		  //"https://s-media-cache-ak0.pinimg.com/736x/e6/35/b9/e635b9528bac7f6b1fca12b78671f695.jpg"
])   
var item = links[~~(Math.random() * links.length)];
message.channel.sendFile(item)
}   
// message.channel.sendFile('http://azelf.net/mfw/sweetmemes.jpg')
// message.channel.sendFile('http://azelf.net/mfw/sweetmemes.jpg')
// }



//NICKNAME
if (message.content.startsWith(prefix + "nickname")) {
if (!message.guild || !message.member) return;    
    var nickname = message.content.split(' ').slice(2).join(' ');
     var botnick = message.content.split(' ').slice(1).join(' ');
        if (message.author.id !== "255815122616844288")
        if (message.author.id !== "240945786635026433")
        return message.channel.sendMessage(":no_entry: YOU DONT HAVE THE Bot Commander Role :no_entry:!")
     if (!user) {
         message.guild.member(cordyan.user).setNickname(botnick);
         message.channel.sendMessage(`${cordyan.user.username}'s Name has been changed by ${message.author}`)
     } else {
     message.guild.member(user).setNickname(nickname);
     message.channel.sendMessage("success")
 }
 }
 
 


//AVATAR
 if (message.content.startsWith(prefix + "get")) {
if (!message.guild || !message.member) return;     
 var user = message.mentions.users.first();
if (!user) {
var avatar = message.author.avatarURL;
 message.channel.sendFile(avatar);
} else {
var userav = message.mentions.users.first();
var avatar = userav.avatarURL;
message.channel.sendFile(avatar);
message.channel.sendMessage(`***${message.author}*** ***You Happy?***`);
   }
}
});



//WELCOME MESSAGE
cordyan.on("guildMemberAdd", (member) => {
    var role = member.guild.roles.find('name', "Members");
    member.addRole(role)
    console.log(`${member.user.username} has been added to ${role}!`)
    cordyan.guilds.get("252129271089201163").channels.get("252153839216492555").sendMessage([
      '```diff' +
      `\n+ ${member.user.username} | ${member.user.id} | ${member.guild.name}` +
      '```'
])
    if (member.guild !== '110373943822540800') {
    console.log(`${member.user.username} has joined ${member.guild.name}!`)
    }
//   member.user.sendMessage(`Welcome to ${member.guild.name}, **${member.user.username}**`);
});
//LEAVE MESSAGE
cordyan.on("guildMemberRemove", (member) => {
//     // var role = member.guild.roles.find('name', "Members");
//     // member.removeRole(role)
//     // console.log(`${member.user.username} has been removed from ${role}!`)
//     // member.guild.channels.find('name', 'log').sendMessage(`**${member.user.username}** has been removed from ${role.name}!`)
//     console.log(`**${member.user.username}** has left **${member.guild.name}**`);
//     member.user.sendMessage(`Bye! **${member.user.username}**`);
        cordyan.guilds.get("252129271089201163").channels.get("252153839216492555").sendMessage([
      '```diff' +
      `\n- ${member.user.username} | ${member.user.id} | ${member.guild.name}` +
      '```'
])
});

cordyan.login('MjUwMjM4OTg3OTMzOTc0NTI5.CyMafQ.TWI5NhYUMgGFQyiPkRJDeut9tas');