import ballColors from "./colors";
export const Config = {
  ballColor: ballColors,

  board: {
    size: {
      min: 4,
      max: 10,
    },
  },

  players: {
    number: {
      min: 2,
      max: 4,
    },
  },
};
