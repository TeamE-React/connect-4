import React, {useContext, useState, useEffect} from 'react'
import { Box } from "@material-ui/core";
import AppContext from '../../contexts/AppContext';

const PlayersInfo = () => {
  const {playersList} = useContext(AppContext);
  const [oddPlayer, setOddPlayer] = useState([]);

  useEffect(() => {
    let array = [];
    for(let i = 0; i < playersList.length; i++){
      if((i+1) % 2 !== 0){
        array.push(playersList[i]);
      }
    }
    setOddPlayer(array);
  }, [])

  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      {oddPlayer.map((player) => {
        return(
          <p>Player {playersList.indexOf(player)+1}: {player.name}</p>
        )
      })}
    </Box>
  )
}

export default PlayersInfo;