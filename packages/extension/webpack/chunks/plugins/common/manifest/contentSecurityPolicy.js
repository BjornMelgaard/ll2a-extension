import * as R from 'ramda'
import { zipEachKeyVal } from '@ll2a/metalib'

import { env } from '~/webpack/lib'

const devPort = process.env.WEBPACK_DEV_SERVER_PORT

const hmrHttpHost = `http://localhost:${devPort}`
const hmrWsHost = `ws://localhost:${devPort}`
const self = "'self'"
const blob = 'blob:'
const unsafeEval = "'unsafe-eval'"
const unsafeInline = "'unsafe-inline'"
const allGlob = '*'

const prodContentSecurityPolicy = {
  'default-src': [self],
  'script-src':  [self],
  'connect-src': [apiHttpHost],
  'style-src':   [allGlob, unsafeInline, blob],
  'img-src':     [allGlob],
}

const devContentSecurityPolicyExtra = {
  'default-src': [hmrHttpHost],
  'script-src':  [hmrHttpHost, unsafeEval],
  'connect-src': [hmrHttpHost, hmrWsHost],
  'style-src':   [hmrHttpHost],
}

const devContentSecurityPolicy = R.mergeWith(
  R.concat,
  prodContentSecurityPolicy,
  devContentSecurityPolicyExtra,
)

const stringifyPolicy = R.pipe(
  R.map(R.join(' ')),
  zipEachKeyVal(R.unapply(R.join(' '))),
  R.join('; '),
)

const contentSecurityPolicy = env(
  stringifyPolicy(devContentSecurityPolicy),
  stringifyPolicy(prodContentSecurityPolicy),
)

export default contentSecurityPolicy
