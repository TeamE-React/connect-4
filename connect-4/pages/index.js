import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';

// Styling
import styles from '../styles/Home.module.css';
import { ThemeProvider, Button } from '@material-ui/core';
import theme from '../theme/theme';

// Component
import Header from '../components/header';
import AppContext from '../contexts/AppContext';
import { Config } from '../config';

const Home = () => {
  const {
    setBoardSize,
    setPlayersList,
    setMinutes,
    setSeconds,
    setTotalSeconds,
    interval,
    setWinnerExist,
    setIsDraw,
    setShowWindow,
    setIsDropping,
    setCurrPlayerIndex,
  } = useContext(AppContext);

  const setNewGame = () => {
    setWinnerExist(false);
    setShowWindow(false);
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
        <div className={styles.top_image}>
          <Head>
            <title>Connect 4</title>
            <meta charset="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta name="description" content="Team Project" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Header />
          <div className={styles.title_image}>
            <Image
              priority
              src="/images/title.min.svg"
              width={200}
              height={50}
              layout={'responsive'}
            />
          </div>
          <div className={styles.btn_div}>
            <Link href={`/settingPage`}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={styles.btn}
                style={{ fontSize: '20px' }}
              >
                Game Start
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
