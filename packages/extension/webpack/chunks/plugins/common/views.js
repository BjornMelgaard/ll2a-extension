import { join } from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import { root } from '~/webpack/lib'

export default [
  new HtmlWebpackPlugin({
    template: join(root, 'src/entries/popup/index.pug'),
    chunks:   ['popup'],
    filename: 'popup.html',
  }),
]
