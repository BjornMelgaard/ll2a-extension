import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { root } from '~/webpack/lib'

export default [
  new HtmlWebpackPlugin({
    template: join(root, 'src/entries/options/index.pug'),
    chunks:   ['options'],
    filename: 'options.html',
  }),
]
