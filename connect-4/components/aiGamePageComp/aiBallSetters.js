import React from "react";

// styles
import { Button } from "@material-ui/core";
import { GoTriangleDown } from "react-icons/go";
import styles from "../../styles/Home.module.css";

// Components
import { Game } from "../../model/aiHard/game";
import { MonteCarlo } from "../../model/aiHard/monte-carlo";

const AIBallSetters = () => {
  //**************
  // Functions
  // *************
  const setBall = (e) => {
    e.preventDefault();

    let game = new Game();
    let mcts = new MonteCarlo(game);

    let state = game.start();
    let winner = game.winner(state);

    while (winner === null) {
      console.log();
      console.log("player: " + (state.player === 1 ? 1 : 2));
      console.log(
        state.board.map((row) => row.map((cell) => (cell === -1 ? 2 : cell)))
      );

      mcts.runSearch(state, 1);

      let play = mcts.bestPlay(state, "winRate");

      state = game.updateState(state, play);
      winner = game.winner(state);
    }

    console.log();
    console.log("winner: " + (winner === 1 ? 1 : 2));
    console.log(
      state.board.map((row) => row.map((cell) => (cell === -1 ? 2 : cell)))
    );
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

export default AIBallSetters;
