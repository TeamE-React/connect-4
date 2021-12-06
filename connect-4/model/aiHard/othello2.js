export class Move {
  construnctor(col, row, player) {
    this.col = col;
    this.row = row;
    this.player = player;
  }
}

export class GameTreeNode {
  constructor(board, player) {
    this.board = board; // 盤面
    this.player = player; // 手番のプレイヤー
    this.moves = listPossibleMoves(board, player); // 取り得る手
  }

  listPossibleMoves(board, player) {
    let result = [];
    for (let col = 0; col < board.length; i++) {
      let row = 0;
      while (row < board[col].length || board[col][row].color === null) {
        row++;
      }
      let possibleMove = new Move(col, row, player);
      result.push(possibleMove);
    }
    return result;
  }

  
  listAttackingMoves(board, player) {
    let moves = [];

    for (let x = 0; x < N; x++) {
      for (let y = 0; y < N; y++) {
        if (canAttack(board, x, y, player)) {
          moves.push({
            x: x,
            y: y,
            gameTree: makeGameTree(
              makeAttackedBoard(board, x, y, player),
              nextPlayer(player),
              false
            ),
          });
        }
      }
    }

    return moves;
  }
}

export class Utility {
  // 次の手番のプレイヤーを返す関数
  nextPlayer(player) {
    return player == BLACK ? WHITE : BLACK;
  }

  // 石が置けるかどうかの判定をする関数
  canAttack(board, x, y, player) {
    return listVulnerableCells(board, x, y, player).length;
  }

  // 石を置いた後の盤面を作る関数
  makeAttackedBoard(board, x, y, player) {
    let newBoard = JSON.parse(JSON.stringify(board));
    let vulnerableCells = listVulnerableCells(board, x, y, player);
    for (i = 0; i < vulnerableCells.length; i++)
      newBoard[vulnerableCells[i]] = player;
    return newBoard;
  }

  listVulnerableCells(board, x, y, player) {
    var vulnerableCells = [];

    if (board[[x, y]] != EMPTY) return vulnerableCells;

    let opponent = nextPlayer(player);
    for (let dx = -1; dx <= 1; dx++) {
      for (let dy = -1; dy <= 1; dy++) {
        if (dx == 0 && dy == 0) continue;
        for (let i = 1; i < N; i++) {
          let nx = x + i * dx;
          let ny = y + i * dy;
          if (nx < 0 || N <= nx || ny < 0 || N <= ny) break;
          let cell = board[[nx, ny]];
          if (cell == player && 2 <= i) {
            for (j = 0; j < i; j++)
              vulnerableCells.push([x + j * dx, y + j * dy]);
            break;
          }
          if (cell != opponent) break;
        }
      }
    }

    return vulnerableCells;
  }
}
