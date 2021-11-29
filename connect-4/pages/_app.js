import React, {useReducer, useState, useRef} from 'react';
import AppContext from "../contexts/AppContext";

import reducer from '../reducers';
import { Config } from '../config';

import '../styles/globals.css';

const MyApp = ({ Component, pageProps }) => {
  const initialState = {board: [], currentPlayer: []};

  const [boardSize, setBoardSize] = useState(Config.board.size.default);
  const [playersList, setPlayersList] = useState([]);
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");
  const [totalSeconds, setTotalSeconds] = useState(0);
  const interval = useRef(null); // returns an object { current: 0 }
  const [isDropping, setIsDropping] = useState(false);


  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch, boardSize, setBoardSize, playersList, setPlayersList, minutes, setMinutes, seconds, setSeconds, totalSeconds, setTotalSeconds, interval, isDropping, setIsDropping}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;

