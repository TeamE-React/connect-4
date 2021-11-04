import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import styles from "../styles/Home.module.css";
import { Config } from "../pages/config";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PlayersColorInput() {
  // ボールカラーのリスト作成
  const colorList = Object.keys(Config.ballColor);

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
          {colorList.map((colorOption, index) => (
            <MenuItem key={index} value={colorOption}>
              {colorOption}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
