module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:promise/recommended",
    "plugin:security/recommended",
    "plugin:jsdoc/recommended",
    "plugin:@typescript-eslint/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module'
  },
  env: {
    es2021: true,
    mocha: true,
    node: false // you have to turn it on
  },
  parser: "@typescript-eslint/parser",
  settings: {
    'import/resolver': { 'typescript': {} },
    'import/parsers': { '@typescript-eslint/parser': ['.ts'] }
  },
  plugins: [
    "import",
    "promise",
    "immutable",
    "security",
    "no-loops",
    "fp",
    "no-use-extend-native",
    "jsdoc",
    "spellcheck",
    "mocha",
  ],
  rules: {
    'spellcheck/spell-checker': [
      "error",
      {
        "ignoreRequire": true,
        "identifiers": false,
        "minLength": 3,
        "skipWords": [
          "johntalton"
        ]
      }
    ]
  }
}
