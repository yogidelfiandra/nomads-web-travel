const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    home: './src/scripts/views/pages/home.js',
    details: './src/scripts/views/pages/details.js',
    checkout: './src/scripts/views/pages/checkout.js',
    success: './src/scripts/views/pages/success.js',
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/template/home.html',
      filename: 'home.html',
      chunks: ['home'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/template/details.html',
      filename: 'details.html',
      chunks: ['details'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/template/checkout.html',
      filename: 'checkout.html',
      chunks: ['checkout'],
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: './src/template/success.html',
      filename: 'success.html',
      chunks: ['success'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/public/'),
          to: path.resolve(__dirname, 'dist/public/'),
        },
      ],
    }),
  ],
};
