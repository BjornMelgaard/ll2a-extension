import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import app from './app'
import currentUser from './currentUser'
import preview from './preview'
import story from './story'
import modal from './modal'

export default combineReducers({
  app,
  currentUser,
  preview,
  story,
  modal,
  form: formReducer,
})
