import webpack from 'webpack'
import path from 'path'
import fs from 'fs'

// Read all demo
let demos = fs.readdirSync('demo'),
    demoEntryMap = {}

for (let demo of demos) {
  demoEntryMap[`demo/${demo}/dist/bundle`] = `./demo/${demo}/index.js`
}

export default [{
  name: 'source',
  devtool: 'inline-source-map',
  entry: [
    path.resolve(__dirname, 'src/chartx.js')
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'chartx.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname)
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel-loader']}
    ]
  }
}, {
  name: 'demo',
  devtool: 'inline-source-map',
  entry: demoEntryMap,
  target: 'web',
  output: {
    path: __dirname, // Note: Physical files are only output by the production build task `npm run build`.
    filename: '[name].js'
  },
  devServer: {
    contentBase: path.resolve(__dirname)
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'demo'), loaders: ['babel-loader']}
    ]
  }
}]