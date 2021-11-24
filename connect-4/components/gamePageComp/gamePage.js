import React from 'react'
import { Grid, Button } from '@material-ui/core'

import PlayersTurn from './playersTurn'
import { GrPowerReset } from 'react-icons/gr'
import { RiTimerLine } from 'react-icons/ri'
import styles from '../../styles/Home.module.css'
import CreateBoard from './createBoard'

const GamePage = () => {
  const resetBoard = () => {
    console.log("reset!");
  }

  return (
    <div>
      <Grid container direction="row" justifyContent="space-around" alignContent="center">
        <Grid>
          <PlayersTurn />
        </Grid>
        <Grid>
          <CreateBoard />
        </Grid>
        <Grid>
          <RiTimerLine />
          <p>00:00</p>
          <Button 
            variant="contained"
            color="primary"
            size="large"
            className={styles.btn}
            style={{ fontSize: "20px", marginTop: "4rem" }}
            onClick={resetBoard}>
            <GrPowerReset />
          </Button>
        </Grid>
      </Grid>
    </div>
  )
}

export default GamePage;