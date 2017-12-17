import { actionCreatorFactory } from '@ll2a/metalib'

export const scope = 'APP'
const scopedFactory = actionCreatorFactory(scope)

//
export const initialized = scopedFactory('INITIALIZED')
export const setFatalError = scopedFactory('SET_FATAL_ERROR')
