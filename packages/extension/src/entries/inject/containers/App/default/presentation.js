import React from 'react'
import { Grid } from 'material-ui'

import ExitButton from '~/src/entries/popup/containers/ExitButton'
import CreateStoryForm from '~/src/entries/popup/containers/CreateStoryForm'
import UserInfo from '~/src/entries/popup/containers/UserInfo'
import StoryPreview from '~/src/entries/popup/containers/StoryPreview'

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
