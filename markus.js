const _ = require("lodash");
const commands = require("./constants/commands");
const name = "markus";
const punctuationRegex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;

function checkCommand(messageContent, message, commandInfo) {
  if (commandInfo.commands.some(cmd => messageContent.includes(cmd))) {
    if (commandInfo.reaction) {
      message.react(commandInfo.reaction);
    }

    if (commandInfo.niceResponses && messageContent.includes("please")) {
      // send a random nice response
      message.channel.send(_.sample(commandInfo.niceResponses));
    } else {
      // send a random response
      message.channel.send(_.sample(commandInfo.responses));
    }
    // matched
    return false;
  }
  // not matched
  return true;
}

export function respondToMessage(message) {
  const messageContent = message.content
    .toLowerCase()
    .replace(punctuationRegex, "");
  if (!messageContent.includes(name)) {
    return;
  }

  _.forEach(_.values(commands), command => checkCommand(message, command));
}
