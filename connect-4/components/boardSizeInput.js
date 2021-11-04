import React, { useContext, useEffect } from "react";
import { BoardSize, boardDefaultValue } from "../pages/playerModePage";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import styles from "../styles/Home.module.css";
import { Config } from "../pages/config";

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

export default function BoardSizeInput() {
  const classes = useStyles();

  const { boardSize, setBoardSize } = useContext(BoardSize);

  const handleChange = (event, value) => {
    setBoardSize(value);
  };

  // boardSizeの値を更新するためにuseEffectを使う
  useEffect(() => {
    console.log(boardSize);
  }, [boardSize]);

  return (
    <div className={styles.input_ui}>
      <div className={classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Board Size
        </Typography>
        <Slider
          defaultValue={boardDefaultValue}
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
