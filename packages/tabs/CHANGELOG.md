# [@hig/tabs-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/tabs@2.0.0...@hig/tabs@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/tabs-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/tabs@1.3.2...@hig/tabs@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/tabs-v1.3.2](https://github.com/Autodesk/hig/compare/@hig/tabs@1.3.1...@hig/tabs@1.3.2) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/tabs-v1.3.1](https://github.com/Autodesk/hig/compare/@hig/tabs@1.3.0...@hig/tabs@1.3.1) (2022-01-12)


### Bug Fixes

*  react v. in peerDependencies instead of dependencies ([4701332](https://github.com/Autodesk/hig/commit/4701332))

# [@hig/tabs-v1.3.0](https://github.com/Autodesk/hig/compare/@hig/tabs@1.2.1...@hig/tabs@1.3.0) (2020-07-10)


### Features

* add stylesheet prop ([67a432c](https://github.com/Autodesk/hig/commit/67a432c))

# [@hig/tabs-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/tabs@1.2.0...@hig/tabs@1.2.1) (2020-05-13)


### Bug Fixes

* stop using deprecated theme-data roles ([e963079](https://github.com/Autodesk/hig/commit/e963079))

# [@hig/tabs-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/tabs@1.1.1...@hig/tabs@1.2.0) (2020-03-23)


### Features

* allow active Tab to be controlled ([4ecbb79](https://github.com/Autodesk/hig/commit/4ecbb79))

# [@hig/tabs-v1.1.1](https://github.com/Autodesk/hig/compare/@hig/tabs@1.1.0...@hig/tabs@1.1.1) (2019-10-24)


### Bug Fixes

* tab with zero index not trigger to active in Tabs ([9715472](https://github.com/Autodesk/hig/commit/9715472))

# [@hig/tabs-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/tabs@1.0.3...@hig/tabs@1.1.0) (2019-09-19)


### Features

* update Tabs to match the new design ([a6ab419](https://github.com/Autodesk/hig/commit/a6ab419))

# [@hig/tabs-v1.0.3](https://github.com/Autodesk/hig/compare/@hig/tabs@1.0.2...@hig/tabs@1.0.3) (2019-04-25)


### Bug Fixes

* remove fonts package as a dependency ([5ebb31d](https://github.com/Autodesk/hig/commit/5ebb31d))

# [@hig/tabs-v1.0.2](https://github.com/Autodesk/hig/compare/@hig/tabs@1.0.1...@hig/tabs@1.0.2) (2019-03-20)


### Bug Fixes

* use active underline for pressed state ([8f9885a](https://github.com/Autodesk/hig/commit/8f9885a))

# [@hig/tabs-v1.0.1](https://github.com/Autodesk/hig/compare/@hig/tabs@1.0.0...@hig/tabs@1.0.1) (2019-03-13)


### Bug Fixes

* theme-context and theme-data as peer dependencies ([19fe5de](https://github.com/Autodesk/hig/commit/19fe5de))

# [@hig/tabs-v1.0.0](https://github.com/Autodesk/hig/compare/@hig/tabs@0.1.3...@hig/tabs@1.0.0) (2019-02-26)


### Features

* a new style for Tabs ([a1516f6](https://github.com/Autodesk/hig/commit/a1516f6))
* style Tabs hover and focus events ([649af7e](https://github.com/Autodesk/hig/commit/649af7e))
* use emotion and stylesheet function in Tabs ([4b7a047](https://github.com/Autodesk/hig/commit/4b7a047))
* use theme data in Tabs ([f2c5a6e](https://github.com/Autodesk/hig/commit/f2c5a6e))


### BREAKING CHANGES

* this includes an entirely new design for Tabs that uses
theme data.
* This removes all of the old element class names in favor of classnames
generated by emotion.

# [@hig/tabs-v0.1.3](https://github.com/Autodesk/hig/compare/@hig/tabs@0.1.2...@hig/tabs@0.1.3) (2018-10-08)


### Bug Fixes

* update dependencies ([70fb27c](https://github.com/Autodesk/hig/commit/70fb27c))

# [@hig/tabs-v0.1.2](https://github.com/Autodesk/hig/compare/@hig/tabs@0.1.1...@hig/tabs@0.1.2) (2018-10-08)


### Bug Fixes

* **behavior:** add missing keyboard interactions ([cfe892c](https://github.com/Autodesk/hig/commit/cfe892c))

<a name="@hig/tabs-v0.1.1"></a>
# [@hig/tabs-v0.1.1](https://github.com/Autodesk/hig/compare/@hig/tabs@0.1.0...@hig/tabs@0.1.1) (2018-07-19)


### Bug Fixes

* **behavior:** remove invalid prop from Fragment ([8366190](https://github.com/Autodesk/hig/commit/8366190))

<a name="@hig/tabs-v0.1.0"></a>
# [@hig/tabs-v0.1.0](https://github.com/Autodesk/hig/compare/@hig/tabs@0.0.0...@hig/tabs@0.1.0) (2018-07-06)


### Bug Fixes

* **bundle:** Fix package bundles ([a1b479d](https://github.com/Autodesk/hig/commit/a1b479d))
* **bundle:** include dependency CSS ([f5a4a62](https://github.com/Autodesk/hig/commit/f5a4a62))


### Features

* **migration:** Rewrite Tabs component ([799c6c2](https://github.com/Autodesk/hig/commit/799c6c2))
* **tabs:** Add Tabs placeholders ([91ef9f4](https://github.com/Autodesk/hig/commit/91ef9f4))
