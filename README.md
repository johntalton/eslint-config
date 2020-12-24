# eslint-config
Shared `eslint` configuration accross projects.

```shell
npm -D @johntalton/eslint-config
```

## Notes:

### Install Dependencies

```shell
npm i -D eslint-plugin-immutable eslint-plugin-import eslint-plugin-jsdoc eslint-plugin-mocha eslint-plugin-no-loops eslint-plugin-no-use-extend-native eslint-plugin-promise eslint-plugin-security eslint-plugin-spellcheck eslint-plugin-functional eslint-plugin-fp
```
```shell
npm i -D  @typescript-eslint/eslint-plugin
```

### Extend
example adding to the `package.json`
```JSON
//package.json
{
  ...
  "eslintConfig": {
    "extends": [
      "@johntalton/eslint-config/ts",
      "@johntalton/eslint-config/node"
    ],
    "env": { "node": true }
  }
}
```
