const Discord = require("discord.js");
const Markus = require("./markus.class");

const bot = new Discord.Client();
const token = "ODMxOTczNjA0NjEwNDA4NTA4.YHdBzA.ddWGxQbMCbnrrWREL3gCvVNZlHU";

bot.on("ready", () => {
  console.log("bot is ready");
});

bot.on("message", function(message) {
  if (message.author.bot) return;
  markusBot = new Markus(message);

  markusBot.respondToMessage();
});

bot.login(token);
