import React, { useContext, useState } from 'react';

// styles
import { Button } from '@material-ui/core';
import { GoTriangleDown } from 'react-icons/go';
import styles from '../../styles/Home.module.css';

// Components
import AppContext from '../../contexts/AppContext';
import { Judge } from '../../model/judge';
import { Game } from '../../model/aiModel/game';

const AIBallSetters = ({ colIndex }) => {
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
  } = useContext(AppContext);
  const [isFirstClick, setIsFirstClick] = useState(true);

  //**************
  // Functions
  // *************

  // const setBall = (e) => {
  //   e.preventDefault();
  //   if (isDropping) {
  //     return;
  //   }
  //   if (isFirstClick) {
  //     toggleTimer();
  //   }
  //   setBallHelper()
  // };

  // // Recursive function
  // const setBallHelper = (rowId, colId, playerColor) => {
  //   const len = state.board.length;
  //   const ballObj = getBall(rowId, colId);

  //   const ball = getBall(rowId, colId);
  //   ball.color = playerColor;

  // };

  // const getBall = (rowId, colId) => {
  //   if (rowId >= state.board.length) return;
  //   return state.board[rowId][colId];
  // };

  // const setWinner = (rowId, colId) => {
  //   rowId--;
  //   console.log(rowId, colId);
  //   const judgeObj = new Judge(state.board, rowId, colId);

  //   // Check if winner exist
  //   if (judgeObj.checkWinner()) {
  //     console.log(
  //       'winner is: ' + state.currentPlayer.name + '! (Open Modal Window)'
  //     );
  //     setWinnerExist(true);
  //     clearInterval(interval.current);
  //     return;
  //   } else turnChange();
  // };

  // const turnChange = () => {
  //   setCurrPlayerIndex(++currPlayerIndex);
  //   if (currPlayerIndex >= playersList.length) {
  //     setCurrPlayerIndex(currPlayerIndex - playersList.length);
  //   }

  //   dispatch({ type: 'SET_CURR_PLAYER', playersList, currPlayerIndex });
  //   console.log('Current Player: ' + state.currentPlayer.name);
  // };

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
    >
      <GoTriangleDown />
    </Button>
  );
};

export default AIBallSetters;
