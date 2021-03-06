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
  const [value, setValue] = useState('easy');
  const [isHard, setIsHard] = useState(false);
  const [newGame, setNewGame] = useState({});
  const [mcts, setMcts] = useState({});
  const [gameState, setGameState] = useState({});
  // Others
  const [isDropping, setIsDropping] = useState(false);
  const [errors, setErrors] = useState([]);
  const [simulationCount, setSimulationCount] = useState(0);

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
        value,
        setValue,
        isDropping,
        setIsDropping,
        errors,
        setErrors,
        isHard,
        setIsHard,
        newGame,
        setNewGame,
        gameState,
        setGameState,
        mcts,
        setMcts,
        simulationCount,
        setSimulationCount,
      }}
    >
      <Component {...pageProps} />
    </AppContext.Provider>
  );
};

export default MyApp;
