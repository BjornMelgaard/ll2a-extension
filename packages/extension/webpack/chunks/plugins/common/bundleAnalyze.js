import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'

const exp = []

if (process.env.ANALYZE) {
  exp.push(new BundleAnalyzerPlugin())
}

export default exp
