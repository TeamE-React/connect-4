import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { ThemeProvider, Button } from "@material-ui/core";
import theme from "../theme/theme";
import Header from "../components/header";

export default function Home() {
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
              layout={"responsive"}
            />
          </div>
          <div className={styles.btn_div}>
            <Link href={`/settingPage`}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                className={styles.btn}
                style={{ fontSize: "20px" }}
              >
                Game Start
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
