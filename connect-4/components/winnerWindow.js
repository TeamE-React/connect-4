import React, { useContext } from 'react';
import Link from 'next/link';

// Styles
import { Modal, Box, Button } from '@material-ui/core';

// Components
import AppContext from '../contexts/AppContext';
import WinnerSVG from './svgFiles/winnerSVG';
import { useReset } from '../hooks/useReset';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 350,
  bgcolor: 'rgba(255, 255, 255, 0.5)',
  boxShadow: 24,
  borderRadius: '20px',
  p: 4,
};

const WinnerWindow = () => {
  const { winnerExist } = useContext(AppContext);
  const resetGameData = useReset();

  const handleClickRetry = (e) => {
    e.preventDefault();
    resetGameData();
  };

  return (
    <>
      <Modal open={winnerExist}>
        <Box sx={style}>
          <WinnerSVG />
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

export default WinnerWindow;
