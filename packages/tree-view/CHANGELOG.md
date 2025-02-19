# [@hig/tree-view-v2.7.0](https://github.com/Autodesk/hig/compare/@hig/tree-view@2.6.1...@hig/tree-view@2.7.0) (2022-06-14)


### Features

* make selected to be Array ([54798c2](https://github.com/Autodesk/hig/commit/54798c2))

# [@hig/tree-view-v2.6.1](https://github.com/Autodesk/hig/compare/@hig/tree-view@2.6.0...@hig/tree-view@2.6.1) (2022-05-25)


### Bug Fixes

* controlled TreeItem styling ([defe6a6](https://github.com/Autodesk/hig/commit/defe6a6))

# [@hig/tree-view-v2.6.0](https://github.com/Autodesk/hig/compare/@hig/tree-view@2.5.1...@hig/tree-view@2.6.0) (2022-04-05)


### Features

* tree view label to return props ([b1a93fd](https://github.com/Autodesk/hig/commit/b1a93fd))

# [@hig/tree-view-v2.5.1](https://github.com/Autodesk/hig/compare/@hig/tree-view@2.5.0...@hig/tree-view@2.5.1) (2022-03-17)


### Bug Fixes

* add PropType validation for selected and defaultSelected ([b489459](https://github.com/Autodesk/hig/commit/b489459))

# [@hig/tree-view-v2.5.0](https://github.com/Autodesk/hig/compare/@hig/tree-view@2.4.0...@hig/tree-view@2.5.0) (2022-03-16)


### Features

* add selected and defaultSelected props ([a60ebec](https://github.com/Autodesk/hig/commit/a60ebec))

# [@hig/tree-view-v2.4.0](https://github.com/Autodesk/hig/compare/@hig/tree-view@2.3.0...@hig/tree-view@2.4.0) (2022-02-16)


### Features

* make TreeItem support 'ref' property ([2151107](https://github.com/Autodesk/hig/commit/2151107))

# [@hig/tree-view-v2.3.0](https://github.com/Autodesk/hig/compare/@hig/tree-view@2.2.0...@hig/tree-view@2.3.0) (2022-02-07)


### Features

* **HOC:** TreeView can contain high order TreeItem ([d2fca9a](https://github.com/Autodesk/hig/commit/d2fca9a))

# [@hig/tree-view-v2.2.0](https://github.com/Autodesk/hig/compare/@hig/tree-view@2.1.0...@hig/tree-view@2.2.0) (2022-01-31)


### Features

* **dblClick:** double click to expand or collapse tree item ([#2580](https://github.com/Autodesk/hig/issues/2580)) ([8a2fd84](https://github.com/Autodesk/hig/commit/8a2fd84))

# [@hig/tree-view-v2.1.0](https://github.com/Autodesk/hig/compare/@hig/tree-view@2.0.0...@hig/tree-view@2.1.0) (2022-01-24)


### Features

* updating peer dependencies release ([0a8a2b6](https://github.com/Autodesk/hig/commit/0a8a2b6))

# [@hig/tree-view-v2.0.0](https://github.com/Autodesk/hig/compare/@hig/tree-view@1.2.4...@hig/tree-view@2.0.0) (2022-01-13)


### Code Refactoring

* Major Release - React 17 Upgrade ([2523711](https://github.com/Autodesk/hig/commit/2523711))


### BREAKING CHANGES

* This release includes upgrading to React 17 and all associated libraries. The components have also had structural changes, utilizing stateless components and hooks. There should be no change in look or behavior of components. The code usage is the same so if you’re already on react 17 you can bump the version directly. If you’re on an old version of react you’ll need to upgrade your project’s react first to 17 and then the HIG components. This upgrade also means no more fixes for the react 15 version but it will still be available for download from NPM. You can fork the repo and make fixes with the older version if there is something critical past this release date.

# [@hig/tree-view-v1.2.4](https://github.com/Autodesk/hig/compare/@hig/tree-view@1.2.3...@hig/tree-view@1.2.4) (2022-01-12)


### Bug Fixes

* Forcing semantic release by editing readmes ([d39b61f](https://github.com/Autodesk/hig/commit/d39b61f))


### Reverts

* "Revert "Revert "feat : Migrate all repository to React v17.0 """ ([bf78986](https://github.com/Autodesk/hig/commit/bf78986))

# [@hig/tree-view-v1.2.3](https://github.com/Autodesk/hig/compare/@hig/tree-view@1.2.2...@hig/tree-view@1.2.3) (2022-01-12)


### Bug Fixes

* refactor componendDIdupdate in functional ([215ba42](https://github.com/Autodesk/hig/commit/215ba42))
* unit testing ([29a1a1b](https://github.com/Autodesk/hig/commit/29a1a1b))

# [@hig/tree-view-v1.2.2](https://github.com/Autodesk/hig/compare/@hig/tree-view@1.2.1...@hig/tree-view@1.2.2) (2021-12-08)


### Bug Fixes

* label prop for subtree ([389dca7](https://github.com/Autodesk/hig/commit/389dca7))

# [@hig/tree-view-v1.2.1](https://github.com/Autodesk/hig/compare/@hig/tree-view@1.2.0...@hig/tree-view@1.2.1) (2021-12-07)


### Bug Fixes

* tree-view change prop type ([08bd9dc](https://github.com/Autodesk/hig/commit/08bd9dc))

# [@hig/tree-view-v1.2.0](https://github.com/Autodesk/hig/compare/@hig/tree-view@1.1.0...@hig/tree-view@1.2.0) (2021-11-05)


### Features

* pass internal method to table events ([3431295](https://github.com/Autodesk/hig/commit/3431295))

# [@hig/tree-view-v1.1.0](https://github.com/Autodesk/hig/compare/@hig/tree-view@1.0.0...@hig/tree-view@1.1.0) (2021-08-11)


### Bug Fixes

* fix misaligned guidelines ([8d17ee4](https://github.com/Autodesk/hig/commit/8d17ee4))


### Features

* pass in ...props to the root of the TreeItem ([25ee6c0](https://github.com/Autodesk/hig/commit/25ee6c0))

# @hig/tree-view-v1.0.0 (2021-07-29)


### Features

* add treeview component ([c69667e](https://github.com/Autodesk/hig/commit/c69667e))
