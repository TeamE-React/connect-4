import React from 'react';
import Head from 'next/head';

// Styling
import styles from '../styles/Home.module.css';
import theme from '../theme/theme';
import { ThemeProvider } from '@material-ui/core';

// Components
import Header from '../components/header';
import AiMode from '../components/aiModeComp/aiMode';

export default function PlayerModePage() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.body_div}>
        <Head>
          <title>AI Mode Settings</title>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content="Team Project" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <AiMode />
      </div>
    </ThemeProvider>
  );
}
