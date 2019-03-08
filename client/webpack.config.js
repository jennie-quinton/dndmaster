const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './pages/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test:/\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
          // {
          //   loader: MiniCssExtractPlugin.loader,
          // },
          // {
          //   use: [{
          //     fallback: 'style-loader',
          //     use: [{
          //       loader: 'css-loader',
          //       options: {
          //         modules: true,
          //         importLoaders: true,
          //         localIdentName: '[folder]_[local]_[hash:base64:5]',
          //         sourceMap: true,
          //       },
          //     }, {
          //       loader: 'sass-loader',
          //       options: {
          //         sourceMap: true,
          //       },
          //     }],
          //   }],
          // }
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
      'components': path.join(__dirname, 'components'),
      'containers': path.join(__dirname, 'containers'),
      'sass': path.join(__dirname, 'sass'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin()
    // new MiniCssExtractPlugin()
    // new webpack.DefinePlugin({
    //   'process.env': {}
    // }),
    // new ExtractTextPlugin('index_styles.css'),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: 'common',
    //   filename: 'common.js',
    //   children: true,
    // }),
  ],
};