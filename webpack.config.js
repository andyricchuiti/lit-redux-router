/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const babelConfig = require('./babel.config');

babelConfig.plugins.push('@babel/plugin-syntax-dynamic-import');

module.exports = {
  entry: './site/app.ts',
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.m?(t|j)sx?$/,
        use: {
          loader: 'babel-loader',
          options: babelConfig,
        },
      },
    ],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'docs'),
    publicPath: '/',
  },
  devServer: {
    stats: 'errors-only',
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'site/index.html',
    }),
  ],
};
