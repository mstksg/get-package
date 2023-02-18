get-package
===========

Download and install packages using OS package manager

Usage:

```yaml
use: delgurth/get-package@v6
with:
  brew: brewdep1 brewdep2
  apt-get: aptdep1 aptdep2
  snap: snapdep1 snapdep2
  linuxbrew: linuxbrewdep1 linuxbrewdep2
```

The appropriate package manager will be run on the appropriate OS: `brew` field
will be ignored for a `linux` OS, for instance.

Changelog
=========
v6.0.0
-----
- Updated dependencies, removed [command-exits 1.2.9](https://www.npmjs.com/package/command-exists) since it seems unmaintained and replaced it with [which 3.0.0](https://www.npmjs.com/package/which)
- nodejs 12 -> nodejs 16
- added github workflow to validate if release is actually working
- [brew has been removed from the ubuntu image so install it manually](https://github.com/actions/runner-images/issues/6283)

v5.0.2
-----
- add support for snap
- add linuxbrew so linux systems are also able to use brew
- remove unused dependencies
- upgrade dependency dependabot complained about

v4, v5.0.0, v5.0.1
--------------
- broken releases, do not use

v3
-----
- Made the brew command only run on darwin systems
