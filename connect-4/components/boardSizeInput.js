import React, { useContext, useEffect } from 'react';

import { makeStyles } from 'tss-react/mui';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';
import styles from '../styles/Home.module.css';

// Components
import AppContext from '../contexts/AppContext';
import { Config } from '../config';

const useStyles = makeStyles()({
  root: {
    width: 300,
  },
});

export default function BoardSizeInput() {
  const { classes } = useStyles();
  const { setBoardSize } = useContext(AppContext);

  const handleChange = (event, value) => {
    event.preventDefault();
    setBoardSize(value);
  };

  return (
    <div className={styles.input_ui}>
      <div className={classes.root}>
        <Typography id="discrete-slider" gutterBottom>
          Board Size
        </Typography>
        <Slider
          defaultValue={Config.board.size.default}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="on"
          step={1}
          marks
          min={Config.board.size.min}
          max={Config.board.size.max}
          onChange={handleChange}
        />
      </div>
    </div>
  );
}
