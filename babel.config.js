const insertParametersPlugin = require('./babel-plugin')

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    insertParametersPlugin
  ]
}
