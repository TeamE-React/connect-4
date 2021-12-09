import React, {useEffect, useContext} from "react";
import Head from "next/head";

// Styling
import styles from "../styles/Home.module.css";
import { ThemeProvider } from "@material-ui/core";
import theme from "../theme/theme";

// Components
import Header from "../components/header";
import { Config } from "../config";
import SettingSVG from "../components/svgFiles/settingSVG";
import PlayerModeButton from "../components/buttons/playerModeButton";
import AiModeButton from "../components/buttons/aiModeButton";
import AppContext from '../contexts/AppContext';

export default function settingPage() {
  const {
    setBoardSize,
    setPlayersList,
    setMinutes,
    setSeconds,
    setTotalSeconds,
    interval,
    setWinnerExist,
    setIsDraw,
    setIsDropping,
    setCurrPlayerIndex,
  } = useContext(AppContext);

  const setNewGame = () => {
    setWinnerExist(false);
    setIsDraw(false);
    setBoardSize(Config.board.size.default);
    setPlayersList([]);
    setCurrPlayerIndex(0);

    setTotalSeconds(0);
    setMinutes('00');
    setSeconds('00');
    clearInterval(interval.current);

    setWinnerExist(false);
    setIsDraw(false);

    setIsDropping(false);
  };

  useEffect(() => {
    setNewGame();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className={styles.body_div}>
        <Head>
          <title>Setting Page</title>
        </Head>
        <Header />
        <div className={styles.flex_column}>
          <div className={styles.setting_svg}>
            <SettingSVG />
          </div>
          <div className={styles.setting_btn_container}>
            <PlayerModeButton />
            <AiModeButton />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
