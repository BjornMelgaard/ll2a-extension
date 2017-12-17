import { createStore, applyMiddleware } from 'redux'

import rootReducer from '~/app/reducers'

import logicMiddleware from './lib/logicMiddleware'
import wrapWithLogger from './lib/wrapWithLogger'

const isProd = process.env.NODE_ENV === 'production'
// const isProd = true

export default function configureStore(initialState) {
  const middlewares = [logicMiddleware]

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
