import React, { useContext } from 'react';
import Link from 'next/link';

// Styles
import { Modal, Box, Button } from '@material-ui/core';

// Components
import AppContext from '../contexts/AppContext';
import WinnerSVG from './svgFiles/winnerSVG';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  height: 350,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const WinnerWindow = () => {
  const {
    winnerExist,
    setWinnerExist,
    setIsDraw,
    dispatch,
    boardSize,
    setMinutes,
    setSeconds,
    totalSeconds,
    setTotalSeconds,
    interval,
  } = useContext(AppContext);

  const handleClickRetry = () => {
    setWinnerExist(false);
    setIsDraw(false);
    dispatch({ type: 'BUILD_BOARD', boardSize });
    setTotalSeconds((totalSeconds = 0));
    setMinutes('00');
    setSeconds('00');

    const pad = (val) => {
      let valString = val + '';
      if (valString.length < 2) return '0' + valString;
      else return valString;
    };

    const incrementTime = () => {
      setTotalSeconds(++totalSeconds);
      setMinutes(pad(parseInt(totalSeconds / 60)).toString());
      setSeconds(pad(parseInt(totalSeconds % 60)).toString());
    };

    clearInterval(interval.current);
    interval.current = setInterval(incrementTime, 1000);
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
