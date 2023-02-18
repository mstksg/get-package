const os = require('os')
const core = require('@actions/core');
const which = require('which')
const child_process = require('child_process');

const managers = {
  "apt-get": {
    "check": "apt-get",
    "platform": "linux",
    "command": ">&2 echo 'apt-get' && sudo apt-get update && DEBIAN_FRONTEND=noninteractive sudo apt-get -y install"
  },
  "brew": {
    "check": "brew",
    "platform": "darwin",
    "command": ">&2 echo 'brew' && brew update && brew install"
  },
  "snap": {
    "check": "snap",
    "platform": "linux",
    "command": ">&2 echo 'snap' && sudo snap install"
  },
  "linuxbrew": {
    "check": "brew",
    "platform": "linux",
    "command": ">&2 echo 'linuxbrew' && export HOMEBREW_NO_INSTALL_FROM_API=1 && brew update && brew install"
  }
};

try {

  let pkgs;

  for (let [mgr, info] of Object.entries(managers)) {
    const resolvedOrNull = which.sync(info.check, { nothrow: true })
    if (resolvedOrNull !== null && os.platform() === info.platform) {
      pkgs = core.getInput(mgr);
      if (pkgs) {
        child_process.execSync(info.command + " " + pkgs)
      }
    } else {
      if (os.platform() === info.platform) {
        console.error("did not find command " + mgr);
      }
    }
  }

} catch (error) {
  core.setFailed(error.message);
}

