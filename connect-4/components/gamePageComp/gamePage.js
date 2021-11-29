import React, {useContext, useState, useRef} from 'react'
import { Grid, Button, Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import PlayersTurn from './playersTurn'
import PlayersInfo from './playersInfo'
import PlayersInfo2 from './playersInfo2'
import { GrPowerReset } from 'react-icons/gr'
import { RiTimerLine } from 'react-icons/ri'
import styles from '../../styles/Home.module.css'
import CreateBoard from './createBoard'
import AppContext from '../../contexts/AppContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const GamePage = () => {
  const {dispatch, boardSize, minutes, seconds} = useContext(AppContext);
  const classes = useStyles();


  const resetBoard = () => {
    console.log("reset!");
    dispatch({type: 'BUILD_BOARD', boardSize});
  }

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <PlayersTurn />
        </Grid>
        <Grid item xs={3}>
          <PlayersInfo />
        </Grid>
        <Grid item xs={6}>
          <Box display="flex" justifyContent="center">
            <RiTimerLine />{minutes}:{seconds}
          </Box>
          <Box display="flex" justifyContent="center">
            <Button 
              variant="contained"
              color="primary"
              style={{ fontSize: "1rem", margin: "1rem"}}
              onClick={resetBoard}
            >
              {/* <GrPowerReset /> */}
              Reset
            </Button>
          </Box>
          <Box display="flex" justifyContent="center">
            <p><span style={{ color: "gray"  }}>Click buttons to play</span></p>
          </Box>
        </Grid>
        <Grid item xs={3}>
          <PlayersInfo2 />
        </Grid>
        <CreateBoard />
      </Grid>
    </div>
  )
}

export default GamePage;

