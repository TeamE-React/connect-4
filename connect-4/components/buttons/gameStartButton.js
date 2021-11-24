import React, {useContext} from "react";
import Link from "next/link";

// Styling
import { Button } from "@material-ui/core";
import styles from "../../styles/Home.module.css";
import AppContext from "../../contexts/AppContext";

export default function StartBtn() {
  const { dispatch, boardSize, playersList } = useContext(AppContext);
  const gameStart = () => {
    console.log("gamestart!");
    dispatch({type: 'BUILD_BOARD', boardSize});
    dispatch({type: 'SET_CURR_PLAYER', playersList});
  }

  return (
    <Link href={`/gamePage`}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={styles.btn}
        style={{ fontSize: "20px", marginTop: "4rem" }}
        onClick={gameStart}
      >
        Game Start
      </Button>
    </Link>
  );
}
