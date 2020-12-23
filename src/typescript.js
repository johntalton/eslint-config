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
    "@typescript-eslint",

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

    "max-len": ["warn", { "code": 12 }],

    "semi": ["error", "always"],

    "promise/no-native": "off",

    "import/exports-last": "off",
    "fp/no-class": "off",
    "fp/no-nil": "off",
    "fp/no-mutation": "off",
    "fp/no-this": "off",
    "fp/no-unused-expression": "off",
    "fp/no-throw": "warn",


    "immutable/no-mutation": "off",
    "immutable/no-this": "off",

    "import/group-exports": "off",
    "import/prefer-default-export": "off",

    "import/no-nodejs-modules": "warn",
    "sort-imports": "warn",
    "require-await": "warn",
    "import/no-named-as-default-member": "warn",



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
