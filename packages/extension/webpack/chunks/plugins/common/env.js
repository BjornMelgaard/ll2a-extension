import webpack from 'webpack'
import { fromEnvAll } from '~/webpack/lib'

const envVars = fromEnvAll(['WEBPACK_DEV_SERVER_PORT'])

export default [
  new webpack.DefinePlugin({
    'process.env': envVars,
  }),
]
