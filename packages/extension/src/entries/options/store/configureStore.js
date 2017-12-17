import { createStore, applyMiddleware } from 'redux'

import rootReducer from '~/src/entries/options/reducers'

import epicMiddleware from './lib/epicMiddleware'
import wrapWithLogger from './lib/wrapWithLogger'

const isProd = process.env.NODE_ENV === 'production'

export default function configureStore(initialState) {
  const middlewares = [epicMiddleware]

  const reducer = isProd ? rootReducer : wrapWithLogger(rootReducer)

  const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares),
  )

  hmrWatch(nextRootReducer => store.replaceReducer(nextRootReducer))

  return store
}

function hmrWatch(onNext) {
  if (module.hot) {
    module.hot.accept('../reducers', () => {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const smthNext = require('../reducers').default
      onNext(smthNext)
    })
  }
}
