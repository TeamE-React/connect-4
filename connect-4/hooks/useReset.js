import React, { useContext } from 'react';

// Component
import AppContext from '../contexts/AppContext';
import { Game } from '../../model/aiHard/game';
import { MonteCarlo } from '../../model/aiHard/monte-carlo';
import { BUILD_BOARD } from '../../actions';
import { SET_CURR_PLAYER } from '../../actions';

const useReset = () => {
  const {
    dispatch,
    boardSize,
    setMinutes,
    setSeconds,
    totalSeconds,
    setTotalSeconds,
    setWinnerExist,
    setIsDraw,
    interval,
    newGame,
    setNewGame,
    gameState,
    setGameState,
    mcts,
    setMcts,
    isHard,
    playersList,
    setCurrPlayerIndex,
  } = useContext(AppContext);

  setWinnerExist(false);
  setIsDraw(false);
  dispatch({ type: BUILD_BOARD, boardSize });
  setCurrPlayerIndex(0);
  dispatch({ type: SET_CURR_PLAYER, playersList, currPlayerIndex: 0 });
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

export default useReset;
