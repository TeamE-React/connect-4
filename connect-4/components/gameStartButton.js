import React from "react";
import styles from "../styles/Home.module.css";
import { Button } from "@material-ui/core";

export default function GameStartButton() {
  return (
    <Button
      variant="contained"
      color="primary"
      size="large"
      className={styles.btn}
      style={{ fontSize: "20px" }}
    >
      Game Start
    </Button>
  );
}
