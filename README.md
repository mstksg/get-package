get-package
===========

Download and install packages using OS package manager

Usage:

```yaml
use: mstksg/get-package@v1
with:
  brew: brewdep1 brewdep2
  apt-get: aptdep1 aptdep2
```

The appropriate package manager will be run on the appropriate OS: `brew` field
will be ignored for `ubuntu` OS, for instance.

