export class State {
  /**
  * @param playHistory -> [] from game.js
  * @param board -> 2D array (7 * 7)
  * @param player -> 1
  * 
   */
  constructor(playHistory, board, player) {
    this.playHistory = playHistory;
    this.board = board;
    this.player = player;
  }

  isPlayer(player) {
    return player == this.player;
  }

  // Mapのkeyとなる
  hash() {
    return JSON.stringify(this.playHistory);
  }
}
