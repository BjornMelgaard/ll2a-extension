import React from 'react'
import { Grid } from 'material-ui'
import Modal from '~/src/entries/popup/containers/Modal'

const AppWrapper = ({ classes, children }) => (
  <Grid container classes={{ typeContainer: classes.root_container_overwrite }}>
    <Modal />
    {children}
  </Grid>
)

export default AppWrapper
