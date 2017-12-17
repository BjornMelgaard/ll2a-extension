import React from 'react'
import { Grid } from 'material-ui'

import ExitButton from '~/app/containers/ExitButton'
import CreateStoryForm from '~/app/containers/CreateStoryForm'
import UserInfo from '~/app/containers/UserInfo'
import StoryPreview from '~/app/containers/StoryPreview'

const AppDefault = ({ classes }) => (
  <Grid
    container
    classes={{ typeContainer: classes.root_container_overwrite }}
    alignItems="stretch"
  >
    <ExitButton />
    <UserInfo />
    <CreateStoryForm />
    <StoryPreview />
  </Grid>
)

export default AppDefault
