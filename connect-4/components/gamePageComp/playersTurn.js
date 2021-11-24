import React, {useContext} from 'react'

import AppContext from '../../contexts/AppContext';

const PlayersTurn = () => {
  const {state} = useContext(AppContext);

  return (
    <div>
      <h2>{state.currentPlayer.name}'s turn</h2>
    </div>
  )
}

export default PlayersTurn;