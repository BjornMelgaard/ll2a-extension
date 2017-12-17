import webpack from 'webpack'
import WriteFilePlugin from 'write-file-webpack-plugin'

const dev = [
  new webpack.NoEmitOnErrorsPlugin(),

  // TODO: do I need them?
  // new webpack.IgnorePlugin(/[^/]+\/[\S]+.prod$/),

  // hmr
  new webpack.NamedModulesPlugin(),
  new webpack.HotModuleReplacementPlugin(),

  // XXX:
  // Forces webpack-dev-server program to write bundle files to the file system.
  // This plugin has no effect when webpack program is used instead of webpack-dev-server.
  new WriteFilePlugin(),
]

export default dev
