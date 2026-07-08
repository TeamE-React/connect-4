export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

export const Config = {
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
