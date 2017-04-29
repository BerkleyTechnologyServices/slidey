module.exports = {
  output: {
    pathinfo: true
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      include: /tests/,
      loader: 'eslint-loader'
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'html-loader'
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      loader: 'raw-loader'
    }]
  },
  devtool: 'inline-source-map'
};
