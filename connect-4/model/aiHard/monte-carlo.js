import { Node } from "./node";
import { Play } from "./play";

export class MonteCarlo {
  constructor(game, UCBPARAM = 2) {
    this.game = game;
    this.UCBPARAM = UCBPARAM; // 探索パラメータのデフォルト値
    this.nodes = new Map();
  }

  /** ツリー構造のはじまり（this.nodeのMapの中が空だったらノードを入れる） */
  makeNode(state) {
    if (!this.nodes.has(state.hash())) {
      let unexpandedPlays = this.game.legalPlays(state).slice();
      let node = new Node(null, null, state, unexpandedPlays);
      this.nodes.set(state.hash(), node);
    }
  }

  /** From given state, repeatedly run MCTS to build statistics */
  runSearch(state, timeout = 3, turn) {
    this.makeNode(state);

    let drawCount = 0;
    let totalSimulations = 0;

    if(turn == "human") return totalSimulations;
    else{
      // Date.now() returns the number of milliseconds elapsed since 1970
      let end = Date.now() + timeout * 70;

      while (Date.now() < end) {
        //　choose child node
        let node = this.select(state);
        let winner = this.game.winner(node.state);

        // if node.isLeaf == true -> board is full && if winnerExist -> true
        // つまり、ボードが埋まっていたら＆勝者が存在したらexpandしない
        if (node.isLeaf() === false && winner === null) {
          node = this.expand(node);
          winner = this.simulate(node);
        }
        this.backpropagate(node, winner)

        if (winner === 0) drawCount++;
        totalSimulations++;
      }

      return totalSimulations;
    }
  }

  /**
   * 次の手として正当なMoveすべて
   * @return {Play[]} All plays.
   */
  allPlays() {
    let ret = [];
    for (let child of this.children.values()) {
      ret.push(child.play);
    }
    return ret;
  }

  /**
   * 未展開の手をリストとして返す
   * @return {Play[]}
   */
  unexpandedPlays() {
    let ret = [];
    for (let child of this.children.values()) {
      if (child.node === null) ret.push(child.play);
    }
    return ret;
  }

  // visitRate -> シミュレーション回数の多さで最善の手を決める
  // winRate -> 勝率の高さで最善の手を決める
  bestPlay(state, policy = "visitRate", turn, rowId, colId) {
    this.makeNode(state);

    let bestPlay;
    if(turn == "human"){
      bestPlay = new Play(rowId, colId);
    }
    else{
      // If not all children are expanded, not enough information
      if (this.nodes.get(state.hash()).isFullyExpanded() === false)
      throw new Error("Not enough information!");

      let node = this.nodes.get(state.hash());
      let allPlays = node.allPlays();

      // Most visits
      if (policy === "visitRate") {
        let max = -Infinity;
        for (let play of allPlays) {
          let childNode = node.childNode(play);
          if (childNode.n_plays > max) {
            bestPlay = play;
            max = childNode.n_plays;
          }
        }
      }

      // Highest winrate
      else if (policy === "winRate") {
        let max = -Infinity;
        for (let play of allPlays) {
          let childNode = node.childNode(play);
          let ratio = childNode.n_wins / childNode.n_plays;
          if (ratio > max) {
            bestPlay = play;
            max = ratio;
          }
        }
      }
    }
    
    console.log("Player " + (state.player === 1 ? 1 : 2) + " chose row: " + bestPlay.row + " col: " + bestPlay.col + " (best play)");
    return bestPlay;
  }

  // フェーズ１
  // 子ノードの中でも総勝利数 / 総プレイ数の値が大きいノード（具体的にはUCB1の値が最大の値）へと進む関数
  // Select until not fully expanded OR leaf node
  select(state) {
    // node = { play: play, node: null }
    let node = this.nodes.get(state.hash());

    //　葉ノードまで繰り返し、走査していく
    while (node.isFullyExpanded() && !node.isLeaf()) {
      let plays = node.allPlays();
      let bestPlay;
      let bestUCB1 = -Infinity;
      for (let play of plays) {
        let childUCB1 = node.childNode(play).getUCB1(this.UCBPARAM);
        if (childUCB1 > bestUCB1) {
          bestPlay = play;
          bestUCB1 = childUCB1;
        }
      }
      node = node.childNode(bestPlay);
    }
    return node;
  }

  // フェーズ２
  // 未開拓の子ノードをランダムに選択し、拡張する
  expand(node) {
    let plays = node.unexpandedPlays();
    // ランダムに選択
    let index = Math.floor(Math.random() * plays.length);
    let play = plays[index];
    let childState = this.game.updateState(node.state, play);
    let childUnexpandedPlays = this.game.legalPlays(childState);
    let childNode = node.expand2(play, childState, childUnexpandedPlays);
    this.nodes.set(childState.hash(), childNode);

    return childNode;
  }

  /*
   * フェーズ３
   * ここでは新しいノードは作らない
   * シミュレーション後にはすべてのVisited Nodesの統計は更新される
   * Play game to terminal state, return winner
   */
  simulate(node) {
    let state = node.state;
    let winner = this.game.winner(state);

    while (winner === null) {
      let plays = this.game.legalPlays(state);
      let play = plays[Math.floor(Math.random() * plays.length)];
      state = this.game.updateState(state, play);
      winner = this.game.winner(state);
    }

    return winner;
  }

  /*
  * フェーズ４
  * 親ノードの統計に変更を反映していく
  */
  backpropagate(node, winner) {
    while (node !== null) {
      node.n_plays += 1;
      // Parent's choice
      if (node.state.isPlayer(-winner)) {
        node.n_wins += 1;
      }
      node = node.parent;
    }
  }
}