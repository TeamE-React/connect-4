import { SET_CURR_PLAYER } from '../actions';

const currentPlayer = (state = [], action) => {
  switch (action.type) {
    case SET_CURR_PLAYER:
      if (
        action.currPlayerIndex >= action.playersList.length &&
        action.playersList[0] !== undefined
      ) {
        return action.playersList[0];
      } else if (action.currPlayerIndex < action.playersList.length) {
        return action.playersList[action.currPlayerIndex];
      } else return null;
    default:
      return state;
  }
};

export default currentPlayer;
