const ball = (state=[], action) => {
  switch(action.type){
    case 'SET_BALL':
      console.log(state.board);
    default:
      return state;
  }
}

export default ball;