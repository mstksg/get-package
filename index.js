const os = require('os')
const core = require('@actions/core');
const github = require('@actions/github');
const child_process = require('child_process');
const fs = require('fs');
const commandExists = require('command-exists');

const managers = {
  "apt-get": {
      "check": "apt-get",
      "platform": "linux",
      "command": "sudo apt-get update && sudo apt-get -y install"
    },
  "brew": {
      "check": "brew",
      "platform": "darwin",
      "command": "brew update && brew install"
    }
};

try {

  var pkgs;

  for (let [mgr, info] of Object.entries(managers)) {
    if (commandExists.sync(info.check) && os.platform() === info.platform) {
      pkgs = core.getInput(mgr);
      if (pkgs) {
        child_process.execSync(info.command + " " + pkgs)
      }
    }
  }

} catch (error) {
    core.setFailed(error.message);
}

