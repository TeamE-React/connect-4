export class Play{
  constructor(row, col){
    this.row = row;
    this.col = col;
  }

  // Mapのkeyとなる
  hash(){
    return this.row.toString() + "," + this.col.toString();
  }
}