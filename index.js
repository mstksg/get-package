const core = require('@actions/core');
const github = require('@actions/github');
const child_process = require('child_process');
const fs = require('fs');

try {
  ro = core.getInput('runs-on').split("-")[0];

  switch(ro) {

    case "ubuntu":

      const pkgs       = core.getInput('aptitude');
      const mgr        = "apt-get";
      const installcmd = "sudo apt-get install";
      break;

    case "macOS":
      const pkgs       = core.getInput('brew');
      const mgr        = "brew";
      const installcmd = "brew install";
      if (pkgs) {
        child_process.execSync("brew update");
      }
      break;

    default:
      core.setFailed("Unsopported OS");
  }

  if (pkgs) {
    child_process.execSync(installcmd + " " + pkgs);
  }

} catch (error) {
    core.setFailed(error.message);
}

