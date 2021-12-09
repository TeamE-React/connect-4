import React, { useContext } from 'react';

// Styles
import { Grid, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RiTimerLine } from 'react-icons/ri';
import styles from '../../styles/Home.module.css';

// Components
import PlayersTurn from './playersTurn';
import PlayersInfo from './playersInfo';
import PlayersInfo2 from './playersInfo2';
import CreateBoard from './createBoard';
import AppContext from '../../contexts/AppContext';
import WinnerWindow from '../winnerWindow';
import DrawWindow from '../drawWindow';
import { StylesContext } from '@material-ui/styles';

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
  const {
    dispatch,
    boardSize,
    minutes,
    seconds,
    setMinutes,
    setSeconds,
    totalSeconds,
    setTotalSeconds,
    interval,
    setWinnerExist,
    setIsDraw,
    simulationCount,
    isHard,
  } = useContext(AppContext);
  const classes = useStyles();

  const reset = () => {
    setWinnerExist(false);
    setIsDraw(false);
    dispatch({ type: 'BUILD_BOARD', boardSize });
    setTotalSeconds((totalSeconds = 0));
    setMinutes('00');
    setSeconds('00');

    const pad = (val) => {
      let valString = val + '';
      if (valString.length < 2) return '0' + valString;
      else return valString;
    };

    const incrementTime = () => {
      setTotalSeconds(++totalSeconds);
      setMinutes(pad(parseInt(totalSeconds / 60)).toString());
      setSeconds(pad(parseInt(totalSeconds % 60)).toString());
    };

    clearInterval(interval.current);
    interval.current = setInterval(incrementTime, 1000);
  };

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <PlayersTurn />
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="end">
            <PlayersInfo />
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="center">
            <RiTimerLine style={{ marginRight: '0.5rem' }} />
            {minutes}:{seconds}
          </Box>
          <Box display="flex" justifyContent="center">
            <Button
              variant="contained"
              color="primary"
              style={{ fontSize: '1rem', margin: '1rem' }}
              onClick={reset}
            >
              Reset
            </Button>
          </Box>
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="start">
            <PlayersInfo2 />
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            {isHard && (
              <Box display="flex" justifyContent="start" flexWrap="wrap">
                <p>
                  <span style={{ color: 'gray' }}>
                    AI Total Simulations:&nbsp;
                  </span>
                </p>
                <p>{simulationCount}</p>
              </Box>
            )}
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <p>Click buttons to play</p>
          </Box>
        </Grid>
        <CreateBoard />
        <WinnerWindow />
        <DrawWindow />
      </Grid>
    </div>
  );
};

export default GamePage;
