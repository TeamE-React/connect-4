import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { GiTabletopPlayers } from "react-icons/gi";

export default function AiModeButton() {
  return (
    <>
      <Link href={`/playerModePage`}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={styles.btn}
          style={{ fontSize: "40px" }}
        >
          <GiTabletopPlayers />
        </Button>
      </Link>
    </>
  );
}
