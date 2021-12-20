export class Node {
  /**
   * Create a new MonteCarloNode in the search tree.
   * @param {Node} parent - The parent node.
   * @param {Play} play - 親から今のノードに移る際に取った手
   * @param {State} state - The corresponding state.
   * @param {Play[]} unexpandedPlays - The node's unexpanded child plays.　座標
   */
  constructor(parent, play, state, unexpandedPlays) {
    this.play = play; // 最初はnull
    this.state = state; // playHistory([]), board(2D array), 1 (player)

    this.n_plays = 0; // ノードの勝利を得たシミュレーションの数
    this.n_wins = 0; // ノードの総シミュレーションの数

    this.parent = parent; // 最初はnull
    this.children = new Map();
    for (let play of unexpandedPlays) {
      // playオブジェクトと関連した子ノード
      // Hashから復元するためにplayオブジェクトを含む
      this.children.set(play.hash(), { play: play, node: null });
    }
  }

  /**
   * Get the MonteCarloNode corresponding to the given play.
   * @param {number} play - The play leading to the child node.
   * @return {Node} The child node corresponding to the play given.
   */
  childNode(play) {
    let child = this.children.get(play.hash());
    if (child === undefined) {
      throw new Error('No such play!');
    } else if (child.node === null) {
      throw new Error('Child is not expanded!');
    }
    return child.node;
  }

  /**
   * Expand the specified child play and return the new child node.
   * Add the node to the array of children nodes.
   * Remove the play from the array of unexpanded plays.
   * @param {Play} play - The play to expand.
   * @param {State} childState - The child state corresponding to the given play.
   * @param {Play[]} unexpandedPlays - The given child's unexpanded child plays; typically all of them.
   * @return {MonteCarloNode} The new child node.
   */ expand2(play, childState, unexpandedPlays) {
    if (!this.children.has(play.hash())) throw new Error('No such play!');
    let childNode = new Node(this, play, childState, unexpandedPlays);
    this.children.set(play.hash(), { play: play, node: childNode });
    return childNode;
  }

  /**
   * 次の手として正当なMoveすべて
   * @return {Play[]}
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

  /**
   * ノードが全て開拓されているかどうか
   * @return {boolean}
   */
  isFullyExpanded() {
    for (let child of this.children.values()) {
      if (child.node === null) return false;
    }
    return true;
  }

  /**
   *　葉ノードかどうか（Mapの中が空）
   * @return {boolean} Whether this node is a leaf in the tree.
   */
  isLeaf() {
    if (this.children.size === 0) return true;
    else return false;
  }

  /**
   *
   * UCBと呼ばれる探索と開拓のバランスの取れた最適な手をreturnする関数　→ 対応する子ノードに進める
   * @this {n_wins} ：ノードの勝利を得たシミュレーションの数
   * @this {n_plays} : ノードの総シミュレーションの数
   * @this {parentt.n_plays}：親ノードの総シミュレーション数
   * @param {number} biasParamは、方程式が探索を促進する度合いをコントロールするために選択できる数値。defaults to 2
   * @return {number} The UCB1 value of this node.
   */
  getUCB1(biasParam) {
    return (
      this.n_wins / this.n_plays +
      Math.sqrt((biasParam * Math.log(this.parent.n_plays)) / this.n_plays)
    );
  }
}
