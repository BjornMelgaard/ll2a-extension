import * as R from 'ramda'
import * as RE from 'recompose'
import { connect } from 'react-redux'
import { isPropEmpty, mapSelectors, wrapWithComponent } from '@ll2a/metalib'

import * as currentUserSelectors from '~/src/entries/options/selectors/currentUser'
import * as appSelectors from '~/src/entries/options/selectors/app'

import Default from './default'
import Loading from './loading'
import Error from './error'
import Wrapper from './wrapper'

const selectors = {
  currentUser: currentUserSelectors.data,
  error:       appSelectors.error,
}

const enhance = R.compose(
  wrapWithComponent(Wrapper),
  connect(mapSelectors(selectors)),
  RE.branch(R.prop('error'), RE.renderComponent(Error)),
  RE.branch(isPropEmpty('currentUser'), RE.renderComponent(Loading)),
)

export default enhance(Default)
