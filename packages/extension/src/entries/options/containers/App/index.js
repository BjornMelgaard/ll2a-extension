import * as R from 'ramda'
import * as RE from 'recompose'
import { connect } from 'react-redux'
import { isPropEmpty, mapSelectors, wrapWithComponent } from '@ll2a/metalib'

import Default from './default'
import Wrapper from './wrapper'

const enhance = R.compose(
  wrapWithComponent(Wrapper),
)

export default enhance(Default)
