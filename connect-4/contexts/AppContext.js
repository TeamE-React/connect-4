// This is a file that builds a Context object.
import { createContext, useState, useEffect } from "react";

// config, utils
import { Config } from "../config";
import { Player } from "../model";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [playersList, setPlayersList] = useState([]);
  const [boardSize, setBoardSize] = useState(Config.board.size.default);
  const [board, setBoard] = useState([]);
  const [numberOfPlayers, setNumberOfPlayers] = useState(Config.players.number.min);

  useEffect(() => {
    const array = [];
    for(let i = 0; i < Config.players.number.min; i++) {
      const player = "Player" + (i+1);
      array.push(new Player(player, "red"));
    }
    setPlayersList(array);
  }, [])

  return (
    <AppContext.Provider value={{ playersList, setPlayersList, boardSize, setBoardSize, board, setBoard, numberOfPlayers, setNumberOfPlayers}}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
