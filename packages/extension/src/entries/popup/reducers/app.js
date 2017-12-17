import * as R from 'ramda'
import { createReducer, stateSetter } from '@ll2a/metalib'
import * as a from '~/src/entries/popup/actions/app'

const initialState = {
  error: null,
}

const errorLens = R.lensProp('error')

const actionsMap = {
  [a.setFatalError.type]: stateSetter(errorLens),
}

export default createReducer(actionsMap, initialState)
