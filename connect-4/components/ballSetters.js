import React, {useContext} from "react";

import { Button, Box } from "@material-ui/core";
import { GoTriangleDown } from "react-icons/go";
import styles from "../styles/Home.module.css";
import AppContext from "../contexts/AppContext";

const BallSetters = ({ colIndex }) => {  
  const { state, dispatch } = useContext(AppContext);

  const setBall = () => {
    console.log(state.currentPlayer.color);
    let color = state.currentPlayer.color;
    console.log(colIndex);
    dispatch({type: 'SET_BALL', color, colIndex, rowIndex: 0});
  }

  return (
    <Button
        variant="contained"
        color="secondary"
        size="large"
        className={styles.btn}
        style={{ fontSize: "20px", margin: "16px" }}
        onClick={setBall}
        >
        < GoTriangleDown />
    </Button>
  );
};

export default BallSetters;
