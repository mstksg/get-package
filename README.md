get-package
===========

Download and install packages using OS package manager

Usage:

```yaml
use: delgurth/get-package@v5.0.1
with:
  brew: brewdep1 brewdep2
  apt-get: aptdep1 aptdep2
  snap: snapdep1 snapdep2
  linuxbrew: linuxbrewdep1 linuxbrewdep2
```

The appropriate package manager will be run on the appropriate OS: `brew` field
will be ignored for a `linux` OS, for instance.
