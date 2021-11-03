import React, { useContext, useEffect } from "react";
import { NumberOfP } from "../pages/playerModePage";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "../styles/Home.module.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function NumberOfPlayers() {
  const classes = useStyles();

  const {
    numberOfPlayers,
    setNumberOfPlayers,
    playersList,
    changeNumberOfPlayer,
  } = useContext(NumberOfP);

  const handleChange = (e) => {
    setNumberOfPlayers(e.target.value);
  };

  // numberOfPlayersの値を更新するためにuseEffectを使う
  useEffect(() => {
    changeNumberOfPlayer(playersList, numberOfPlayers);
  }, [numberOfPlayers]);

  return (
    <div className={styles.input_ui}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="player-number-select-label">
          Number of Player
        </InputLabel>
        <Select
          labelId="player-number-select-label"
          id="player-number-select"
          value={numberOfPlayers}
          label="Number of Player"
          onChange={handleChange}
        >
          <MenuItem value={2}>Two</MenuItem>
          <MenuItem value={3}>Three</MenuItem>
          <MenuItem value={4}>Four</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
