const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const relativePath = './';

module.exports = {
  mode: 'development',
  entry: path.resolve(relativePath, 'src/index.tsx'),
  output: {
    path: path.resolve(relativePath, 'dist'),
    filename: 'bundle.[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: true,
              plugins: ['react-hot-loader/babel'],
            },
          },
          'ts-loader',
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      minify: {},
      path: path.resolve(relativePath, 'dist'),
      template: path.resolve(relativePath, 'src/index.html'),
    }),
    new CleanWebpackPlugin(
      ['./dist'],
      {
        root: path.resolve(relativePath),
        verbose: true,
      },
    ),
  ],
  resolve: {
    extensions: [
      '.ts',
      '.tsx',
      '.js',
      '.jsx',
      '.json',
    ],
    modules: [
      'node_modules',
      path.resolve(relativePath, 'src'),
    ],
  },
  devServer: {
    historyApiFallback: true,
    port: 3000,
  },
};
