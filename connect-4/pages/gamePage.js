import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import theme from "../theme/theme";
import styles from "../styles/Home.module.css";
import Head from "next/head";
import Header from "../components/header";

export default function () {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.body_div}>
        <Head>
          <title>Game Page</title>
        </Head>
        <Header />
        <h1>Game Page!</h1>
      </div>
    </ThemeProvider>
  );
}
