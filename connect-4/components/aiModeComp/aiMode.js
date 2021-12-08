import React, { useContext } from 'react';
import { useRouter } from 'next/router';

// Styling
import styles from '../../styles/Home.module.css';
import { Button, Box } from '@material-ui/core';
import { Validation } from '../../model/validation';

// Components
import AIModeSVG from '../svgFiles/aiModeSVG';
import AiSettings from './aiSettings';
import AppContext from '../../contexts/AppContext';
import { Player } from '../../model';

const aiMode = () => {
  const {
    dispatch,
    playersList,
    setPlayersList,
    errors,
    setErrors,
    setIsAiMode,
    currPlayerIndex,
    value,
    setIsHard
  } = useContext(AppContext);
  const router = useRouter();

  const gameStart = (e) => {
    e.preventDefault();
    if (validationCheck()) {
      router.push('/gamePage');
      if(value == 'hard') {
        setIsHard(true);
        setPlayersList([...playersList, new Player('AI', 'blue')]);
      }
      else {
        setPlayersList([...playersList, new Player('CPU', 'blue')]);
      } 
      dispatch({ type: 'BUILD_BOARD', boardSize: 7, isAi: true });
      setIsAiMode(true);
      dispatch({ type: 'SET_CURR_PLAYER', playersList, currPlayerIndex });
    }
  };

  const validationCheck = () => {
    const validation = new Validation(playersList);
    const isNameNotBlank = validation.isNotBlank('name');
    const isColorNotBlank = validation.isNotBlank('color');
    const isNameUnique = validation.isUnique('name');
    const isColorUnique = validation.isUnique('color');

    setErrors(validation.getErrors());
    return isNameNotBlank && isColorNotBlank && isNameUnique && isColorUnique;
  };

  return (
    <div className={styles.flex_column}>
      <AIModeSVG />
      <AiSettings />
      <Button
        variant="contained"
        color="primary"
        size="large"
        className={styles.btn}
        style={{ fontSize: '20px', marginTop: '4rem' }}
        onClick={gameStart}
      >
        Game Start
      </Button>
    </div>
  );
};

export default aiMode;
