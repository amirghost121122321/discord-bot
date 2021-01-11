const Discord = require("discord.js");
const bot = new Discord.Client();

const token = 'NzkxMzM4MTQ3MTQ5NTEyNzM0.X-NtFA.MxBasCQHnJR5SnI5OVr2puW-dZI';

const perfix = '!';

bot.on('ready', () => {
    console.log("Im Ready")
})

bot.on('message', message => {
    let args = message.content.substring(perfix.length).split(" ")

    if (message.content.startsWith(perfix)) {
        if (args[0] === "help"){
            message.reply("**برای ارسال پیام به دی ام افراد سرور از این دستور استفاده نمایید **")
        }
    }
})

bot.on('message', message => {
    let args = message.content.substring(perfix.length).split(" ")

    if (message.content.startsWith(perfix)) {
        if (args[0] === "help"){
            message.channel.send("``!dmall``")
        }
    }
})


bot.on('message', message => {
    let args = message.content.substring(perfix.length).split(" ")

    if (message.content.startsWith(perfix)) {
        if (args[0] === "help"){
            message.reply("**برای استفاده از دستورات روبات ولتا از دستور زیر استفاده نمایید**")
        }
    }
})



bot.on('message', message => {
    let args = message.content.substring(perfix.length).split(" ")

    if (message.content.startsWith(perfix)) {
        if (args[0] === "help"){
            message.channel.send("``*help``")
        }
    }
})

bot.on("ready", () => {
    function YousamPower() {
      let hungry = ["روبات اطلاعات تیم مدیریت پرشیان دی ام" , "!help" , "Dev : Amir._.Ghost" , ]
      let Power = Math.floor(Math.random() * hungry.length);
      bot.user.setActivity(hungry[Power], {type: "PLAYING"});
    }; setInterval(YousamPower, 1500)
  });

  bot.on('message', message => {
    let args = message.content.substring(perfix.length).split(" ")

    if (message.content.startsWith(perfix)) {
        if (args[0] === "."){
            message.channel.send("    @everyone  **اضافه شدن روبات اطلاعات به سرور دستور ``!help``** ")
        }
    }
})


bot.login(token)