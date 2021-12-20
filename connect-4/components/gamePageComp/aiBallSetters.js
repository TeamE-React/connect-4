import React, { useContext, useState, useEffect } from 'react';

// styles
import { Button, IconButton } from '@material-ui/core';
import { GoTriangleDown } from 'react-icons/go';
import styles from '../../styles/Home.module.css';

// Components
import AppContext from '../../contexts/AppContext';
import { Judge } from '../../model/judge';
import { Play } from '../../model/aiHard/play';
import {SET_CURR_PLAYER} from '../../actions'

// 画面幅がこの値に満たないときはIconButtonを表示する
const WIDTH_THRESHOLD_M = 800;
const WIDTH_THRESHOLD_S = 414;

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
    newGame,
    mcts,
    gameState,
    setGameState,
    setSimulationCount,
  } = useContext(AppContext);
  const [isFirstClick, setIsFirstClick] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

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
    setIsDropping(true);
    setBallHelper(0, colIndex, state.currentPlayer.color);
  };

  const checkWinner = (rowId, colId) => {
    rowId--;
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

    switchPlayer();

    let ballObj = getBall(rowId, colId);

    if (!judgeObj.checkWinner() && ballObj.color !== 'blue') {
      let playersPlay = new Play(rowId, colId);
      aiHard(playersPlay);
      changeIsDropping();
    }
  };

  const aiHard = (playersPlay) => {
    // プレイヤーの手をstateに反映する
    let newState = newGame.updateState(gameState, playersPlay);

    console.log(newState.player);

    let count = mcts.runSearch(newState, 1);
    setSimulationCount(count);
    let play = mcts.bestPlay(newState, 'winRate');
    newState = newGame.updateState(newState, play);

    console.log(newState.player);

    setGameState(newState);

    setTimeout(function () {
      setBallHelper(0, play.col, 'blue');
    }, 1800);
  };

  const changeIsDropping = () => {
    setTimeout(function () {
      setIsDropping(false);
    }, 2000);
  };

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

  const switchPlayer = () => {
    setCurrPlayerIndex(++currPlayerIndex);

    if (currPlayerIndex >= playersList.length) {
      setCurrPlayerIndex(currPlayerIndex - playersList.length);
    }

    dispatch({ type: SET_CURR_PLAYER, playersList, currPlayerIndex });
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

  // ウインドウ幅の変更を検知する
  const updateWidth = (event) => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener(`resize`, updateWidth, {
      capture: false,
      passive: true,
    });

    return () => window.removeEventListener(`resize`, updateWidth);
  });

  // **************
  // Functions End
  // **************

  const DrawBallSetter = () => {
    if (width > WIDTH_THRESHOLD_M) {
      return (
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className={styles.btn}
          style={{ fontSize: '1rem', margin: '1rem' }}
          onClick={setBall}
        >
          <GoTriangleDown />
        </Button>
      );
    } else if (width <= WIDTH_THRESHOLD_S) {
      return (
        <IconButton
          color="secondary"
          size="small"
          style={{ fontSize: '1.42rem', margin: '0.1rem' }}
          onClick={setBall}
        >
          <GoTriangleDown fontSize="inherit" />
        </IconButton>
      );
    } else {
      return (
        <IconButton
          color="secondary"
          size="small"
          style={{ fontSize: '2.42rem', margin: '0.3rem' }}
          onClick={setBall}
        >
          <GoTriangleDown fontSize="inherit" />
        </IconButton>
      );
    }
  };

  return <DrawBallSetter />;
};

export default BallSetters;
