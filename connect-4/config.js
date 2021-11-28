import ballColor from "./colors"

export const Config = {

  ballColor: ballColor,

  board: {
    size: {
      min: 4,
      max: 10,
      default: 7,
    },
  },

  players: {
    number: {
      min: 2,
      max: 4,
    },
  },
};
