import React, { useContext, useState } from 'react';

// styles
import { Button } from '@material-ui/core';
import { GoTriangleDown } from 'react-icons/go';
import styles from '../../styles/Home.module.css';

// Components
import AppContext from '../../contexts/AppContext';
import { Judge } from '../../model/judge';

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
    setCurrPlayerIndex
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
    if(state.currentPlayer.name == "AI"){
      return;
    }
    setIsDropping(true);
    setBallHelper(0, colIndex, state.currentPlayer.color);

    if (isAiMode) {
      aiMove();
      changeIsDropping();
    }
  };

  const aiMove = () => {
    setTimeout(function () {
      const col = Math.floor(Math.random() * state.board.length);

      setBallHelper(0, col, 'blue');
    }, 1800);
  };

  const changeIsDropping = () => {
    setTimeout(function () {
      console.log('setIsDropping changed');
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
        clearInterval(interval.current);
        return;
      }
      setWinner(rowId, colId);
      return;
    }

    // Animation
    if (rowId !== 0) {
      const ballAbove = state.board[rowId - 1][colId];
      ballAbove.color = null;
    }

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

  const setWinner = (rowId, colId) => {
    rowId--;
    console.log(rowId, colId);
    const judgeObj = new Judge(state.board, rowId, colId);

    // Check if winner exist
    if (judgeObj.checkWinner()) {
      console.log(
        'winner is: ' + state.currentPlayer.name + '! (Open Modal Window)'
      );
      setWinnerExist(true);
      clearInterval(interval.current);
      return;
    }
    else turnChange();
  };

  // IF COLUMN IS FULL -> CANNOT PRESS ANYMORE
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
    console.log('Current Player: ' + state.currentPlayer.name);
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
