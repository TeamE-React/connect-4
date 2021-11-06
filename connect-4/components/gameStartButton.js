import React, { useContext } from "react";
import Link from "next/link";
import { CompleteData } from "../pages/playerModePage";
import { Button } from "@material-ui/core";
import styles from "../styles/Home.module.css";

export default function GameStartButton() {
  const { boardSize, playersList } = useContext(CompleteData);

  const handleClick = () => {
    console.log("Board Size: " + boardSize);
    console.log(playersList);
  };

  return (
    <Link href={`/gamePage`}>
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
    </Link>
  );
}
