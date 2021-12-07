import { Ball } from "../model";
const board = (state = [], action) => {
  switch (action.type) {
    case "BUILD_BOARD":
      const array = [];
      const len = action.boardSize;
      if (action.isAi) {
        for (let i = 0; i < len - 1; i++) {
          const row = [];
          for (let j = 0; j < len; j++) {
            row.push(new Ball());
          }
          array.push(row);
        }
      } else {
        for (let i = 0; i < len; i++) {
          const row = [];
          for (let j = 0; j < len; j++) {
            row.push(new Ball());
          }
          array.push(row);
        }
      }
      return array;
    default:
      return state;
  }
};

export default board;
