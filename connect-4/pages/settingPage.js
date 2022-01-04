import Head from 'next/head';

// Styling
import styles from '../styles/Home.module.css';
import { ThemeProvider } from '@material-ui/core';
import theme from '../theme/theme';

// Components
import Header from '../components/header';
import SettingSVG from '../components/svgFiles/settingSVG';
import PlayerModeButton from '../components/buttons/playerModeButton';
import AiModeButton from '../components/buttons/aiModeButton';
import useNewGame from '../hooks/useNewGame';

export default function settingPage() {
  useNewGame();

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
