const Discord = require("discord.js");

const bot = new Discord.Client();
const token = "ODMxOTczNjA0NjEwNDA4NTA4.YHdBzA.ddWGxQbMCbnrrWREL3gCvVNZlHU";
const name = "markus";
const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

bot.on("ready", () => {
  console.log("bot is ready");
});

bot.on("message", async msg => {
  if (!msg.content.includes(name)) {
    return;
  }

  const command = msg.content.toLowerCase().replace(punctuationRegex, "");

  if (command === "hello markus!") {
    msg.react("👋");
    msg.reply("Hello, how are you!");
  }

  if (command === "say something, markus") {
    msg.channel.send("Something.");
  }
});

bot.login(token);
