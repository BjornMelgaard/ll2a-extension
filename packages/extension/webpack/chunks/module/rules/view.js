export default [
  {
    test: /\.pug$/,
    use:  [
      {
        loader:  'pug-loader',
        options: {
          globals: {
            env: process.env.NODE_ENV,
          },
        },
      },
    ],
  },
]
