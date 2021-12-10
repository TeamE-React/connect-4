import React, { useContext, useEffect } from 'react';
import Link from 'next/link';

// Styles
import { Modal, Box, Button } from '@material-ui/core';

// Components
import AppContext from '../contexts/AppContext';
import { Game } from '../model/aiHard/game';
import { MonteCarlo } from '../model/aiHard/monte-carlo';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 300,
  bgcolor: 'rgba(255, 255, 255, 0.7)',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

const DrawWindow = () => {
  const {
    state,
    setWinnerExist,
    isDraw,
    setIsDraw,
    dispatch,
    boardSize,
    setMinutes,
    setSeconds,
    totalSeconds,
    setTotalSeconds,
    interval,
    newGame,
    setNewGame,
    gameState,
    setGameState,
    mcts,
    setMcts,
    isHard,
    playersList,
    currPlayerIndex,
    setCurrPlayerIndex,
  } = useContext(AppContext);

  const handleClickRetry = (e) => {
    e.preventDefault();
    setWinnerExist(false);
    setIsDraw(false);
    dispatch({ type: 'BUILD_BOARD', boardSize });
    setCurrPlayerIndex(0);
    setTotalSeconds((totalSeconds = 0));
    setMinutes('00');
    setSeconds('00');

    if (isHard) {
      setNewGame((newGame = new Game()));
      setMcts((mcts = new MonteCarlo(newGame)));
      setGameState((gameState = newGame.start()));
    }

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

  useEffect(() => {
    dispatch({ type: 'SET_CURR_PLAYER', playersList, currPlayerIndex });
  }, [currPlayerIndex, state]);

  return (
    <>
      <Modal open={isDraw}>
        <Box sx={style}>
          <Box display="flex" justifyContent="center">
            <h3>It's a draw...</h3>
          </Box>
          <Box display="flex" justifyContent="center">
            <Link href={`/`}>
              <Button
                variant="contained"
                color="primary"
                style={{ fontSize: '1rem', margin: '1rem', width: '8rem' }}
              >
                Back to Top
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickRetry}
              style={{ fontSize: '1rem', margin: '1rem', width: '8rem' }}
            >
              Retry
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DrawWindow;
