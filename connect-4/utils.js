import { Player } from "./model/index";

export function getArrayOfNumber(min, max) {
  const array = [];
  for (let i = min; i <= max; i++) array.push(i);

  return array;
}

export function getPlayersList(n) {
  const playersList = [];

  for (let i = 0; i < n; i++) {
    playersList.push(new Player(i, "Player" + (i + 1), ""));
  }
  return playersList;
}
