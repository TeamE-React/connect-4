export class MonteCarlo {
  constructor(gameTree, parentNode, move) {
    this.gameTree = gameTree;
    this.parentNode = parentNode;
    this.move = move;
    this.childNodes = [];
    this.wins = 0;
    this.visits = 0;
    this.untriedMoves = gameTree.moves.slice();
  }

  selectChild() {
    let totalVisits = this.visits;
    let values = this.childNodes.map(function (n) {
      let c = Math.sqrt(2);
      return (
        n.wins / n.visits + c * Math.sqrt(Math.log(totalVisits) / n.visits)
      );
    });
    return this.childNodes[values.indexOf(Math.max.apply(null, values))];
  }

  expandChild() {
    let i = random(this.untriedMoves.length);
    let move = this.untriedMoves.splice(i, 1)[0];
    let child = new Node(force(move.gameTreePromise), this, move);
    this.childNodes.push(child);
    return child;
  }

  simulate() {
    let gameTree = this.gameTree;
    while (gameTree.moves.length !== 0) {
      let i = random(gameTree.moves.length);
      gameTree = force(gameTree.moves[i].gameTreePromise);
    }
    return (judge(gameTree.board) * (player === BLACK ? 1 : -1)) / 2 + 0.5;
  }

  backpropagate() {
    for (var node = this; node !== null; node = node.parentNode)
      node.update(result);
  }

  update(won) {
    this.wins += won;
    this.visits += 1;
  }

  tryMonteCarloTreeSearch() {
    var root = new Node(rootGameTree, null, null);

    for (var i = 0; i < maxTries; i++) {
      var node = root;

      while (node.untriedMoves.length === 0 && node.childNodes.length !== 0)
        node = node.selectChild();

      if (node.untriedMoves.length !== 0) node = node.expandChild();

      var won = node.simulate(rootGameTree.player);

      node.backpropagate(won);
    }

    var vs = root.childNodes.map(function (n) {
      return n.visits;
    });
    return root.childNodes[vs.indexOf(Math.max.apply(null, vs))].move;
  }
}
