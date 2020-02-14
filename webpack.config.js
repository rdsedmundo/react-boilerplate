const devConfig = require('./webpack/webpack.config.dev');
const prodConfig = require('./webpack/webpack.config.prod');

if (process.env.NODE_ENV === 'production') {
  module.exports = prodConfig;
} else {
  module.exports = devConfig;
}
