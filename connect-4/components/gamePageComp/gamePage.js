import React, { useContext } from 'react';

// Styles
import { Grid, Button, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { RiTimerLine } from 'react-icons/ri';

// Components
import PlayersTurn from './playersTurn';
import PlayersInfo from './playersInfo';
import PlayersInfo2 from './playersInfo2';
import CreateBoard from './createBoard';
import AppContext from '../../contexts/AppContext';
import WinnerWindow from '../winnerWindow';
import DrawWindow from '../drawWindow';
import { useReset } from '../../hooks/useReset';

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
  const { minutes, seconds, simulationCount, isHard } = useContext(AppContext);
  const classes = useStyles();
  const resetGameData = useReset();

  return (
    <div className={classes.root}>
      <Grid container justifyContent="center">
        <Grid item xs={12}>
          <PlayersTurn />
        </Grid>
        <Grid item xs={4}>
          <Box display="flex" justifyContent="flex-end">
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
              onClick={resetGameData}
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
