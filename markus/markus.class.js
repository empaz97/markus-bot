const _ = require("lodash");
const Discord = require("discord.js");

const baseConstants = require("../constants/base");
const textCommands = require("../constants/textCommands");
const embedCommands = require("../constants/embedCommands");
const mentionCommands = require("../constants/mentionCommands");

class Markus {
  constructor(message, client) {
    this._matched = false;
    this.client = client;
    this.message = message;
    this.messageContent = message.content
      .toLowerCase()
      .replace(baseConstants.punctuationRegex, "");
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
        this.messageContent.includes(`${baseConstants.name} ${command}`) ||
        this.messageContent.includes(`${command} ${baseConstants.name}`)
      );
    });
  }

  _getUser(command) {
    const matches = command.match(/ <@!?(\d+)>$/);
    if (!matches) return false;

    const id = matches[1];

    return this.client.users.cache.get(id);
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
      this._matched = true;
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
      this._matched = true;

      // matched
      return false;
    }
    // not matched
    return true;
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

      this._matched = true;

      // matched
      return false;
    }

    // not matched
    return true;
  }

  checkMention(mentionInfo) {
    if (this._commandMatched(mentionInfo)) {
      const user = this._getUser(this.message.content);
      if (!user) return true;

      var compiled = _.template(_.sample(mentionInfo.responses));
      this.message.channel.send(compiled({ user: user.toString() }));
    }
  }

  respondToMessage() {
    if (!this.messageContent.includes(baseConstants.name)) {
      return;
    }
    _.forEach(_.values(textCommands), command =>
      this.checkTextCommand(command)
    );
    if (this._matched) return;

    _.forEach(_.values(embedCommands), embed => this.checkEmbedCommand(embed));
    if (this._matched) return;

    this.checkChoose();
    if (this._matched) return;

    _.forEach(_.values(mentionCommands), mention => this.checkMention(mention));
  }
}

module.exports = Markus;
