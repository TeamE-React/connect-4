import React, { useContext, useEffect } from "react";
import { NumberOfPlayers } from "../pages/playerModePage";
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

export default function NumberOfPlayersInput() {
  const classes = useStyles();

  const {
    numberOfPlayers,
    setNumberOfPlayers,
    playersList,
    changePlayersList,
  } = useContext(NumberOfPlayers);

  const handleChange = (event, value) => {
    setNumberOfPlayers(value);
  };

  // numberOfPlayersの値を更新するためにuseEffectを使う
  useEffect(() => {
    changePlayersList(playersList, numberOfPlayers);
  }, [numberOfPlayers]);

  return (
    <div className={styles.input_ui}>
      <div className={classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Number of Players
        </Typography>
        <Slider
          defaultValue={Config.players.number.min}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={1}
          marks
          min={Config.players.number.min}
          max={Config.players.number.max}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
