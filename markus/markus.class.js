const _ = require("lodash");
const Discord = require("discord.js");

const textCommands = require("../constants/textCommands");
const embedCommands = require("../constants/embedCommands");
const name = "markus";
const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

class Markus {
  constructor(message) {
    this.message = message;
    this.messageContent = message.content
      .toLowerCase()
      .replace(punctuationRegex, "");
  }

  _commandMatched(commandInfo) {
    return commandInfo.commands.some(command => {
      if (commandInfo.exact) {
        return this.messageContent === command;
      }
      if (commandInfo.noAnchor) {
        return this.messageContent.includes(command);
      }
      return (
        this.messageContent.includes(`${name} ${command}`) ||
        this.messageContent.includes(`${command} ${name}`)
      );
    });
  }

  checkTextCommand(commandInfo) {
    if (this._commandMatched(commandInfo)) {
      if (commandInfo.reaction) {
        this.message.react(commandInfo.reaction);
      }

      if (commandInfo.niceResponses && this.messageContent.includes("please")) {
        // send a random nice response
        this.message.channel.send(_.sample(commandInfo.niceResponses));
      } else {
        // send a random response
        this.message.channel.send(_.sample(commandInfo.responses));
      }
      // matched
      return false;
    }
    // not matched
    return true;
  }

  checkEmbedCommand(embedInfo) {
    if (this._commandMatched(embedInfo)) {
      const choice = _.sample(embedInfo.artifacts);
      const embed = new Discord.MessageEmbed()
        .setColor(_.get(embedInfo, "color", "#17c9ff"))
        .setTitle(_.get(choice, "title", "Untitled"));

      if (choice.url) {
        embed.setURL(choice.url);
      }
      if (choice.author) {
        embed.setAuthor(choice.author);
      }
      if (choice.image) {
        embed.setImage(choice.image);
      }
      if (choice.description) {
        embed.setDescription(choice.description);
      }
      if (choice.fields) {
        embed.addFields(...choice.fields);
      }

      this.message.channel.send(embed);
    }
  }

  checkPerson(name, personInfo) {
    if (
      this.messageContent.includes(`how is ${name}`) ||
      this.messageContent.includes(`hows ${name}`)
    ) {
      this.message.channel.send(_.sample(personInfo.how));
    } else if (
      this.messageContent.includes(`where is ${name}`) ||
      this.messageContent.includes(`wheres ${name}`)
    ) {
      this.message.channel.send(_.sample(personInfo.where));
    }
  }

  dontUnderstand() {
    this.message.channel.send("I'm sorry I don't understand your request");
  }

  checkChoose() {
    if (this._commandMatched({ commands: ["choose", "pick"] })) {
      const choiceArray = this.message.content.toLowerCase().split(":");
      if (choiceArray.length < 2) return;
      const choices = choiceArray[1].split(",");
      if (!choices.length) return this.dontUnderstand();

      const picked = _.trim(_.sample(choices));
      const responseOptions = [
        `How about "${picked}"?`,
        `How about "${picked}"?`,
        `I choose "${picked}"`,
        `I choose "${picked}"`,
        `My choice is "${picked}"`,
        `My choice is "${picked}"`,
        `I pick "${picked}"`,
        `I pick "${picked}"`,
        `What am I, a magic 8 ball?`
      ];

      this.message.channel.send(_.sample(responseOptions));
    }
  }

  respondToMessage() {
    if (!this.messageContent.includes(name)) {
      return;
    }
    _.forEach(_.values(textCommands), command =>
      this.checkTextCommand(command)
    );

    _.forEach(_.values(embedCommands), embed => this.checkEmbedCommand(embed));

    this.checkChoose();
    // _.forEach(people, (value, key) => this.checkPerson(key, value));
  }
}

module.exports = Markus;
