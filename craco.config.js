const { CracoAliasPlugin, configPaths } = require('react-app-rewire-alias')

module.exports = {
  eslint: {
    enable: false,
  },
  plugins: [
    {
      plugin: CracoAliasPlugin,
      options: { alias: configPaths('./tsconfig.paths.json') },
    },
  ],
}
