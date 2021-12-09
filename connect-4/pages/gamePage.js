import React from "react";
import Head from "next/head";

// Styling
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme/theme";
import styles from "../styles/Home.module.css";

// Components
import Header from "../components/header";
import GamePage from "../components/gamePageComp/gamePage";

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.body_div}>
        <Head>
          <title>Game Page</title>
        </Head>
        <Header styles={{ height: "10vh" }}/>
        <GamePage styles={{ height: "90vh" }}/>
      </div>
    </ThemeProvider>
  );
}
