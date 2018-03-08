`use strict`

const path    = require( `path` )
const webpack = require( `webpack` )
const args    = require( `yargs` ).argv

const isDev = args.prod !== true
const env = isDev ? `development` : `production`

const client = {
  target: `web`,
  mode:   env,
  entry:  `./themes/hiswe-theme/client-javascript/index.js`,
  output: {
    filename: `hiswe-theme.js`,
    path:     path.resolve( __dirname, 'themes/hiswe-theme/source' )
  },
  plugins: [
  ],
  devtool:    `inline-source-map`,
  // https://gist.github.com/sokra/1522d586b8e5c0f5072d7565c2bee693
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: `initial`,
          test: path.resolve(__dirname, `node_modules`),
          name: `vendor`,
          enforce: true,
        }
      }
    }
  },
  module: {
    rules: [{
      test:     /\.jsx?$/,
      include: [
        path.resolve( __dirname, `themes/hiswe-theme/client-javascript` ),
      ],
      use: {
        loader: `babel-loader`,
        options: {
          presets: [
            `@babel/preset-env`,
          ],
        },
      },
    }],
  },
}

module.exports = [ client ]
