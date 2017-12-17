import ExtractTextPlugin from 'extract-text-webpack-plugin'

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable:  process.env.NODE_ENV === 'development',
})

export default extractSass
