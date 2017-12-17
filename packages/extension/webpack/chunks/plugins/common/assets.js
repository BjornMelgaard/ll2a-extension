import { join } from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'

import { root, outputDir } from '~/webpack/lib'
import extractSass from '~/webpack/extractSass'

export default [
  new CopyWebpackPlugin([
    { context: join(root, 'chrome/assets'), from: '**', to: outputDir },
  ]),
  extractSass,
]
