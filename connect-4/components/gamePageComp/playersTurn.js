import React, { useContext } from 'react';
import { Box } from '@mui/material';
import AppContext from '../../contexts/AppContext';

const PlayersTurn = () => {
  const { state } = useContext(AppContext);

  return (
    <Box display="flex" justifyContent="center">
      <h2>{state.currentPlayer.name}'s turn</h2>
    </Box>
  );
};

export default PlayersTurn;
