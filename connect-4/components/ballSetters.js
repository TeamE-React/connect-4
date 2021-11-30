import React, {useContext, useState} from "react";

import { Button, Box } from "@material-ui/core";
import { GoTriangleDown } from "react-icons/go";
import styles from "../styles/Home.module.css";
import AppContext from "../contexts/AppContext";

const BallSetters = ({ colIndex }) => {  
  const { state, dispatch, setMinutes, setSeconds, totalSeconds, setTotalSeconds, interval, isDropping, setIsDropping} = useContext(AppContext);
  const [isFirst, setIsFirst] = useState(true);

  const setBall = (rowId, colId, color) => {
    // if(isDropping){
    //   return;
    // }
    // if(isFirst){
    //   toggleTimer();
      
    // }
    console.log(rowId, colId, color);
    return;
    // const len = state.board.length;
    // const getBall = () => state.board[rowId][colId];

    // if(rowId >= len || getBall.color !== null){
    //   setIsDropping(false);
    //   return;
    // }

    // if(rowId !== 0){
    //   const ballAbove = state.board[rowId-1][colId];
    //   ballAbove.color = null;
    // }

    // const ball = getBall();
    // ball.color = color;
    // setTimeout(function () {
    //   setBall(rowId+1, colId, color);
    // }, 300);
    // const color = state.currentPlayer.color;
    // const colId = colId;
    // dispatch({type: 'SET_BALL', color, colId, rowId: 0, board: state.board});
  }

  const toggleTimer = () => {
    console.log("timer start!");
    const pad = (val) => {
      let valString = val + "";
      if(valString.length < 2) return "0" + valString;
      else return valString;
    }

    const incrementTime = () => {
      setTotalSeconds(++totalSeconds);
      setMinutes(pad(parseInt(totalSeconds / 60)).toString());
      setSeconds(pad(parseInt(totalSeconds % 60)).toString());
    }

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
      onClick={setBall(0, colIndex, state.currentPlayer.color)}
      >
      < GoTriangleDown />
    </Button>
  );
};

export default BallSetters;
