export class Player {
  constructor(name = '', color = '', isAI = false) {
    this.name = name;
    this.color = color;
    this.isAI = isAI; 
  }
}

export class Ball {
  constructor(color = null, rowIndex, colIndex) {
    this.color = color;
    this.rowIndex = rowIndex;
    this.colIndex - colIndex;
  }
}

export class lastBallPosition {
  constructor(rowIndex, colIndex, color) {
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.color = color;
  }
}
