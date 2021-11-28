import React, {useContext, useEffect} from 'react'
import { Box } from "@material-ui/core";
import AppContext from '../../contexts/AppContext';

const PlayersInfo = () => {
  const {playersList} = useContext(AppContext);

  useEffect(() => {
    console.log(playersList);
    // console.log(playersList[0]);
    {playersList.map((player, index) => {
      console.log(player);
    })}
  }, [])
  return (
    <Box display="flex" alignItems="center" flexDirection="column">
      {playersList.map((player,index) => {
        return(
          <p>Player {index+1}: {player.name}</p>
        )
      })}
    </Box>
  )
}

export default PlayersInfo;