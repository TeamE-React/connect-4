const currentPlayer = (state = [], action) => {
  switch(action.type){
    case 'SET_CURR_PLAYER':
      if(action.currPlayerIndex >= action.playersList.length){
        return action.playersList[0];
      }
      return action.playersList[action.currPlayerIndex];
    default:
      return state;
  }
}

export default currentPlayer;