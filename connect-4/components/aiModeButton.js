import React from "react";
import styles from "../styles/Home.module.css";
import { Button } from "@material-ui/core";
import { GiVintageRobot } from "react-icons/gi";

export default function AiModeButton() {
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={styles.btn}
        style={{ fontSize: "40px" }}
      >
        <GiVintageRobot />
      </Button>
    </>
  );
}
