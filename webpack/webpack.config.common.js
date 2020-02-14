const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const basePath = path.resolve(__dirname, '../');

module.exports = {
  entry: path.resolve(basePath, './src/index.tsx'),
  output: {
    path: path.resolve(basePath, './dist'),
    filename: 'bundle.[hash].js',
    chunkFilename: '[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.(j|t)sx?/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(basePath, './public/index.html'),
    }),
    new MiniCssExtractPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(basePath, './src'),
    },
    extensions: ['.js', '.ts', '.d.ts', '.tsx', '.json'],
  },
};
