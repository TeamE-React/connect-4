import { useContext, useEffect } from 'react';

// Component
import AppContext from '../contexts/AppContext';
import { Config } from '../config';

const useNewGame = () => {
  const {
    setBoardSize,
    setPlayersList,
    setMinutes,
    setSeconds,
    setTotalSeconds,
    interval,
    setWinnerExist,
    setIsDraw,
    setIsDropping,
    setCurrPlayerIndex,
    setIsHard,
    setIsAiMode,
  } = useContext(AppContext);

  const createNewGame = () => {
    setWinnerExist(false);
    setIsDraw(false);
    setBoardSize(Config.board.size.default);
    setPlayersList([]);
    setCurrPlayerIndex(0);
    setIsHard(false);
    setIsAiMode(false);

    setTotalSeconds(0);
    setMinutes('00');
    setSeconds('00');
    clearInterval(interval.current);

    setWinnerExist(false);
    setIsDraw(false);

    setIsDropping(false);
  };

  useEffect(() => {
    createNewGame();
  }, []);
};

export default useNewGame;
