import React, { useContext } from "react";

// Styling
import styles from "../../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select
} from "@material-ui/core";


// Components
import { AppContext } from "../../contexts/AppContext";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
const NumberOfPlayers = () => {
  const classes = useStyles();

  const { numberOfPlayers, setNumberOfPlayers } = useContext(AppContext);

  return (
    <div className={styles.input_ui}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="number-of-players-select-label">
          Number of Players
        </InputLabel>
        <Select
          labelId="number-of-players-select-label"
          id="number-of-players-select"
          value={numberOfPlayers}
          label="Number of Players"
          onClick={(e) => setNumberOfPlayers(e.target.value)}
          label="numberOfPlayers"
        >
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
          <MenuItem value={4}>4</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default NumberOfPlayers;