const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const isProductionMode = process.env.NODE_ENV === 'production';

module.exports = {
  devtool: isProductionMode ? false : 'inline-source-map',
  mode: process.env.NODE_ENV || 'development',
  entry: path.join(__dirname, 'src', 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[contenthash].min.js',
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /src/,
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
};
