import { join } from 'path'

import './loadDotenv'
import { outputDir, env, root } from './lib'
import module_ from './chunks/module'
import plugins from './chunks/plugins'

const devEntries = [
  'react-hot-loader/patch',
  join(root, 'webpack/customPublicPath'),
]

const prodEntries = []

const sharedEntries = env(devEntries, prodEntries)

export default {
  devtool: env('inline-source-map', false),
  entry:   {
    options:    [...sharedEntries, join(root, 'src/entries/options')],
    inject:     [...sharedEntries, join(root, 'src/entries/inject')],
    background: [...sharedEntries, join(root, 'src/entries/background')],
  },
  output: {
    path:          outputDir,
    filename:      '[name].bundle.js',
    chunkFilename: '[id].chunk.js',
  },
  devServer: {
    hot:         true,
    contentBase: outputDir,
    compress:    true,
    port:        process.env.WEBPACK_DEV_SERVER_PORT,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  module: module_,
  plugins,
}
