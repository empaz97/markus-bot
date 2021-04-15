const Discord = require("discord.js");

const bot = new Discord.Client();
const token = "ODMxOTczNjA0NjEwNDA4NTA4.YHdBzA.ddWGxQbMCbnrrWREL3gCvVNZlHU";
const name = "markus";
const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

bot.on("ready", () => {
  console.log("bot is ready");
});

bot.on("message", function(message) {
  console.log("bot is here");
  if (message.author.bot) return;
  if (!message.content.includes(name)) {
    return;
  }

  const command = message.content.toLowerCase().replace(punctuationRegex, "");

  if (command === "hello markus") {
    console.log("reacting");
    message.react("👋");
    message.reply("Hello, how are you!");
  }

  if (command === "say something markus") {
    console.log("sending");
    message.channel.send("Something.");
  }
  console.log("hey");
});

bot.login(token);
