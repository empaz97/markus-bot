const _ = require("lodash");
const commands = require("./constants/commands");
const name = "markus";
const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

class Markus {
  constructor(message) {
    this.message = message;
    this.messageContent = message.content
      .toLowerCase()
      .replace(punctuationRegex, "");
  }

  checkCommand(commandInfo) {
    if (commandInfo.commands.some(cmd => this.messageContent.includes(cmd))) {
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

  respondToMessage() {
    if (!this.messageContent.includes(name)) {
      return;
    }
    _.forEach(_.values(commands), command => this.checkCommand(command));
  }
}

module.exports = Markus;
