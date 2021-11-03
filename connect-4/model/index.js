export class Player {
  constructor(id, name = "", color = "") {
    this.id = id;
    this.name = name;
    this.color = color;
  }
}

export class Ball {
  constructor(rowIndex, colIndex, color = null) {
    this.color = color;
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
  }
}

export class lastBallPosition {
  constructor(rowIndex, colIndex, color) {
    this.rowIndex = rowIndex;
    this.colIndex = colIndex;
    this.color = color;
  }
}
