module.exports = {

  parserOptions: {
    ecmaVersion: 8,
    ecmaFeatures: {
      experimentalObjectRestSpread: true
    },
    sourceType: "module"
  },

  env: {
    es6: true,
    node: true
  },

  plugins: [
    "import",
    "node",
    "promise",
    "standard"
  ],

  globals: {
    document: false,
    navigator: false,
    window: false
  },

  /**
   * off or 0 - turn the rule off
   * warn or 1 - turn the rule on as a warning (doesn’t affect exit code)
   * error or 2 - turn the rule on as an error (exit code is 1 when triggered)
  **/
  rules: {
      semi: [2, "never"]
  }
}
