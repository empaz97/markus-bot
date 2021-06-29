const cannibalCommands = {
  update: [
    "update days since last cannibal incident",
    "cannibal update",
    "update cannibal mention",
    "update cannibal",
    "update cannibal days",
    "cannibal incident update"
  ],
  fetch: [
    "how many days since the last cannibal incident",
    "cannibal report",
    "cannibal days",
    "cannibal count",
    "when was the last cannibal incident"
  ],
  clear: [
    "reset cannibal count",
    "reset cannibal report",
    "clear cannibal count",
    "clear cannibal report"
  ],
  finished: ["what are my finished wips?"]
};

const wipCommands = {
  fetch: [
    "fetch my wips",
    "get my wips",
    "what do i have in progress",
    "show me my wips"
  ],
  add: ["new wip", "add wip", "add a wip", "add a new wip", "add to my wips"],
  remove: ["remove wip", "delete wip"],
  finish: ["mark a wip as finished", "finished wip"],
  clear: ["clear my wips", "clear wips", "clear works in progress"]
};
const otherCommands = {
  cannibalCommands,
  wipCommands
};

module.exports = otherCommands;
