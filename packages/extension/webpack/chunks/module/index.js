import * as R from 'ramda'

import code from './rules/code'
import images from './rules/images'
import styles from './rules/styles'
import view from './rules/view'
import fonts from './rules/fonts'

export default {
  rules: R.unnest([code, images, styles, view, fonts]),
}
