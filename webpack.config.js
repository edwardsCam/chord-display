var path = require('path');

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve('src'),
      path.resolve('node_modules'),
    ],
    extensions: ['.js', '.ts', '.tsx']
  },
  devtool: 'eval-source-map',
  stats: {
    colors: true
  },
  devServer: {
    hot: true,
    inline: true,
    publicPath: '/dist/',
    historyApiFallback: true,
  },
};
