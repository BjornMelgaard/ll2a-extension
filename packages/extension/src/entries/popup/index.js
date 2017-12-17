// import lingualeo from '@ll2a/lingualeo-api'

import Root from '~/src/entries/popup/containers/Root'
import createStore from '~/src/entries/popup/store/configureStore'

import getSavedState from '~/src/utils/getSavedState'

import render from './render'

import './index.scss'

function hmrWatch(onNext) {
  if (module.hot) {
    module.hot.accept('./containers/Root/index.js', () => {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const smthNext = require('./containers/Root/index.js').default
      onNext(smthNext)
    })
  }
}

async function initApp() {
  const initialState = await getSavedState()

  const store = createStore(initialState)

  render(Root, store)

  hmrWatch(NextRoot => render(NextRoot, store))

  return store
}

async function run() {
  await initApp()
}

run()
