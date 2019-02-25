const withSass = require('@zeit/next-sass')
const path = require('path');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[local]_[hash:base64:5]",
  },
  sassLoaderOptions: {
    includePaths: ["./utils/sass/variables.scss"]
  },
  webpack (config, options) {
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['containers'] = path.join(__dirname, 'containers')
    config.resolve.alias['sass'] = path.join(__dirname, 'sass')
    return config
  }
})