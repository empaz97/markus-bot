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

const wipCommands = [
  {
    method: "fetchWips",
    commands: [
      "fetch my wips",
      "get my wips",
      "what do i have in progress",
      "show me my wips"
    ]
  },
  {
    method: "fetchCompleteWips",
    commands: [
      "fetch my finished wips",
      "fetch my completed wips",
      "show me my finished wips",
      "show me my completed wips",
      "what wips have i finished",
      "what wips have i completed"
    ]
  },
  {
    method: "addWip",
    commands: [
      "new wip",
      "add wip",
      "add a wip",
      "add a new wip",
      "add to my wips"
    ],
    hasParts: true
  },
  {
    method: "updateWip",
    commands: ["update wip", "update a wip", "update my wip"],
    hasParts: true
  },
  {
    method: "removeWip",
    commands: ["remove wip", "delete wip"],
    hasParts: true
  },
  {
    method: "completeWip",
    commands: [
      "mark a wip as finished",
      "mark a wip as complete",
      "mark wip as finished",
      "mark wip as complete"
    ],
    hasParts: true
  },
  {
    method: "clearWips",
    commands: ["clear my wips", "clear wips", "clear works in progress"]
  }
];

const otherCommands = {
  cannibalCommands,
  wipCommands
};

module.exports = otherCommands;
