import React, { useContext, useState } from 'react';

// styles
import { Button } from '@material-ui/core';
import { GoTriangleDown } from 'react-icons/go';
import styles from '../../styles/Home.module.css';

// Components
import AppContext from '../../contexts/AppContext';

const ROW = 6;
const COL = 7;

const AiBallSetters = ({ colIndex }) => {
  const { state, dispatch, playersList, currPlayerIndex, setCurrPlayerIndex } =
    useContext(AppContext);
  const [possibleMoves, setPossibleMoves] = useState([]);

  //**************
  // Functions
  // *************
  const setBall = (e) => {
    e.preventDefault();
    // which column
    let move;
    // which level of row
    let positionRow;

    if (currPlayerIndex == 0) {
      // positionRow = setMove(state.board, player, colIndex);
      // setPlayer(player++);
      console.log('player is now ' + playersList[currPlayerIndex].name);
      move = colIndex;
      switchPlayer();
    } else {
      // move = runMCS();
      // positionRow = setMove(state.board, player, move);
      // setPlayer(player--);
      console.log('player is now ' + playersList[currPlayerIndex].name);
      move = runMCS();
      switchPlayer();
    }

    positionRow = setMove(state.board, playersList[currPlayerIndex], move);
  };

  // switch the actual player to the other player
  const switchPlayer = () => {
    setCurrPlayerIndex(++currPlayerIndex);
    if (currPlayerIndex >= playersList.length) {
      setCurrPlayerIndex(currPlayerIndex - playersList.length);
    }
    dispatch({ type: 'SET_CURR_PLAYER', playersList, currPlayerIndex });
  };

  // set the move in the next available slot
  const setMove = (array, player, move) => {
    let positionRow;

    // check for free slot within the selected column
    for (let i = ROW - 1; i >= 0; i--) {
      if (array[i][move].color == null) {
        array[i][move].color = player.color;
        positionRow = i;
        break;
      }
    }

    // return the row in which the move has been set
    return positionRow;
  };

  const runMCS = () => {
    let tempBoard = state.board.map((row) => row.slice());
    let move;
    let positionRow;
    let result;
    let simulations = 0;
    let totalSimulations = 0;
    let wins;
    let delay;
    let ratio;
    let bestRatio = -1000;

    // calculate the time limit that every move has
    getPossibleMoves(array);

    // iteration through all moves
    for (let i = 0; i < COL; i++) {
      // skip if column is already full
      if (array[ROW - 1][i] != 0) {
        continue;
      }

      // counter for the time limit
      let end = Date.now() * 70;
      while (Date.now() < end) {}
    }
  };

  // const aiHardMove = () => {
  //   console.log()
  //   console.log("player: " + (boardState.player === 1 ? 1 : 2) + " (in aiHardMove)")
  //   console.log(boardState.board.map((row) => row.map((cell) => cell === -1 ? 2 : cell)))

  //   mcts.runSearch(boardState, 1, "ai");

  //   let play = mcts.bestPlay(boardState, "winRate", "ai", 0, 0);

  //   // Boardに反映
  //   const ball = getBall(play.row, play.col);
  //   console.log(boardState.player);
  //   ball.color = (boardState.player === 1) ? 'red' : 'blue'
  //   // update state and turn change
  //   // let newState = game.updateState(boardState, play);
  //   // setBoardState(newState);
  // };

  // const userMove = (rowId, colId, playerColor) => {
  //   const len = state.board.length;
  //   const ballObj = getBall(rowId, colId);

  //   // Base Case
  //   if (rowId >= len || ballObj.color != null) {
  //     console.log()
  //     console.log("player: " + (boardState.player === 1 ? 1 : 2) + " (in userMove)")
  //     console.log(boardState.board.map((row) => row.map((cell) => cell === -1 ? 2 : cell)))

  //     mcts.runSearch(boardState, 1, "human");
  //     let play = mcts.bestPlay(boardState, "winRate", "human", rowId-1, colId);
  //     const ball = getBall(play.row, play.col);
  //     ball.color = (boardState.player === 1) ? 'red' : 'blue'

  //     // update state and turn change
  //     let newState = game.updateState(boardState, play);
  //     setBoardState(newState);

  //     return;
  //   }

  //   userMove(rowId + 1, colId, playerColor);
  // };
  // const getBall = (rowId, colId) => {
  //   if (rowId >= state.board.length) return;
  //   return state.board[rowId][colId];
  // };
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

export default AiBallSetters;
