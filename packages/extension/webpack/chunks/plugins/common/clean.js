import CleanWebpackPlugin from 'clean-webpack-plugin'
import { root, outputDir } from '~/webpack/lib'

export default [
  new CleanWebpackPlugin([outputDir], {
    root,
    verbose: true,
  }),
]
