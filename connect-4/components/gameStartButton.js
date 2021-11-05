import React, { useContext } from "react";
import { CompleteData } from "../pages/playerModePage";
import { Button } from "@material-ui/core";
import styles from "../styles/Home.module.css";

export default function GameStartButton() {
  const { boardSize, numberOfPlayers, playersList } = useContext(CompleteData);

  const handleClick = () => {
    console.log("Board Size: " + boardSize);
    console.log("Number of Players: " + numberOfPlayers);
    console.log(playersList);
  };

  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      className={styles.btn}
      style={{ fontSize: "20px" }}
      onClick={handleClick}
    >
      Game Start
    </Button>
  );
}
