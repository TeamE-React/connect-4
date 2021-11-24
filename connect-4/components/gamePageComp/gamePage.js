import React from 'react'
import { Grid } from '@material-ui/core'

import PlayersTurn from './playersTurn'
import Board from './board'

const GamePage = () => {
  return (
    <div>
      <Grid container direction="row" justifyContent="space-around" alignContent="center">
        <Grid>
          <PlayersTurn />
        </Grid>
        <Grid>
          <Board />
        </Grid>
        <Grid>
          Timer and Reset Button
        </Grid>
      </Grid>
    </div>
  )
}

export default GamePage;