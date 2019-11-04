const core = require('@actions/core');
const github = require('@actions/github');
const child_process = require('child_process');
const fs = require('fs');
const commandExists = require('command-exists');

const managers = {
  "apt-get": {
      "check": "apt-get",
      "command": "sudo apt-get install"
    },
  "brew": {
      "check": "brew",
      "command": "brew update && brew install"
    }
};

try {

  var pkgs;

  for (let [mgr, info] of Object.entries(managers)) {
    if (commandExists.sync(info.check)) {
      pkgs = core.getInput(mgr);
      if (pkgs) {
        child_process.execSync(info.command + " " + pkgs)
      }
    }
  }

} catch (error) {
    core.setFailed(error.message);
}

