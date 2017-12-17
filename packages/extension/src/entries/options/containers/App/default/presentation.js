import React from 'react'
import { Grid } from 'material-ui'

const AppDefault = ({ classes }) => (
  <Grid
    container
    classes={{ typeContainer: classes.root_container_overwrite }}
    alignItems="stretch"
  >
    <div>asdf</div>
  </Grid>
)

export default AppDefault
