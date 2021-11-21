import React from "react";
import Link from "next/link";

// Styling
import styles from "../../styles/Home.module.css";
import { Button, Box } from "@material-ui/core";
import { GiTabletopPlayers } from "react-icons/gi";

export default function AiModeButton() {
  return (
    <Box display="flex" flexDirection="column" textAlign="center">
      <Link href={`/playerModePage`}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={styles.btn}
          style={{ fontSize: "70px" }}
        >
          <GiTabletopPlayers />          
        </Button>
      </Link>
      <p>Player1 vs Player2</p>
    </Box>
  );
}
