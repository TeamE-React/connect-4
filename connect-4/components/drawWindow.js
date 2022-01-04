import React, { useContext } from 'react';
import Link from 'next/link';

// Styles
import { Modal, Box, Button } from '@material-ui/core';

// Components
import AppContext from '../contexts/AppContext';
import { useReset } from '../hooks/useReset';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 300,
  bgcolor: 'rgba(255, 255, 255, 0.7)',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

const DrawWindow = () => {
  const { isDraw } = useContext(AppContext);
  const resetGameData = useReset();

  const handleClickRetry = (e) => {
    e.preventDefault();
    resetGameData();
  };

  return (
    <>
      <Modal open={isDraw}>
        <Box sx={style}>
          <Box display="flex" justifyContent="center">
            <h3>It's a draw...</h3>
          </Box>
          <Box display="flex" justifyContent="center">
            <Link href={`/`}>
              <Button
                variant="contained"
                color="primary"
                style={{ fontSize: '1rem', margin: '1rem', width: '8rem' }}
              >
                Back to Top
              </Button>
            </Link>
            <Button
              variant="contained"
              color="primary"
              onClick={handleClickRetry}
              style={{ fontSize: '1rem', margin: '1rem', width: '8rem' }}
            >
              Retry
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default DrawWindow;
