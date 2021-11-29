const ball = (state=[], action) => {
  switch(action.type){
    case 'SET_BALL':
      console.log(action.colIndex, action.rowIndex, action.color, action.board);
      const len = action.board.length;
      const getBall = () => action.board[rowIndex][colIndex];

      // base case
      // if(rowIndex >= len || getBall().color !== null){

      // }
    default:
      return state;
  }
}

export default ball;