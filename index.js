const core = require('@actions/core');
const github = require('@actions/github');
const child_process = require('child_process');
const fs = require('fs');

try {
  ro = core.getInput('runs-on').split("-")[0];
  var pkgs;
  var mgr;
  var installcmd;

  switch(ro) {

    case "ubuntu":
      pkgs       = core.getInput('aptitude');
      mgr        = "apt-get";
      installcmd = "sudo apt-get install";
      break;

    case "macOS":
      pkgs       = core.getInput('brew');
      mgr        = "brew";
      installcmd = "brew install";
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

