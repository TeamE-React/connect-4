import React, { useEffect, useState } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";
import PlayerModeSVG from "../components/svgFiles/playerModeSVG";
import NumberOfPlayersInput from "../components/numberOfPlayersInput";
import BoardSizeInput from "../components/boardSizeInput";
import PlayerSetting from "../components/playerSetting";
import PlayersDataInput from "../components/playersDataInput";
import GameStartButton from "../components/gameStartButton";
import { Player } from "../model/index.js";
import { Config } from "./config";
import { getPlayersList } from "./utils";

export const BoardSize = React.createContext();
export const NumberOfPlayers = React.createContext();
export const PlayerData = React.createContext();
export const CompleteData = React.createContext();

// ボードサイズの初期値は最大値と最小値の中間
export const boardDefaultValue = Math.floor(
  (Config.board.size.max - Config.board.size.min) / 2 + Config.board.size.min
);

export default function PlayerModePage() {
  const [boardSize, setBoardSize] = useState(boardDefaultValue);
  const [numberOfPlayers, setNumberOfPlayers] = useState(
    Config.players.number.min
  );
  const [playersList, setPlayersList] = useState(
    getPlayersList(Config.players.number.min)
  );

  const changeNumberOfPlayers = (playersList, numberOfPlayers) => {
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

  // BoardSizeInputに渡す変数と関数
  const boardValue = {
    boardSize,
    setBoardSize,
  };

  // NumberOfPlayersInputに渡す変数と関数
  const numberValue = {
    numberOfPlayers,
    setNumberOfPlayers,
    playersList,
    changeNumberOfPlayers,
  };

  // PlayersDataInputに渡す変数と関数
  const playerData = {
    playersList,
    setPlayersList,
  };

  // GameStartButtonに渡す変数と関数
  const completeData = {
    boardSize,
    numberOfPlayers,
    playersList,
  };

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.body_div}>
        <Head>
          <title>Player Mode Settings</title>
          <meta charSet="UTF-8" />
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
          <BoardSize.Provider value={boardValue}>
            <BoardSizeInput />
          </BoardSize.Provider>
          <NumberOfPlayers.Provider value={numberValue}>
            <NumberOfPlayersInput />
          </NumberOfPlayers.Provider>
          <PlayerSetting />
          <PlayerData.Provider value={playerData}>
            <PlayersDataInput />
          </PlayerData.Provider>
          <div className={styles.btn_div}>
            <CompleteData.Provider value={completeData}>
              <GameStartButton />
            </CompleteData.Provider>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
