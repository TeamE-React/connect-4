import React, { useContext, useEffect } from "react";

// Styling
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styles from "../styles/Home.module.css";

// Components
import AppContext from "../contexts/AppContext";

// config
import { Config } from "../config";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default function BoardSizeInput() {
  const classes = useStyles();

  const { boardSize, setBoardSize } = useContext(AppContext);

  const handleChange = (event, value) => {
    event.preventDefault();
    setBoardSize(value);
  };


  return (
    <div className={styles.input_ui}>
      <div className={classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Board Size
        </Typography>
        <Slider
          defaultValue={Config.board.size.default}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={1}
          marks
          min={Config.board.size.min}
          max={Config.board.size.max}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
