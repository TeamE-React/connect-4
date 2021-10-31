import React from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import theme from "../theme/theme";
import { ThemeProvider } from "@material-ui/core";
import SettingSVG from "../components/svgFiles/settingSVG";
import PlayerModeButton from "../components/playerModeButton";
import AiModeButton from "../components/aiModeButton";

export default function settingPage() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.body_div}>
        <Head>
          <title>Setting Page</title>
        </Head>
        <Header />
        <div className={styles.flex_column}>
          <SettingSVG />
          <div className={styles.setting_btn_container}>
            <PlayerModeButton />
            <AiModeButton />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
