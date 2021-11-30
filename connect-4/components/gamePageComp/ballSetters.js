import React, { useContext, useState } from "react";

// styles
import { Button } from "@material-ui/core";
import { GoTriangleDown } from "react-icons/go";
import styles from "../../styles/Home.module.css";

// Components
import AppContext from "../../contexts/AppContext";
import { Judge } from "../../model/judge";

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
    isDraw,
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
    setIsDropping(true);
    setBallHelper(0, colIndex, state.currentPlayer.color);
  };

  // Recursive function
  const setBallHelper = (rowId, colId, playerColor) => {
    const len = state.board.length;
    const ballObj = getBall(rowId, colId);

    // Base Case
    if (rowId >= len || ballObj.color != null) {
      setIsDropping(false);
      nextStep(rowId, colId);
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
    if(rowId >= state.board.length) return;
    return state.board[rowId][colId];
  };
  
  const nextStep = (rowId, colId) => {
    rowId--;
    // setWinnerExist(new Judge(state.board, rowId, colId).checkWinner());
    // if(winnerExist || isDraw) {
    //   console.log("winner is: " + state.currentPlayer);
    //   return;
    // };
    turnChange();
  }

  const turnChange = () => {
    setCurrPlayerIndex(++currPlayerIndex);
    if(currPlayerIndex >= playersList.length){
      setCurrPlayerIndex(currPlayerIndex - playersList.length);
    }
    dispatch({type: 'SET_CURR_PLAYER', playersList, currPlayerIndex});
  }

  const toggleTimer = () => {
    const pad = (val) => {
      let valString = val + "";
      if (valString.length < 2) return "0" + valString;
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
      style={{ fontSize: "20px", margin: "16px" }}
      onClick={setBall}
    >
      <GoTriangleDown />
    </Button>
  );
};

export default BallSetters;
