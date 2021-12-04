import React, { useContext } from 'react';
import { useRouter } from 'next/router';

// Styling
import styles from '../../styles/Home.module.css';
import { Button, Box } from '@material-ui/core';
import { Validation } from '../../model/validation';

// Components
import AIModeSVG from '../svgFiles/aiModeSVG';
import BoardSizeInput from '../boardSizeInput';
import AiSettings from './aiSettings';
import AppContext from '../../contexts/AppContext';
import { Player } from '../../model';

const aiMode = () => {
  const {
    dispatch,
    boardSize,
    playersList,
    setPlayersList,
    errors,
    setErrors,
    setIsAiMode,
    currPlayerIndex
  } = useContext(AppContext);
  const router = useRouter();

  const gameStart = (e) => {
    e.preventDefault();
    if (validationCheck()) {
      router.push('/gamePage');
      setPlayersList([...playersList, new Player('AI', 'blue', true)]);
      setIsAiMode(true);
      dispatch({ type: 'BUILD_BOARD', boardSize });
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
      {errors.length !== 0 && (
        <Box bgcolor="error.main" color="error.contrastText" p={2}>
          <h4>Please correct the following error(s):</h4>
          {errors.map((error) => {
            return <div>{error}</div>;
          })}
        </Box>
      )}
      <AIModeSVG />
      <BoardSizeInput />
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
