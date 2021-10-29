import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "@material-ui/core";
import Header from "../components/header";
// import TitleSvg from "../public/images/title.min.svg";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Connect 4</title>
        <meta name="description" content="Team Project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Image priority src="/images/title-image.png" width={100} height={80} layout="fill"/>
      <div className={styles.main}>
        <Link href={`/settingPage`}>
          <Button variant="contained" color="primary">
            Game Start
          </Button>
        </Link>
      </div>
    </div>
  );
}
