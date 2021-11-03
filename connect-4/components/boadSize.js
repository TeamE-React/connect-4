import React from "react";
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

export default function BoadSize() {
  const classes = useStyles();

  return (
    <div className={styles.input_ui}>
      <div className={classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Boad Size
        </Typography>
        <Slider
          defaultValue={Math.floor(
            ((Config.board.size.max - Config.board.size.min) / 2) +
              Config.board.size.min
          )}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={1}
          marks
          min={Config.board.size.min}
          max={Config.board.size.max}
        />
      </div>
    </div>
  );
}
