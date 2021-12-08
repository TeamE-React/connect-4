import React, { useContext, useState, useEffect } from 'react';

// styles
import { Button } from '@material-ui/core';
import { GoTriangleDown } from 'react-icons/go';
import styles from '../../styles/Home.module.css';

// Components
import AppContext from '../../contexts/AppContext';
import { Judge } from '../../model/judge';

import { Game } from '../../model/aiHard/game';
import { MonteCarlo } from '../../model/aiHard/monte-carlo';
import { Play } from '../../model/aiHard/play';
import currentPlayer from '../../reducers/currentPlayerReducer';

const BallSetters = ({ colIndex }) => {
  const {
    state,
    dispatch,
    playersList,
    setMinutes,
    setSeconds,
    totalSeconds,
    setTotalSeconds,
    interval,
    winnerExist,
    setWinnerExist,
    setIsDraw,
    isAiMode,
    isDropping,
    setIsDropping,
    currPlayerIndex,
    setCurrPlayerIndex,
    value,
    newGame,
    mcts,
    gameState,
    setGameState,
  } = useContext(AppContext);
  const [isFirstClick, setIsFirstClick] = useState(true);

  //**************
  // Functions
  // *************
  const setBall = (e) => {
    e.preventDefault();
    if (isDropping) {
      return;
    }
    if (isFirstClick) {
      toggleTimer();
    }
    if (value !== 'hard' && state.currentPlayer.name == 'CPU') {
      return;
    }
    setIsDropping(true);
    setBallHelper(0, colIndex, state.currentPlayer.color);
  };

  const checkWinner = (rowId, colId) => {
    rowId--;
    console.log(rowId, colId);
    const judgeObj = new Judge(state.board, rowId, colId);

    if (judgeObj.checkWinner()) {
      console.log(
        'winner is: ' + state.currentPlayer.name + '! (Open Modal Window)'
      );
      setWinnerExist(true);
      setIsDropping(false);
      clearInterval(interval.current);
      return;
    }

    turnChange();

    let ballObj = getBall(rowId, colId);
    // console.log('ballObject color is ' + ballObj.color);
    if (
      !judgeObj.checkWinner() &&
      ballObj.color !== 'blue' &&
      isAiMode &&
      value == 'easy'
    ) {
      // console.log('CPU Mode');
      aiMove();
      changeIsDropping();
    } else if (
      !judgeObj.checkWinner() &&
      ballObj.color !== 'blue' &&
      isAiMode &&
      value == 'hard'
    ) {
      // console.log('AI Mode');
      let playersPlay = new Play(rowId, colId);
      aiHard(playersPlay);
      changeIsDropping();
    }
  };

  const aiMove = () => {
    setTimeout(function () {
      const col = Math.floor(Math.random() * state.board.length);
      setBallHelper(0, col, 'blue');
    }, 1800);
  };

  const aiHard = (playersPlay) => {
    // プレイヤーの手をstateに反映する
    let newState = newGame.updateState(gameState, playersPlay);

    console.log(newState.playHistory);
    console.log(newState.board);
    console.log(newState.player);

    mcts.runSearch(newState, 1);
    let play = mcts.bestPlay(newState, 'winRate');
    newState = newGame.updateState(newState, play);

    console.log(newState.playHistory);
    console.log(newState.board);
    console.log(newState.player);

    setGameState(newState);

    setTimeout(function () {
      setBallHelper(0, play.col, 'blue');
    }, 1800);
  };

  useEffect(() => {
    console.log('in useEffect' + gameState);
  }, []);

  const changeIsDropping = () => {
    setTimeout(function () {
      setIsDropping(false);
    }, 2000);
  };

  // const setBallHelper2 = (rowId, colId) => {
  //   const ballObj = getBall(rowId, colId);

  //   // Base Case
  //   if (rowId >= 6 || ballObj.color != null) {
  //     return new Play(rowId - 1, colId);
  //   }

  //   setBallHelper2(rowId + 1, colId);
  // };

  // Recursive function
  const setBallHelper = (rowId, colId, playerColor) => {
    const len = state.board.length;
    const ballObj = getBall(rowId, colId);

    if (isColumnFull(colId) && rowId == 0) {
      setIsDropping(false);
      return;
    }

    // Base Case
    if (rowId >= len || ballObj.color != null) {
      if (!isAiMode) setIsDropping(false);
      // Check if draw
      if (isAllTopFull() && !winnerExist) {
        setIsDraw(true);
        setIsDropping(false);
        clearInterval(interval.current);
        return;
      } else {
        checkWinner(rowId, colId);
        return;
      }
    }

    // Animation
    if (rowId !== 0) {
      const ballAbove = state.board[rowId - 1][colId];
      ballAbove.color = null;
    }

    // COLOR THE CELL WITH PLAYER'S COLOR
    const ball = getBall(rowId, colId);
    ball.color = playerColor;

    setTimeout(function () {
      setBallHelper(rowId + 1, colId, playerColor);
    }, 300);
  };

  const getBall = (rowId, colId) => {
    if (rowId >= state.board.length) return;
    return state.board[rowId][colId];
  };

  // IF COLUMN IS FULL -> CANNOT PRESS THAT COLUMN ANYMORE
  const isColumnFull = (colId) => {
    for (let i = 0; i < state.board.length; i++) {
      if (getBall(i, colId).color == null) {
        return false;
      }
    }
    return true;
  };

  // IF TOP ROW IS FULL AND WINNER DOESN'T EXIST -> DRAW
  const isAllTopFull = () => {
    for (let i = 0; i < state.board.length; i++) {
      if (getBall(0, i).color == null) {
        return false;
      }
    }
    return true;
  };

  const turnChange = () => {
    setCurrPlayerIndex(++currPlayerIndex);

    if (currPlayerIndex >= playersList.length) {
      setCurrPlayerIndex(currPlayerIndex - playersList.length);
    }

    dispatch({ type: 'SET_CURR_PLAYER', playersList, currPlayerIndex });
  };

  const toggleTimer = () => {
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

    setIsFirstClick(false);
  };
  // **************
  // Functions End
  // **************

  return (
    <Button
      variant="contained"
      color="secondary"
      size="large"
      className={styles.btn}
      style={{ fontSize: '20px', margin: '16px' }}
      onClick={setBall}
    >
      <GoTriangleDown />
    </Button>
  );
};

export default BallSetters;
