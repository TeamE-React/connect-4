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
  const { playersList, setPlayersList, numberOfPlayers, setNumberOfPlayers } =
    useContext(AppContext);

  const handleNumberOfPlayers = (e) => {
    console.log(numberOfPlayers, e.target.value);
    setNumberOfPlayers(e.target.value);
    // let newList = [];
    // for (let i = 0; i < numberOfPlayers; i++) {
    //   newList.push(playersList[i]);
    // }
    // while (numberOfPlayers > playersList.length) {
    //   newList.push(new Player());
    //   setPlayersList(newList);
    // }
    // setNumberOfPlayers(e.target.value);
    while (
      numberOfPlayers > playersList.length ||
      numberOfPlayers < playersList.length
    ) {
      if (numberOfPlayers > playersList.length) {
        setPlayersList([...playersList, new Player()]);
      // } else if (numberOfPlayers < playersList.length) {
      //   setPlayersList([...playersList]);
      }
    }
  };

  const handlePlayerName = (event) => {
    playersList.forEach((player, index) => {
      if (index == event.target.id) {
        player.name = event.target.value;
        setPlayersList([...playersList]);
      }
    });
  };

  const handlePlayerColor = (event) => {
    playersList.forEach((player, index) => {
      if (index == event.target.name) {
        console.log(player.color);
        player.color = event.target.value;
        setPlayersList([...playersList]);
      }
    });
  };

  // newPlayersListの値を更新するためにuseEffectを使う
  useEffect(() => {
    console.log(playersList);
  }, [playersList]);

  useEffect(() => {
    // let newList = [];
    // for (let i = 0; i < numberOfPlayers; i++) {
    //   newList.push(playersList[i]);
    // }
    // console.log(numberOfPlayers, playersList.length);
    // if (numberOfPlayers > playersList.length) {
    //   newList.push(new Player());
    // }
    // setPlayersList(newList);
    while (
      numberOfPlayers > playersList.length ||
      numberOfPlayers < playersList.length
    ) {
      if (numberOfPlayers > playersList.length) {
        setPlayersList([...playersList, new Player()]);
      // } else if (numberOfPlayers < playersList.length) {
      //   setPlayersList([...playersList]);
      }
    }
  }, [numberOfPlayers]);

  return (
    <>
      <div className={styles.input_ui}>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel id="number-of-players-select-label">
            Number of Players
          </InputLabel>
          <Select
            labelId="number-of-players-select-label"
            id="number-of-players-select"
            // value={numberOfPlayers}
            label="Number of Players"
            // onClick={handleNumberOfPlayers}
            label="numberOfPlayers"
          >
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4</MenuItem>
          </Select>
        </FormControl>
      </div>
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
              defaultValue="Player"
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
              defaultValue="Color"
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
};

export default PlayerSettings;
