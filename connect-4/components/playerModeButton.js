import React from "react";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function AiModeButton() {
  return (
    <>
      <Link href={`/playerModePage`}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          className={styles.btn}
          style={{ fontSize: "30px" }}
        >
          <FontAwesomeIcon icon={faUser} className={styles.btn_icon_user} />
          vs
          <FontAwesomeIcon icon={faUser} className={styles.btn_icon_user} />
        </Button>
      </Link>
    </>
  );
}
