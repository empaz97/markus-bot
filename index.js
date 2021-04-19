const Discord = require("discord.js");
const Markus = require("./markus/markus.class");

const bot = new Discord.Client();
const token = process.env.BOT_TOKEN;

bot.on("ready", () => {
  console.log("bot is ready");
});

bot.on("message", function(message) {
  if (message.author.bot) return;
  markusBot = new Markus(message, bot);

  markusBot.respondToMessage();
});

bot.login(token);
