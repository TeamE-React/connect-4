import React, { useReducer, useState, useRef } from 'react';

// styles
import '../styles/globals.css';

// Components
import AppContext from '../contexts/AppContext';
import reducer from '../reducers';
import { Config } from '../config';

const MyApp = ({ Component, pageProps }) => {
  const initialState = { board: [], currentPlayer: [] };
  const [state, dispatch] = useReducer(reducer, initialState);

  const [boardSize, setBoardSize] = useState(Config.board.size.default);
  const [playersList, setPlayersList] = useState([]);
  const [currPlayerIndex, setCurrPlayerIndex] = useState(0);
  // For Timer
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');
  const [totalSeconds, setTotalSeconds] = useState(0);
  const interval = useRef(null); // returns an object { current: 0 }
  // For judge
  const [winnerExist, setWinnerExist] = useState(false);
  const [isDraw, setIsDraw] = useState(false);
  // AI Mode
  const [isAiMode, setIsAiMode] = useState(false);
  // Others
  const [isDropping, setIsDropping] = useState(false);
  const [errors, setErrors] = useState([]);
  const [showWindow, setShowWindow] = useState(false);

  return (
    <AppContext.Provider
      value={{
        state,
        dispatch,
        boardSize,
        setBoardSize,
        playersList,
        setPlayersList,
        currPlayerIndex,
        setCurrPlayerIndex,
        minutes,
        setMinutes,
        seconds,
        setSeconds,
        totalSeconds,
        setTotalSeconds,
        interval,
        winnerExist,
        setWinnerExist,
        isDraw,
        setIsDraw,
        isAiMode,
        setIsAiMode,
        isDropping,
        setIsDropping,
        errors,
        setErrors,
        showWindow,
        setShowWindow,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default MyApp;
