import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";
import PlayerModeSVG from "../components/svgFiles/playerModeSVG";
import NumberOfPlayer from "../components/numberOfPlayer";
import BoadSize from "../components/boadSize";
import PlayerSetting from "../components/playerSetting";
import PlayersName from "../components/playersName";
import PlayersColor from "../components/playersColor";

export default function PlayerModePage() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.body_div}>
        <Head>
          <title>Player Mode Settings</title>
        </Head>
        <Header />
        <div className={styles.flex_column}>
          <PlayerModeSVG />
          <BoadSize />
          <NumberOfPlayer />
          <PlayerSetting />
          <div className={styles.flex_row}>
            <PlayersName />
            <PlayersColor />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
