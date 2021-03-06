import { env } from '~/webpack/lib'

export default [
  {
    test: /\.(gif|png|jpe?g|svg)$/i,
    use:  [
      {
        loader:  'url-loader',
        options: {
          limit: 8192,
        },
      },
      ...env(
        [],
        [
          {
            loader:  'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality:     65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed:   4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      ),
    ],
  },
]
