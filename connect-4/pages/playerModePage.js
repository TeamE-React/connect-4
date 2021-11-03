import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";
import PlayerModeSVG from "../components/svgFiles/playerModeSVG";
import NumberOfPlayers from "../components/numberOfPlayer";
import BoadSize from "../components/boadSize";
import PlayerSetting from "../components/playerSetting";
import PlayersName from "../components/playersName";
import PlayersColor from "../components/playersColor";
import GameStartButton from "../components/gameStartButton";
import { Player } from "../model/index.js";

export const NumberOfP = React.createContext();

export default function PlayerModePage() {
  const colorList = ["red", "blue", "yellow", "green", "pink", "cyan"];

  const [numberOfPlayers, setNumberOfPlayers] = useState(2);

  const [playersList, setPlayersList] = useState(() => {
    // プレイヤーリストの初期値
    let playersList = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      playersList.push(new Player(i, "Player" + (i + 1), colorList[i]));
    }
    return playersList;
  });

  const changeNumberOfPlayer = (playersList, numberOfPlayers) => {
    let newPlayersList = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      newPlayersList.push(playersList[i]);
    }

    let len = playersList.length;
    // プレイヤーの人数を増やす場合の処理
    if (numberOfPlayers > len) {
      for (let i = 0; i < numberOfPlayers - len; i++) {
        newPlayersList[len + i] = new Player(
          len + i,
          "Player" + (len + i + 1),
          ""
        );
      }
    }

    setPlayersList(newPlayersList);
  };

  // newPlayersListの値を更新するためにuseEffectを使う
  useEffect(() => {
    console.log(playersList);
  }, [playersList]);

  const value = {
    numberOfPlayers,
    setNumberOfPlayers,
    playersList,
    changeNumberOfPlayer,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.body_div}>
        <Head>
          <title>Player Mode Settings</title>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Team Project" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <div className={styles.flex_column}>
          <PlayerModeSVG />
          <BoadSize />
          <NumberOfP.Provider value={value}>
            <NumberOfPlayers />
          </NumberOfP.Provider>
          <PlayerSetting />
          {playersList.map((player) => (
            <div key={player.id} className={styles.flex_row}>
              <PlayersName />
              <PlayersColor />
            </div>
          ))}
          <div className={styles.btn_div}>
            <GameStartButton />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
