const _ = require("lodash");
const Discord = require("discord.js");
const moment = require("moment");

const baseConstants = require("../constants/base");
const textCommands = require("../constants/textCommands");
const embedCommands = require("../constants/embedCommands");
const mentionCommands = require("../constants/mentionCommands");
const otherCommands = require("../constants/otherCommands");

class Markus {
  constructor(message, client, db) {
    this._matched = false;
    this.client = client;
    this.db = db;
    this.message = message;
    this.messageContent = message.content
      .toLowerCase()
      .replace(baseConstants.punctuationRegex, "");
  }

  _send(content) {
    this.message.channel.send(content);
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
    const matches = command.match(/ <@!?(\d+)>/);
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
        this._send(_.sample(commandInfo.niceResponses));
      } else {
        // send a random response
        this._send(_.sample(commandInfo.responses));
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

      this._send(embed);
      this._matched = true;

      // matched
      return false;
    }
    // not matched
    return true;
  }

  dontUnderstand() {
    this._send("I'm sorry I don't understand your request");
  }

  guildRequired() {
    this._send("I'm sorry this command can only be used in a server");
  }

  permissionRequired() {
    this._send("I'm sorry you must be an administrator to use this command");
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
        `I choose "${picked}"`,
        `My choice is "${picked}"`,
        `I pick "${picked}"`
      ];

      this._send(
        _.sample([
          ...responseOptions,
          ...responseOptions,
          ...responseOptions,
          ...responseOptions,
          "What am I, a magic 8 ball?"
        ])
      );

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
      this._send(compiled({ user: user.toString() }));
      this._matched = true;
    }
  }

  fetchCannibals() {
    if (!this.message.guild) {
      this.guildRequired();
      return;
    }
    const query = `SELECT * FROM cannibal WHERE server='${this.message.guild.id}' ORDER BY mention DESC`;
    this.db
      .query(query)
      .then(res => {
        if (!res.rowCount) {
          this._send("There have been no cannibal incidents in this server!");
        } else {
          const timeSince = moment(res.rows[0].mention).fromNow(true);
          this._send(
            `Time since last cannibal incident: ${timeSince}\nTotal cannibal incidents: ${res.rowCount}`
          );
        }
      })
      .catch(e => {
        console.error(`Error updating cannibal entries: "${query}"`);
        console.error(e.stack);
      });
  }

  updateCannibals() {
    if (!this.message.guild) {
      this.guildRequired();
      return;
    }
    const query = `INSERT INTO cannibal(server, mention) VALUES('${this.message.guild.id}', NOW())`;
    this.db
      .query(query)
      .then(() => this.fetchCannibals())
      .catch(e => {
        console.error(`Error updating cannibal entry: "${query}"`);
        console.error(e.stack);
      });
  }

  clearCannibals() {
    const query = `DELETE FROM cannibal WHERE server='${this.message.guild.id}'`;
    this.db
      .query(query)
      .then(() => this.fetchCannibals())
      .catch(e => {
        console.error(`Error clearing cannibal entry: "${query}"`);
        console.error(e.stack);
      });
  }

  checkCannibals() {
    if (
      this._commandMatched({ commands: otherCommands.cannibalCommands.clear })
    ) {
      if (!this.message.guild) {
        this.guildRequired();
      } else if (!this.message.member.hasPermission("ADMINISTRATOR")) {
        this.permissionRequired();
      } else {
        this.clearCannibals();
      }

      this._matched = true;
      return;
    }

    if (
      this._commandMatched({ commands: otherCommands.cannibalCommands.update })
    ) {
      this.updateCannibals();
      this._matched = true;
      return;
    }

    if (
      this._commandMatched({ commands: otherCommands.cannibalCommands.fetch })
    ) {
      this.fetchCannibals();
      this._matched = true;
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
    if (this._matched) return;

    this.checkCannibals();
    if (this._matched) return;
  }
}

module.exports = Markus;
