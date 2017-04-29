const path = require('path');
const webpack = require('webpack');
const deindent = require('deindent');
const packageJson = require('./package.json');
const args = require('yargs').argv;

const isProd = args.p;

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    'slidey': './slidey.module.js'
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: isProd ? '[name].min.js' : '[name].js',
    sourceMapFilename: '[file].map',
    library: 'slidey',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: [{
    angular: 'angular'
  }],
  devtool: 'source-map',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      exclude: /node_modules/,
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
  plugins: [
    new webpack.BannerPlugin({
      banner: getBanner(),
      raw: true
    })
  ]
};

function getBanner() {
  if (isProd) {
    return deindent(`
      /*! ${packageJson.name} v${packageJson.version} | Apache 2.0 | Made with ♥ by ${packageJson.contributors.join(', ')} */
    `).trim();
  }
  return deindent(`
    /**
     * ${packageJson.name} JavaScript Library v${packageJson.version}
     *
     * @license Apache 2.0 (https://github.com/BerkleyTechnologyServices/slidey/blob/master/LICENSE)
     *
     * Made with ♥ by ${packageJson.contributors.join(', ')}
     */
  `).trim();
}
