const path = require('path');
const merge = require('webpack-merge');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const common = require('./webpack.config.common');

const basePath = path.resolve(__dirname, '../');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  plugins: [new ReactRefreshWebpackPlugin({ disableRefreshCheck: true })],
  devServer: {
    port: 8000,
    hot: true,
    compress: true,
    contentBase: path.resolve(basePath, './dist'),
  },
});
