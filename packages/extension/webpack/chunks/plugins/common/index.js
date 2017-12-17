import clean from './clean'
import bundleAnalyze from './bundleAnalyze'
import assets from './assets'
import env from './env'
import manifest from './manifest'
import views from './views'

const common = [
  ...clean,
  ...bundleAnalyze,
  ...assets,
  ...env,
  ...manifest,
  ...views,
]

export default common
