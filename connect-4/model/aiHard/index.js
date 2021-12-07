// import { Game } from "./game";
// import { MonteCarlo } from "./monte-carlo";

// let game = new Game();
// let mcts = new MonteCarlo(game);

// let state = game.start()
// let winner = game.winner(state)

// while (winner === null) {

//   console.log()
//   console.log("player: " + (state.player === 1 ? 1 : 2))
//   console.log(state.board.map((row) => row.map((cell) => cell === -1 ? 2 : cell)))

//   mcts.runSearch(state, 1)

//   let play = mcts.bestPlay(state, "robust")

//   state = game.updateState(state, play)
//   winner = game.winner(state)
// }

// console.log()
// console.log("winner: " + (winner === 1 ? 1 : 2))
// console.log(state.board.map((row) => row.map((cell) => cell === -1 ? 2 : cell)))