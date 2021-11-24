import React from "react";

// Styling
import styles from "../../styles/Home.module.css";

// Components
import StartBtn from "../buttons/gameStartButton";
import PlayerModeSVG from "../svgFiles/playerModeSVG";
import BoardSizeInput from "../boardSizeInput";
import PlayerSettings from "./playerSettings";

export default function playerMode() {
  return (
    <div className={styles.flex_column}>
      <PlayerModeSVG />
      <BoardSizeInput />
      <PlayerSettings />
      <StartBtn />
    </div>
  );
}
