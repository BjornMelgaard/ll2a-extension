import React from 'react'
import { Grid } from 'material-ui'

const AppWrapper = ({ classes, children }) => (
  <Grid container classes={{ typeContainer: classes.root_container_overwrite }}>
    {children}
  </Grid>
)

export default AppWrapper
