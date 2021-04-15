const _ = require("lodash");
const textCommands = require("../constants/textCommands");
const name = "markus";
const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

class Markus {
  constructor(message) {
    this.message = message;
    this.messageContent = message.content
      .toLowerCase()
      .replace(punctuationRegex, "");
  }

  _checkSome(command, commandInfo) {
    if (commandInfo.noAnchor) {
      return this.messageContent.includes(command);
    }
    return (
      this.messageContent.includes(`${name} ${command}`) ||
      this.messageContent.includes(`${command} ${name}`)
    );
  }

  checkTextCommand(commandInfo) {
    if (commandInfo.commands.some(cmd => this._checkSome(cmd, commandInfo))) {
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

  respondToMessage() {
    if (!this.messageContent.includes(name)) {
      return;
    }
    _.forEach(_.values(textCommands), command =>
      this.checkTextCommand(command)
    );
    // _.forEach(people, (value, key) => this.checkPerson(key, value));
  }
}

module.exports = Markus;
