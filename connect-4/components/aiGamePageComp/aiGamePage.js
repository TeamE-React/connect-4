import React, { useContext } from 'react';

// Styles
import { Grid, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RiTimerLine } from 'react-icons/ri';
import styles from '../../styles/Home.module.css';

// Components
import PlayersTurn from '../gamePageComp/playersTurn';
import PlayersInfo from '../gamePageComp/playersInfo';
import PlayersInfo2 from '../gamePageComp/playersInfo2';
import AICreateBoard from './AICreateBoard';
import AppContext from '../../contexts/AppContext';
import WinnerWindow from '../winnerWindow';
import DrawWindow from '../drawWindow';

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

const AIGamePage = () => {
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
    setShowWindow,
    setIsDraw,
  } = useContext(AppContext);
  const classes = useStyles();

  const reset = () => {
    setWinnerExist(false);
    setShowWindow(false);
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
    <div className={classes.root, styles.ai_mode_image}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <PlayersTurn />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
          <PlayersInfo />
        </Grid>
        <Grid item xs={2}>
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
        <Grid item xs={3}>
          <PlayersInfo2 />
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={12}>
          <Box display="flex" justifyContent="center">
            <p>
              <span style={{ color: 'gray' }}>Click buttons to play</span>
            </p>
          </Box>
        </Grid>
        <AICreateBoard />
      </Grid>
    </div>
  );
};

export default AIGamePage;
