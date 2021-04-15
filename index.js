const Discord = require("discord.js");
const commands = require("constants/commands");

const bot = new Discord.Client();
const token = "ODMxOTczNjA0NjEwNDA4NTA4.YHdBzA.ddWGxQbMCbnrrWREL3gCvVNZlHU";
const name = "markus";
const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

bot.on("ready", () => {
  console.log("bot is ready");
});

bot.on("message", function(message) {
  if (message.author.bot) return;

  const messageContent = message.content
    .toLowerCase()
    .replace(punctuationRegex, "");
  if (!messageContent.includes(name)) {
    return;
  }

  if (commands.HELP_COMMANDS.some(cmd => messageContent.includes(cmd))) {
    message.channel.send(
      "I'm a work in progress. If you have questions ask @LizardEm"
    );
  } else if (
    commands.GREETING_COMMANDS.some(cmd => messageContent.includes(cmd))
  ) {
    message.react("👋");
    message.reply("Hello, how are you!");
  } else if (messageContent.includes("say something")) {
    message.channel.send("Something.");
  }
});

bot.login(token);
