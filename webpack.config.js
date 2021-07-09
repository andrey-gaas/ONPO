const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './styles.js',
  output: {
    //filename: '',
    path: path.resolve(__dirname, 'public'),
  },
  watchOptions: {
    ignored: ['**/node_modules', '**/public', '**/font'],
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'styles.css',
  })],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },{
        test: /\.(ttf|eot|svg|png|jpg|gif|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        options: {
          outputPath: '../',
          name: '[path][name].[ext]',
        },
      }
    ],
  },
};