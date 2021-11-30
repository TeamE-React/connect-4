import React, { useContext, useState } from "react";

import { Button, Box } from "@material-ui/core";
import { GoTriangleDown } from "react-icons/go";
import styles from "../styles/Home.module.css";
import AppContext from "../contexts/AppContext";

const BallSetters = ({ colIndex }) => {
  const {
    state,
    setMinutes,
    setSeconds,
    totalSeconds,
    setTotalSeconds,
    interval,
    isDropping,
    setIsDropping,
  } = useContext(AppContext);
  const [isFirst, setIsFirst] = useState(true);

  const setBall = (e) => {
    e.preventDefault();
    if (isDropping) {
      return;
    }
    if (isFirst) {
      toggleTimer();
    }
    setBallHelper(0, colIndex, state.currentPlayer.color);
  };

  const setBallHelper = (rowId, colId, playerColor) => {
    
    console.log(rowId, colId, playerColor);

    const len = state.board.length;
    const ballObj = getBall(rowId, colId);

    if (rowId > len || ballObj.color !== null) {
      setIsDropping(false);
      rowId--;
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
    let ballObj = state.board[rowId][colId];
    return ballObj;
  };

  const toggleTimer = () => {
    console.log("timer start!");
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

    setIsFirst(false);
  };

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
