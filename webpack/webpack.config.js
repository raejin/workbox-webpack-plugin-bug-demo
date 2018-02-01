const path = require('path');
const { InjectManifest } = require('workbox-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, '../index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist'),
  },
  plugins: [
    new InjectManifest({
      swSrc: path.resolve(__dirname, '../service-worker-source.js'),
      swDest: 'sw.js'
    })
  ],
}

