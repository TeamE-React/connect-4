import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "../styles/Home.module.css";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PlayersColor() {
  const classes = useStyles();
  const [color, setColor] = React.useState("");

  const handleChange = (e) => {
    setColor(e.target.value);
  };

  return (
    <div className={styles.input_ui}>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="player-number-select-label">Player's Color</InputLabel>
        <Select
          labelId="player-number-select-label"
          id="player-number-select"
          value={color}
          label="Player's Color"
          onChange={handleChange}
        >
          <MenuItem value={"red"}>Red</MenuItem>
          <MenuItem value={"blue"}>Blue</MenuItem>
          <MenuItem value={"yellow"}>Yellow</MenuItem>
          <MenuItem value={"green"}>Green</MenuItem>
          <MenuItem value={"pink"}>Pink</MenuItem>
          <MenuItem value={"cyan"}>Cyan</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
