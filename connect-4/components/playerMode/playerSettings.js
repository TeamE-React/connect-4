import React, { useContext, useEffect } from "react";

// Styling
import styles from "../../styles/Home.module.css";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

// Components
import { AppContext } from "../../contexts/AppContext";

// config
import { Config } from "../../config";
import { Player } from "../../model";

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

const PlayerSettings = () => {
  // ボールカラーのリスト作成
  const colorList = Object.keys(Config.ballColor);

  const classes = useStyles();
  const { playersList, setPlayersList, numberOfPlayers, setNumberOfPlayers } = useContext(AppContext);

  const handlePlayerName = (event) => {
    playersList.forEach((player, index) => {
      if(index == event.target.id){
        player.name = event.target.value;
        setPlayersList([...playersList])
      }
    })
  };

  const handlePlayerColor = (event) => {
    playersList.forEach((player, index) => {
      if(index == event.target.name){
        console.log(player.color);
        player.color = event.target.value;
        setPlayersList([...playersList])
      }
    })
  };

  // newPlayersListの値を更新するためにuseEffectを使う
  useEffect(() => {
    console.log(playersList);
  }, [playersList]);

  useEffect(() => {
    let numberOfPlayersList = [];
    for(let i = 0; i < numberOfPlayers; i++){
      numberOfPlayersList.push(playersList[i]);
    }
    console.log(numberOfPlayers, playersList.length);
    while(numberOfPlayers > playersList.length){
      for(let i = 0; i < numberOfPlayers; i++){
        numberOfPlayersList.push(new Player());
      }
    }
    setPlayersList(numberOfPlayersList);
  }, [numberOfPlayers])

  return (
    <>
      <div className="my-3">
        <h2>Player Setting</h2>
      </div>
      {playersList.map((player, index) => (
        <div key={index} className={styles.flex_row}>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              required
              id={index}
              label="Player's Name"
              defaultValue={player.name}
              variant="outlined"
              onChange={handlePlayerName}
            />
          </form>

          <FormControl variant="outlined" className={classes.formControl}>
            <InputLabel id="player-color-select-label">
              Player's Color
            </InputLabel>
            <Select
              labelId="player-color-select-label"
              label="Player's Color"
              defaultValue={player.color}
              onClick={handlePlayerColor}
              name={index}
            >
              {colorList.map((color, index) => (
                <MenuItem key={index} value={color}>
                  {color}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
      ))}
    </>
  );
}

export default PlayerSettings;