// This is a file that builds a Context object.
import {createContext, useState} from 'react'

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const [players, setPlayers] = useState("")
  const [board, setBoard] = useState("");

  return (
    <AppContext.Provider value={{players, setPlayers, board, setBoard}}>
      {props.children}
    </AppContext.Provider>
  )
}

export default AppContextProvider
