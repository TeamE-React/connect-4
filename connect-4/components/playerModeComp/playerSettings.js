import React, { useEffect, useState, useContext } from 'react';

// Styling
import styles from '../../styles/Home.module.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core';

// Components
import AppContext from '../../contexts/AppContext';
import { Config } from '../../config';
import { Player } from '../../model';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '14ch',
    },
  },
  formControl1: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
  formControl2: {
    margin: theme.spacing(1),
    minWidth: 130,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const PlayerSettings = () => {
  // ボールカラーのリスト作成
  const colorList = ['red', 'yellow', 'green', 'pink', 'cyan'];
  const classes = useStyles();
  const { playersList, setPlayersList } = useContext(AppContext);
  const [numberOfPlayers, setNumberOfPlayers] = useState(
    Config.players.number.min
  );

  const handleNumberOfPlayers = (e) => {
    e.preventDefault();
    setNumberOfPlayers(e.target.value);
  };

  const updatePlayersList = (numberOfPlayers) => {
    let newList = [];
    for (let i = 0; i < numberOfPlayers; i++) {
      if (i <= playersList.length - 1) {
        newList.push(playersList[i]);
      } else {
        newList.push(new Player());
      }
    }

    setPlayersList(newList);
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
        player.color = event.target.value;
        setPlayersList([...playersList]);
      }
    });
  };

  // numberOfPlayersの値を更新するためにuseEffectを使う
  useEffect(() => {
    updatePlayersList(numberOfPlayers);
  }, [numberOfPlayers]);

  return (
    <>
      <div className={styles.input_ui}>
        <FormControl variant="outlined" className={classes.formControl1}>
          <InputLabel id="number-of-players-select-label">
            Number of Players
          </InputLabel>
          <Select
            labelId="number-of-players-select-label"
            id="number-of-players-select"
            value={numberOfPlayers}
            label="Number of Players"
            onClick={handleNumberOfPlayers}
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
              id={index.toString()}
              label="Player's Name"
              defaultValue={player.name}
              variant="outlined"
              onChange={handlePlayerName}
            />
          </form>

          <FormControl variant="outlined" className={classes.formControl2}>
            <InputLabel id="player-color-select-label">
              Player's Color
            </InputLabel>
            <Select
              labelId="player-color-select-label"
              label="Player's Color"
              defaultValue={player.color}
              onClick={handlePlayerColor}
              name={index.toString()}
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
