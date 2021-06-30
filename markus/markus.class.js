const _ = require("lodash");
const Discord = require("discord.js");
const moment = require("moment");

const DatabaseHelper = require("./databaseHelper.class");

const baseConstants = require("../constants/base");
const textCommands = require("../constants/textCommands");
const embedCommands = require("../constants/embedCommands");
const mentionCommands = require("../constants/mentionCommands");
const databaseCommands = require("../constants/databaseCommands");

class Markus {
  constructor(message, client, db) {
    this._matched = false;
    this.client = client;
    this.db = new DatabaseHelper(db);
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
    this.db
      .fetchCannibals(this.message.guild.id)
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
      .catch(e => this._send(e.message));
  }

  updateCannibals() {
    if (!this.message.guild) {
      this.guildRequired();
      return;
    }
    this.db
      .updateCannibals(this.message.guild.id)
      .then(() => this.fetchCannibals())
      .catch(e => this._send(e.message));
  }

  clearCannibals() {
    this.db
      .clearCannibals(this.message.guild.id)
      .then(() => this.fetchCannibals())
      .catch(e => this._send(e.message));
  }

  formatWips(wipResults) {
    if (!wipResults.rowCount) {
      this._send("You have no wips");
      return;
    }
    let msg = "Here is a list of your wips:\n";
    wipResults.rows.forEach(wip => {
      msg += `- ${wip.name}`;
      if (wip.summary) {
        msg += ` (*${wip.summary}*)`;
      }
      msg += "\n";
    });
    this._send(msg);
  }

  fetchWips() {
    this.db
      .fetchWips(this.message.author.id)
      .then(res => this.formatWips(res))
      .catch(e => this._send(e.message));
  }

  fetchCompleteWips() {
    this.db
      .fetchWips(this.message.author.id, true, true)
      .then(res => this.formatWips(res))
      .catch(e => this._send(e.message));
  }

  addWip(parts) {
    // TODO: more error checking
    this.db
      .addWip(this.message.author.id, parts.name, parts.summary)
      .then(() => this._send("Wip successfully added to your wip list!"))
      .catch(e => this._send(e.message));
  }

  updateWip(parts) {
    // TODO: more error checking
    this.db
      .updateWip(this.message.author.id, parts.name, parts.summary)
      .then(() => this._send("Wip successfully updated!"))
      .catch(e => this._send(e.message));
  }

  removeWip(parts) {
    // TODO: more error checking
    this.db
      .addWip(this.message.author.id, parts.name)
      .then(() => this._send("Wip successfully removed from your wip list!"))
      .catch(e => this._send(e.message));
  }

  completeWip(parts) {
    // TODO: more error checking
    this.db
      .completeWip(this.message.author.id, parts.name)
      .then(() => this._send("Wip successfully marked as completed! Congrats!"))
      .catch(e => this._send(e.message));
  }

  clearWips() {
    this.db
      .clearWips(this.message.author.id)
      .then(() => this._send("Wip list successfully cleared!"))
      .catch(e => this._send(e.message));
  }

  checkCannibals() {
    if (
      this._commandMatched({
        commands: databaseCommands.cannibalCommands.clear
      })
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
      this._commandMatched({
        commands: databaseCommands.cannibalCommands.update
      })
    ) {
      this.updateCannibals();
      this._matched = true;
      return;
    }

    if (
      this._commandMatched({
        commands: databaseCommands.cannibalCommands.fetch
      })
    ) {
      this.fetchCannibals();
      this._matched = true;
    }
  }

  checkWips() {
    _.forEach(databaseCommands.wipCommands, command => {
      if (this._commandMatched(command)) {
        const actionMethod = _.bind(_.get(this, command.method), this);
        // get the relevant function based on key and call it
        if (command.hasParts) {
          // TODO: parse parts
          const parts = this.message.content.split(":");
          if (parts.length < 2) {
            this._send("Sorry, you must include a name for your wip!");
          } else {
            const name = parts[1].trim();
            let summary = _.get(parts, "[2]");
            if (summary) summary = summary.trim();
            actionMethod({ name, summary });
          }
        } else {
          actionMethod();
        }
        this._matched = true;
        return false;
      }
    });
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

    this.checkWips();
    if (this._matched) return;
  }
}

module.exports = Markus;
