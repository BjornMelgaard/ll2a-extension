import webpack from 'webpack'

const prod = [
  new webpack.optimize.OccurrenceOrderPlugin(),

  // TODO: do I need them?
  // new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),

  // XXX: throws error without @babel/env.forceAllTransforms in .babelrc
  new webpack.optimize.UglifyJsPlugin({
    // TODO: ecma 8 has no effect, still error on prod build
    ecma:       8, // ECMAScript Version
    parallel:   true,
    comments:   false,
    compressor: {
      warnings: true,
    },
  }),
]

export default prod
