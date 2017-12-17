// import lingualeo from '@ll2a/lingualeo-api'

import getSavedState from '~/chrome/shared/getSavedState'

import Root from '~/app/containers/Root'
import * as appActions from '~/app/actions/app'
import createStore from '~/app/store/configureStore'

import render from './render'

import './index.scss'

function hmrWatch(onNext) {
  if (module.hot) {
    module.hot.accept('../../../app/containers/Root/index.js', () => {
      // eslint-disable-next-line import/no-dynamic-require, global-require
      const smthNext = require('../../../app/containers/Root/index.js').default
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
