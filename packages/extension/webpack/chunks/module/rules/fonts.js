export default [
  {
    test:   /\.eot(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader',
  },
  {
    test:   /\.(woff|woff2)$/,
    loader: 'url-loader?prefix=font/&limit=5000',
  },
  {
    test:   /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
    loader: 'url-loader?limit=10000&mimetype=application/octet-stream',
  },
]
