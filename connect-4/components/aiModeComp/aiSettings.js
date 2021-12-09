import React, { useEffect, useContext } from 'react';

// Styling
import styles from '../../styles/Home.module.css';
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
  Box,
} from '@material-ui/core';

// Components
import AppContext from '../../contexts/AppContext';
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

const AiSettings = () => {
  // ボールカラーのリスト作成
  const colorList = ['red', 'yellow', 'green', 'pink', 'cyan'];
  const classes = useStyles();
  const { playersList, setPlayersList, value, setValue } =
    useContext(AppContext);

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

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    let newList = [];
    newList.push(new Player());

    setPlayersList(newList);
  }, []);

  return (
    <>
      <div className="my-3">
        <h2>Player Setting</h2>
      </div>
      <div className="styles.mode">
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
            <div>
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
          </div>
        ))}
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="row"
          style={{ marginTop: '1.5rem' }}
        >
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{ margin: "20px"}}>CHOOSE AI LEVEL</FormLabel>
            <RadioGroup
              aria-label="mode"
              defaultValue="easy"
              name="radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="easy" control={<Radio />} label="Easy" />
              <FormControlLabel value="hard" control={<Radio />} label="Hard" />
            </RadioGroup>
          </FormControl>
        </Box>
      </div>
    </>
  );
};

export default AiSettings;
