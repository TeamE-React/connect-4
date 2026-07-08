import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useContext, useEffect } from 'react';

// Styling
import styles from '../styles/Home.module.css';
import { ThemeProvider, StyledEngineProvider, Button } from '@mui/material';
import theme from '../theme/theme';

// Component
import Header from '../components/header';
import AppContext from '../contexts/AppContext';
import { Config, BASE_PATH } from '../config';

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
    <StyledEngineProvider injectFirst>
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
              <link rel="icon" href={`${BASE_PATH}/favicon.ico`} />
            </Head>
            <Header />
            <div className={styles.title_image}>
              <Image
                priority
                src={`${BASE_PATH}/images/title.min.svg`}
                alt="Connect 4"
                width={200}
                height={50}
                style={{ width: '100%', height: 'auto' }}
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
    </StyledEngineProvider>
  );
};

export default Home;
