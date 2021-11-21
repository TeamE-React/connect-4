import React from "react";
import Link from "next/link";

// Styling
import { Button } from "@material-ui/core";
import styles from "../../styles/Home.module.css";

export default function StartBtn() {
  return (
    <Link href={`/gamePage`}>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={styles.btn}
        style={{ fontSize: "20px", marginTop: "4rem" }}
      >
        Game Start
      </Button>
    </Link>
  );
}
