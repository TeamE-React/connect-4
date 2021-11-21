import React from "react";

// Styling
import styles from "../../styles/Home.module.css";
import { Button, Box } from "@material-ui/core";
import { GiVintageRobot } from "react-icons/gi";

export default function AiModeButton() {
  return (
    <Box display="flex" flexDirection="column" textAlign="center">
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={styles.btn}
        style={{ fontSize: "70px" }}
      >
        <GiVintageRobot />
      </Button>
      <p>Player vs AI</p>
    </Box>
  );
}
