const ball = (state=[], action) => {

  switch(action.type){
    case 'SET_BALL':
      console.log(action.colId, action.rowId, action.color, action.board);
      const len = board.length;
      const getBall = () => board[action.rowId][action.colId];

      if(rowId >= len || getBall.color !== null){
        setIsDropping(false);
        return;
      }

      if(rowId !== 0){
        const ballAbove = state.board[rowId-1][colId];
        ballAbove.color = null;
      }

      const ball = getBall();
      ball.color = color;
      console.log(state.board[rowId][colId]);
      setTimeout(function () {
        setBall(rowId+1, colIndex, color);
      }, 300);
    default:
      return state;
  }
}

export default ball;