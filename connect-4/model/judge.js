import { lastBallPosition } from './index';

export class Judge {
  constructor(board, rowIndex, colIndex) {
    this.board = board;
    this.currentBall = board[rowIndex][colIndex];
    this.lastBallPosition = new lastBallPosition(
      rowIndex,
      colIndex,
      this.currentBall.color
    );
    this.stack = 1;
  }

  checkWinner() {
    const rowIndex = this.lastBallPosition.rowIndex;
    const colIndex = this.lastBallPosition.colIndex;
    return (
      this.verticalCheck(rowIndex, colIndex) ||
      this.horizontalCheck(rowIndex, colIndex) ||
      this.rightDiagonalCheck(rowIndex, colIndex) ||
      this.leftDiagonalCheck(rowIndex, colIndex)
    );
  }

  check(n) {
    // console.log(n);
    if (n >= 4) {
      // 4
      return true;
    } else {
      return false;
    }
  }

  isBothSameColor(ball1, ball2) {
    if (
      ball1.color === null ||
      ball2.color === null ||
      ball1.color != ball2.color
    )
      return false;
    else return true;
  }

  verticalCheck(rowIndex, colIndex) {
    this.stack = 1;

    // when the ball is dropped, there should be nothing on the top of the ball, so we only need lower check
    const lowerCheck = () => {
      // lower limit
      const limit = this.board.length; // rowIndex + 3
      for (let row = rowIndex + 1; row < limit; row++) {
        const ball = this.board[row][colIndex];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
        else break;
      }
    };
    lowerCheck();

    return this.check(this.stack);
  }

  horizontalCheck(rowIndex, colIndex) {
    this.stack = 1;

    const leftCheck = () => {
      // left limit
      const limit = 0;
      for (let col = colIndex - 1; col >= limit; col--) {
        const ball = this.board[rowIndex][col];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
        else break;
      }
    };

    const rightCheck = () => {
      // right limit
      const limit = this.board.length;
      for (let col = colIndex + 1; col < limit; col++) {
        const ball = this.board[rowIndex][col];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
        else break;
      }
    };

    leftCheck();
    rightCheck();

    return this.check(this.stack);
  }

  rightDiagonalCheck(rowIndex, colIndex) {
    this.stack = 1;

    const upperCheck = () => {
      const verticalLimit = 0; // rowIndex - 3
      const horizontalLimit = this.board.length; // colIndex + 3

      let row = rowIndex - 1;
      let col = colIndex + 1;

      while (col < horizontalLimit && row >= verticalLimit) {
        const ball = this.board[row][col];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
        else break;
        row--;
        col++;
      }
    };

    const lowerCheck = () => {
      const verticalLimit = this.board.length; // rowIndex + 3
      const horizontalLimit = 0; // colIndex - 3

      let row = rowIndex + 1;
      let col = colIndex - 1;

      while (col >= horizontalLimit && row < verticalLimit) {
        const ball = this.board[row][col];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
        else break;
        row++;
        col--;
      }
    };

    upperCheck();
    lowerCheck();

    return this.check(this.stack);
  }

  leftDiagonalCheck(rowIndex, colIndex) {
    this.stack = 1;

    const upperCheck = () => {
      const verticalLimit = 0; // rowIndex - 3
      const horizontalLimit = 0; // colIndex - 3

      let row = rowIndex - 1;
      let col = colIndex - 1;

      while (col >= horizontalLimit && row >= verticalLimit) {
        const ball = this.board[row][col];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
        else break;
        row--;
        col--;
      }
    };

    const lowerCheck = () => {
      const verticalLimit = this.board.length; // rowIndex + 3
      const horizontalLimit = this.board.length; // colIndex + 3

      let row = rowIndex + 1;
      let col = colIndex + 1;

      while (col < horizontalLimit && row < verticalLimit) {
        const ball = this.board[row][col];
        if (this.isBothSameColor(ball, this.currentBall)) this.stack++;
        else break;
        row++;
        col++;
      }
    };

    upperCheck();
    lowerCheck();

    return this.check(this.stack);
  }
}
