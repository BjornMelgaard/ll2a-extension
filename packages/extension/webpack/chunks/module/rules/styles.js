import { join } from 'path'

import { root } from '~/webpack/lib'
import extractSass from '~/webpack/extractSass'

export default [
  {
    test: /\.(scss|sass|css)$/i,
    use:  extractSass.extract({
      fallback: 'style-loader',
      use:      [
        {
          loader:  'css-loader',
          options: {
            sourceMap:     true,
            minimize:      process.env.NODE_ENV === 'production',
            importLoaders: 1,
          },
        },
        {
          loader:  'postcss-loader',
          options: {
            sourceMap: true,
            path:      join(root, 'webpack/postcss.config.js'),
          },
        },
        {
          loader:  'sass-loader',
          options: {
            includePaths: [join(root, 'node_modules')],
            sourceMap:    true,
          },
        },
      ],
    }),
  },
]
