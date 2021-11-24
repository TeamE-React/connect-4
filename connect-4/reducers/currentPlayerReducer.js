const currentPlayer = (state = [], action) => {
  switch(action.type){
    case 'SET_CURR_PLAYER':
      return action.playersList[0];
    default:
      return state;
  }
}

export default currentPlayer;