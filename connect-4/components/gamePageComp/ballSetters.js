import React, { useContext, useState } from "react";

// styles
import { Button } from "@material-ui/core";
import { GoTriangleDown } from "react-icons/go";
import styles from "../../styles/Home.module.css";

// Components
import AppContext from "../../contexts/AppContext";
import { Judge } from "../../model/judge";

import { Game } from "../../model/aiHard/game";
import { MonteCarlo } from "../../model/aiHard/monte-carlo";
import { Play } from "../../model/aiHard/play";

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
    if (value !== "hard" && state.currentPlayer.name == "CPU") {
      return;
    }
    setIsDropping(true);

    if (value == "hard") {
      aiHard();
    } else {
      setBallHelper(0, colIndex, state.currentPlayer.color);
    }
  };

  const aiHard = () => {
    let game = new Game();
    let mcts = new MonteCarlo(game);

    let state = game.start();
    let winner = game.winner(state);

    while (winner === null) {
      // console.log();
      // console.log("player: " + (state.player === 1 ? 1 : 2));
      // console.log(
      //   state.board.map((row) => row.map((cell) => (cell === -1 ? 2 : cell)))
      // );

      mcts.runSearch(state, 1);

      let play = mcts.bestPlay(state, "winRate");

      const ball = getBall(play.row, play.col);
      ball.color = (state.player == 1) ? 'red' : 'blue';

      state = game.updateState(state, play);
      
      winner = game.winner(state);
    }

    console.log();
    console.log("winner: " + (winner === 1 ? "USER" : "AI"));
    console.log(
      state.board.map((row) => row.map((cell) => (cell === -1 ? 2 : cell)))
    );
  };

  const checkWinner = (rowId, colId) => {
    rowId--;
    console.log(rowId, colId);
    const judgeObj = new Judge(state.board, rowId, colId);

    if (judgeObj.checkWinner()) {
      console.log(
        "winner is: " + state.currentPlayer.name + "! (Open Modal Window)"
      );
      setWinnerExist(true);
      setIsDropping(false);
      clearInterval(interval.current);
      return;
    }

    turnChange();

    let ballObj = getBall(rowId, colId);
    console.log("ballObject color is " + ballObj.color);
    if (
      !judgeObj.checkWinner() &&
      ballObj.color == "red" &&
      isAiMode &&
      value == "easy"
    ) {
      aiMove();
      changeIsDropping();
    }
  };

  const aiMove = () => {
    setTimeout(function () {
      const col = Math.floor(Math.random() * state.board.length);
      setBallHelper(0, col, "blue");
    }, 1800);
  };

  const changeIsDropping = () => {
    setTimeout(function () {
      setIsDropping(false);
    }, 2000);
  };

  const setBallHelper2 = (rowId, colId) => {
    const ballObj = getBall(rowId, colId);

    // Base Case
    if (rowId >= 6 || ballObj.color != null) {
      return new Play(rowId - 1, colId);
    }
    
    setBallHelper2(rowId + 1, colId);
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

  const turnChange = () => {
    setCurrPlayerIndex(++currPlayerIndex);

    if (currPlayerIndex >= playersList.length) {
      setCurrPlayerIndex(currPlayerIndex - playersList.length);
    }

    dispatch({ type: "SET_CURR_PLAYER", playersList, currPlayerIndex });
  };

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
