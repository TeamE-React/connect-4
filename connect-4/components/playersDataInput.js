import React, { useContext, useEffect } from "react";
import styles from "../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { PlayerData } from "../pages/playerModePage";
import { Config } from "../pages/config";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "14ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function PlayersDataInput() {
  // ボールカラーのリスト作成
  const colorList = Object.keys(Config.ballColor);

  const classes = useStyles();
  const { playersList, setPlayersList } = useContext(PlayerData);

  const handleChangeName = (event) => {
    setPlayersName(playersList, event.target.value, event.target.id);
  };

  const setPlayersName = (playersList, name, id) => {
    let newPlayersList = [];

    for (let i = 0; i < playersList.length; i++) {
      newPlayersList.push(playersList[i]);
    }
    newPlayersList[id].name = name;
    setPlayersList(newPlayersList);
  };

  const handleClick = (event) => {
    console.log(event);
    setPlayersColor(playersList, event.target.value, event.target.name);
  };

  const setPlayersColor = (playersList, color, id) => {
    let newPlayersList = [];

    console.log(color);
    console.log(id);
    for (let i = 0; i < playersList.length; i++) {
      newPlayersList.push(playersList[i]);
    }
    console.log(newPlayersList[id]);
    newPlayersList[id].color = color;
    setPlayersList(newPlayersList);
  };

  // newPlayersListの値を更新するためにuseEffectを使う
  useEffect(() => {
    console.log(playersList);
  }, [playersList]);

  return (
    <>
      {playersList.map((player) => (
        <div key={player.id} className={styles.flex_row}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id={player.id}
              label="Player's Name"
              defaultValue="Player"
              variant="outlined"
              onChange={handleChangeName}
            />
          </form>
          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="player-number-select-label">
              Player's Color
            </InputLabel>
            <Select
              labelId="player-number-select-label"
              id={player.id}
              value={player.color}
              name={player.id}
              label="Player's Color"
              onClick={handleClick}
            >
              {colorList.map((colorOption, index) => (
                <MenuItem key={index} value={colorOption}>
                  {colorOption}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      ))}
    </>
  );
}
