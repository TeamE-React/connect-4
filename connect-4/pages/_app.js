import React, {useReducer, useState} from 'react';
import AppContext from "../contexts/AppContext";

import reducer from '../reducers';
import { Config } from '../config';

const MyApp = ({ Component, pageProps }) => {
  const initialState = {board: [], currentPlayer: []};
  const [boardSize, setBoardSize] = useState(Config.board.size.default);
  const [playersList, setPlayersList] = useState([]);

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch, boardSize, setBoardSize, playersList, setPlayersList}}>
      <Component {...pageProps} />
    </AppContext.Provider>
  );
}

export default MyApp;

// By wrapping it like this, we could access the value inside of the Context object (AppContext.js) in every component and page.
